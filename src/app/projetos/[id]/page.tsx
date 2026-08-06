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
  "snews": {
    id: "snews",
    title: "SNEWS",
    category: "CASE STUDY // WEBSITE INSTITUCIONAL & MULTI-IDIOMA",
    image: "/printsnews.webp",
    liveUrl: "https://snews.tv",
    tags: ["Next.js App Router", "TypeScript", "Tailwind CSS", "next-intl (i18n)", "Prisma", "Framer Motion"],
    client: "Snews Broadcast Solutions",
    year: "2026",
    scope: ["UX/UI Design", "Desenvolvimento Web Multi-idioma", "Design System", "Animações Interativas", "SEO & Performance"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion"],
    tagline: "Website institucional de alta performance para a líder em soluções de broadcast na América Latina.",
    overview: "Projetamos e desenvolvemos a nova presença digital da Snews, estruturando um portal institucional robusto, internacionalizado e de altíssima fidelidade. A plataforma apresenta o ecossistema completo de soluções da marca (Arion, NeoExpress, GCNews, Souv) com navegação fluida, suporte a múltiplos idiomas e carregamento sub-segundo.",
    challenge: "Comunicar a complexidade de um ecossistema com mais de 25 anos de história e múltiplos produtos broadcast em uma experiência web clara, moderna e capaz de converter grandes tomadores de decisão de emissoras de TV e Rádio na América Latina e no mundo.",
    solution: "Construímos um website desacoplado com Next.js App Router, Tailwind CSS e sistema de i18n nativo para suporte fluido em Português, Inglês e Espanhol. Criamos componentes visuais modulares para apresentar cada produto, acompanhados de um blog técnico integrado e estrutura de captura de leads B2B.",
    results: [
      "Apresentação clara e elegante de todo o portfólio de produtos e soluções broadcast da marca.",
      "Arquitetura multi-idioma (PT, EN, ES) com alternância instantânea sem recarregamento de página.",
      "Pontuação exemplar no Google PageSpeed com tempo de resposta e carregamento inicial em milissegundos."
    ],
    showcaseHeroTitle: "Presença Digital de Alta Performance para a Indústria Broadcast",
    performance: {
      speed: { title: "Velocidade", score: "PageSpeed Score: 99/100", description: "Navegação ultra rápida com renderização estática e dinâmica otimizada." },
      tech: { title: "Tecnologia", tech: "Next.js + next-intl", description: "Arquitetura multi-idioma nativa e tipagem estrita em TypeScript." },
      seo: { title: "SEO", status: "Indexação Internacional", description: "Estrutura de dados e meta tags otimizadas para busca global." }
    },
    designSystemText: "Criamos uma linguagem visual corporativa de alto impacto, combinando contraste marcante, tipografia técnica precisa e cards interativos que destacam a imponência da marca no setor de comunicação.",
    designSystemComponents: {
      ctaLabel: "Agendar Demonstração",
      cardTitle: "Ecossistema Broadcast",
      cardDesc: "Apresentação integrada para soluções de TV, Rádio e Mídia Digital.",
      awardTitle: "Broadcast Showcase",
      awardSub: "Website Institucional de Alta Performance"
    }
  },
  "volk": {
    id: "volk",
    title: "VOLK Presenter",
    category: "CASE STUDY // PLATAFORMA WEB & ANIMAÇÕES 60 FPS",
    image: "/printvolk.webp",
    liveUrl: "https://volkpresenter.tv/pt",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion", "i18n Dictionary"],
    client: "VOLK Presenter",
    year: "2026",
    scope: ["UX/UI Design de Alto Padrão", "Engenharia Front-end", "Animações GSAP", "Internacionalização (i18n)", "SEO & Performance"],
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
    tagline: "Experiência web imersiva e responsiva para a plataforma de gráficos e interatividade em tempo real.",
    overview: "Projetamos e desenvolvemos a experiência web do VOLK Presenter, traduzindo o dinamismo e a precisão do software de gráficos ao vivo em uma interface digital premium. O site apresenta os recursos de interatividade em estúdio, telas touchscreen e automação com animações fluidas a 60 FPS e suporte a múltiplos idiomas.",
    challenge: "Transmitir a sensação de velocidade, controle e tecnologia de ponta do produto sem sobrecarregar a navegação do visitante, criando uma apresentação marcante que retenha a atenção de diretores de tecnologia e produtores.",
    solution: "Desenvolvemos o website utilizando Next.js 15 App Router e Tailwind CSS, potencializado por animações com GSAP e Framer Motion. Estruturamos um sistema de dicionários de internacionalização (PT, EN, ES) e componentes de demonstração interativos como acordeões dinâmicos e modais de vídeo em alta definição.",
    results: [
      "Animações e interações refinadas rodando a 60 FPS sem sacrificar a velocidade de carregamento.",
      "Internacionalização completa (Português, Inglês e Espanhol) para expansão no mercado global.",
      "Design System fluido com navegação intuitiva e alta taxa de engajamento dos visitantes."
    ],
    showcaseHeroTitle: "Imersão Visual e Performance para a Nova Era da Mídia",
    performance: {
      speed: { title: "Velocidade", score: "60 FPS Fluidos", description: "Interações em movimento otimizadas sem engasgos de GPU." },
      tech: { title: "Tecnologia", tech: "Next.js 15 + GSAP", description: "Aceleração por hardware e arquitetura de componentes modulares." },
      seo: { title: "Conversão", status: "SEO Otimizado 100/100", description: "Estrutura pronta para captar leads e agendamentos B2B." }
    },
    designSystemText: "Desenvolvemos uma estética editorial moderna com fundos escuros profundos, detalhes em neon e tipografia de alto impacto, garantindo uma leitura clara e marcante em qualquer dispositivo.",
    designSystemComponents: {
      ctaLabel: "Começar a usar o VOLK",
      cardTitle: "Interatividade em Estúdio",
      cardDesc: "Demonstração fluida dos módulos touchscreen e gráficos ao vivo.",
      awardTitle: "Interactive Experience",
      awardSub: "Website de Alta Fidelidade Visual"
    }
  },
  "capi": {
    id: "capi",
    title: "CAPI Digital",
    category: "CASE STUDY // LANDING PAGE & PLATAFORMA EDITORIAL",
    image: "/printcapi.webp",
    liveUrl: "https://capi.digital/pt",
    tags: ["Next.js App Router", "TypeScript", "Tailwind CSS", "next-intl (i18n)", "Shadcn UI", "Framer Motion"],
    client: "CAPI Digital",
    year: "2026",
    scope: ["UX/UI Design", "Estruturação de Copy & Arquitetura", "Engenharia Front-end", "Internacionalização (i18n)", "SEO"],
    stack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "next-intl", "Framer Motion"],
    tagline: "Landing page e plataforma de apresentação para o cérebro operacional de produção de conteúdo com IA.",
    overview: "Criamos a presença digital e a landing page institucional da CAPI Digital. O projeto traduz a proposta inovadora da marca — um ecossistema que centraliza planejamento de pautas, redação colaborativa e distribuição multi-canal assistida por inteligência artificial — em uma navegação limpa, direta e persuasiva.",
    challenge: "Explicar de forma clara e envolvente como o CAPI resolve a fragmentação de ferramentas nas redações e equipes de conteúdo, transformando uma solução técnica complexa em um produto desejável para criadores e gestores.",
    solution: "Construímos uma landing page interativa usando Next.js App Router, Tailwind CSS e next-intl (suporte a Português, Inglês e Espanhol). Desenvolvemos demonstrações visuais do workspace, simuladores de pipeline editorial, tabela comparativa de planos e fluxos de contato otimizados.",
    results: [
      "Comunicação clara e envolvente da proposta de valor e dos benefícios da plataforma CAPI.",
      "Estrutura multi-idioma (PT, EN, ES) com carregamento instantâneo em todas as páginas.",
      "Alta taxa de conversão para solicitação de demonstrações e contratação de planos."
    ],
    showcaseHeroTitle: "Design Estratégico para o Cérebro Operacional de Conteúdo",
    performance: {
      speed: { title: "Velocidade", score: "Render em <0.4s", description: "Carregamento instantâneo de páginas e componentes com Next.js." },
      tech: { title: "Tecnologia", tech: "Next.js + next-intl", description: "Internacionalização nativa e código limpo altamente escalável." },
      seo: { title: "SEO", status: "SEO & Meta Tags 100/100", description: "Estrutura pronta para posicionamento nos mecanismos de busca." }
    },
    designSystemText: "Criamos um visual minimalista e contemporâneo, inspirado nos melhores softwares de produtividade do mundo, com cartões refinados, microinterações sutis e tipografia cristalina.",
    designSystemComponents: {
      ctaLabel: "Começar Agora",
      cardTitle: "Workspace Editorial",
      cardDesc: "Apresentação visual do pipeline de planejamento, produção e publicação.",
      awardTitle: "SaaS Product Showcase",
      awardSub: "Design & Desenvolvimento Web Lunar"
    }
  },
  "adansonea": {
    id: "adansonea",
    title: "Adansonea",
    category: "CASE STUDY // LANDING PAGE & BOUTIQUE PEOPLE ADVISORY",
    image: "/printadansonea.webp",
    liveUrl: "https://www.adansonea.com/",
    tags: ["WordPress", "Elementor Pro", "Plugins Otimizados", "Yoast SEO", "Performance & WPO"],
    client: "Adansonea Leadership Consulting",
    year: "2026",
    scope: ["UX/UI Design", "Desenvolvimento em WordPress", "Configuração Elementor Pro", "SEO & Otimização de Performance"],
    stack: ["WordPress", "Elementor Pro", "Yoast SEO", "WPO Plugins"],
    tagline: "Presença digital refinada em WordPress & Elementor Pro para consultoria internacional de liderança.",
    overview: "Projetamos e desenvolvemos a landing page e a presença digital para a Adansonea, uma consultoria boutique especializada em estratégias de liderança e gestão de pessoas para organizações globais. A plataforma foi construída em WordPress e Elementor Pro com um ecossistema de plugins otimizados, combinando design executivo de alto padrão com autonomia total para a equipe cliente gerenciar seus conteúdos.",
    challenge: "Posicionar a marca Adansonea no mercado internacional com uma interface elegante e sóbria que comunique credibilidade corporativa, utilizando uma arquitetura em WordPress limpa, rápida e de fácil gestão interna.",
    solution: "Desenvolvemos uma estrutura sob medida no WordPress alimentada por Elementor Pro, aplicando técnicas avançadas de WPO (Web Performance Optimization), otimização de imagens, scripts e plugins de SEO para garantir navegação rápida e excelente indexação.",
    results: [
      "Plataforma intuitiva em WordPress permitindo gestão fácil e ágil de conteúdos pela equipe Adansonea.",
      "Design de marca executivo com Elementor Pro focado em conversão de clientes B2B.",
      "Otimização completa de performance e SEO com plugins configurados e alta velocidade no PageSpeed."
    ],
    showcaseHeroTitle: "Design Executive & Autonomia em WordPress com Elementor Pro",
    performance: {
      speed: { title: "Velocidade", score: "WPO & Performance", description: "Navegação fluida com otimização avançada de assets e cache no WordPress." },
      tech: { title: "Tecnologia", tech: "WordPress + Elementor Pro", description: "Gestão de conteúdo intuitiva e flexibilidade com ecossistema de plugins." },
      seo: { title: "SEO", status: "Yoast SEO Otimizado", description: "Meta tags e indexação estruturada para o mercado de liderança internacional." }
    },
    designSystemText: "Desenvolvemos um design system refinado no Elementor Pro com tons corporativos sóbrios, contraste impecável e componentes visuais reutilizáveis para manter a consistência em todas as seções.",
    designSystemComponents: {
      ctaLabel: "Conhecer a Adansonea",
      cardTitle: "People Strategy",
      cardDesc: "Alinhamento de RH e liderança com as metas estratégicas do negócio.",
      awardTitle: "WordPress Showcase",
      awardSub: "Design & Desenvolvimento Web Lunar"
    }
  },
  "acp": {
    id: "acp",
    title: "ACP Tax Advisory",
    category: "CASE STUDY // WEBSITE INSTITUCIONAL & CONSULTORIA FISCAL",
    image: "/printacp.webp",
    liveUrl: "https://acptaxadvisory.com/",
    tags: ["WordPress", "Elementor Pro", "AIOSEO", "Performance & WPO"],
    client: "ACP Tax Advisory LLC",
    year: "2026",
    scope: ["UX/UI Design", "Desenvolvimento em WordPress", "Configuração Elementor Pro", "SEO & Otimização de Performance"],
    stack: ["WordPress", "Elementor Pro", "AIOSEO", "WPO Plugins"],
    tagline: "Website institucional de alta conversão para consultoria norte-americana de planejamento tributário.",
    overview: "Desenvolvemos o novo website institucional da ACP Tax Advisory, uma firma norte-americana de consultoria tributária e planejamento financeiro para empresários. A plataforma desmistifica a complexidade fiscal através de uma linguagem clara, arquitetura visual sóbria e fluxos de agendamento simplificados.",
    challenge: "Transformar tópicos fiscais complexos em uma experiência digital simples, elegante e altamente persuasiva para empresários nos Estados Unidos, garantindo carregamento rápido e otimização para captação de leads.",
    solution: "Criamos um layout corporativo moderno com seções explicativas claras, depoimentos de clientes, calculadoras/simuladores institucionais e formulários integrados para contratação direta de estratégias tributárias.",
    results: [
      "Aumento significativo no tempo de permanência no site e na taxa de conversão para reuniões de diagnóstico.",
      "Comunicação direta e transparente da proposta de valor em consultoria tributária B2B.",
      "Estrutura otimizada para SEO local e nacional nos Estados Unidos com carregamento em sub-segundo."
    ],
    showcaseHeroTitle: "Planejamento Tributário Inteligente & Presença Digital de Confiança",
    performance: {
      speed: { title: "Velocidade", score: "Carregamento Rápido", description: "Otimização completa de recursos para carregamento instantâneo no desktop e mobile." },
      tech: { title: "Tecnologia", tech: "WordPress Otimizado", description: "Arquitetura limpa com segurança e gerenciamento intuitivo de conteúdo." },
      seo: { title: "SEO", status: "Indexação Internacional", description: "Otimização total para mecanismos de busca focados em serviços financeiros e fiscais." }
    },
    designSystemText: "Criamos uma identidade visual sóbria e refinada, alinhando tons azuis marinho profundos a detalhes dourados e tipografia corporativa de altíssima legibilidade.",
    designSystemComponents: {
      ctaLabel: "Get Started Now",
      cardTitle: "Smart Tax Strategy",
      cardDesc: "Soluções e planejamento tributário sem complicação para empresas.",
      awardTitle: "Tax Advisory Showcase",
      awardSub: "Design & Desenvolvimento Web Lunar"
    }
  },
  "osa": {
    id: "osa",
    title: "ÔSA Branding Studio",
    category: "CASE STUDY // LANDING PAGE & BRANDING STUDIO",
    image: "/printosa.webp",
    liveUrl: "https://osabrandingstudio.com/homenew/",
    tags: ["WordPress", "Elementor Pro", "Branding & Design", "Yoast SEO", "Performance WPO"],
    client: "ÔSA Branding Studio",
    year: "2026",
    scope: ["UX/UI Design Editorial", "Desenvolvimento em WordPress", "Configuração Elementor Pro", "Otimização de Performance"],
    stack: ["WordPress", "Elementor Pro", "Yoast SEO", "WPO Plugins"],
    tagline: "Presença digital autoral e landing page conceitual para estúdio europeu de branding.",
    overview: "Projetamos a nova landing page e presença digital da ÔSA Branding Studio, um estúdio criativo especializado em construção de marcas autênticas e posicionamento estratégico. Desenvolvido em WordPress e Elementor Pro, o projeto reflete uma estética editorial arrojada, 'diferente do que estás habituado', com layout de alto impacto visual.",
    challenge: "Traduzir a identidade provocativa e disruptiva do estúdio de branding em uma navegação web marcante, mantendo carregamento rápido e autonomia total de gerenciamento de portfólio no WordPress.",
    solution: "Construímos uma landing page dinâmica no WordPress utilizando Elementor Pro e plugins de otimização de performance, aplicando tipografia marcante, espaçamentos generosos, microinterações e vitrine de projetos.",
    results: [
      "Posicionamento de marca forte e diferencial competitivo no mercado de design europeu.",
      "Plataforma intuitiva em WordPress para publicação ágil de novos cases de branding.",
      "Excelente velocidade de carregamento com recursos gráficos otimizados."
    ],
    showcaseHeroTitle: "Design Conceitual & Identidade Provocativa para Estúdio de Branding",
    performance: {
      speed: { title: "Velocidade", score: "WPO & Fluid Performance", description: "Imagens e assets visuais otimizados sem perda de qualidade conceitual." },
      tech: { title: "Tecnologia", tech: "WordPress + Elementor Pro", description: "Autonomia de edição com estrutura modular e limpa." },
      seo: { title: "SEO", status: "Yoast SEO", description: "Otimização focada no nicho de branding, design e consultoria criativa." }
    },
    designSystemText: "Desenvolvemos uma estética visual editorial com forte contraste, tipografia de grande porte e cartões de projeto minimalistas que deixam o portfólio em destaque.",
    designSystemComponents: {
      ctaLabel: "Ver Portfólio",
      cardTitle: "Brand Strategy",
      cardDesc: "Técnicas criativas e conceituais para criação de estratégias de marca.",
      awardTitle: "Design Studio Showcase",
      awardSub: "Design & Desenvolvimento Web Lunar"
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

            {/* Mockup Centralizado Slim & Botão Acessar Projeto */}
            <div className="w-full relative flex flex-col items-center justify-center pt-4 pb-12">
              <VolkHeroShowcase desktopImage={caseStudy.image} />

              {/* Botão Acessar Projeto Abaixo do Mockup */}
              {caseStudy.liveUrl && (
                <AnimatedSection options={{ delay: 0.2 }} className="mt-10 z-30">
                  <a
                    href={caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-3.5 text-xs font-bold tracking-widest uppercase rounded-full bg-primary text-white hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg group"
                  >
                    <span>Acessar Projeto</span>
                    <ExternalLink className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </AnimatedSection>
              )}
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
                  <div className="bg-white/80 backdrop-blur-xl border border-neutral-200/80 p-6 rounded-2xl flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-xl text-left relative overflow-hidden group">
                    <div className="absolute top-0 right-0 -mt-6 -mr-6 w-16 h-16 bg-emerald-500/10 rounded-full blur-md group-hover:bg-emerald-500/20 transition-colors" />
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 mb-4 font-mono text-[10px] font-bold">
                        98%
                      </div>
                      <h4 className="text-neutral-900 font-bold text-sm mb-1.5">{caseStudy.performance.speed.title}</h4>
                      <p className="text-primary font-mono text-xs font-semibold mb-2">{caseStudy.performance.speed.score}</p>
                    </div>
                    <p className="text-neutral-600 text-xs font-light leading-relaxed">
                      {caseStudy.performance.speed.description}
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
                      <h4 className="text-neutral-900 font-bold text-sm mb-1.5">{caseStudy.performance.tech.title}</h4>
                      <p className="text-primary font-mono text-xs font-semibold mb-2">{caseStudy.performance.tech.tech}</p>
                    </div>
                    <p className="text-neutral-600 text-xs font-light leading-relaxed">
                      {caseStudy.performance.tech.description}
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
                      <h4 className="text-neutral-900 font-bold text-sm mb-1.5">{caseStudy.performance.seo.title}</h4>
                      <p className="text-primary font-mono text-xs font-semibold mb-2">{caseStudy.performance.seo.status}</p>
                    </div>
                    <p className="text-neutral-600 text-xs font-light leading-relaxed">
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
