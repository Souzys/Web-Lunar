"use client";

import React, { useState } from "react";
import { trpc } from "@/utils/trpc";
import { useAudio } from "@/hooks/useAudio";
import { CheckCircle2, Loader2, Send } from "lucide-react";

export default function Contact() {
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
    <section id="contact" className="relative py-32 px-6 w-full max-w-3xl mx-auto z-10">
      <div className="text-center mb-16">
        <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-3">Estabelecer Contato</h2>
        <p className="text-3xl md:text-5xl font-bold text-white text-glow tracking-tight">
          Inicie Sua Órbita
        </p>
      </div>

      <div className="glow-card p-8 md:p-12 relative overflow-hidden">
        {success ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
            <p className="text-neutral-400 text-sm max-w-sm">
              Sua transmissão foi recebida. Entrarei em contato de volta em órbita breve.
            </p>
            <button
              onClick={() => {
                playClick();
                setSuccess(false);
              }}
              onMouseEnter={playHover}
              className="mt-8 px-6 py-2 rounded-full border border-white/10 hover:border-white/20 text-xs font-semibold text-neutral-300 hover:text-white transition-all duration-300"
            >
              Enviar Outra Mensagem
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
                  Seu Nome
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ex: Lucas Pinheiro"
                  className="px-4 py-3 rounded-lg bg-white/[0.02] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
                  Seu E-mail
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Ex: contato@weblunar.co"
                  className="px-4 py-3 rounded-lg bg-white/[0.02] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
                Assunto (Opcional)
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Ex: Novo projeto de design"
                className="px-4 py-3 rounded-lg bg-white/[0.02] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-semibold text-neutral-400 tracking-wider">
                Mensagem
              </label>
              <textarea
                required
                rows={5}
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Conte-me um pouco sobre o que você precisa..."
                className="px-4 py-3 rounded-lg bg-white/[0.02] border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/20 transition-all text-sm resize-none"
              />
            </div>

            {errorMsg && (
              <span className="text-xs text-rose-400 font-semibold">{errorMsg}</span>
            )}

            <button
              type="submit"
              disabled={submitMutation.isPending}
              onMouseEnter={playHover}
              className="mt-4 flex items-center justify-center gap-2 w-full py-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-white text-black hover:bg-neutral-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            >
              {submitMutation.isPending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitindo...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Enviar Transmissão</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
