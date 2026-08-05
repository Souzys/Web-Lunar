'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '@/content';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const CATEGORIES = ['Todos', 'Experiência Web', 'Site Institucional', 'Landing Page', 'Interfaces SaaS', 'Identidade Visual', 'E-commerce'];

type Project = (typeof siteContent.portfolio.projects)[0];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(card,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: card, start: 'top 88%', once: true },
          delay: (index % 3) * 0.12,
        }
      );
    }, card);
    return () => ctx.revert();
  }, [index]);

  const handleEnter = () => {
    setHovered(true);
    if (imgRef.current) gsap.to(imgRef.current, { scale: 1.08, duration: 0.6, ease: 'power2.out' });
    if (overlayRef.current) gsap.to(overlayRef.current, { opacity: 1, duration: 0.35, ease: 'power2.out' });
  };

  const handleLeave = () => {
    setHovered(false);
    if (imgRef.current) gsap.to(imgRef.current, { scale: 1, duration: 0.6, ease: 'power2.out' });
    if (overlayRef.current) gsap.to(overlayRef.current, { opacity: 0, duration: 0.35, ease: 'power2.out' });
  };

  const projectUrl = `/projetos/${project.id || (project.name.toLowerCase().includes('volk') ? 'volk' : 'capi')}`;

  return (
    <Link
      ref={cardRef as any}
      href={projectUrl}
      className="group relative cursor-pointer col-span-1 block"
      style={{ opacity: 0 }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden rounded-xl border border-black/5 bg-[#080b12] shadow-sm aspect-[1902/885]">
        <img
          ref={imgRef}
          src={project.image}
          alt={project.name}
          width={800}
          height={450}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top"
          style={{ transformOrigin: 'top center', willChange: 'transform' }}
        />

        {/* Hover overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-primary/20 backdrop-blur-[2px] opacity-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
        >
          <span className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-300">
            <ArrowUpRight className="w-6 h-6" />
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-sans font-bold text-xl md:text-2xl text-neutral-900 group-hover:text-primary transition-colors duration-200 tracking-tight">
            {project.name}
          </h3>
          <span className="text-xs font-sans uppercase font-bold tracking-wider text-neutral-500">
            {project.category}
          </span>
        </div>
        <span
          className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-widest transition-all duration-200 bg-black/5 px-3 py-1 rounded-full text-neutral-600"
          style={{ 
            color: hovered ? '#1D4DFF' : '#555', 
            opacity: hovered ? 1 : 0, 
            borderColor: hovered ? '#1D4DFF' : 'transparent', 
            borderWidth: 1,
            background: hovered ? 'transparent' : 'rgba(0,0,0,0.05)'
          }}
        >
          {t.portfolio.verCase} <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  );
}

export function Portfolio() {
  const { portfolio } = siteContent;
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('Todos');
  const headerRef = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === 'Todos'
    ? portfolio.projects
    : portfolio.projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section id="project" className="bg-[#FAFAFA] text-neutral-900 py-10 relative z-10 border-t border-black/5 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      {/* ── Header ── */}
      <div ref={headerRef} className="container mx-auto px-6 pt-16 pb-6 max-w-[1440px]" style={{ opacity: 0 }}>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
          <div>
            <div className="mb-6">
              <span className="text-primary font-sans text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-semibold">
                {t.portfolio.tag}
              </span>
            </div>
            <h2 className="font-sans text-5xl md:text-7xl font-bold tracking-tight leading-none text-neutral-900">
              {t.portfolio.title}
            </h2>
          </div>
          <Link
            href="/projetos"
            className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest border border-black/10 px-6 py-4 hover:bg-black hover:text-white transition-all duration-300 self-start md:self-auto rounded-full text-neutral-900"
          >
            {t.portfolio.viewAll} <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* ── Category Filters ── */}
        <div className="flex flex-wrap justify-between gap-y-3 pb-8 border-b border-black/5 w-full">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 text-xs font-sans font-bold uppercase tracking-wider rounded-full transition-all duration-300 ease-out border hover:scale-105 active:scale-95 ${
                activeFilter === cat
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-black/[0.03] text-neutral-500 border-black/5 hover:bg-black/[0.08] hover:text-neutral-900 hover:border-black/10 hover:shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Strict 3-Column Grid ── */}
      <div className="container mx-auto px-6 pb-12 max-w-[1440px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-8">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-16 pt-10 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-neutral-800 text-lg md:text-xl max-w-xl font-medium leading-relaxed">
            Quer ver o processo criativo por trás de cada projeto? Cada case inclui estratégia, wireframes e resultados reais.
          </p>
          <Link
            href="/contato"
            className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 text-sm font-mono uppercase tracking-widest hover:bg-primary-hover transition-all duration-300 rounded-full shadow-lg hover:shadow-xl"
          >
            Iniciar um Projeto
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
