'use client';

import React, { useEffect, useRef } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { IdeaToCodeAnimation } from '@/components/ui/IdeaToCodeAnimation';
import { siteContent } from '@/content';
import gsap from 'gsap';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export function Hero() {
  const { hero } = siteContent;
  const { t } = useLanguage();
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
      case 'github':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
          </svg>
        );
      case 'whatsapp':
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.861-1.868-4.339-2.897-6.97-2.899-5.443 0-9.87 4.372-9.875 9.8.001 1.77.476 3.5 1.379 5.017l-.988 3.598 3.675-.952zm11.458-6.666c-.301-.15-1.785-.88-2.062-.98-.277-.1-.478-.15-.678.15-.2.3-.778.98-.953 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.084-.176-.3-.019-.462.132-.611.135-.134.301-.35.452-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.93-2.245-.245-.59-.496-.51-.678-.52-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.512s1.08 2.916 1.23 3.116c.15.2 2.126 3.246 5.15 4.553.719.31 1.28.496 1.717.636.722.23 1.38.197 1.901.12.58-.087 1.785-.73 2.036-1.436.251-.706.251-1.314.176-1.436-.076-.123-.277-.2-.577-.35z" />
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
    <section id="home" ref={heroRef} className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-between pt-28 pb-16 md:pt-32 md:pb-0 bg-bg text-text overflow-hidden">
      {/* Awwwards Style Abstract Noise & Glow Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep blue radial glow (Desktop only mouse tracking) */}
        <div 
          ref={glowRef}
          className="absolute w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 mix-blend-screen pointer-events-none hidden md:block"
          style={{
            left: 0,
            top: 0,
            willChange: 'transform',
          }}
        />
        {/* Mobile static lightweight glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-primary/20 rounded-full blur-[60px] pointer-events-none md:hidden" />
      </div>

      <div className="relative z-10 container mx-auto max-w-[1440px] px-6 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mt-4 md:mt-0">
        
        {/* Coluna da Esquerda: Textos e CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">
          {/* Badge */}
          <AnimatedSection options={{ delay: 0.1, y: 20 }} className="w-full flex justify-center sm:justify-start">
            <div className="inline-flex items-center justify-center text-center gap-2 sm:gap-2.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-6 sm:mb-8 max-w-full">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse shrink-0 shadow-[0_0_8px_rgba(29,77,255,0.6)]" />
              <span className="text-[10px] sm:text-xs font-sans uppercase tracking-wider sm:tracking-widest text-primary font-semibold text-center leading-normal">{t.hero.subtitle}</span>
            </div>
          </AnimatedSection>

          {/* Massive Headline */}
          <AnimatedSection options={{ delay: 0.2, y: 40 }} className="w-full text-center sm:text-left">
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-[5vw] lg:text-[4vw] xl:text-[4.5vw] leading-[1.1] tracking-tighter mb-4 text-center sm:text-left">
              <span className="text-white/95">{t.hero.title1} </span>
              <span className="inline-block sm:pr-4 pb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">{t.hero.title2}</span>
            </h1>
          </AnimatedSection>

          {/* Description & CTAs */}
          <AnimatedSection options={{ delay: 0.4, y: 40 }} className="w-full flex flex-col items-start gap-10 mt-2">
            <p className="text-base md:text-lg lg:text-xl text-white font-light leading-relaxed max-w-2xl">
              {t.hero.bottomText}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link href="/contato" className="w-full sm:w-auto">
                <PrimaryButton className="w-full bg-primary hover:bg-primary-hover text-white px-8 py-4 text-sm tracking-widest rounded-full transition-transform hover:scale-105 active:scale-95">
                  {t.hero.ctaButton}
                </PrimaryButton>
              </Link>
              <Link href="/projetos" className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-transparent hover:bg-white/5 transition-all text-sm font-medium tracking-widest uppercase">
                {t.hero.projectsButton}
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Coluna da Direita: Animação SVG Interativa */}
        <div className="hidden lg:flex lg:col-span-5 items-center justify-center lg:justify-end w-full">
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
