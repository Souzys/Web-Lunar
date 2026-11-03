'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook de compatibilidade useLenis:
 * Integra componentes à instância única global gerenciada pelo SmoothScrollProvider.
 * Garante recalibração dos marcadores do ScrollTrigger na montagem de cada componente.
 */
export function useLenis() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = (window as any).lenis;
      if (lenis && (!window.location.hash || window.location.hash === '#')) {
        lenis.scrollTo(0, { immediate: true });
      }
      ScrollTrigger.refresh();
    }
  }, []);

  return typeof window !== 'undefined' ? (window as any).lenis : null;
}
