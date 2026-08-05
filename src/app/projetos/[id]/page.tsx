'use client';

import React, { useEffect, useRef } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { trpc } from '@/utils/trpc';
import { ArrowLeft, ExternalLink, Loader2, Calendar, CheckCircle2, User, Globe, Tag, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useParams } from 'next/navigation';

import { VolkHeroShowcase } from '@/components/sections/VolkHeroShowcase';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  client: string;
  year: string;
  scope: string[];
  stack: string[];
  tagline: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  showcaseHeroTitle: string;
  performance: {
    speed: { title: string; score: string; description: string };
    tech: { title: string; tech: string; description: string };
    seo: { title: string; status: string; description: string };
  };
  designSystemText: string;
  designSystemComponents: {
    ctaLabel: string;
    cardTitle: string;
    cardDesc: string;
    awardTitle: string;
    awardSub: string;
  };
}

const STATIC_CASE_STUDIES: Record<string, CaseStudy> = {
  "volk": {
    id: "volk",
    title: "VOLK Presenter",
    category: "CASE STUDY // WEBSITE INSTITUCIONAL",
    image: "/printvolk.png",
    liveUrl: "https://volkpresenter.tv/pt",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "GSAP / Motion"],
    client: "VOLK Presenter",
    year: "2026",
    scope: ["UX/UI Design", "Desenvolvimento Front-end", "Responsividade", "SEO & Performance"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    tagline: "Transformando tecnologia complexa em uma experiência digital intuitiva.",
    overview: "Projetamos e desenvolvemos a nova presença digital do VOLK Presenter, traduzindo um sistema complexo de broadcasting e operação gráfica ao vivo em uma interface clara, moderna, de alta performance e orientada à conversão B2B.",
    challenge: "Apresentar uma ferramenta técnica de alta precisão sem confundir o usuário ou tornar a navegação pesada. Era necessário transmitir o dinamismo e a velocidade do software através de um website ultrarrepassado, fluido e acessível em qualquer dispositivo.",
    solution: "Desenvolvemos o website institucional utilizando Next.js App Router, componentes modulares em React e Tailwind CSS. Aplicamos interações em movimento de altíssimo nível, otimização de renderização e estrutura focada na retenção de decisores.",
    results: [
      "Comunicação clara dos diferenciais técnicos da marca e módulos do produto.",
      "Desempenho web exemplar com carregamento de página em menos de 1 segundo.",
      "Design System escalável para futuras atualizações de produtos e landing pages."
    ],
    showcaseHeroTitle: "Interface Digital de Alta Performance",
    performance: {
      speed: { title: "Velocidade", score: "PageSpeed Score: 98/100", description: "Carregamento instantâneo e fluidez impecável." },
      tech: { title: "Tecnologia", tech: "Next.js + Tailwind CSS", description: "Código limpo, ultra-leve e sem a sobrecarga de CMS tradicionais." },
      seo: { title: "SEO", status: "SEO Otimizado 100/100", description: "Indexação estruturada para posicionar no topo do Google." }
    },
    designSystemText: "Estruturamos um Design System modular para a presença web do VOLK Presenter. Cada componente, card e microinteração foi desenhado para guiar a atenção do visitante e transmitir solidez de produto internacional.",
    designSystemComponents: {
      ctaLabel: "Solicitar Demonstração",
      cardTitle: "Transmissão 60 FPS",
      cardDesc: "Layouts gráficos responsivos adaptados para qualquer plataforma.",
      awardTitle: "Awwwards Nominee",
      awardSub: "Site of the Day - Corporate Showcase"
    }
  },
  "capi": {
    id: "capi",
    title: "CAPI Digital",
    category: "CASE STUDY // PLATAFORMA EDITORIAL",
    image: "/printcapi.png",
    liveUrl: "https://capi.digital/pt",
    tags: ["Next.js", "AI Integration", "Tailwind CSS"],
    client: "CAPI Digital",
    year: "2026",
    scope: ["UX/UI Design", "Desenvolvimento Front-end", "APIs de IA"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    tagline: "Workspace editorial colaborativo impulsionado por inteligência artificial.",
    overview: "Desenvolvimento da nova identidade digital e plataforma de apresentações para a CAPI Digital, unindo design sofisticado e performance em tempo real.",
    challenge: "Criar uma interface rica e colaborativa que simplificasse fluxos editoriais complexos com respostas de IA instantâneas.",
    solution: "Adotamos o Next.js App Router com Tailwind CSS e TypeScript para uma base sólida e escalável de altíssima fidelidade.",
    results: [
      "Apresentação clara dos recursos de IA e ferramentas editoriais.",
      "Excelente taxa de conversão em cadastros e pedidos de contato.",
      "Performance web otimizada com notas excelentes de Core Web Vitals."
    ],
    showcaseHeroTitle: "O futuro do jornalismo com IA",
    performance: {
      speed: { title: "Velocidade", score: "PageSpeed Score: 99/100", description: "Tempo de carregamento inicial menor que 0.8s." },
      tech: { title: "Tecnologia", tech: "Next.js + Prisma", description: "Arquitetura moderna com tipagem estrita." },
      seo: { title: "SEO", status: "Indexação Instantânea", description: "Marcação estruturada de dados." }
    },
    designSystemText: "Design System modular em React planejado para a melhor usabilidade e experiência visual.",
    designSystemComponents: {
      ctaLabel: "Criar Conta",
      cardTitle: "Editor Inteligente",
      cardDesc: "Co-autor de IA integrado que planeja e distribui conteúdo.",
      awardTitle: "CAPI AI Tech",
      awardSub: "Innovation in Media & Publishing"
    }
  }
};

export default function ProjetoDetalhePage() {
  useLenis();
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const params = useParams();
  const id = params.id as string;

  // Consulta ao banco ignorada por enquanto para evitar erros de conexão
  const dbProject = undefined;
  const isLoading = false;

  // Fallback to static case study details
  const caseStudy: CaseStudy | null = STATIC_CASE_STUDIES[id] || null;

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

  if (isLoading) {
    return (
      <div className="bg-bg text-text min-h-screen flex flex-col items-center justify-center gap-3">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <span className="text-sm font-mono text-neutral-400">Carregando estudo de caso...</span>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="bg-bg text-text min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-mono text-neutral-400">Estudo de caso não encontrado</h1>
        <Link href="/projetos" className="inline-flex items-center gap-2 text-primary hover:text-blue-400 font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para Projetos</span>
        </Link>
      </div>
    );
  }

  const scrollDurations = caseStudy.id === 'volk' 
    ? { desktop: '45s', tablet: '45s', mobile: '55s' }
    : { desktop: '16s', tablet: '20s', mobile: '18s' };

  return (
    <div className="bg-[#05070F] text-text min-h-screen font-sans selection:bg-primary selection:text-white">
      {/* Hero Header (Natural Scroll Layout) */}
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
                  <span>Voltar para Projetos</span>
                </Link>
              </div>
              
              {/* Badge CASE STUDY */}
              <div className="mb-6">
                <span className="text-[10px] font-mono tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary font-bold inline-block">
                  {caseStudy.category}
                </span>
              </div>

              {/* Titulo Centralizado dos Cases */}
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
                {caseStudy.title}
              </h1>

              {/* Subtítulo Centralizado */}
              <p className="text-lg md:text-2xl text-neutral-300 font-light leading-relaxed max-w-2xl mb-10 text-balance">
                {caseStudy.tagline}
              </p>

              {/* Linha Horizontal Elegante de Metadados (Client / Scope / Stack / Year) */}
              <div className="w-full max-w-3xl grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 px-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-10 text-center text-xs">
                <div>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">Cliente</p>
                  <p className="text-white font-semibold">{caseStudy.client}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">Escopo</p>
                  <p className="text-neutral-200 font-medium truncate">{caseStudy.scope?.[0] || "UX/UI Design"}</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">Stack</p>
                  <p className="text-primary font-mono font-semibold">Next.js & Motion</p>
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest mb-1">Ano</p>
                  <p className="text-neutral-300 font-mono font-bold">{caseStudy.year}</p>
                </div>
              </div>

              {/* Indicador EXPLORE ↓ */}
              <div className="flex flex-col items-center gap-2 mb-6 text-neutral-400 font-mono text-xs uppercase tracking-widest animate-bounce">
                <span className="text-[10px]">EXPLORE</span>
                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </AnimatedSection>

            {/* Mockup Centralizado Slim */}
            <div className="w-full relative flex items-center justify-center pt-4 pb-12">
              <VolkHeroShowcase desktopImage={caseStudy.image} />
            </div>

          </div>
        </div>
      </div>

      {/* Strip de Métricas Rápidas (Transição Escura Fluida) */}
      <div className="relative z-20 bg-[#080b12] text-white border-t border-b border-white/10 py-8">
        <div className="container mx-auto max-w-[1440px] px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
            <div className="p-3 border-r border-white/5 last:border-none">
              <p className="text-xl font-bold font-mono text-primary">+20 Módulos</p>
              <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Visualizados</p>
            </div>
            <div className="p-3 border-r border-white/5 last:border-none">
              <p className="text-xl font-bold font-mono text-emerald-400">&lt; 100ms</p>
              <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Latência Stream</p>
            </div>
            <div className="p-3 border-r border-white/5 last:border-none">
              <p className="text-xl font-bold font-mono text-white">100%</p>
              <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Responsivo</p>
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

      {/* Scrolling Content (Conteúdo Principal em Fundo Claro) */}
      <div className="relative z-20 bg-white text-neutral-900 w-full pt-16">
        

        <div className="container mx-auto max-w-[1440px] px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Esquerda: Visão Geral, Desafios, Solução e Resultados */}
            <div className="lg:col-span-8 flex flex-col gap-16 text-left">
              <AnimatedSection options={{ delay: 0.1 }}>
                <h2 className="text-xs uppercase font-sans tracking-widest text-neutral-400 mb-6 font-semibold">Visão Geral</h2>
                <h3 className="text-2xl md:text-3xl font-black text-neutral-950 mb-6 tracking-tight leading-tight">{caseStudy.tagline}</h3>
                <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg pl-5 border-l-2 border-primary/30">
                  {caseStudy.overview}
                </p>
              </AnimatedSection>

              <AnimatedSection options={{ delay: 0.2 }}>
                <h2 className="text-xs uppercase font-sans tracking-widest text-neutral-400 mb-6 font-semibold">O Desafio</h2>
                <p className="text-neutral-600 font-light leading-relaxed text-base">
                  {caseStudy.challenge}
                </p>
              </AnimatedSection>

              <AnimatedSection options={{ delay: 0.3 }}>
                <h2 className="text-xs uppercase font-sans tracking-widest text-neutral-400 mb-6 font-semibold">A Solução Lunar</h2>
                <p className="text-neutral-600 font-light leading-relaxed text-base mb-12">
                  {caseStudy.solution}
                </p>
              </AnimatedSection>

              {/* Seção Métricas de Performance Técnica */}
              <AnimatedSection options={{ delay: 0.35 }}>
                <h2 className="text-xs uppercase font-sans tracking-widest text-neutral-400 mb-6 font-semibold">Performance Técnica</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
                  {/* Card 1: Velocidade */}
                  <div className="bg-[#0b0f19] border border-white/[0.05] p-6 rounded-2xl flex flex-col justify-between hover:border-primary/30 transition-all duration-300 shadow-sm text-left relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mt-6 -mr-6 w-16 h-16 bg-emerald-500/10 rounded-full blur-md group-hover:bg-emerald-500/20 transition-colors" />
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 font-mono text-[10px] font-bold">
                        98%
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1.5">{caseStudy.performance.speed.title}</h4>
                      <p className="text-primary font-mono text-xs font-semibold mb-2">{caseStudy.performance.speed.score}</p>
                    </div>
                    <p className="text-neutral-400 text-xs font-light leading-relaxed">
                      {caseStudy.performance.speed.description}
                    </p>
                  </div>

                  {/* Card 2: Tecnologia */}
                  <div className="bg-[#0b0f19] border border-white/[0.05] p-6 rounded-2xl flex flex-col justify-between hover:border-primary/30 transition-all duration-300 shadow-sm text-left relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mt-6 -mr-6 w-16 h-16 bg-blue-500/10 rounded-full blur-md group-hover:bg-blue-500/20 transition-colors" />
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                        </svg>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1.5">{caseStudy.performance.tech.title}</h4>
                      <p className="text-primary font-mono text-xs font-semibold mb-2">{caseStudy.performance.tech.tech}</p>
                    </div>
                    <p className="text-neutral-400 text-xs font-light leading-relaxed">
                      {caseStudy.performance.tech.description}
                    </p>
                  </div>

                  {/* Card 3: SEO */}
                  <div className="bg-[#0b0f19] border border-white/[0.05] p-6 rounded-2xl flex flex-col justify-between hover:border-primary/30 transition-all duration-300 shadow-sm text-left relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mt-6 -mr-6 w-16 h-16 bg-purple-500/10 rounded-full blur-md group-hover:bg-purple-500/20 transition-colors" />
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </div>
                      <h4 className="text-white font-bold text-sm mb-1.5">{caseStudy.performance.seo.title}</h4>
                      <p className="text-primary font-mono text-xs font-semibold mb-2">{caseStudy.performance.seo.status}</p>
                    </div>
                    <p className="text-neutral-400 text-xs font-light leading-relaxed">
                      {caseStudy.performance.seo.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection options={{ delay: 0.4 }}>
                <h2 className="text-xs uppercase font-sans tracking-widest text-neutral-400 mb-8 font-semibold">Principais Resultados</h2>
                <div className="grid grid-cols-1 gap-4">
                  {caseStudy.results.map((result, index) => (
                    <div key={index} className="flex gap-4 items-start bg-neutral-50 border border-neutral-100 p-6 rounded-2xl">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <p className="text-neutral-700 text-sm font-medium leading-relaxed">{result}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Direita: Metadados do Projeto e Links */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-10 text-left">
              <AnimatedSection options={{ delay: 0.2 }} className="w-full">
                <div className="rounded-3xl border border-neutral-100 bg-neutral-50 p-8 shadow-sm">
                  <h4 className="text-xs uppercase font-sans tracking-widest text-neutral-400 mb-8 font-semibold">Metadados do Projeto</h4>
                  
                  <div className="space-y-6">
                    <div className="flex gap-3 items-center pb-4 border-b border-neutral-200/60">
                      <User className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-0.5">Cliente</p>
                        <p className="text-neutral-900 text-sm font-semibold">{caseStudy.client}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center pb-4 border-b border-neutral-200/60">
                      <Calendar className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-0.5">Ano de Entrega</p>
                        <p className="text-neutral-900 text-sm font-semibold">{caseStudy.year}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center pb-4 border-b border-neutral-200/60">
                      <Globe className="w-4 h-4 text-primary shrink-0" />
                      <div>
                        <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-0.5">Categoria</p>
                        <p className="text-neutral-900 text-sm font-semibold">{caseStudy.category}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <Tag className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase mb-1">Tecnologias</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {caseStudy.tags.map(tag => (
                            <span key={tag} className="px-2 py-0.5 rounded text-[9px] font-mono bg-white border border-neutral-200 text-neutral-500 uppercase tracking-wider">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div className="flex flex-col gap-3 mt-10">
                    {caseStudy.liveUrl && (
                      <a
                        href={caseStudy.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-3.5 text-xs font-bold tracking-widest uppercase rounded-full bg-primary text-white hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Acessar Projeto</span>
                      </a>
                    )}
                    {caseStudy.githubUrl && (
                      <a
                        href={caseStudy.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-3.5 text-xs font-bold tracking-widest uppercase rounded-full border border-neutral-300 text-neutral-700 hover:text-neutral-950 hover:border-neutral-400 transition-all duration-300"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                        </svg>
                        <span>Ver Código Fonte</span>
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>

        {/* Seção Design System & Anatomia da Conversão */}
        <section className="bg-[#050505] text-white py-24 border-t border-white/5 relative overflow-hidden select-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

          <div className="container mx-auto max-w-[1440px] px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              
              {/* Left Side: Explanatory Text */}
              <div className="lg:col-span-5 text-left">
                <AnimatedSection>
                  <p className="text-xs uppercase font-sans tracking-widest text-primary mb-4 font-semibold">
                    Anatomia da Conversão
                  </p>
                  <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight">
                    Design System &<br />Componentes Modulares
                  </h2>
                  <p className="text-neutral-400 font-light text-base leading-relaxed mb-8 text-balance">
                    {caseStudy.designSystemText}
                  </p>
                </AnimatedSection>
              </div>

              {/* Right Side: Floating UI Components Showcase */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                {/* Decorative floating grids */}
                <div className="absolute inset-0 border border-white/[0.03] rounded-3xl pointer-events-none" />

                {/* Left column components */}
                <div className="flex flex-col gap-6 justify-center">
                  {/* Component 1: Glow CTA Button */}
                  <AnimatedSection options={{ delay: 0.1 }} className="bg-[#0b0f19] border border-white/[0.08] p-8 rounded-2xl shadow-xl flex flex-col items-start gap-4 hover:border-primary/40 transition-colors duration-300">
                    <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">// Botão Interativo Glow</span>
                    <button className="relative group px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase rounded-full bg-primary text-white overflow-hidden shadow-[0_0_20px_rgba(29,77,255,0.3)] hover:shadow-[0_0_30px_rgba(29,77,255,0.6)] transition-all duration-300">
                      <span className="relative z-10 flex items-center gap-2">
                        {caseStudy.designSystemComponents.ctaLabel}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </AnimatedSection>

                  {/* Component 2: Award Badge */}
                  <AnimatedSection options={{ delay: 0.2 }} className="bg-[#0b0f19] border border-white/[0.08] p-6 rounded-2xl shadow-xl flex items-center gap-4 hover:border-primary/40 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 shrink-0 shadow-inner">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest">Reconhecimento</p>
                      <p className="text-white text-xs font-bold font-sans mt-0.5">{caseStudy.designSystemComponents.awardTitle}</p>
                      <p className="text-neutral-400 text-[10px] font-light font-sans leading-tight mt-0.5">{caseStudy.designSystemComponents.awardSub}</p>
                    </div>
                  </AnimatedSection>
                </div>

                {/* Right column component */}
                <div className="flex flex-col gap-6 justify-center">
                  {/* Component 3: Feature Details Card */}
                  <AnimatedSection options={{ delay: 0.3 }} className="bg-[#0b0f19] border border-white/[0.08] p-8 rounded-2xl shadow-xl hover:border-primary/40 transition-colors duration-300 flex flex-col justify-between text-left min-h-[220px]">
                    <div>
                      <div className="flex justify-between items-center mb-6">
                        <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider">// Anatomia do Card</span>
                        <span className="text-xs font-mono font-bold text-primary">01</span>
                      </div>
                      <h4 className="text-white font-bold text-lg mb-2">{caseStudy.designSystemComponents.cardTitle}</h4>
                      <p className="text-neutral-400 text-xs font-light leading-relaxed">
                        {caseStudy.designSystemComponents.cardDesc}
                      </p>
                    </div>
                    <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 mt-6 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </AnimatedSection>
                </div>

              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
