'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLenis } from '@/hooks/useLenis';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getServiceIcon } from '@/components/ui/ServiceIcons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  LayoutTemplate,
  MonitorSmartphone,
  ShoppingBag,
  CalendarDays,
  Network,
  Rocket,
  ArrowRight,
  Check,
  Zap,
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const SERVICES = [
  {
    num: '01',
    title: 'Landing Pages',
    tag: 'Conversão',
    tagline: 'Converte visitantes em clientes em segundos.',
    description:
      'Páginas únicas de alta performance projetadas para uma missão só: converter. Combinamos copywriting persuasivo, hierarquia visual calculada e testes A/B contínuos para que cada elemento da página trabalhe ativamente a favor da sua taxa de conversão.',
    icon: LayoutTemplate,
    highlights: [
      'Design orientado a conversão',
      'Testes A/B estruturados',
      'Integração com pixel e CRM',
      'Mobile-first obrigatório',
      'Carregamento sub-segundo',
    ],
    deliverables: ['Protótipo interativo', 'Deploy em produção', 'Setup de rastreamento', 'Relatório de performance'],
    timeRange: '7–14 dias',
    tag2: 'Alta Prioridade',
    accent: 'from-blue-500 to-primary',
  },
  {
    num: '02',
    title: 'Sites & Apps',
    tag: 'Produto',
    tagline: 'Presença digital que representa o nível da sua marca.',
    description:
      'Desenvolvemos sites institucionais e aplicações web completas em React e Next.js, focando em identidade visual sólida, experiência de usuário impecável e escalabilidade técnica. Do design ao deploy, tudo sob controle absoluto de código.',
    icon: MonitorSmartphone,
    highlights: [
      'Next.js App Router',
      'React Server Components',
      'Design System personalizado',
      'CMS headless opcional',
      'SEO técnico avançado',
    ],
    deliverables: ['UI/UX completo', 'Código-fonte', 'Documentação técnica', 'Deploy + CDN'],
    timeRange: '21–45 dias',
    tag2: 'Projetos Complexos',
    accent: 'from-violet-500 to-blue-500',
  },
  {
    num: '03',
    title: 'E-commerce',
    tag: 'Vendas',
    tagline: 'Plataformas de venda que escalam com seu negócio.',
    description:
      'Lojas virtuais robustas com checkout otimizado, integração nativa de pagamentos, gestão de estoque e carrinho inteligente com recuperação de abandono. Construídas para maximizar o valor médio do pedido e minimizar a fricção no funil de compra.',
    icon: ShoppingBag,
    highlights: [
      'Checkout otimizado',
      'Pagamentos: Stripe, MercadoPago',
      'Recuperação de carrinho',
      'Painel de gestão',
      'Analytics de vendas',
    ],
    deliverables: ['Loja completa', 'Painel admin', 'Integração de pagamentos', 'Treinamento da equipe'],
    timeRange: '30–60 dias',
    tag2: 'Alta Complexidade',
    accent: 'from-emerald-500 to-blue-500',
  },
  {
    num: '04',
    title: 'Agendamento',
    tag: 'Automação',
    tagline: 'Transforme reservas em receita recorrente automática.',
    description:
      'Sistemas de agendamento sob medida para clínicas, academias, estúdios e serviços de qualquer segmento. Calendários em tempo real, confirmações automáticas por WhatsApp ou e-mail, e um painel centralizado que elimina o trabalho manual.',
    icon: CalendarDays,
    highlights: [
      'Calendário em tempo real',
      'Notificações WhatsApp/Email',
      'Pagamento antecipado opcional',
      'Regras de cancelamento',
      'Dashboard de métricas',
    ],
    deliverables: ['Sistema completo', 'Painel de controle', 'Automações configuradas', 'Suporte ao lançamento'],
    timeRange: '14–30 dias',
    tag2: 'Automação Total',
    accent: 'from-amber-500 to-orange-500',
  },
  {
    num: '05',
    title: 'Integrações',
    tag: 'Tecnologia',
    tagline: 'Conecte seu ecossistema digital em um fluxo só.',
    description:
      'Conectamos CRMs, ferramentas de e-mail marketing, pixels de anúncios, ERPs e APIs externas em fluxos automáticos que eliminam processos manuais e centralizam dados. Operamos via webhooks, REST APIs e integrações nativas de plataforma.',
    icon: Network,
    highlights: [
      'CRM: HubSpot, RD Station',
      'E-mail: ActiveCampaign, Klaviyo',
      'Pixels: Meta, Google, TikTok',
      'Webhooks customizados',
      'Automação via APIs REST',
    ],
    deliverables: ['Mapeamento de fluxos', 'Integrações configuradas', 'Testes e validação', 'Documentação dos fluxos'],
    timeRange: '7–21 dias',
    tag2: 'Infraestrutura',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    num: '06',
    title: 'Performance',
    tag: 'SEO & Velocidade',
    tagline: 'Velocidade e visibilidade que geram tráfego previsível.',
    description:
      'Auditoria e otimização técnica focada em Core Web Vitals, SEO estrutural, performance de carregamento e estratégia de palavras-chave. Identificamos gargalos invisíveis que destroem rankings e taxas de conversão, e os eliminamos sistematicamente.',
    icon: Rocket,
    highlights: [
      'Auditoria de Core Web Vitals',
      'SEO técnico avançado',
      'Otimização de imagens e fontes',
      'Schema markup estruturado',
      'Analytics e monitoramento',
    ],
    deliverables: ['Relatório de auditoria', 'Otimizações implementadas', 'Dashboard de métricas', 'Plano de evolução'],
    timeRange: '5–14 dias',
    tag2: 'Rápido Retorno',
    accent: 'from-rose-500 to-primary',
  },
];

