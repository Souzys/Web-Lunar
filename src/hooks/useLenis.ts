import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useLenis() {
  useEffect(() => {
    const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const lenis = new Lenis({
      lerp: 0.1,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: false, // Preserva o scroll nativo ultra fluido a 120Hz em dispositivos móveis
    });

    (window as any).lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      delete (window as any).lenis;
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
    };
  }, []);
}
