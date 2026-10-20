import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.2,
      syncTouch: false, // Preserva o scroll nativo ultra fluido a 120Hz em dispositivos móveis
    });

    (window as any).lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    // lagSmoothing(0) é fundamental na integração Lenis + GSAP para eliminar micro-travamentos a 120Hz
    gsap.ticker.lagSmoothing(0);

    return () => {
      delete (window as any).lenis;
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
      gsap.ticker.lagSmoothing(500, 33);
    };
  }, []);
}