const DIFFERENTIALS = [
  {
    icon: Zap,
    title: 'Código de produção, não templates',
    desc: 'Nenhum projeto usa page builders ou construtores visuais. Cada linha de código é escrita à mão, garantindo performance máxima e controle total da base.',
  },
  {
    icon: ShieldCheck,
    title: 'Arquitetura escalável desde o dia 1',
    desc: 'Projetamos sistemas para aguentar crescimento. Estruturas desacopladas, tipagem end-to-end e infraestrutura documentada e auditável.',
  },
  {
    icon: TrendingUp,
    title: 'Foco em resultados mensuráveis',
    desc: 'Não entregamos apenas "sites bonitos". Cada projeto tem KPIs definidos e métricas rastreadas para medir impacto real no negócio.',
  },
  {
    icon: Clock,
    title: 'Prazos que se cumprem',
    desc: 'Trabalhamos com escopo fechado e cronogramas realistas. Cada entrega passa por revisão técnica antes de ir ao ar.',
  },
];

// ─────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────

export default function ServicosPage() {
  useLenis();
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    gsap.set(glow, {
      x: typeof window !== 'undefined' ? window.innerWidth / 2 - 400 : 0,
      y: typeof window !== 'undefined' ? window.innerHeight / 4 - 400 : 0,
    });

    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(glow, { x: e.clientX - 400, y: e.clientY - 400, duration: 1.5, ease: 'power2.out', overwrite: 'auto' });
    };
    window.addEventListener('mousemove', handleMouseMove);

    const cards = gsap.utils.toArray('.service-card-scroll');
    const ctx = gsap.context(() => {
      // Cria a timeline principal acoplada ao scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cards-trigger-area",
          start: "top 200px", // Inicia quando a área dos cards atinge a altura de parada
          end: "+=" + (cards.length * 450), // Duração do scroll proporcional ao número de cards
          pin: true, // Trava a seção na tela
          scrub: true,
          markers: false,
        }
      });

      // Define que os cards após o primeiro começam abaixo da tela
      cards.forEach((card: any, index: number) => {
        if (index > 0) {
          gsap.set(card, { yPercent: 120 });
        }
      });

      // Anima cada card subindo e encolhendo o anterior
      cards.forEach((card: any, index: number) => {
        if (index === 0) return;

        // Slide up do card atual
        tl.to(card, {
          yPercent: 0,
          ease: "none",
          duration: 1,
        }, index - 1);

        // Encolhe o card anterior
        tl.to(cards[index - 1] as HTMLElement, {
          scale: 0.95,
          opacity: 0.5,
          transformOrigin: "top center",
          ease: "none",
          duration: 1,
        }, index - 1);
      });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <div className="bg-bg text-text min-h-screen font-sans selection:bg-primary selection:text-white">

      {/* ════════════════════════════════════════
          HERO — FIXED BACKGROUND
      ════════════════════════════════════════ */}
      <div ref={heroRef} className="fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center z-0 overflow-hidden pt-20 bg-bg">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            ref={glowRef}
            className="absolute w-[800px] h-[800px] bg-primary/15 rounded-full blur-[140px] opacity-40 mix-blend-screen pointer-events-none"
            style={{ left: 0, top: 0, willChange: 'transform' }}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Esquerda: Conteúdo de Texto */}
          <div className="flex flex-col items-start text-left">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(29,77,255,0.4)]" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                  [ Nossas Especialidades ]
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection options={{ delay: 0.1 }}>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-6 leading-tight">
                Engenharia<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 italic pr-2">digital</span>{' '}
                que entrega.
              </h1>
            </AnimatedSection>

            <AnimatedSection options={{ delay: 0.2 }}>
              <p className="text-base md:text-lg text-text-muted font-light leading-relaxed max-w-xl mb-12 border-l border-primary/30 pl-5 text-balance">
                Sites e sistemas planejados para gerar resultados reais. Do código ao deploy, cada decisão técnica é tomada para maximizar performance e conversão.
              </p>
            </AnimatedSection>

            <AnimatedSection options={{ delay: 0.3 }}>
              <div className="flex flex-wrap gap-2 justify-start">
                {SERVICES.map((s, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase border border-white/10 text-white/40 bg-white/5"
                  >
                    {s.title}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Direita: Espaço para SVG */}
          <AnimatedSection options={{ delay: 0.4 }} className="flex items-center justify-center lg:justify-end w-full h-[400px] lg:h-[500px]">
            <div className="w-full h-full border border-dashed border-white/20 rounded-3xl flex items-center justify-center bg-white/[0.02]">
               <span className="text-white/40 font-mono text-sm tracking-widest uppercase text-center px-4">[ Espaço para Arte SVG ]</span>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* ════════════════════════════════════════
          SCROLLING CONTENT OVERLAY
      ════════════════════════════════════════ */}
      <div className="relative z-10 bg-bg w-full mt-[100vh]">

        {/* ─────────────────────────────────────
            BLOCO 01 — SERVIÇOS (STACKING CARDS)
        ───────────────────────────────────── */}
        <section className="pb-32 bg-[#F8F9FA] border-t border-neutral-100 relative overflow-hidden">

          {/* Section Header - Sticky top */}
          <div className="sticky top-[20px] z-20 w-full bg-[#F8F9FA]/90 backdrop-blur-md pt-12 pb-12 border-b border-neutral-200/60 mb-10">
            <div className="w-full max-w-[92%] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-primary mb-3 font-bold">[ Serviços ]</p>
                <h2 className="font-display text-5xl md:text-7xl lg:text-[80px] font-semibold tracking-tighter text-neutral-950 leading-[0.9]">
                  O que desenvolvemos
                </h2>
              </div>
              <p className="text-lg text-neutral-500 font-light max-w-sm leading-relaxed hidden md:block">
                Seis especialidades técnicas construídas para empresas que levam resultado a sério.
              </p>
            </div>
          </div>
          {/* Services — stacking layout */}
          <div className="cards-trigger-area w-full max-w-[92%] mx-auto relative h-[780px] sm:h-[650px] lg:h-[550px] mt-8">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.num}
                  className="service-card-scroll absolute top-0 left-0 w-full bg-white border border-neutral-200/80 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center min-h-[500px]"
                  style={{
                    zIndex: 10 + i,
                  }}
                >
                  {/* Left: Service info */}
                  <div className="lg:col-span-7 flex flex-col">
                    <AnimatedSection>
                      <div className="flex items-center gap-4 mb-8">
                        <span className="font-mono text-sm text-neutral-300 tracking-widest">{service.num}</span>
                        <span className="h-px flex-1 max-w-12 bg-neutral-200" />
                        <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold border border-primary/30 bg-primary/5 px-3 py-1 rounded-full">
                          {service.tag}
                        </span>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection options={{ delay: 0.05 }}>
                      <div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-700 mb-6">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>
                      <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-neutral-950 leading-[0.95] mb-4">
                        {service.title}
                      </h3>
                      <p className="text-primary font-medium text-lg mb-6">{service.tagline}</p>
                      <p className="text-neutral-500 font-light text-lg leading-relaxed max-w-xl mb-10 text-balance">
                        {service.description}
                      </p>
                    </AnimatedSection>

                    {/* Highlights */}
                    <AnimatedSection options={{ delay: 0.1 }}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.highlights.map((h, j) => (
                          <div key={j} className="flex items-center gap-3 text-sm text-neutral-600">
                            <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            {h}
                          </div>
                        ))}
                      </div>
                    </AnimatedSection>
                  </div>

                  {/* Right: Details card */}
                  <div className="lg:col-span-5 flex flex-col gap-6">
                    <AnimatedSection options={{ delay: 0.15 }}>
                      <div className="bg-neutral-950 text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                        
                        {/* Background Watermark inside Card */}
                        <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 w-40 h-40 opacity-[0.03] text-white pointer-events-none z-0">
                          {getServiceIcon(service.num, "w-full h-full")}
                        </div>
                        
                        {/* Deliverables */}
                        <div className="mb-8 relative z-10">
                          <p className="text-[10px] uppercase font-mono tracking-widest text-white/40 mb-4">O que você recebe</p>
                          <div className="flex flex-col gap-3">
                            {service.deliverables.map((d, j) => (
                              <div key={j} className="flex items-center gap-3 text-sm text-white/70">
                                <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
                                {d}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="border-t border-white/5 pt-8 flex items-center justify-between relative z-10">
                          <div>
                            <p className="text-[10px] uppercase font-mono tracking-widest text-white/30 mb-1">Prazo estimado</p>
                            <p className="font-display text-2xl font-bold text-white">{service.timeRange}</p>
                          </div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-primary border border-primary/30 px-3 py-1.5 rounded-full bg-primary/10">
                            {service.tag2}
                          </span>
                        </div>

                        {/* Link */}
                        <div className="mt-8 pt-8 border-t border-white/5 relative z-10">
                          <Link
                            href="#contato"
                            className="group w-full flex items-center justify-between text-sm font-mono uppercase tracking-widest text-white/50 hover:text-white transition-colors duration-300"
                          >
                            <span>Solicitar orçamento</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ─────────────────────────────────────
            BLOCO 02 — DIFERENCIAIS
        ───────────────────────────────────── */}
        <section className="py-28 px-6 bg-[#05070B] border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 pb-8 border-b border-white/5">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-primary mb-3 font-bold">[ Por que a Web Lunar ]</p>
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.95]">
                  Diferenciais<br />técnicos
                </h2>
              </div>
              <p className="text-text-muted font-light text-lg max-w-sm leading-relaxed hidden md:block">
                O que nos separa de agências e freelancers do mercado convencional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
              {DIFFERENTIALS.map((d, i) => {
                const Icon = d.icon;
                return (
                  <div key={i} className="group flex flex-col justify-between p-8 min-h-[300px] hover:bg-white/[0.02] transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-8">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="font-mono text-xs text-white/20 block mb-2">0{i + 1}</span>
                      <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight">{d.title}</h3>
                      <p className="text-text-muted font-light text-sm leading-relaxed">{d.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────
            BLOCO 03 — CTA FINAL
        ───────────────────────────────────── */}
        <section className="py-32 px-6 bg-white border-t border-neutral-100 relative overflow-hidden">
          <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
            <AnimatedSection>
              <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-primary mb-6 font-bold">[ Próximos Passos ]</p>
              <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-tighter text-neutral-950 leading-[0.9] mb-8">
                Pronto para<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 italic pr-2">construir?</span>
              </h2>
              <p className="text-neutral-500 font-light text-lg md:text-xl leading-relaxed max-w-2xl mb-12 text-balance">
                Conte-nos sobre o seu projeto e receba uma análise técnica honesta do que é necessário para atingir seus objetivos — sem enrolação.
              </p>
            </AnimatedSection>

            <AnimatedSection options={{ delay: 0.15 }}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/#contato"
                  className="group inline-flex items-center justify-center gap-3 bg-neutral-950 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase hover:scale-105 transition-all duration-300 shadow-xl"
                >
                  <span>Solicitar orçamento</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/sobre"
                  className="group inline-flex items-center justify-center gap-3 bg-transparent text-neutral-700 border border-neutral-200 px-8 py-4 rounded-full font-bold text-sm tracking-wide uppercase hover:border-primary/40 hover:text-primary hover:scale-105 transition-all duration-300"
                >
                  <span>Conheça a empresa</span>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </div>
  );
}
