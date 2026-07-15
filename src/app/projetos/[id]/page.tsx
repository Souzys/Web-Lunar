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

        <div className="h-[calc(50vh-80px)] w-full flex flex-col justify-center relative z-10 text-left">
          <div className="container mx-auto px-6 max-w-[1440px]">
            <AnimatedSection>
              <div className="mb-6">
                <Link href="/projetos" className="inline-flex items-center gap-2 text-primary hover:text-blue-400 font-semibold text-xs uppercase tracking-widest font-mono">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Voltar para Projetos</span>
                </Link>
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold block mb-4">// {caseStudy.category}</span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">
                {caseStudy.title}
              </h1>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10 bg-white text-neutral-900 w-full mt-[50vh] border-t border-neutral-100">
        
        {/* Showcase Responsivo (Monitor + Smartphone Mockup) */}
        <div className="w-full min-h-[480px] sm:min-h-[550px] md:min-h-[620px] bg-[#07090e] bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:32px_32px] border-b border-neutral-100 relative flex items-center justify-center overflow-hidden py-12 select-none">
          <style>{`
            @keyframes float-monitor {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
            }
            @keyframes float-phone {
              0%, 100% { transform: translateY(0px) translateX(0px); }
              50% { transform: translateY(-12px) translateX(2px); }
            }
            @keyframes pulse-glow {
              0%, 100% { transform: scale(1); opacity: 0.5; }
              50% { transform: scale(1.05); opacity: 0.8; }
            }
            .monitor-animate {
              animation: float-monitor 8s ease-in-out infinite;
            }
            .phone-animate {
              animation: float-phone 8s ease-in-out infinite;
              animation-delay: 1.5s;
            }
            .glow-pulse {
              animation: pulse-glow 4s ease-in-out infinite;
            }
          `}</style>

          {/* Background Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[100px] pointer-events-none" />

          {/* Interactive Showcase Area */}
          <div className="relative flex flex-col items-center w-full max-w-[900px] px-6">
            
            {/* 1. MONITOR MOCKUP */}
            <div className="monitor-animate w-[320px] h-[200px] sm:w-[480px] sm:h-[300px] md:w-[620px] md:h-[380px] bg-[#1e2330] rounded-2xl p-2 sm:p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 flex flex-col relative">
              {/* Screen */}
              <div className="w-full h-full bg-[#050505] rounded-lg overflow-hidden border border-white/5 flex flex-col relative text-white font-sans">
                {/* Mock Navbar */}
                <div className="w-full h-5 sm:h-8 border-b border-white/5 px-3 flex items-center justify-between bg-[#0a0d14]/80 backdrop-blur-sm relative z-20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-[7px] sm:text-[9px] font-mono tracking-widest text-white/60">LUNAR</span>
                  </div>
                  <div className="flex gap-2.5">
                    <span className="w-4 h-1 rounded-full bg-white/10" />
                    <span className="w-4 h-1 rounded-full bg-white/10" />
                    <span className="w-4 h-1 rounded-full bg-white/10" />
                  </div>
                </div>

                {/* Mock Content */}
                <div className="flex-1 flex flex-col justify-center items-center p-4 relative z-10 text-center select-none">
                  {/* Subtle abstract grid background on screen */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                  <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-primary/10 blur-xl glow-pulse" />
                  <div className="absolute -bottom-16 -right-16 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl" />

                  {/* Hero Title */}
                  <h4 className="font-display text-[10px] sm:text-xs font-mono uppercase tracking-widest text-primary/80 mb-1.5 sm:mb-3">
                    [ Showcase Responsivo ]
                  </h4>
                  <h2 className="font-display text-sm sm:text-2xl md:text-3xl font-bold leading-tight tracking-tight max-w-[400px] mb-2 sm:mb-4">
                    {caseStudy.showcaseHeroTitle}
                  </h2>
                  <p className="text-[8px] sm:text-xs text-neutral-400 font-light leading-relaxed max-w-[280px] mb-3 sm:mb-6">
                    Design premium e performance absoluta desenvolvidos sob medida.
                  </p>

                  {/* CTA button inside screen */}
                  <div className="px-3.5 py-1.5 text-[7px] sm:text-[10px] font-bold tracking-widest uppercase rounded-full bg-primary text-white shadow-[0_0_15px_rgba(29,77,255,0.4)] flex items-center gap-1">
                    <span>Acessar Projeto</span>
                    <svg className="w-2 h-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>

                {/* Interactive cursor pointer visual */}
                <div className="absolute bottom-6 left-1/3 w-3 h-3 rounded-full bg-white/10 border border-white/20 animate-ping z-20" />
                <div className="absolute bottom-6 left-1/3 w-1.5 h-1.5 rounded-full bg-white z-20" />
              </div>

              {/* Base stand */}
              <div className="absolute -bottom-7 sm:-bottom-10 left-1/2 -translate-x-1/2 w-14 sm:w-20 h-7 sm:h-10 bg-[#161a24] border-x border-b border-white/10 shadow-md z-0" />
              <div className="absolute -bottom-8 sm:-bottom-11 left-1/2 -translate-x-1/2 w-28 sm:w-40 h-1 sm:h-2 bg-[#1e2330] rounded-full shadow-md border border-white/10 z-0" />
            </div>

            {/* 2. SMARTPHONE MOCKUP */}
            <div className="phone-animate absolute -bottom-4 right-1/4 translate-x-20 sm:translate-x-32 md:translate-x-44 w-[85px] h-[170px] sm:w-[115px] sm:h-[230px] md:w-[130px] md:h-[260px] bg-[#1e2330] rounded-[24px] sm:rounded-[32px] p-1.5 sm:p-2 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 z-30 flex flex-col">
              {/* Dynamic Island / Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-2 sm:h-3 bg-black rounded-full z-40" />
              
              {/* Screen */}
              <div className="w-full h-full bg-[#050505] rounded-[18px] sm:rounded-[26px] overflow-hidden border border-white/5 relative flex flex-col justify-between p-2.5 sm:p-4 text-white font-sans text-left">
                {/* Header */}
                <div className="flex justify-between items-center w-full relative z-20">
                  <span className="text-[5px] sm:text-[7px] font-mono tracking-widest text-white/50">LUNAR</span>
                  <div className="flex gap-0.5 sm:gap-1">
                    <span className="w-1.5 h-0.5 rounded-full bg-white/20" />
                    <span className="w-1.5 h-0.5 rounded-full bg-white/20" />
                  </div>
                </div>

                {/* Mobile Mock Content */}
                <div className="flex-1 flex flex-col justify-center items-start relative z-10 py-1.5 select-none">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
                  
                  <h2 className="font-display text-[7px] sm:text-[11px] font-bold leading-tight tracking-tight mb-1 sm:mb-2 text-left w-full break-words">
                    {caseStudy.showcaseHeroTitle}
                  </h2>
                  <p className="text-[5px] sm:text-[8px] text-neutral-400 font-light leading-relaxed max-w-[80px] mb-2 sm:mb-3">
                    Experiência tátil e design responsivo.
                  </p>
                  
                  <div className="px-2 py-0.5 sm:py-1 text-[5px] sm:text-[7px] font-bold tracking-widest uppercase rounded-full bg-primary text-white">
                    Ver site
                  </div>
                </div>

                {/* Footer bar */}
                <div className="w-8 sm:w-12 h-0.5 sm:h-1 bg-white/20 rounded-full mx-auto relative z-20" />
              </div>
            </div>

          </div>
        </div>

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
