'use client';

import React, { useEffect, useRef } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { trpc } from '@/utils/trpc';
import { ArrowLeft, ExternalLink, Loader2, Calendar, CheckCircle2, User, Globe, Tag } from 'lucide-react';
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
    overview: "Desenvolvimento de uma plataforma interativa de alto desempenho para transmissão de TV e eventos ao vivo. A VOLK precisava de um painel de controle que permitisse atualizar e sincronizar elementos gráficos tridimensionais e estatísticas na tela de transmissão em tempo real, sem qualquer latência perceptível.",
    challenge: "O maior desafio foi garantir a transmissão e renderização de dados instantaneamente na tela dos espectadores. A interface precisava manter taxas de atualização elevadas (60 FPS) e processar dezenas de atualizações por segundo de interações da audiência, sem causar travamentos.",
    solution: "Construímos uma infraestrutura robusta utilizando WebSockets com Next.js e React no front-end para sincronização instantânea. Utilizamos GSAP para animações fluidas de gráficos na tela e otimizamos o processamento de eventos na interface para manter o desempenho estável.",
    results: [
      "Sincronização de gráficos e interações em tempo real com latência inferior a 100ms.",
      "Suporte estável a milhares de interações simultâneas de espectadores durante transmissões ao vivo.",
      "Melhoria expressiva na experiência do usuário e dinamismo visual nas transmissões."
    ]
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
    ]
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
        
        {/* Fullwidth Project Image banner */}
        <div className="w-full h-[400px] md:h-[500px] overflow-hidden border-b border-neutral-100 relative">
          <div className="absolute inset-0 bg-neutral-950/20 z-10 pointer-events-none" />
          <img src={caseStudy.image} alt={caseStudy.title} className="w-full h-full object-cover" />
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
                <p className="text-neutral-600 font-light leading-relaxed text-base">
                  {caseStudy.solution}
                </p>
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
      </div>
    </div>
  );
}
