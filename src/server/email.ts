import nodemailer from "nodemailer";

interface SendContactEmailParams {
  name: string;
  email: string;
  subject?: string;
  content: string;
}

export async function sendContactEmail({ name, email, subject, content }: SendContactEmailParams) {
  const targetEmail = process.env.CONTACT_DESTINATION_EMAIL || "lucasjobtech@gmail.com";
  const fallbackEmail = "lucassantanagomessouza@gmail.com";
  const emailSubject = `[Web Lunar - Orçamento] ${subject || "Nova mensagem do site"}`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #111; max-width: 600px;">
      <h2 style="color: #1d4dff; margin-bottom: 20px;">Nova Transmissão de Orçamento / Contato</h2>
      <p><strong>Nome do Cliente:</strong> ${name}</p>
      <p><strong>E-mail do Cliente:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Assunto:</strong> ${subject || "Orçamento / Contato"}</p>
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
      <h3 style="color: #333;">Detalhes da Mensagem:</h3>
      <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; font-family: monospace; white-space: pre-wrap; font-size: 14px;">${content}</div>
    </div>
  `;

  // 1. Resend API Integration (se RESEND_API_KEY estiver configurado)
  if (process.env.RESEND_API_KEY) {
    try {
      const fromEmail = process.env.RESEND_FROM_EMAIL || "Web Lunar <contato@weblunar.com.br>";
      
      // Tenta enviar para o targetEmail
      let res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [targetEmail],
          replyTo: email,
          subject: emailSubject,
          html: htmlBody,
        }),
      });

      if (res.ok) {
        console.log(`[Email] Enviado com sucesso via Resend para ${targetEmail}`);
        return { success: true, provider: "resend" };
      }

      const errJson = await res.json().catch(() => ({}));
      console.warn(`[Email Resend Warning] Falha no primeiro envio para ${targetEmail}:`, errJson);

      // Se for restrição de modo de teste (onboarding@resend.dev só permite o e-mail cadastrado da conta no Resend)
      if (errJson?.statusCode === 403 && targetEmail !== fallbackEmail) {
        console.log(`[Email Resend Fallback] Tentando enviar para o e-mail cadastrado da conta Resend (${fallbackEmail})...`);
        const retryRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: fromEmail,
            to: [fallbackEmail],
            replyTo: email,
            subject: emailSubject,
            html: htmlBody,
          }),
        });

        if (retryRes.ok) {
          console.log(`[Email] Enviado via Resend Fallback para ${fallbackEmail}`);
          return { success: true, provider: "resend-fallback" };
        }
      }
    } catch (err) {
      console.error("[Email Resend Exception]", err);
    }
  }

  // 2. SMTP Integration via Nodemailer (Gmail, SendGrid, etc.)
  const smtpHost = process.env.SMTP_HOST || (process.env.SMTP_USER ? "smtp.gmail.com" : null);
  const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Web Lunar" <${smtpUser}>`,
        to: targetEmail,
        replyTo: email,
        subject: emailSubject,
        html: htmlBody,
      });

      console.log(`[Email] Enviado com sucesso via SMTP para ${targetEmail}`);
      return { success: true, provider: "smtp" };
    } catch (smtpErr) {
      console.error("[Email SMTP Error]", smtpErr);
    }
  }

  console.log(`[Email Notification Log] Destino: ${targetEmail} | Cliente: ${name} (${email}) | Assunto: ${subject}`);
  return { success: true, provider: "logged" };
}
