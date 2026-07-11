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
      lerp: 0.1, // Taxa de interpolação padrão responsiva
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Sincroniza o ScrollTrigger com cada evento de scroll do Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Usa o ticker do GSAP para rodar o raf do Lenis
    // Isso garante sincronia total de quadros entre scroll e animações
    const updateRaf = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateRaf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateRaf);
    };
  }, []);
}
