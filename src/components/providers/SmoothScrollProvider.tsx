'use client';

import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
}

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // 1. Instância Única Global do Lenis integrada ao GSAP Ticker
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      syncTouch: false,
    });

    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    // Intercepta cliques em âncoras e links internos
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href) return;

      // Link de âncora local (#secao)
      if (href.startsWith('#')) {
        if (href === '#') {
          e.preventDefault();
          return;
        }
        const el = document.querySelector(href);
        if (el && lenisRef.current) {
          e.preventDefault();
          lenisRef.current.scrollTo(el as HTMLElement, { offset: 0, duration: 1.0 });
          if (window.history.pushState) {
            window.history.pushState(null, '', href);
          }
        }
        return;
      }

      // Link interno para outra página: cancela imediatamente a inércia/momentum do scroll
      if (href.startsWith('/') && !href.startsWith('//') && !href.includes('#')) {
        if (lenisRef.current) {
          lenisRef.current.stop();
        }
      }
    };

    document.addEventListener('click', handleAnchorClick, { capture: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick, { capture: true });
      delete (window as any).lenis;
      lenis.destroy();
      lenisRef.current = null;
      gsap.ticker.remove(updateRaf);
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, []);

  // 2. Reset imediato de scroll para o topo em TODA mudança de rota (pathname)
  useEffect(() => {
    const resetScrollToTop = () => {
      // Se houver hash na URL (ex: #contact), rola para a seção
      const hash = window.location.hash;
      if (hash && hash !== '#') {
        const el = document.querySelector(hash);
        if (el && lenisRef.current) {
          lenisRef.current.scrollTo(el as HTMLElement, { offset: 0, duration: 0.8 });
          return;
        }
      }

      // Para qualquer movimento anterior e define a posição no topo imediatamente
      if (lenisRef.current) {
        lenisRef.current.stop();
        lenisRef.current.scrollTo(0, { immediate: true });
        lenisRef.current.start();
      }

      // Força o scroll nativo do navegador para o topo absoluto
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      // Reforço no frame de renderização seguinte
      const rafId = requestAnimationFrame(() => {
        if (!window.location.hash || window.location.hash === '#') {
          window.scrollTo(0, 0);
          if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
          }
        }
        ScrollTrigger.refresh();
      });

      // Reforço após montagem e hidratação dos elementos da nova página
      const timerId = setTimeout(() => {
        if (!window.location.hash || window.location.hash === '#') {
          window.scrollTo(0, 0);
          if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
          }
        }
        ScrollTrigger.refresh();
      }, 60);

      return () => {
        cancelAnimationFrame(rafId);
        clearTimeout(timerId);
      };
    };

    const cleanup = resetScrollToTop();
    return () => {
      if (cleanup) cleanup();
    };
  }, [pathname]);

  return <>{children}</>;
}
