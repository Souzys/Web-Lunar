'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLenis } from '@/hooks/useLenis';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { IsometricOctahedron } from '@/components/ui/IsometricOctahedron';
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
  const cursorRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(-1);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get('service');
      if (serviceParam !== null) {
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'manual';
        }
        const index = parseInt(serviceParam, 10);
        if (!isNaN(index) && index >= 0 && index < SERVICES.length) {
          setActiveService(index);
          
          // Pulo instantâneo sem animação de scroll
          setTimeout(() => {
            const rows = document.querySelectorAll('.accordion-row');
            if (rows && rows[index]) {
              rows[index].scrollIntoView({ behavior: 'auto', block: 'start' });
            }
          }, 80); // Delay baixíssimo apenas para garantir que o DOM e os tamanhos dos elementos estejam prontos
        }
      }
    }
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    gsap.set(glow, {
      x: typeof window !== 'undefined' ? window.innerWidth / 2 - 400 : 0,
      y: typeof window !== 'undefined' ? window.innerHeight / 4 - 400 : 0,
    });
    
    let xToCursor: gsap.QuickToFunc | null = null;
    let yToCursor: gsap.QuickToFunc | null = null;
    
    if (cursorRef.current) {
      gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });
      xToCursor = gsap.quickTo(cursorRef.current, "x", { duration: 0.05, ease: "power2.out" });
      yToCursor = gsap.quickTo(cursorRef.current, "y", { duration: 0.05, ease: "power2.out" });
    }

    const xToGlow = gsap.quickTo(glow, "x", { duration: 1.5, ease: "power2.out" });
    const yToGlow = gsap.quickTo(glow, "y", { duration: 1.5, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      // Desliga o cálculo do glow pesado se a Hero não estiver mais visível
      if (window.scrollY < (window.innerHeight || 800)) {
        xToGlow(e.clientX - 400);
        yToGlow(e.clientY - 400);
      }
      
      if (xToCursor && yToCursor) {
        xToCursor(e.clientX);
        yToCursor(e.clientY);
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const ctx = gsap.context(() => {
      // Entrada elegante do accordion ao chegar na viewport
      const rows = gsap.utils.toArray('.accordion-row') as HTMLElement[];
      if (rows.length > 0) {
        gsap.fromTo(rows,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".services-accordion-section",
              start: "top 75%",
            }
          }
        );
      }

      // Efeito parallax do hero (desce um pouco enquanto a seção sobe)
      gsap.to(hero, {
        yPercent: 30, // Efeito parallax
        ease: "none",
        scrollTrigger: {
          trigger: ".services-accordion-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      // KILL SWITCH: Desliga completamente a renderização do hero quando ele não é mais visível.
      ScrollTrigger.create({
        trigger: ".services-accordion-section",
        start: "top top", // Quando o topo do acordeão bater no topo da tela (hero 100% coberto)
        end: "max",       // Garante que continue ativado (escondido) até o final da página
        onToggle: self => {
          if (hero) {
            hero.style.visibility = self.isActive ? 'hidden' : 'visible';
          }
        }
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

        <div className="container mx-auto px-6 max-w-[1440px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
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
          <AnimatedSection options={{ delay: 0.4 }} className="flex items-center justify-center lg:justify-end w-full">
            <IsometricOctahedron />
          </AnimatedSection>
        </div>
      </div>

      {/* ════════════════════════════════════════
          SCROLLING CONTENT OVERLAY
      ════════════════════════════════════════ */}
      <div className="relative z-10 bg-bg w-full mt-[100vh]">

        {/* ─────────────────────────────────────
            BLOCO 01 — SERVIÇOS (ACCORDION INTERATIVO)
        ───────────────────────────────────── */}
        <section className="services-accordion-section bg-white py-24 md:py-32 border-t border-neutral-100 relative cursor-default">
          <div className="container mx-auto max-w-[1440px] px-6">
              
            {/* Header - Sem margens artificiais, alinhado com o container */}
            <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-0 justify-between mb-16 md:mb-20 relative">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-primary mb-4 font-bold">[ Serviços ]</p>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-neutral-950 leading-[0.95]">
                  O que desenvolvemos
                </h2>
              </div>
              <p className="text-base text-neutral-950 font-light leading-relaxed lg:text-right lg:pb-2 mt-4 lg:mt-0">
                Seis especialidades técnicas construídas para<br className="hidden lg:block" /> empresas que levam resultado a sério.
              </p>
            </div>

            {/* Accordion List */}
            <div className="divide-y divide-neutral-100">
              {SERVICES.map((service, i) => {
                const Icon = service.icon;
                const isOpen = activeService === i;
                return (
                  <div
                    key={service.num}
                    className="accordion-row group relative"
                  >
                    {/* Row trigger */}
                    <div className="w-full flex items-center justify-between py-7 md:py-8 text-left transition-colors duration-300">
                      
                      {/* Lado Esquerdo: Título (que alinha com o Header) e Itens Pendurados (em xl) */}
                      <div className="relative flex items-center shrink-0">
                        {/* 
                          Número 'Chique' (Editorial/Minimalista)
                          Fica pendurado em Desktop.
                        */}
                        <div className="hidden xl:flex absolute right-full mr-12 items-center justify-end">
                          <span className={`font-display text-2xl md:text-3xl font-light tracking-wide tabular-nums transition-colors duration-500 ${isOpen ? 'text-primary' : 'text-neutral-300 group-hover:text-neutral-500'}`}>
                            {service.num}<span className="text-primary opacity-50">.</span>
                          </span>
                        </div>

                        {/* Versão Mobile/Tablet (Normal Inline) */}
                        <div className="xl:hidden flex items-center shrink-0 mr-6">
                          <span className={`font-display text-xl font-light tracking-wide tabular-nums transition-colors duration-500 ${isOpen ? 'text-primary' : 'text-neutral-300'}`}>
                            {service.num}<span className="text-primary opacity-50">.</span>
                          </span>
                        </div>

                        {/* Title (Starts exactly at the alignment line of the container) */}
                        <button onClick={() => setActiveService(isOpen ? -1 : i)} className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight transition-all duration-300 text-left text-neutral-950 group-hover:translate-x-3">
                          {service.title}
                        </button>
                      </div>

                      {/* Espaço Vazio Central: Único lugar que ativa o cursor customizado animado */}
                      <div 
                        className="flex-1 h-12 lg:hover:cursor-none"
                        onClick={() => setActiveService(isOpen ? -1 : i)}
                        onMouseEnter={() => setHoveredService(i)}
                        onMouseLeave={() => setHoveredService(null)}
                      />

                      {/* Lado Direito: Tagline & Chevron */}
                      <button onClick={() => setActiveService(isOpen ? -1 : i)} className="flex items-center gap-6 shrink-0 ml-4">
                        <span className={`hidden xl:block text-sm font-light italic max-w-[260px] text-right leading-snug transition-colors duration-300 ${
                          isOpen ? 'text-primary' : 'text-neutral-950'
                        }`}>
                          {service.tagline}
                        </span>
                        <span className={`w-9 h-9 shrink-0 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? 'bg-primary border-primary text-white rotate-45'
                            : 'border-neutral-200 text-neutral-400 group-hover:border-primary/50'
                        }`}>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </span>
                      </button>
                    </div>

                    {/* Expandable content */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-0 sm:pl-[140px] xl:pl-[0px] pb-10 pt-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

                          {/* Description */}
                          <div className="md:col-span-2">
                            <p className="text-neutral-500 font-light text-base leading-relaxed mb-6">
                              {service.description}
                            </p>
                            {/* Highlights */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {service.highlights.map((h, j) => (
                                <div key={j} className="flex items-center gap-3 text-sm text-neutral-600">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary/20 shrink-0 flex items-center justify-center">
                                    <span className="w-1 h-1 rounded-full bg-primary" />
                                  </span>
                                  {h}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Right side: time + CTA */}
                          <div className="flex flex-col gap-5 md:items-end justify-between">
                            {/* Time badge */}
                            <div className="text-left md:text-right mt-2">
                              <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-1">Prazo estimado</p>
                              <p className="font-display text-2xl font-semibold text-neutral-900">{service.timeRange}</p>
                            </div>

                            {/* CTA */}
                            <Link
                              href="/#contato"
                              className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/20 bg-primary/5 hover:bg-primary hover:text-white px-5 py-2.5 rounded-full transition-all duration-300"
                            >
                              Solicitar orçamento
                              <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CUSTOM CURSOR (Apenas Desktop, ativado no espaço vazio) */}
          <div 
            ref={cursorRef} 
            className="fixed top-0 left-0 w-24 h-24 pointer-events-none z-[100] hidden lg:flex items-center justify-center"
            style={{ opacity: hoveredService !== null ? 1 : 0, transition: 'opacity 0.15s ease-out', willChange: 'transform' }}
          >
            {/* O bg-neutral-950 garante contraste, e o rounded-full garante que a forma seja um círculo perfeito (sem quadrados). */}
            <div 
              className="relative w-[80%] h-[80%] bg-neutral-950 rounded-full flex items-center justify-center transition-transform duration-200 ease-out shadow-[0_0_20px_rgba(0,0,0,0.1)]"
              style={{ transform: hoveredService !== null ? 'scale(1)' : 'scale(0)' }}
            >
               {hoveredService !== null && React.createElement(SERVICES[hoveredService].icon, { 
                 className: "w-8 h-8 text-white animate-[pulse_2s_ease-in-out_infinite]", 
                 strokeWidth: 1.5 
               })}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────
            BLOCO 02 — DIFERENCIAIS
        ───────────────────────────────────── */}
        <section className="py-28 bg-[#05070B] border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <div className="container mx-auto max-w-[1440px] px-6 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 pb-8 border-b border-white/5">
              <div>
                <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-primary mb-3 font-bold">[ Por que a Web Lunar ]</p>
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.95]">
                  Diferenciais técnicos
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


      </div>
    </div>
  );
}
