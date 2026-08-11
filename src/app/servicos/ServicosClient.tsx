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
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(-1);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

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

      gsap.to(hero, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: ".services-accordion-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });

      ScrollTrigger.create({
        trigger: ".services-accordion-section",
        start: "top top",
        end: "max",
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
              <div className="flex items-center gap-2.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(29,77,255,0.4)]" />
                <span className="text-xs font-sans uppercase tracking-widest text-primary font-semibold">
                  {t.services.tag}
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection options={{ delay: 0.1 }}>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-6 leading-tight">
                {t.hero.title1}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 italic pr-2">{t.hero.title2}</span>{' '}
                {t.services.items.sitesApps.tagline.split(' ')[0]}
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
                        <button onClick={() => setActiveService(isOpen ? -1 : i)} className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight transition-all duration-300 text-left text-neutral-950 group-hover:translate-x-3">
                          {service.title}
                        </button>
                      </div>

                      {/* Espaço Vazio Central */}
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

          {/* CUSTOM CURSOR */}
          <div 
            ref={cursorRef} 
            className="fixed top-0 left-0 w-24 h-24 pointer-events-none z-[100] hidden lg:flex items-center justify-center"
            style={{ opacity: hoveredService !== null ? 1 : 0, transition: 'opacity 0.15s ease-out', willChange: 'transform' }}
          >
            <div 
              className="relative w-[80%] h-[80%] bg-neutral-950 rounded-full flex items-center justify-center transition-transform duration-200 ease-out shadow-[0_0_20px_rgba(0,0,0,0.1)]"
              style={{ transform: hoveredService !== null ? 'scale(1)' : 'scale(0)' }}
            >
               {hoveredService !== null && React.createElement(servicesList[hoveredService].icon, { 
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

      </div>
    </div>
  );
}
