import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsapReveal(
  selector: string | React.RefObject<HTMLElement | null>,
  options: {
    y?: number;
    delay?: number;
    stagger?: number;
    duration?: number;
    ease?: string;
    start?: string;
    markers?: boolean;
    blur?: number;
  } = {}
) {
  useEffect(() => {
    let ctx = gsap.context(() => {
      const {
        y = 40,
        delay = 0,
        stagger = 0,
        duration = 0.8,
        ease = 'power2.out',
        start = 'top 80%',
        markers = false,
        blur = 5,
      } = options;

      const elements = typeof selector === 'string' ? gsap.utils.toArray(selector) : selector.current;

      if (!elements || (Array.isArray(elements) && elements.length === 0)) return;

      gsap.fromTo(
        elements,
        {
          y: y,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: duration,
          ease: ease,
          stagger: stagger,
          delay: delay,
          force3D: true,
          scrollTrigger: {
            trigger: Array.isArray(elements) ? elements[0] as Element : elements as Element,
            start: start,
            once: true,
            markers: markers,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [selector, options]);
}
