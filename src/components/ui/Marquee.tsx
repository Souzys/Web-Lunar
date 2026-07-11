'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  speed?: number;
  direction?: 'left' | 'right';
}

export function Marquee({ children, speed = 1, direction = 'left', className, ...props }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!container || !content) return;

    // Clone content to make it infinite
    const clone = content.cloneNode(true) as HTMLDivElement;
    container.appendChild(clone);

    const xPercent = direction === 'left' ? -50 : 0;
    const startXPercent = direction === 'left' ? 0 : -50;

    gsap.set(container, { xPercent: startXPercent });

    const tl = gsap.to(container, {
      xPercent: xPercent,
      repeat: -1,
      duration: 10 / speed,
      ease: "none"
    });

    return () => {
      tl.kill();
      if (container.contains(clone)) {
        container.removeChild(clone);
      }
    };
  }, [direction, speed]);

  return (
    <div className={cn("overflow-hidden whitespace-nowrap flex w-full", className)} {...props}>
      <div ref={containerRef} className="flex whitespace-nowrap will-change-transform w-fit">
        <div ref={contentRef} className="flex px-4 items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
