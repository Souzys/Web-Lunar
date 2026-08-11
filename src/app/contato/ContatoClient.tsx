'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ParticleCanvas } from '@/components/ui/ParticleCanvas';
import { trpc } from '@/utils/trpc';
import { Send, Loader2, CheckCircle2, Clock } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '@/context/LanguageContext';

export function ContatoClient() {
  useLenis();
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    content: '',
  });
  const [projectType, setProjectType] = useState('Landing Page');
  const [budgetRange, setBudgetRange] = useState('Até R$ 5k');
  const [timeline, setTimeline] = useState('1 a 2 semanas');
  const [referenceLink, setReferenceLink] = useState('');
  const [activeTab, setActiveTab] = useState<'form' | 'whatsapp'>('form');
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const submitMutation = trpc.submitMessage.useMutation({
    onSuccess: () => {
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', content: '' });
      setProjectType('Landing Page');
      setBudgetRange('Até R$ 5k');
      setTimeline('1 a 2 semanas');
      setReferenceLink('');
      setErrorMsg('');

      if (typeof window !== 'undefined') {
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    },
    onError: (err) => {
      setErrorMsg(err.message || 'Ocorreu um erro ao enviar sua mensagem.');
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedContent = `
Tipo de Projeto: ${projectType}
Investimento Estimado: ${budgetRange}
Prazo Estimado: ${timeline}
Link de Referência / Wireframe: ${referenceLink || 'Não informado'}

Descrição do Projeto / Mensagem:
${formData.content}
`.trim();

    submitMutation.mutate({
      name: formData.name,
      email: formData.email,
      subject: formData.subject || 'Solicitação de Orçamento',
      content: formattedContent,
    });
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
      xTo(e.clientX - 400);
      yTo(e.clientY - 400);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-[#05070F] text-white min-h-screen font-sans selection:bg-primary selection:text-white relative overflow-hidden">
      {/* Interactive Antigravity Particle Field */}
      <ParticleCanvas />

      {/* Background glow & Grid Pattern */}
      <div ref={heroRef} className="fixed top-0 left-0 h-screen w-full z-0 overflow-hidden bg-[#05070F] pointer-events-none">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            ref={glowRef}
            className="absolute w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px] opacity-70 pointer-events-none"
            style={{ left: 0, top: 0, willChange: 'transform' }}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className={`relative z-10 container mx-auto max-w-[1440px] px-6 pt-32 pb-24 flex flex-col items-center justify-center transition-all duration-500 ${success ? 'min-h-[85vh]' : ''}`}>
        
        {/* Centered Heading */}
        <div className="max-w-3xl text-center flex flex-col items-center mb-12">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(29,77,255,0.6)]" />
              <span className="text-xs font-sans uppercase tracking-widest text-primary font-semibold">
                {t.contactPage.tag}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-tight">
              {t.contactPage.title}
            </h1>
          </AnimatedSection>
        </div>

        {/* Centered Glassmorphism Form */}
        <div className="max-w-3xl w-full mx-auto">
          <AnimatedSection options={{ delay: 0.2 }} className="w-full text-left">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {success ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Transmissão Recebida!</h3>
                  <p className="text-neutral-300 text-sm max-w-sm">
                    Obrigado pelo contato. Analisaremos as informações do seu projeto e entraremos em contato com seu orçamento o mais rápido possível.
                  </p>
                  <button
                    onClick={() => setSuccess(false)}
                    className="mt-8 px-6 py-2.5 rounded-full border border-white/20 text-neutral-300 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer text-sm"
                  >
                    Enviar Outro Orçamento
                  </button>
                </div>
              ) : (
                <>
                  {/* Tab Selector */}
                  <div className="flex bg-white/[0.04] border border-white/10 p-1.5 rounded-2xl max-w-xs mx-auto mb-10">
                    <button
                      type="button"
                      onClick={() => setActiveTab('form')}
                      className={`flex-1 py-2 text-xs uppercase tracking-wider font-bold rounded-xl transition-all cursor-pointer ${
                        activeTab === 'form'
                          ? 'bg-primary text-white shadow-[0_0_20px_rgba(29,77,255,0.4)]'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      Formulário
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('whatsapp')}
                      className={`flex-1 py-2 text-xs uppercase tracking-wider font-bold rounded-xl transition-all cursor-pointer ${
                        activeTab === 'whatsapp'
                          ? 'bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)]'
                          : 'text-neutral-400 hover:text-[#25D366]'
                      }`}
                    >
                      WhatsApp
                    </button>
                  </div>

                  {activeTab === 'form' ? (
                    <p className="text-center text-xs text-neutral-400 -mt-6 mb-8 flex items-center justify-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary" /> Resposta em até 24 horas
                    </p>
                  ) : (
                    <p className="text-center text-xs text-neutral-400 -mt-6 mb-8 flex items-center justify-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#25D366]" /> Resposta em até 5 minutos
                    </p>
                  )}

                  {activeTab === 'form' ? (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label className="text-xs uppercase font-bold text-neutral-300 tracking-wider">
                            Seu Nome
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Ex: Lucas Pinheiro"
                            className="px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all text-sm font-sans"
                          />
                        </div>

                        <div className="flex flex-col gap-2">
                          <label className="text-xs uppercase font-bold text-neutral-300 tracking-wider">
                            Seu E-mail
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="Ex: contato@weblunar.com.br"
                            className="px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all text-sm font-sans"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-bold text-neutral-300 tracking-wider">
                          Assunto
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder="Ex: Desenvolvimento de novo sistema"
                          className="px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all text-sm font-sans"
                        />
                      </div>

                      {/* Tipo de Projeto */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-bold text-neutral-300 tracking-wider">
                          Tipo de Projeto
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {['Landing Page', 'Site Institucional', 'E-commerce', 'Sistema Web', 'App Mobile', 'Outro'].map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setProjectType(type)}
                              className={`px-4 py-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                                projectType === type
                                  ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(29,77,255,0.3)] font-semibold'
                                  : 'bg-white/[0.03] border-white/10 text-neutral-300 hover:bg-white/[0.08] hover:text-white'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Faixa de Orçamento */}
                        <div className="flex flex-col gap-2">
                          <label className="text-xs uppercase font-bold text-neutral-300 tracking-wider">
                            Investimento Estimado
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {['Até R$ 5k', 'R$ 5k - 10k', 'R$ 10k - 20k', 'R$ 30k - 50k+'].map((budget) => (
                              <button
                                key={budget}
                                type="button"
                                onClick={() => setBudgetRange(budget)}
                                className={`px-3 py-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                                  budgetRange === budget
                                    ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(29,77,255,0.3)] font-semibold'
                                    : 'bg-white/[0.03] border-white/10 text-neutral-300 hover:bg-white/[0.08] hover:text-white'
                                }`}
                              >
                                {budget}
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* Prazo Estimado */}
                        <div className="flex flex-col gap-2">
                          <label className="text-xs uppercase font-bold text-neutral-300 tracking-wider">
                            Prazo Estimado
                          </label>
                          <div className="grid grid-cols-2 gap-3">
                            {['1 a 2 semanas', 'Até 1 mês', '1 a 3 meses', 'Sem pressa'].map((time) => (
                              <button
                                key={time}
                                type="button"
                                onClick={() => setTimeline(time)}
                                className={`px-3 py-3 rounded-xl border text-xs font-medium transition-all cursor-pointer ${
                                  timeline === time
                                    ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(29,77,255,0.3)] font-semibold'
                                    : 'bg-white/[0.03] border-white/10 text-neutral-300 hover:bg-white/[0.08] hover:text-white'
                                }`}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Link de Referência ou Wireframe */}
                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-bold text-neutral-300 tracking-wider">
                          Link de Referência / Wireframe (Figma, Drive, etc.)
                        </label>
                        <input
                          type="text"
                          value={referenceLink}
                          onChange={(e) => setReferenceLink(e.target.value)}
                          placeholder="Ex: https://figma.com/... ou link do Google Drive/PDF"
                          className="px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all text-sm font-sans"
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-xs uppercase font-bold text-neutral-300 tracking-wider">
                          Descrição do Projeto / Demais Detalhes
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.content}
                          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                          placeholder="Fale um pouco sobre a sua demanda, escopo desejado ou requisitos..."
                          className="px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-neutral-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/40 transition-all text-sm resize-none font-sans"
                        />
                      </div>

                      {errorMsg && (
                        <span className="text-xs text-rose-400 font-semibold">{errorMsg}</span>
                      )}

                      <button
                        type="submit"
                        disabled={submitMutation.isPending}
                        className="mt-4 flex items-center justify-center gap-2 w-full py-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-[0_0_25px_rgba(29,77,255,0.4)] hover:shadow-[0_0_35px_rgba(29,77,255,0.6)] cursor-pointer"
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
                  ) : (
                    <div className="flex flex-col items-center text-center py-6 max-w-md mx-auto">
                      <div className="relative mb-6">
                        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/20" style={{ animationDuration: '2.5s' }} />
                        <div className="w-16 h-16 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366]">
                          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.861-1.868-4.339-2.897-6.97-2.899-5.443 0-9.87 4.372-9.875 9.8.001 1.77.476 3.5 1.379 5.017l-.988 3.598 3.675-.952zm11.458-6.666c-.301-.15-1.785-.88-2.062-.98-.277-.1-.478-.15-.678.15-.2.3-.778.98-.953 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.084-.176-.3-.019-.462.132-.611.135-.134.301-.35.452-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.93-2.245-.245-.59-.496-.51-.678-.52-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.512s1.08 2.916 1.23 3.116c.15.2 2.126 3.246 5.15 4.553.719.31 1.28.496 1.717.636.722.23 1.38.197 1.901.12.58-.087 1.785-.73 2.036-1.436.251-.706.251-1.314.176-1.436-.076-.123-.277-.2-.577-.35z" />
                          </svg>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">Converse pelo WhatsApp</h3>
                      <p className="text-neutral-300 text-sm font-light leading-relaxed mb-6">
                        Prefere um atendimento imediato? Fale agora mesmo com um de nossos engenheiros e designers para detalhar o seu projeto e receber um orçamento rápido.
                      </p>

                      <div className="w-full space-y-3.5 mb-8 text-left border-t border-white/10 pt-6">
                        <div className="flex items-center gap-3 text-neutral-200 text-sm">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#25D366] shrink-0" />
                          <span>Resposta rápida em até 5 minutos</span>
                        </div>
                        <div className="flex items-center gap-3 text-neutral-200 text-sm">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#25D366] shrink-0" />
                          <span>Atendimento técnico direto (sem robôs)</span>
                        </div>
                        <div className="flex items-center gap-3 text-neutral-200 text-sm">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#25D366] shrink-0" />
                          <span>Definição de escopo e prazos na hora</span>
                        </div>
                      </div>

                      <a
                        href="https://wa.me/5561982630397?text=Ol%C3%A1%20equipe%20Web%20Lunar!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20um%20projeto."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full py-4 text-sm font-semibold tracking-wider uppercase rounded-full bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all duration-300 shadow-[0_0_25px_rgba(37,211,102,0.4)] hover:scale-102 active:scale-98 cursor-pointer font-sans"
                      >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.861-1.868-4.339-2.897-6.97-2.899-5.443 0-9.87 4.372-9.875 9.8.001 1.77.476 3.5 1.379 5.017l-.988 3.598 3.675-.952zm11.458-6.666c-.301-.15-1.785-.88-2.062-.98-.277-.1-.478-.15-.678.15-.2.3-.778.98-.953 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.084-.176-.3-.019-.462.132-.611.135-.134.301-.35.452-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.93-2.245-.245-.59-.496-.51-.678-.52-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.512s1.08 2.916 1.23 3.116c.15.2 2.126 3.246 5.15 4.553.719.31 1.28.496 1.717.636.722.23 1.38.197 1.901.12.58-.087 1.785-.73 2.036-1.436.251-.706.251-1.314.176-1.436-.076-.123-.277-.2-.577-.35z" />
                        </svg>
                        Conversar no WhatsApp
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
}
