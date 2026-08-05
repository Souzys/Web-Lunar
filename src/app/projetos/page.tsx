'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { trpc } from '@/utils/trpc';
import { ExternalLink, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import Link from 'next/link';

interface LocalProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
}

const DEFAULT_PROJECTS: LocalProject[] = [
  {
    id: "snews",
    title: "SNEWS",
    description: "Website institucional de alta performance e internacionalizado para a líder em soluções tecnológicas de broadcast.",
    category: "Site Institucional",
    image: "/printsnews.webp",
    liveUrl: "https://snews.tv",
    tags: ["Next.js App Router", "TypeScript", "next-intl (i18n)"],
  },
  {
    id: "volk",
    title: "VOLK Presenter",
    description: "Experiência web imersiva com animações fluidas para a plataforma de gráficos e interatividade em tempo real.",
    category: "Experiência Web",
    image: "/printvolk.webp",
    liveUrl: "https://volkpresenter.tv/pt",
    tags: ["Next.js 15", "GSAP", "Framer Motion"],
  },
  {
    id: "capi",
    title: "CAPI Digital",
    description: "Landing page e plataforma de apresentação para o cérebro operacional de produção de conteúdo assistido por IA.",
    category: "Experiência Web",
    image: "/printcapi.webp",
    liveUrl: "https://capi.digital/pt",
    tags: ["Next.js", "AI Integration", "Tailwind CSS"],
  },
];

const CATEGORIES = ["Todos", "Experiência Web", "Site Institucional", "Landing Page", "Interfaces SaaS", "Identidade Visual", "E-commerce"];

export default function ProjetosPage() {
  useLenis();
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Consulta ao banco ignorada por enquanto, mantendo apenas os dados estáticos locais (VOLK e CAPI)
  const dbProjects = undefined;
  const isLoading = false;

  const projects: LocalProject[] = DEFAULT_PROJECTS;

  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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

  return (
    <div className="bg-bg text-text min-h-screen font-sans selection:bg-primary selection:text-white">
      {/* Hero / background glow */}
      <div ref={heroRef} className="fixed top-0 left-0 h-screen w-full z-0 overflow-hidden pt-20 bg-bg">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            ref={glowRef}
            className="absolute w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none"
            style={{ left: 0, top: 0, willChange: 'transform' }}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="h-[calc(50vh-80px)] w-full flex flex-col items-center justify-center relative z-10 text-center">
          <div className="container mx-auto px-6 max-w-[1440px]">
            <AnimatedSection>
              <div className="flex items-center justify-center gap-2.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(29,77,255,0.4)]" />
                <span className="text-xs font-sans uppercase tracking-widest text-primary font-semibold">
                  Nosso Portfólio
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">
                Galeria de Projetos
              </h1>
              <p className="text-base md:text-lg text-white font-light leading-relaxed max-w-xl mx-auto pl-5 border-l-2 md:border-l-0 md:border-t border-primary/30 pt-4 text-balance">
                Estudos de caso, plataformas SaaS e soluções digitais sob medida, desenvolvidas com o mais alto rigor técnico e visual.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10 bg-white text-neutral-900 w-full mt-[50vh] border-t border-neutral-100">
        <div className="container mx-auto max-w-[1440px] px-6 py-24">
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2.5 mb-16 w-full">
            <AnimatedSection options={{ delay: 0.1 }} className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-neutral-950 text-white font-semibold shadow-md"
                      : "text-neutral-500 hover:text-neutral-950 border border-neutral-200 hover:border-neutral-350 bg-neutral-50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </AnimatedSection>
          </div>

          {/* Grid of Projects */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <span className="text-sm text-neutral-500 font-mono">Escaneando portfólio...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredProjects.map((project, i) => (
                <AnimatedSection key={project.id} options={{ delay: i * 0.1 }} className="group flex flex-col justify-between">
                  <div>
                    {/* Thumbnail */}
                    <Link href={`/projetos/${project.id}`} className="block">
                      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#080b12] rounded-2xl mb-6 border border-neutral-200/60 group-hover:shadow-md transition-all duration-300">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="object-cover object-top w-full h-full group-hover:scale-102 transition-transform duration-500 ease-out"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-black/60 border border-white/10 text-white backdrop-blur-sm">
                          {project.category}
                        </div>
                      </div>
                    </Link>

                    {/* Details */}
                    <Link href={`/projetos/${project.id}`} className="block group-hover:text-primary transition-colors text-left mb-2">
                      <h3 className="text-xl md:text-2xl font-black tracking-tight text-neutral-950">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-sm text-neutral-500 leading-relaxed font-light mb-6 text-left">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 justify-start">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded text-[10px] font-mono bg-neutral-50 border border-neutral-200 text-neutral-500 uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6 pt-4 border-t border-neutral-100 justify-start">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-primary hover:text-blue-700 transition-colors font-semibold"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Projeto Online</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-950 transition-colors font-medium"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                          </svg>
                          <span>Código Fonte</span>
                        </a>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
