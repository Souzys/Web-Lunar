'use client';

import React, { useEffect, useRef } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { trpc } from '@/utils/trpc';
import { ArrowLeft, ExternalLink, Loader2, Calendar, CheckCircle2, User, Globe, Tag, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import gsap from 'gsap';
import { useParams } from 'next/navigation';

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
    category: "Experiência Web",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
    liveUrl: "https://volkpresenter.tv/pt",
    tags: ["GSAP", "React", "WebSockets"],
    client: "VOLK",
    year: "2024",
    tagline: "Plataforma completa para controle de gráficos, dados e interações em tempo real para TV, eventos e entretenimento.",
    overview: "Desenvolvimento da Landing Page de alta conversão para o VOLK Presenter. O objetivo foi traduzir uma tecnologia complexa de transmissão em tempo real em uma experiência web imersiva, minimalista e focada em vendas B2B.",
    challenge: "Os visualizadores 3D tradicionais são pesados e lentos para carregar em redes móveis (3G/4G), resultando em altas taxas de rejeição. Além disso, a sincronização de estados de customização de cores de produtos com o carrinho de compras costumava quebrar.",
    solution: "Codificamos o site do zero utilizando Next.js e React no front-end, aplicando animações fluidas via GSAP e otimização extrema de imagens para garantir que o site carregue em menos de 1 segundo, retendo o máximo de leads qualificados.",
    results: [
      "Sincronização de gráficos e interações em tempo real com latência inferior a 100ms.",
      "Suporte estável a milhares de interações simultâneas de espectadores durante transmissões ao vivo.",
      "Melhoria expressiva na experiência do usuário e dinamismo visual nas transmissões."
    ],
    showcaseHeroTitle: "Transforme telas em experiências",
    performance: {
      speed: { title: "Velocidade", score: "PageSpeed Score: 98/100", description: "Garante que a página carrega instantaneamente no celular." },
      tech: { title: "Tecnologia", tech: "Next.js + Tailwind CSS", description: "Código limpo, ultra-leve e sem o peso de plugins do WordPress." },
      seo: { title: "SEO", status: "SEO Otimizado", description: "Estruturação de tags correta para o Google indexar o produto no topo." }
    },
    designSystemText: "Não criamos apenas telas; estruturamos um Design System modular em React. Cada botão, card e transição foi planejado para guiar o usuário até o fechamento, mantendo a identidade visual ultra-premium do produto.",
    designSystemComponents: {
      ctaLabel: "Experimentar Grátis",
      cardTitle: "Transmissão 60 FPS",
      cardDesc: "Sincronização de dados instantânea para audiências de qualquer tamanho.",
      awardTitle: "NAB Show Winner",
      awardSub: "Best of Show - Live Production"
    }
  },
  "capi": {
    id: "capi",
    title: "CAPI Digital",
    category: "Site Institucional",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&q=80",
    liveUrl: "https://capi.digital/pt",
    tags: ["Next.js", "AI Integration", "Tailwind CSS"],
    client: "CAPI",
    year: "2024",
    tagline: "Workspace editorial colaborativo com inteligência artificial para planejar, produzir e distribuir conteúdo multicanal.",
    overview: "Desenvolvimento da nova identidade digital e plataforma de workspace para a CAPI Digital. O projeto visava unificar ferramentas de escrita, colaboração em tempo real e geração de insights de conteúdo alimentados por inteligência artificial em uma única experiência intuitiva e profissional.",
    challenge: "Criar uma interface rica, limpa e colaborativa que simplificasse fluxos editoriais complexos. Era essencial que o sistema de design (Design System) fosse altamente consistente, veloz no carregamento e oferecesse excelente legibilidade para editores de texto.",
    solution: "Adotamos o Next.js App Router com Tailwind CSS e TypeScript para uma base sólida e escalável. Integramos APIs de IA de forma nativa e assíncrona, e aplicamos técnicas avançadas de renderização no servidor (SSR) para obter pontuação máxima em SEO e Core Web Vitals.",
    results: [
      "Workspace colaborativo centralizado com processamento de IA em tempo real.",
      "Redução de 45% no tempo médio de planejamento de pautas pelas equipes de redação.",
      "Performance web otimizada com notas excelentes de SEO técnico e usabilidade."
    ],
    showcaseHeroTitle: "O futuro do jornalismo com IA",
    performance: {
      speed: { title: "Velocidade", score: "PageSpeed Score: 99/100", description: "Tempo de carregamento inicial menor que 0.8 segundos." },
      tech: { title: "Tecnologia", tech: "Next.js + Prisma + tRPC", description: "Arquitetura escalável com tipagem estrita de ponta a ponta." },
      seo: { title: "SEO", status: "Indexação Instantânea", description: "Marcação estruturada de dados (JSON-LD) para notícias do Google." }
    },
    designSystemText: "Não criamos apenas telas; estruturamos um Design System modular em React. Cada botão, card e transição foi planejado para guiar o usuário até o fechamento, mantendo a identidade visual ultra-premium do produto.",
    designSystemComponents: {
      ctaLabel: "Criar Conta",
      cardTitle: "Editor Inteligente",
      cardDesc: "Co-autor de IA integrado que planeja e distribui conteúdo em multicanais.",
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
    ? { desktop: '45s', tablet: '20s', mobile: '18s' }
    : { desktop: '16s', tablet: '20s', mobile: '18s' };

  return (
    <div className="bg-bg text-text min-h-screen font-sans selection:bg-primary selection:text-white">
      {/* Hero Header (Fixed Background) */}
      <div ref={heroRef} className="fixed top-0 left-0 h-screen w-full z-0 overflow-hidden pt-20 bg-bg">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            ref={glowRef}
            className="absolute w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none"
            style={{ left: 0, top: 0, willChange: 'transform' }}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="h-[calc(100vh-80px)] w-full flex items-center justify-center relative z-10 text-left">
          <div className="container mx-auto px-6 max-w-[1440px] w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
              
              {/* Coluna Esquerda: Informações do Case */}
              <div className="lg:col-span-5 flex flex-col items-start justify-center">
                <AnimatedSection>
                  <div className="mb-6">
                    <Link href="/projetos" className="inline-flex items-center gap-2 text-primary hover:text-blue-400 font-semibold text-xs uppercase tracking-widest font-mono">
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Voltar para Projetos</span>
                    </Link>
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block mb-4">// {caseStudy.category}</span>
                  <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 leading-[1.05]">
                    {caseStudy.title}
                  </h1>
                  <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed max-w-md border-l border-primary/30 pl-5 text-balance">
                    {caseStudy.tagline}
                  </p>
                </AnimatedSection>
              </div>

              {/* Coluna Direita: Showcase Responsivo com Monitor + Tablet + Celular */}
              <div className="lg:col-span-7 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[520px] w-full select-none pt-12 lg:pt-0 -translate-y-8 lg:-translate-y-12">
                <style>{`
                  @keyframes float-monitor {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                  }
                  @keyframes float-tablet {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(8px); }
                  }
                  @keyframes float-phone {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    50% { transform: translateY(-12px) translateX(2px); }
                  }
                  @keyframes pulse-glow {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.05); opacity: 0.8; }
                  }
                  @keyframes scroll-device {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(calc(-100% + var(--device-h))); }
                  }
                  .monitor-animate {
                    animation: float-monitor 8s ease-in-out infinite;
                  }
                  .tablet-animate {
                    animation: float-tablet 8s ease-in-out infinite;
                    animation-delay: 2s;
                  }
                  .phone-animate {
                    animation: float-phone 8s ease-in-out infinite;
                    animation-delay: 4s;
                  }
                  .glow-pulse {
                    animation: pulse-glow 4s ease-in-out infinite;
                  }
                  .monitor-container {
                    --device-h: 150px;
                  }
                  @media (min-width: 640px) {
                    .monitor-container {
                      --device-h: 220px;
                    }
                  }
                  @media (min-width: 768px) {
                    .monitor-container {
                      --device-h: 285px;
                    }
                  }
                  .tablet-container {
                    --device-h: 80px;
                  }
                  @media (min-width: 640px) {
                    .tablet-container {
                      --device-h: 110px;
                    }
                  }
                  @media (min-width: 768px) {
                    .tablet-container {
                      --device-h: 145px;
                    }
                  }
                  .phone-container {
                    --device-h: 130px;
                  }
                  @media (min-width: 640px) {
                    .phone-container {
                      --device-h: 170px;
                    }
                  }
                  @media (min-width: 768px) {
                    .phone-container {
                      --device-h: 200px;
                    }
                  }
                  .scroll-animate {
                    animation: scroll-device var(--scroll-duration, 15s) ease-in-out infinite;
                  }
                `}</style>

                {/* 1. MONITOR MOCKUP */}
                <div className="monitor-animate w-[240px] h-[150px] sm:w-[350px] sm:h-[220px] md:w-[460px] md:h-[285px] bg-[#1e2330] rounded-xl p-1.5 sm:p-2 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col relative z-10 monitor-container">
                  {/* Screen */}
                  <div className="w-full h-full bg-[#050505] rounded-lg overflow-hidden border border-white/5 relative flex flex-col">
                    <img 
                      src={`/${caseStudy.id}-desktop.png`}
                      alt="Desktop View"
                      className="w-full h-auto object-cover object-top select-none pointer-events-none scroll-animate"
                      style={{ '--scroll-duration': scrollDurations.desktop } as React.CSSProperties}
                    />
                  </div>

                  {/* Base stand */}
                  <div className="absolute -bottom-5 sm:-bottom-7 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-5 sm:h-7 bg-[#161a24] border-x border-b border-white/10 shadow-md z-0" />
                  <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-0.5 sm:h-1 bg-[#1e2330] rounded-full shadow-md border border-white/10 z-0" />
                </div>

                {/* 2. TABLET MOCKUP */}
                <div className="tablet-animate absolute bottom-8 left-0 sm:left-4 md:left-8 w-[120px] h-[80px] sm:w-[170px] sm:h-[110px] md:w-[220px] md:h-[145px] bg-[#1e2330] rounded-xl p-1 shadow-[0_20px_45px_rgba(0,0,0,0.75)] border border-white/10 z-20 flex flex-col tablet-container">
                  {/* Screen */}
                  <div className="w-full h-full bg-[#050505] rounded-lg overflow-hidden border border-white/5 relative flex flex-col">
                    <img 
                      src={`/${caseStudy.id}-tablet.png`}
                      alt="Tablet View"
                      className="w-full h-auto object-cover object-top select-none pointer-events-none scroll-animate"
                      style={{ '--scroll-duration': scrollDurations.tablet } as React.CSSProperties}
                    />
                  </div>
                </div>

                {/* 3. SMARTPHONE MOCKUP */}
                <div className="phone-animate absolute -bottom-2 right-0 sm:right-6 md:right-12 w-[65px] h-[130px] sm:w-[85px] sm:h-[170px] md:w-[100px] md:h-[200px] bg-[#1e2330] rounded-[18px] sm:rounded-[24px] p-1 shadow-[0_20px_40px_rgba(0,0,0,0.8)] border border-white/10 z-30 flex flex-col phone-container">
                  {/* Notch */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-6 sm:w-8 h-1.5 bg-black rounded-full z-40" />
                  
                  {/* Screen */}
                  <div className="w-full h-full bg-[#050505] rounded-[14px] sm:rounded-[20px] overflow-hidden border border-white/5 relative flex flex-col">
                    <img 
                      src={`/${caseStudy.id}-mobile.png`}
                      alt="Mobile View"
                      className="w-full h-auto object-cover object-top select-none pointer-events-none scroll-animate"
                      style={{ '--scroll-duration': scrollDurations.mobile } as React.CSSProperties}
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10 bg-white text-neutral-900 w-full mt-[100vh] border-t border-neutral-100">
        

        <div className="container mx-auto max-w-[1440px] px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* Esquerda: Visão Geral, Desafios, Solução e Resultados */}
            <div className="lg:col-span-8 flex flex-col gap-16 text-left">
              <AnimatedSection options={{ delay: 0.1 }}>
                <h2 className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-6 font-bold">[ Visão Geral ]</h2>
                <h3 className="text-2xl md:text-3xl font-black text-neutral-950 mb-6 tracking-tight leading-tight">{caseStudy.tagline}</h3>
                <p className="text-neutral-600 font-light leading-relaxed text-base md:text-lg pl-5 border-l-2 border-primary/30">
                  {caseStudy.overview}
                </p>
              </AnimatedSection>

              <AnimatedSection options={{ delay: 0.2 }}>
                <h2 className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-6 font-bold">[ O Desafio ]</h2>
                <p className="text-neutral-600 font-light leading-relaxed text-base">
                  {caseStudy.challenge}
                </p>
              </AnimatedSection>

              <AnimatedSection options={{ delay: 0.3 }}>
                <h2 className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-6 font-bold">[ A Solução Lunar ]</h2>
                <p className="text-neutral-600 font-light leading-relaxed text-base mb-12">
                  {caseStudy.solution}
                </p>
              </AnimatedSection>

              {/* Seção Métricas de Performance Técnica */}
              <AnimatedSection options={{ delay: 0.35 }}>
                <h2 className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-6 font-bold">[ Performance Técnica ]</h2>
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
                <h2 className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-8 font-bold">[ Principais Resultados ]</h2>
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
                  <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-8 font-bold">[ Metadados do Projeto ]</h4>
                  
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
                  <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-primary mb-4 font-bold">
                    [ Anatomia da Conversão ]
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
