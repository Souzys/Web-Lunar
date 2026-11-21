'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useLenis } from '@/hooks/useLenis';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { IsometricOctahedron } from '@/components/ui/IsometricOctahedron';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  LayoutTemplate,
  MonitorSmartphone,
  ShoppingBag,
  CalendarDays,
  Network,
  Rocket,
  Zap,
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const SERVICE_ICONS = [
  LayoutTemplate,
  MonitorSmartphone,
  ShoppingBag,
  CalendarDays,
  Network,
  Rocket,
];

const DIFFERENTIAL_ICONS = [
  Zap,
  ShieldCheck,
  TrendingUp,
  Clock,
];

export function ServicosClient() {
  useLenis();
  const { t, language } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const cursorIconRefs = useRef<(SVGSVGElement | null)[]>([]);
  const [activeService, setActiveService] = useState(-1);

  const servicesList = [
    { num: '01', ...t.services.items.landingPages, icon: SERVICE_ICONS[0] },
    { num: '02', ...t.services.items.sitesApps, icon: SERVICE_ICONS[1] },
    { num: '03', ...t.services.items.ecommerce, icon: SERVICE_ICONS[2] },
    { num: '04', ...t.services.items.agendamento, icon: SERVICE_ICONS[3] },
    { num: '05', ...t.services.items.integracoes, icon: SERVICE_ICONS[4] },
    { num: '06', ...t.services.items.performance, icon: SERVICE_ICONS[5] },
  ];

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get('service');
      if (serviceParam !== null) {
        if ('scrollRestoration' in window.history) {
          window.history.scrollRestoration = 'manual';
        }
        const index = parseInt(serviceParam, 10);
        if (!isNaN(index) && index >= 0 && index < servicesList.length) {
          setActiveService(index);
          
          setTimeout(() => {
            const rows = document.querySelectorAll('.accordion-row');
            if (rows && rows[index]) {
              rows[index].scrollIntoView({ behavior: 'auto', block: 'start' });
            }
          }, 80);
        }
      }
    }
  }, []);

  // Sincroniza ScrollTrigger e Lenis quando o acordeom abre/fecha
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (typeof window !== 'undefined' && (window as any).lenis) {
        (window as any).lenis.resize();
      }
    }, 520);
    return () => clearTimeout(timer);
  }, [activeService]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    gsap.set(glow, {
      x: typeof window !== 'undefined' ? window.innerWidth / 2 - 350 : 0,
      y: typeof window !== 'undefined' ? window.innerHeight / 4 - 350 : 0,
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
      if (window.scrollY < (window.innerHeight || 800)) {
        xToGlow(e.clientX - 350);
        yToGlow(e.clientY - 350);
      }
      
      if (xToCursor && yToCursor) {
        xToCursor(e.clientX);
        yToCursor(e.clientY);
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const ctx = gsap.context(() => {
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
            force3D: true,
            scrollTrigger: {
              trigger: ".services-accordion-section",
              start: "top 75%",
            },
            onComplete: () => {
              gsap.set(rows, { clearProps: "transform" });
            },
          }
        );
      }

      // Oculta completamente o container fixo do Hero quando a página é rolada para baixo,
      // eliminando 100% da carga de composição e repaints na GPU.
      ScrollTrigger.create({
        trigger: ".services-accordion-section",
        start: "top top",
        end: "max",
        onToggle: self => {
          if (hero) {
            hero.style.display = self.isActive ? 'none' : 'flex';
          }
        }
      });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);

  const handleRowEnter = (idx: number) => {
    if (cursorRef.current && cursorInnerRef.current) {
      cursorRef.current.style.opacity = '1';
      cursorInnerRef.current.style.transform = 'scale(1)';
      cursorIconRefs.current.forEach((icon, i) => {
        if (icon) icon.style.display = i === idx ? 'block' : 'none';
      });
    }
  };

  const handleRowLeave = () => {
    if (cursorRef.current && cursorInnerRef.current) {
      cursorRef.current.style.opacity = '0';
      cursorInnerRef.current.style.transform = 'scale(0)';
    }
  };

  return (
    <div className="bg-bg text-text min-h-screen font-sans selection:bg-primary selection:text-white">

      {/* ════════════════════════════════════════
          HERO — FIXED BACKGROUND (Hardware Accelerated)
      ════════════════════════════════════════ */}
      <div 
        ref={heroRef} 
        className="fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center z-0 overflow-hidden pt-20 bg-bg transform-gpu"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            ref={glowRef}
            className="absolute w-[700px] h-[700px] rounded-full opacity-40 pointer-events-none transform-gpu"
            style={{
              left: 0,
              top: 0,
              willChange: 'transform',
              background: 'radial-gradient(circle, rgba(29, 77, 255, 0.28) 0%, rgba(29, 77, 255, 0.08) 45%, transparent 70%)',
            }}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-[1440px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Esquerda: Conteúdo de Texto */}
          <div className="flex flex-col items-start text-left">
            <AnimatedSection>
              <div className="flex items-center gap-2.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(29,77,255,0.4)]" />
                <span className="text-xs font-sans uppercase tracking-widest text-primary font-semibold">
                  {t.services.tag}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection options={{ delay: 0.1 }}>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                <span className="block text-white/95">
                  {language === 'en' ? 'Software Engineering ' : language === 'es' ? 'Ingeniería de Software ' : 'Engenharia de Software '}
                </span>
                <span className="inline-block pr-6 pb-1 pl-0.5 text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary italic">
                  {language === 'en' ? '& Digital Products.' : language === 'es' ? 'y Productos Digitales.' : 'e Produtos Digitais.'}
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection options={{ delay: 0.2 }}>
              <p className="text-base md:text-lg text-text-muted font-light leading-relaxed max-w-xl mb-12 border-l border-primary/30 pl-5 text-balance">
                {t.services.subtitle}
              </p>
            </AnimatedSection>

            <AnimatedSection options={{ delay: 0.3 }}>
              <div className="flex flex-wrap gap-2 justify-start">
                {servicesList.map((s, i) => (
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
          <AnimatedSection options={{ delay: 0.4 }} className="hidden lg:flex items-center justify-center lg:justify-end w-full">
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
              
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-0 justify-between mb-16 md:mb-20 relative">
              <div>
                <p className="text-xs uppercase font-sans tracking-widest text-primary mb-4 font-semibold">{t.nav.servicos}</p>
                <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-neutral-950 leading-[0.95]">
                  {t.services.whatWeBuildTitle}
                </h2>
              </div>
              <p className="text-base text-neutral-950 font-light leading-relaxed lg:text-right lg:pb-2 mt-4 lg:mt-0">
                {t.services.whatWeBuildSubtitle}
              </p>
            </div>

            {/* Accordion List */}
            <div className="divide-y divide-neutral-100">
              {servicesList.map((service, i) => {
                const isOpen = activeService === i;
                return (
                  <div
                    key={service.num}
                    className="accordion-row group relative"
                  >
                    {/* Row trigger */}
                    <div className="w-full flex items-center justify-between py-7 md:py-8 text-left transition-colors duration-300">
                      
                      {/* Lado Esquerdo: Título */}
                      <div className="relative flex items-center shrink-0">
                        <button 
                          onClick={() => setActiveService(isOpen ? -1 : i)} 
                          className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight transition-all duration-300 text-left text-neutral-950 group-hover:translate-x-3"
                        >
                          {service.title}
                        </button>
                      </div>

                      {/* Espaço Central com Custom Cursor */}
                      <div 
                        className="flex-1 h-12 lg:hover:cursor-none"
                        onClick={() => setActiveService(isOpen ? -1 : i)}
                        onMouseEnter={() => handleRowEnter(i)}
                        onMouseLeave={handleRowLeave}
                      />

                      {/* Lado Direito: Tagline & Chevron */}
                      <button 
                        onClick={() => setActiveService(isOpen ? -1 : i)} 
                        className="flex items-center gap-6 shrink-0 ml-4"
                      >
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
                              {service.fullDesc}
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
                            <div className="text-left md:text-right mt-2">
                              <p className="text-[10px] uppercase font-mono tracking-widest text-neutral-400 mb-1">{t.services.estimatedTime}</p>
                              <p className="font-display text-2xl font-semibold text-neutral-900">{service.timeRange}</p>
                            </div>

                            <Link
                              href={`/contato?subject=${encodeURIComponent(service.title)}`}
                              className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/20 bg-primary/5 hover:bg-primary hover:text-white px-5 py-2.5 rounded-full transition-all duration-300"
                            >
                              {t.services.requestQuote}
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

          {/* CUSTOM CURSOR (Sem re-renderizações no estado do componente React) */}
          <div 
            ref={cursorRef} 
            className="fixed top-0 left-0 w-24 h-24 pointer-events-none z-[100] hidden lg:flex items-center justify-center opacity-0 transition-opacity duration-150"
            style={{ willChange: 'transform' }}
          >
            <div 
              ref={cursorInnerRef}
              className="relative w-[80%] h-[80%] bg-neutral-950 rounded-full flex items-center justify-center scale-0 transition-transform duration-200 ease-out shadow-[0_0_20px_rgba(0,0,0,0.1)]"
            >
              {SERVICE_ICONS.map((Icon, idx) => (
                <Icon
                  key={idx}
                  ref={el => { cursorIconRefs.current[idx] = el; }}
                  className="w-8 h-8 text-white hidden animate-[pulse_2s_ease-in-out_infinite]" 
                  strokeWidth={1.5} 
                />
              ))}
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
                <p className="text-xs uppercase font-sans tracking-widest text-primary mb-3 font-semibold">{t.services.differentialsTag}</p>
                <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter text-white leading-[0.95]">
                  {t.services.differentialsTitle}
                </h2>
              </div>
              <p className="text-text-muted font-light text-lg max-w-sm leading-relaxed hidden md:block">
                {t.services.differentialsSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
              {t.services.differentials.map((d, i) => {
                const Icon = DIFFERENTIAL_ICONS[i] || Zap;
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
            BLOCO 03 — ARQUITETURA & PROCESSO (SEO / E-E-A-T)
        ───────────────────────────────────── */}
        <section className="py-24 bg-white text-neutral-900 border-t border-neutral-200">
          {(() => {
            const copy = {
              pt: {
                tag: 'ENGENHARIA SOB MEDIDA · TRANSPARÊNCIA TOTAL',
                title: 'A Arquitetura Certa para Cada Projeto',
                desc: 'Não engessamos seu projeto em uma única ferramenta ou segmento. Do portal institucional do Sinapro/SC às plataformas internacionais SNEWS e VOLK Presenter, estruturamos cada sistema com a stack que entrega mais velocidade, segurança e retorno comercial.',
                headers: ['Frente de Projeto', 'Arquitetura & Tecnologias', 'Prazo Médio', 'Foco de Resultado'],
                rows: [
                  ['Landing Pages de Alta Conversão', 'Next.js, React, Tailwind CSS (SSG)', '7 a 14 dias úteis', 'Captação via Google Ads / Meta Ads com carregamento sub-segundo e qualificação de leads'],
                  ['Sites e Portais Institucionais', 'Next.js ou WordPress Corporativo', '15 a 25 dias úteis', 'Autoridade de marca, SEO técnico/GEO e autonomia editorial completa'],
                  ['E-commerce & Catálogos Online', 'Next.js, Shopify, WooCommerce, APIs', '20 a 40 dias úteis', 'Checkout rápido no celular, gestão de estoque e escalabilidade de vendas'],
                  ['Sistemas Web, SaaS & Integrações', 'TypeScript, Node.js, PostgreSQL, Cloud', 'Sob escopo (20–40+ dias)', 'Dashboards, painéis administrativos, agendamentos, automações e APIs sob medida'],
                ],
                steps: [
                  { step: '01', title: 'Diagnóstico & Arquitetura', desc: 'Entendemos a regra de negócio, público, integrações e metas para definir o desenho técnico mais eficiente.' },
                  { step: '02', title: 'Design & Copy Estratégica', desc: 'Criamos interfaces sob medida com clareza, usabilidade impecável no celular e foco total em conversão.' },
                  { step: '03', title: 'Engenharia & Performance', desc: 'Código limpo com renderização SSR/SSG, Core Web Vitals saudáveis, Schema.org e segurança reforçada.' },
                  { step: '04', title: 'Publicação & Propriedade', desc: 'Entregamos em produção no seu domínio com SSL, monitoramento e 100% do código sob sua propriedade.' },
                ],
                cta1: 'Simular Escopo e Prazo em 30s',
                cta2: 'Explorar Soluções & Comparativos',
              },
              en: {
                tag: 'CUSTOM ENGINEERING · FULL TRANSPARENCY',
                title: 'The Right Architecture for Any Digital Mission',
                desc: 'We never force your project into a single template or narrow niche. From the official Sinapro/SC portal to global platforms like SNEWS and VOLK Presenter, we pick the exact engineering stack that maximizes speed, reliability, and ROI.',
                headers: ['Project Track', 'Architecture & Stack', 'Typical Timeline', 'Business Outcome'],
                rows: [
                  ['High-Converting Landing Pages', 'Next.js, React, Tailwind CSS (SSG)', '7–14 business days', 'Sub-second mobile speed for paid ads and qualified lead capture'],
                  ['Corporate Websites & Portals', 'Next.js or Enterprise WordPress', '15–25 business days', 'Brand authority, technical SEO/GEO, and seamless editorial control'],
                  ['E-commerce & Online Stores', 'Next.js, Shopify, WooCommerce, APIs', '20–40 business days', 'Fast mobile checkout, catalog control, and scalable conversions'],
                  ['Custom Web Systems, SaaS & APIs', 'TypeScript, Node.js, PostgreSQL, Cloud', 'Scoped (20–40+ days)', 'Dashboards, client portals, scheduling engines, automations, and custom APIs'],
                ],
                steps: [
                  { step: '01', title: 'Discovery & Architecture', desc: 'We map business logic, user journeys, integrations, and goals before writing the first line of code.' },
                  { step: '02', title: 'Design & Strategic Copy', desc: 'Bespoke interfaces built for mobile clarity, trust, and measurable conversion.' },
                  { step: '03', title: 'Engineering & Performance', desc: 'Clean SSR/SSG architecture, green Core Web Vitals, structured Schema.org, and hardened security.' },
                  { step: '04', title: 'Launch & Full Ownership', desc: 'Production launch on your domain with SSL, analytics, and 100% source code ownership.' },
                ],
                cta1: 'Estimate Scope & Timeline in 30s',
                cta2: 'Explore Solutions & Comparisons',
              },
              es: {
                tag: 'INGENIERÍA A MEDIDA · TRANSPARENCIA TOTAL',
                title: 'La Arquitectura Correcta para Cualquier Misión Digital',
                desc: 'No limitamos tu proyecto a una sola herramienta o nicho. Desde el portal oficial de Sinapro/SC hasta plataformas globales como SNEWS y VOLK Presenter, elegimos la stack que entrega más velocidad, seguridad y retorno.',
                headers: ['Tipo de Proyecto', 'Arquitectura y Stack', 'Plazo Estimado', 'Enfoque de Resultado'],
                rows: [
                  ['Landing Pages de Alta Conversión', 'Next.js, React, Tailwind CSS (SSG)', '7 a 14 días hábiles', 'Carga sub-segundo para campañas pagas y captación de leads calificados'],
                  ['Sitios y Portales Institucionales', 'Next.js o WordPress Corporativo', '15 a 25 días hábiles', 'Autoridad de marca, SEO técnico/GEO y autonomía editorial'],
                  ['E-commerce y Tiendas Online', 'Next.js, Shopify, WooCommerce, APIs', '20 a 40 días hábiles', 'Checkout veloz en móvil, gestión de catálogo y ventas escalables'],
                  ['Sistemas Web, SaaS e Integraciones', 'TypeScript, Node.js, PostgreSQL, Cloud', 'A medida (20–40+ días)', 'Dashboards, paneles, agendas, automatizaciones y APIs personalizadas'],
                ],
                steps: [
                  { step: '01', title: 'Diagnóstico y Arquitectura', desc: 'Mapeamos reglas de negocio, integraciones y objetivos antes de programar.' },
                  { step: '02', title: 'Diseño y Copy Estratégico', desc: 'Interfaces a medida con claridad móvil, confianza y enfoque en conversión.' },
                  { step: '03', title: 'Ingeniería y Rendimiento', desc: 'Código limpio SSR/SSG, Core Web Vitals óptimos, Schema.org y seguridad.' },
                  { step: '04', title: 'Lanzamiento y Propiedad', desc: 'Publicación en tu dominio con SSL y 100% de propiedad del código fuente.' },
                ],
                cta1: 'Simular Alcance y Plazo en 30s',
                cta2: 'Ver Soluciones y Comparativos',
              },
            }[language];

            return (
              <div className="container mx-auto max-w-[1280px] px-6">
                <div className="max-w-3xl mb-12">
                  <p className="text-xs uppercase font-sans tracking-widest text-primary mb-3 font-semibold">
                    {copy.tag}
                  </p>
                  <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-neutral-950 mb-4">
                    {copy.title}
                  </h2>
                  <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
                    {copy.desc}
                  </p>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-neutral-200 shadow-sm mb-16">
                  <table className="w-full text-left border-collapse text-sm sm:text-base">
                    <thead>
                      <tr className="bg-neutral-950 text-white">
                        {copy.headers.map((h) => (
                          <th key={h} className="px-5 py-4 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 bg-white">
                      {copy.rows.map((row) => (
                        <tr key={row[0]} className="hover:bg-neutral-50">
                          <td className="px-5 py-4 font-semibold text-neutral-950">{row[0]}</td>
                          <td className="px-5 py-4 text-neutral-700">{row[1]}</td>
                          <td className="px-5 py-4 text-neutral-700 whitespace-nowrap">{row[2]}</td>
                          <td className="px-5 py-4 text-neutral-700">{row[3]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                  {copy.steps.map((item) => (
                    <div key={item.step} className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                      <span className="font-mono text-xs font-bold text-primary block mb-2">0{item.step.slice(-1)}</span>
                      <h3 className="font-display text-lg font-bold text-neutral-950 mb-2">{item.title}</h3>
                      <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/calculadora"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
                  >
                    <span>{copy.cta1}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/solucoes"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-300 hover:border-neutral-900 text-neutral-900 text-sm font-semibold transition-colors"
                  >
                    <span>{copy.cta2}</span>
                  </Link>
                </div>
              </div>
            );
          })()}
        </section>

      </div>
    </div>
  );
}
