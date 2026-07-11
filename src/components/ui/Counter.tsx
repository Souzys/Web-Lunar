'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cn } from '@/lib/utils';

interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export function Counter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 2,
  className,
  ...props
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    const element = ref.current;
    if (!element) return;

    const counter = { val: 0 };

    const ctx = gsap.context(() => {
      gsap.to(counter, {
        val: value,
        duration: duration,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          once: true,
        },
        onUpdate: () => {
          if (element) {
            element.innerText = prefix + counter.val.toFixed(decimals) + suffix;
          }
        },
      });
    });

    return () => ctx.revert();
  }, [value, prefix, suffix, decimals, duration]);

  return (
    <span ref={ref} className={cn("inline-block", className)} {...props}>
      {prefix}0{suffix}
    </span>
  );
}
