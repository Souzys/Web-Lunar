'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Marquee } from '@/components/ui/Marquee';
import { siteContent } from '@/content';
import { ArrowUpRight, CheckCircle2, Loader2, Send } from 'lucide-react';
import { trpc } from '@/utils/trpc';
import { useAudio } from '@/hooks/useAudio';

export function Footer() {
  const { playHover, playClick } = useAudio();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    content: "",
  });
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const submitMutation = trpc.submitMessage.useMutation({
    onSuccess: () => {
      playClick();
      setSuccess(true);
      setFormData({ name: "", email: "", subject: "", content: "" });
      setErrorMsg("");
    },
    onError: (err) => {
      setErrorMsg(err.message || "Ocorreu um erro ao enviar sua mensagem.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    submitMutation.mutate(formData);
  };

  return (
    <footer className="relative z-10 overflow-hidden" id="contact">

      {/* === CTA SECTION — "WORK WITH WEB LUNAR" === (Modo Claro) */}
      <div className="pt-32 pb-24 relative bg-[#FAFAFA] text-neutral-900 border-t border-black/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,77,255,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-[1440px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Form (order-2 lg:order-1) */}
          <div className="w-full order-2 lg:order-1 bg-white border border-black/5 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden text-left">
            {success ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">Mensagem Enviada!</h3>
                <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
                  Sua mensagem foi recebida. Entraremos em contato de volta em breve.
                </p>
                <button
                  onClick={() => {
                    playClick();
                    setSuccess(false);
                  }}
                  onMouseEnter={playHover}
                  className="mt-8 px-6 py-2.5 rounded-full border border-black/10 hover:border-black/20 text-xs font-semibold text-neutral-600 hover:text-neutral-900 transition-all duration-300"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                      Seu Nome
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Lucas Pinheiro"
                      className="px-4 py-3 rounded-xl bg-black/[0.01] border border-black/10 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                      Seu E-mail
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Ex: contato@weblunar.co"
                      className="px-4 py-3 rounded-xl bg-black/[0.01] border border-black/10 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                    Assunto (Opcional)
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ex: Novo projeto de design"
                    className="px-4 py-3 rounded-xl bg-black/[0.01] border border-black/10 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                    Mensagem
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Conte-me um pouco sobre o que você precisa..."
                    className="px-4 py-3 rounded-xl bg-black/[0.01] border border-black/10 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm resize-none"
                  />
                </div>

                {errorMsg && (
                  <span className="text-xs text-rose-500 font-semibold">{errorMsg}</span>
                )}

                <button
                  type="submit"
                  disabled={submitMutation.isPending}
                  onMouseEnter={playHover}
                  className="mt-2 flex items-center justify-center gap-2 w-full py-4 text-xs font-bold tracking-widest uppercase rounded-full bg-primary text-white hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {submitMutation.isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitindo...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Enviar Mensagem</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Text (order-1 lg:order-2) */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-1 lg:order-2">
            {/* Dot + label */}
            <div className="flex items-center gap-3 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-mono uppercase tracking-widest text-neutral-500">
                Disponível para novos projetos
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-neutral-900 mb-8 drop-shadow-sm leading-none">
              Vamos Criar Algo <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Incrível
              </span>{" "}
              Juntos.
            </h2>

            <p className="text-neutral-500 text-base md:text-lg font-light leading-relaxed max-w-md">
              Tem um projeto em mente ou quer bater um papo sobre design e tecnologia? Preencha o formulário e vamos transformar suas ideias em realidade.
            </p>
          </div>
        </div>
      </div>



      {/* === FOOTER LINKS === (Modo Escuro) */}
      <div className="bg-[#05070B] text-white">
        <div className="container mx-auto max-w-[1440px] px-6 py-20 grid grid-cols-2 md:grid-cols-5 gap-12 border-b border-white/5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 pr-12">
            <div className="mb-8">
              <img src="/logo-web-lunar-light.png" alt="Web Lunar" className="h-10 md:h-14 w-auto object-contain" />
            </div>
          <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-sm mb-8">
            Estúdio de design e engenharia focado em criar produtos digitais premium de alta performance e valor percebido.
          </p>
          <p className="text-sm font-mono text-neutral-500">{siteContent.footer.contact.phone}</p>
        </div>

        {/* Studio */}
        <div>
          <h4 className="text-white text-xs font-mono uppercase tracking-[0.2em] mb-8 font-bold">STUDIO</h4>
          <ul className="flex flex-col gap-4">
            {siteContent.footer.links.pages.map(link => {
              let href = '#';
              if (link === 'Início') href = '/';
              if (link === 'Sobre') href = '/sobre';
              if (link === 'Portfólio') href = '/#projetos';
              if (link === 'Serviços') href = '/servicos';
              if (link === 'Contato') href = '/#contato';
              
              return (
                <li key={link}>
                  <Link href={href} className="text-sm text-neutral-400 hover:text-primary transition-colors duration-300">
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-xs font-mono uppercase tracking-[0.2em] mb-8 font-bold">SERVIÇOS</h4>
          <ul className="flex flex-col gap-4">
            {siteContent.footer.links.single.map(link => (
              <li key={link}>
                <Link href="/servicos" className="text-sm text-neutral-400 hover:text-primary transition-colors duration-300">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white text-xs font-mono uppercase tracking-[0.2em] mb-8 font-bold">SOCIAL</h4>
          <ul className="flex flex-col gap-4">
            {siteContent.footer.social.map(social => (
              <li key={social}>
                <a href="#" className="text-sm text-neutral-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                  {social}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-primary" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

        {/* Bottom bar */}
        <div className="container mx-auto max-w-[1440px] px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500 tracking-widest">
          <p>© {new Date().getFullYear()} WEB LUNAR. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">PRIVACIDADE</Link>
            <Link href="#" className="hover:text-white transition-colors">TERMOS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
