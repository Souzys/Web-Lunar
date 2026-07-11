'use client';

import React, { useEffect, useRef } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { IdeaToCodeAnimation } from '@/components/ui/IdeaToCodeAnimation';
import { siteContent } from '@/content';
import gsap from 'gsap';

export function Hero() {
  const { hero } = siteContent;
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = heroRef.current;
    const glow = glowRef.current;
    if (!container || !glow) return;

    gsap.set(glow, {
      x: typeof window !== 'undefined' ? window.innerWidth / 2 - 400 : 0,
      y: typeof window !== 'undefined' ? window.innerHeight / 4 - 400 : 0,
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - 400;
      const y = e.clientY - rect.top - 400;

      gsap.to(glow, {
        x: x,
        y: y,
        duration: 1.5,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'instagram':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c-0.761 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case 'twitter x':
      case 'twitter':
      case 'x':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex flex-col justify-between pt-32 bg-bg text-text overflow-hidden">
      {/* Awwwards Style Abstract Noise & Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep blue radial glow */}
        <div 
          ref={glowRef}
          className="absolute w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none"
          style={{
            left: 0,
            top: 0,
            willChange: 'transform',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-12 md:mt-0">
        
        {/* Coluna da Esquerda: Textos e CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">
          {/* Badge */}
          <AnimatedSection options={{ delay: 0.1, y: 20 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-text-muted">{hero.subtitle}</span>
            </div>
          </AnimatedSection>

          {/* Massive Headline */}
          <AnimatedSection options={{ delay: 0.2, y: 40 }} className="w-full">
            <h1 className="font-display font-bold text-[7.5vw] md:text-[5vw] lg:text-[4vw] xl:text-[4.5vw] leading-[1.1] tracking-tighter mb-4">
              <span className="text-white/95">{hero.title1} </span>
              <span className="inline-block pr-4 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">{hero.title2}</span>
            </h1>
          </AnimatedSection>

          {/* Description & CTAs */}
          <AnimatedSection options={{ delay: 0.4, y: 40 }} className="w-full flex flex-col items-start gap-10 mt-2">
            <p className="text-base md:text-lg lg:text-xl text-text-muted font-light leading-relaxed max-w-2xl">
              {hero.bottomText || "Estratégia, design premium e engenharia de software para marcas que querem liderar o mercado."}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <PrimaryButton className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-8 py-4 text-sm tracking-widest rounded-full transition-transform hover:scale-105 active:scale-95">
                {hero.ctaBox.buttonText}
              </PrimaryButton>
              <a href="#work" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-transparent hover:bg-white/5 transition-all text-sm font-medium tracking-widest uppercase">
                Ver Projetos
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Coluna da Direita: Animação SVG Interativa */}
        <div className="lg:col-span-5 flex items-center justify-center lg:justify-end w-full">
          <AnimatedSection options={{ delay: 0.5 }} className="w-full flex justify-center lg:justify-end">
            <IdeaToCodeAnimation />
          </AnimatedSection>
        </div>

      </div>

      {/* Social Links Footer Line */}
      <div className="relative z-10 w-full border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-6 py-6 mt-20 bg-bg/50 backdrop-blur-md">
        <div className="text-xs font-mono text-text-muted tracking-widest uppercase hidden md:block">
          BASEADO NO BRASIL / ATENDENDO GLOBALMENTE
        </div>
        
        <div className="flex items-center gap-8 justify-center md:justify-end w-full md:w-auto">
          {hero.socialButtons.map((social) => (
            <a
              key={social.name}
              href={social.url}
              className="text-text-muted hover:text-white transition-colors hover:scale-110 transform duration-300"
              aria-label={social.name}
            >
              {getSocialIcon(social.name)}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
