'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  /** Tag HTML a ser renderizada, padrão p */
  as?: 'p' | 'h2' | 'h3' | 'span' | 'div';
  /** Velocidade do scrub (1 = sincronizado, maior = mais lento) */
  scrub?: number;
  /** Variante de cor: dark (texto branco) ou light (texto escuro) */
  variant?: 'light' | 'dark';
}

export function ScrollRevealText({
  text,
  className = '',
  as: Tag = 'p',
  scrub = 1.5,
  variant = 'dark',
}: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isLight = variant === 'light';

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll<HTMLSpanElement>('[data-word]');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        { color: isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)' },
        {
          color: isLight ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)',
          stagger: 0.05,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 45%',
            scrub,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [scrub, isLight]);

  const words = text.split(/\s+/).filter(Boolean);

  return (
    // @ts-ignore — dynamic tag
    <Tag ref={containerRef} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          data-word
          style={{ 
            color: isLight ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)', 
            display: 'inline' 
          }}
        >
          {word}
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  );
}
