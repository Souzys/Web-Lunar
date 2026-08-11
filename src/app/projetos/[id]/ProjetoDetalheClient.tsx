'use client';

import React, { useEffect, useRef } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowLeft, ExternalLink, Calendar, CheckCircle2, User, Globe, Tag, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { VolkHeroShowcase } from '@/components/sections/VolkHeroShowcase';
import { CaseStudy, CASE_STUDIES_I18N } from './caseStudiesData';
import { useLanguage } from '@/context/LanguageContext';

export function ProjetoDetalheClient({ caseStudy: initialCaseStudy }: { caseStudy: CaseStudy | null }) {
  useLenis();
  const { language, t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const activeCaseStudy = initialCaseStudy
    ? (CASE_STUDIES_I18N[language]?.[initialCaseStudy.id] || initialCaseStudy)
    : null;

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

  const labels = {
    pt: {
      back: "Voltar para Projetos",
      notFound: "Estudo de caso não encontrado",
      client: "Cliente",
      scope: "Escopo",
      stack: "Stack",
      year: "Ano",
      explore: "EXPLORE",
      visit: "Acessar Projeto",
      overview: "Visão Geral",
      challenge: "O Desafio",
      solution: "A Solução Lunar",
      techPerformance: "Performance Técnica",
      keyResults: "Principais Resultados",
      metadata: "Metadados do Projeto",
      category: "Categoria",
      technologies: "Tecnologias",
      designSystem: "Design System & Interface",
      interactiveComponents: "Componentes Interativos",
      startProjectTitle: "Quer um resultado como este?",
      startProjectDesc: "Desenvolvemos plataformas web de alto padrão sob medida para o seu negócio.",
      startProjectBtn: "Iniciar um Projeto",
    },
    en: {
      back: "Back to Projects",
      notFound: "Case study not found",
      client: "Client",
      scope: "Scope",
      stack: "Stack",
      year: "Year",
      explore: "EXPLORE",
      visit: "Visit Live Project",
      overview: "Overview",
      challenge: "The Challenge",
      solution: "The Lunar Solution",
      techPerformance: "Technical Performance",
      keyResults: "Key Results",
      metadata: "Project Metadata",
      category: "Category",
      technologies: "Technologies",
      designSystem: "Design System & Interface",
      interactiveComponents: "Interactive Components",
      startProjectTitle: "Want results like this for your brand?",
      startProjectDesc: "We build custom, high-end digital platforms tailored for your business growth.",
      startProjectBtn: "Start a Project",
    },
    es: {
      back: "Volver a Proyectos",
      notFound: "Estudio de caso no encontrado",
      client: "Cliente",
      scope: "Alcance",
      stack: "Stack",
      year: "Año",
      explore: "EXPLORAR",
      visit: "Ver Proyecto en Vivo",
      overview: "Visión General",
      challenge: "El Desafío",
      solution: "La Solución Lunar",
      techPerformance: "Rendimiento Técnico",
      keyResults: "Resultados Clave",
      metadata: "Metadatos del Proyecto",
      category: "Categoría",
      technologies: "Tecnologías",
      designSystem: "Design System e Interfaz",
      interactiveComponents: "Componentes Interactivos",
      startProjectTitle: "¿Quieres resultados como este para tu marca?",
      startProjectDesc: "Desarrollamos plataformas digitales a medida para impulsar tu crecimiento.",
      startProjectBtn: "Iniciar un Proyecto",
    },
  }[language];

  if (!activeCaseStudy) {
    return (
      <div className="bg-bg text-text min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-mono text-neutral-400">{labels.notFound}</h1>
        <Link href="/projetos" className="inline-flex items-center gap-2 text-primary hover:text-blue-400 font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" />
          <span>{labels.back}</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#05070F] text-text min-h-screen font-sans selection:bg-primary selection:text-white">
      {/* Hero Header */}
      <div ref={heroRef} className="relative w-full z-10 overflow-hidden pt-28 pb-0 bg-[#05070F]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            ref={glowRef}
            className="absolute w-[800px] h-[800px] bg-primary/20 rounded-full blur-[140px] opacity-50 mix-blend-screen pointer-events-none"
            style={{ left: '50%', top: '20%', transform: 'translate(-50%, -50%)', willChange: 'transform' }}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="w-full flex flex-col items-center justify-center relative z-10 text-center">
          <div className="container mx-auto px-6 max-w-[1280px] w-full flex flex-col items-center">
            
            <AnimatedSection className="flex flex-col items-center max-w-5xl text-center">
              {/* Back Link */}
              <div className="mb-6">
                <Link href="/projetos" className="inline-flex items-center gap-2 text-primary hover:text-blue-400 font-semibold text-xs uppercase tracking-widest font-sans">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>{labels.back}</span>
                </Link>
              </div>
              
              {/* Badge CASE STUDY */}
              <div className="mb-6">
                <span className="text-[10px] font-mono tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary font-bold inline-block">
                  {activeCaseStudy.category}
                </span>
              </div>

              {/* Titulo Centralizado dos Cases */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
                {activeCaseStudy.title}
              </h1>

              {/* Subtítulo Centralizado */}
              <p className="text-lg md:text-2xl text-neutral-300 font-light leading-relaxed max-w-2xl mb-10 text-balance">
                {activeCaseStudy.tagline}
              </p>

              {/* Linha Horizontal Elegante de Metadados */}
              <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 px-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-10 text-center text-xs">
                <div>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">{labels.client}</p>
                  <p className="text-white font-semibold">{activeCaseStudy.client}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">{labels.scope}</p>
                  <p className="text-neutral-200 font-medium truncate">{activeCaseStudy.scope?.[0] || "UX/UI Design"}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">{labels.stack}</p>
                  <p className="text-primary font-mono font-semibold">Next.js & Motion</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">{labels.year}</p>
                  <p className="text-neutral-300 font-mono font-bold">{activeCaseStudy.year}</p>
                </div>
              </div>

              {/* Indicador EXPLORE ↓ */}
              <div className="flex flex-col items-center gap-2 mb-6 text-neutral-400 font-mono text-xs uppercase tracking-widest animate-bounce">
                <span className="text-[10px]">{labels.explore}</span>
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </AnimatedSection>

            {/* Mockup Centralizado Slim & Botão Acessar Projeto */}
            <div className="w-full relative flex flex-col items-center justify-center pt-4 pb-12">
              <VolkHeroShowcase desktopImage={activeCaseStudy.image} />

              {activeCaseStudy.liveUrl && (
                <AnimatedSection options={{ delay: 0.2 }} className="mt-10 z-30">
                  <a
                    href={activeCaseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 text-xs font-bold tracking-widest uppercase rounded-full bg-primary text-white hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg group"
                  >
                    <span>{labels.visit}</span>
                    <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </AnimatedSection>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Strip de Métricas Rápidas */}
      <div className="relative z-20 bg-[#080b12] text-white border-t border-b border-white/10 py-8">
        <div className="container mx-auto max-w-[1440px] px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            <div className="p-3 border-r border-white/5 last:border-none">
              <p className="text-xl font-bold font-mono text-primary">+20 Módulos</p>
              <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">{labels.interactiveComponents}</p>
            </div>
            <div className="p-3 border-r border-white/5 last:border-none">
              <p className="text-xl font-bold font-mono text-emerald-400">&lt; 100ms</p>
              <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">TTFB / Latency</p>
            </div>
            <div className="p-3 border-r border-white/5 last:border-none">
              <p className="text-xl font-bold font-mono text-white">100%</p>
              <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Mobile-First</p>
            </div>
            <div className="p-3 border-r border-white/5 last:border-none">
              <p className="text-xl font-bold font-mono text-blue-400">Design System</p>
              <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">React Modular</p>
            </div>
            <div className="p-3 col-span-2 sm:col-span-1 border-r border-white/5 last:border-none">
              <p className="text-xl font-bold font-mono text-purple-400">100/100</p>
              <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">SEO & Performance</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="relative z-20 bg-white text-neutral-900 w-full pt-16">
        <div className="container mx-auto max-w-[1440px] px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Esquerda */}
            <div className="lg:col-span-8 flex flex-col gap-16 text-left">
              <AnimatedSection options={{ delay: 0.1 }}>
                <h2 className="text-xs uppercase font-sans tracking-widest text-neutral-400 mb-6 font-semibold">{labels.overview}</h2>
                <h3 className="text-2xl md:text-3xl font-black text-neutral-950 mb-6 tracking-tight leading-tight">{activeCaseStudy.tagline}</h3>
                <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg pl-5 border-l-2 border-primary/30">
                  {activeCaseStudy.overview}
                </p>
              </AnimatedSection>

              <AnimatedSection options={{ delay: 0.2 }}>
                <h2 className="text-xs uppercase font-sans tracking-widest text-neutral-400 mb-6 font-semibold">{labels.challenge}</h2>
                <p className="text-neutral-600 font-light leading-relaxed text-base">
                  {activeCaseStudy.challenge}
                </p>
              </AnimatedSection>

              <AnimatedSection options={{ delay: 0.3 }}>
                <h2 className="text-xs uppercase font-sans tracking-widest text-neutral-400 mb-6 font-semibold">{labels.solution}</h2>
                <p className="text-neutral-600 font-light leading-relaxed text-base mb-12">
                  {activeCaseStudy.solution}
                </p>
              </AnimatedSection>

              {/* Seção Métricas de Performance Técnica */}
              <AnimatedSection options={{ delay: 0.35 }}>
                <h2 className="text-xs uppercase font-sans tracking-widest text-neutral-400 mb-6 font-semibold">{labels.techPerformance}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                  {/* Card 1: Velocidade */}
                  <div className="bg-white/80 backdrop-blur-xl border border-neutral-200/80 p-6 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-xl text-left relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mt-6 -mr-6 w-16 h-16 bg-emerald-500/10 rounded-full blur-md group-hover:bg-emerald-500/20 transition-colors" />
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-4 font-mono text-[10px] font-bold">
                        98%
                      </div>
                      <h4 className="text-neutral-900 font-bold text-sm mb-1.5">{activeCaseStudy.performance.speed.title}</h4>
                      <p className="text-primary font-mono text-xs font-semibold mb-2">{activeCaseStudy.performance.speed.score}</p>
                    </div>
                    <p className="text-neutral-600 text-xs font-light leading-relaxed">
                      {activeCaseStudy.performance.speed.description}
                    </p>
                  </div>

                  {/* Card 2: Tecnologia */}
                  <div className="bg-white/80 backdrop-blur-xl border border-neutral-200/80 p-6 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-xl text-left relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mt-6 -mr-6 w-16 h-16 bg-blue-500/10 rounded-full blur-md group-hover:bg-blue-500/20 transition-colors" />
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 mb-4">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                      <h4 className="text-neutral-900 font-bold text-sm mb-1.5">{activeCaseStudy.performance.tech.title}</h4>
                      <p className="text-primary font-mono text-xs font-semibold mb-2">{activeCaseStudy.performance.tech.tech}</p>
                    </div>
                    <p className="text-neutral-600 text-xs font-light leading-relaxed">
                      {activeCaseStudy.performance.tech.description}
                    </p>
                  </div>

                  {/* Card 3: SEO */}
                  <div className="bg-white/80 backdrop-blur-xl border border-neutral-200/80 p-6 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-xl text-left relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mt-6 -mr-6 w-16 h-16 bg-purple-500/10 rounded-full blur-md group-hover:bg-purple-500/20 transition-colors" />
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 mb-4">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <h4 className="text-neutral-900 font-bold text-sm mb-1.5">{activeCaseStudy.performance.seo.title}</h4>
                      <p className="text-primary font-mono text-xs font-semibold mb-2">{activeCaseStudy.performance.seo.status}</p>
                    </div>
                    <p className="text-neutral-600 text-xs font-light leading-relaxed">
                      {activeCaseStudy.performance.seo.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection options={{ delay: 0.4 }}>
                <h2 className="text-xs uppercase font-sans tracking-widest text-neutral-400 mb-8 font-semibold">{labels.keyResults}</h2>
                <div className="grid grid-cols-1 gap-4">
                  {activeCaseStudy.results.map((result, index) => (
                    <div key={index} className="flex gap-4 items-start bg-neutral-50 border border-neutral-100 p-6 rounded-2xl">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-neutral-700 text-sm font-medium leading-relaxed">{result}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Direita */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-10 text-left">
              <AnimatedSection options={{ delay: 0.2 }} className="w-full">
                <div className="rounded-3xl border border-neutral-100 bg-neutral-50 p-8 shadow-sm">
                  <h4 className="text-xs uppercase font-sans tracking-widest text-neutral-400 mb-8 font-semibold">{labels.metadata}</h4>
                  
                  <div className="space-y-6">
                    <div className="flex gap-3 items-center pb-4 border-b border-neutral-200/60">
                      <User className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-0.5">{labels.client}</p>
                        <p className="text-neutral-900 text-sm font-semibold">{activeCaseStudy.client}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center pb-4 border-b border-neutral-200/60">
                      <Calendar className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-0.5">{labels.year}</p>
                        <p className="text-neutral-900 text-sm font-semibold">{activeCaseStudy.year}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center pb-4 border-b border-neutral-200/60">
                      <Globe className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-0.5">{labels.category}</p>
                        <p className="text-neutral-900 text-sm font-semibold">{activeCaseStudy.category}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start pt-2">
                      <Tag className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-2">{labels.technologies}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {activeCaseStudy.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-200/60 text-neutral-700">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Box de Contato / Iniciar Projeto */}
              <AnimatedSection options={{ delay: 0.3 }} className="w-full">
                <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 text-left relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-8 -mr-8 w-24 h-24 bg-primary/10 rounded-full blur-xl" />
                  <h4 className="font-sans font-bold text-lg text-neutral-900 mb-2">{labels.startProjectTitle}</h4>
                  <p className="text-neutral-600 text-xs font-light leading-relaxed mb-6">
                    {labels.startProjectDesc}
                  </p>
                  <Link
                    href={`/contato?subject=${encodeURIComponent('Projeto similar a: ' + activeCaseStudy.title)}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 text-xs font-bold uppercase tracking-wider rounded-full bg-primary text-white hover:bg-blue-600 transition-all duration-300 shadow-md"
                  >
                    <span>{labels.startProjectBtn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
