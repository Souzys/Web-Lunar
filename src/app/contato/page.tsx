'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { trpc } from '@/utils/trpc';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, Globe, Clock } from 'lucide-react';
import gsap from 'gsap';

export default function ContatoPage() {
  useLenis();
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    content: '',
  });
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const submitMutation = trpc.submitMessage.useMutation({
    onSuccess: () => {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', content: '' });
      setErrorMsg('');
    },
    onError: (err) => {
      setErrorMsg(err.message || 'Ocorreu um erro ao enviar sua mensagem.');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate(formData);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const planParam = params.get('plan');
      const subjectParam = params.get('subject');
      if (planParam) {
        setFormData(prev => ({
          ...prev,
          subject: `Contratação do Plano ${planParam}`,
        }));
      } else if (subjectParam) {
        setFormData(prev => ({
          ...prev,
          subject: subjectParam,
        }));
      }
    }
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    gsap.set(glow, {
      x: typeof window !== 'undefined' ? window.innerWidth / 2 - 400 : 0,
      y: typeof window !== 'undefined' ? window.innerHeight / 4 - 400 : 0,
    });

    const xTo = gsap.quickTo(glow, 'x', { duration: 1.5, ease: 'power2.out' });
    const yTo = gsap.quickTo(glow, 'y', { duration: 1.5, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY < (window.innerHeight || 800)) {
        xTo(e.clientX - 400);
        yTo(e.clientY - 400);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-bg text-text min-h-screen font-sans selection:bg-primary selection:text-white">
      {/* Hero / background glow */}
      <div ref={heroRef} className="fixed top-0 left-0 h-screen w-full z-0 overflow-hidden pt-20 bg-bg">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            ref={glowRef}
            className="absolute w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none"
            style={{ left: 0, top: 0, willChange: 'transform' }}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="h-[calc(50vh-80px)] w-full flex flex-col items-center justify-center relative z-10 text-center">
          <div className="container mx-auto px-6 max-w-[1440px]">
            <AnimatedSection>
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(29,77,255,0.4)]" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                  // Canais de Comunicação
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">
                Inicie um Projeto
              </h1>
              <p className="text-base md:text-lg text-white font-light leading-relaxed max-w-xl mx-auto pl-5 border-l-2 md:border-l-0 md:border-t border-primary/30 pt-4 text-balance">
                Fale diretamente com nossa equipe de engenharia e design. Preencha o formulário e responderemos em até 24 horas.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10 bg-white text-neutral-900 w-full mt-[50vh] border-t border-neutral-100">
        <div className="container mx-auto max-w-[1440px] px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Esquerda: Informações Institucionais */}
            <div className="lg:col-span-5 flex flex-col gap-12 text-left">
              <AnimatedSection options={{ delay: 0.1 }}>
                <h2 className="text-2xl font-bold text-neutral-950 mb-6 tracking-tight">Canais de Contato</h2>
                <p className="text-neutral-500 font-light leading-relaxed mb-8">
                  Atendemos em todo o território nacional através de processos remotos, com ferramentas de colaboração de ponta e suporte ágil.
                </p>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-1">E-mail Corporativo</p>
                      <a href="mailto:contato@weblunar.com.br" className="text-neutral-950 hover:text-primary transition-colors text-base font-medium">
                        contato@weblunar.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-primary shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-1">Localização</p>
                      <p className="text-neutral-950 text-base font-medium">Brasil · Atendimento Remoto</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-primary shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-mono tracking-widest text-neutral-400 uppercase mb-1">Horário de Atendimento</p>
                      <p className="text-neutral-950 text-base font-medium">Segunda a Sexta · 09h às 18h</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Direita: Formulário */}
            <div className="lg:col-span-7">
              <AnimatedSection options={{ delay: 0.2 }} className="w-full text-left">
                <div className="rounded-3xl border border-neutral-100 bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden">
                  {success ? (
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-950 mb-2">Transmissão Recebida!</h3>
                      <p className="text-neutral-500 text-sm max-w-sm">
                        Obrigado pelo contato. Analisaremos sua mensagem e entraremos em contato o mais rápido possível.
                      </p>
                      <button
                        onClick={() => setSuccess(false)}
                        className="mt-8 px-6 py-2.5 rounded-full border border-neutral-200 text-neutral-600 hover:text-neutral-950 transition-all duration-300"
                      >
                        Enviar Outra Mensagem
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                            className="px-4 py-3.5 rounded-xl bg-black/[0.01] border border-black/10 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
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
                            placeholder="Ex: contato@weblunar.com"
                            className="px-4 py-3.5 rounded-xl bg-black/[0.01] border border-black/10 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                          Assunto
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Ex: Desenvolvimento de novo sistema"
                          className="px-4 py-3.5 rounded-xl bg-black/[0.01] border border-black/10 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-bold text-neutral-500 tracking-wider">
                          Mensagem
                        </label>
                        <textarea
                          required
                          rows={6}
                          value={formData.content}
                          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                          placeholder="Fale um pouco sobre a sua demanda ou projeto..."
                          className="px-4 py-3.5 rounded-xl bg-black/[0.01] border border-black/10 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm resize-none"
                        />
                      </div>

                      {errorMsg && (
                        <span className="text-xs text-rose-500 font-semibold">{errorMsg}</span>
                      )}

                      <button
                        type="submit"
                        disabled={submitMutation.isPending}
                        className="mt-4 flex items-center justify-center gap-2 w-full py-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        {submitMutation.isPending ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Processando...</span>
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
              </AnimatedSection>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
