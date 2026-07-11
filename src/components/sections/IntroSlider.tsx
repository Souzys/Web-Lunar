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
    const container = containerRef.current;
    const hero = heroRef.current;
    const about = aboutRef.current;
    if (!container || !hero || !about) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom', // Scrubs over the 200vh height
          scrub: true,
        }
      });

      // Efeito de desaparecer no Hero (0 a 1)
      tl.to(hero, {
        opacity: 0,
        scale: 0.95,
        y: -30,
        duration: 1,
        ease: 'power1.inOut',
      }, 0);

      // Efeito de surgir no About (IndustryCircles) (0 a 1)
      tl.fromTo(about,
        { opacity: 0, scale: 1.05, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: 'power1.inOut',
        },
        0 
      );

      // Estende a timeline para durar o dobro (t=1 até t=2)
      // Isso garante que a animação termine na primeira metade do scroll (100vh),
      // e na segunda metade (100vh a 200vh) a section se mantém fixa enquanto a próxima desliza por cima.
      tl.to(about, {
        opacity: 1,
        duration: 1,
      }, 1);
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] -mb-[100vh] bg-bg z-0">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <div ref={heroRef} className="absolute inset-0 w-full h-full z-10 flex flex-col justify-between will-change-[transform,opacity]">
          <Hero />
        </div>
        <div ref={aboutRef} className="absolute inset-0 w-full h-full z-0 opacity-0 flex flex-col justify-center will-change-[transform,opacity]">
          <IndustryCircles />
        </div>
      </div>
    </div>
  );
}
