'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hero } from './Hero';
import { IndustryCircles } from './IndustryCircles';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function IntroSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Pinning slider ativado apenas no Desktop (>= 768px)
    if (window.innerWidth < 768) return;

    const container = containerRef.current;
    const hero = heroRef.current;
    const about = aboutRef.current;
    if (!container || !hero || !about) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        }
      });

      // 1. Hero 1 (Design & Código) sai de cena de forma limpa (0s -> 0.7s)
      tl.to(hero, {
        opacity: 0,
        scale: 0.96,
        y: -40,
        duration: 0.7,
        ease: 'power2.inOut',
        onUpdate: function() {
          if (hero) {
            hero.style.pointerEvents = this.progress() > 0.5 ? 'none' : 'auto';
          }
        }
      }, 0);

      // 2. Hero 2 (IndustryCircles / Sobre Nós) entra límpido e ganha foco total (0.5s -> 1.3s)
      tl.fromTo(about,
        { opacity: 0, scale: 1.04, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
        0.5
      );

      // 3. PAUSA DE LEITURA COMPLETA (1.3s -> 2.6s):
      // Mantém a seção Sobre Nós e os números (50+, 4+, 100%, 30+) 100% visíveis e estáveis
      // antes do Portfólio (Nosso Trabalho) subir naturalmente.
      tl.to(about, {
        opacity: 1,
        duration: 1.3,
      }, 1.3);
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* LAYOUT MOBILE: Sequencial, sem sobreposição de textos nem corte de números */}
      <div className="block md:hidden bg-bg w-full">
        <Hero />
        <div className="border-t border-white/10">
          <IndustryCircles />
        </div>
      </div>

      {/* LAYOUT DESKTOP: Pinned slider com tempo dedicado para Hero 1 e Sobre Nós */}
      <div ref={containerRef} className="hidden md:block relative w-full h-[320vh] -mb-[100vh] bg-bg z-0">
        <div className="sticky top-0 w-full h-screen overflow-hidden">
          <div ref={heroRef} className="absolute inset-0 w-full h-full z-10 flex flex-col justify-between will-change-[transform,opacity]">
            <Hero />
          </div>
          <div ref={aboutRef} className="absolute inset-0 w-full h-full z-0 opacity-0 flex flex-col justify-center will-change-[transform,opacity]">
            <IndustryCircles />
          </div>
        </div>
      </div>
    </>
  );
}
