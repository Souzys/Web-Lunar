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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const container = containerRef.current;
    const content = contentRef.current;
    
    if (!wrapper || !container || !content) return;

    const xPercent = direction === 'left' ? -50 : 0;
    const startXPercent = direction === 'left' ? 0 : -50;

    gsap.set(container, { xPercent: startXPercent });

    const tl = gsap.to(container, {
      xPercent: xPercent,
      repeat: -1,
      duration: 10 / speed,
      ease: "none"
    });

    // DRAG LOGIC (MOUSE & TOUCH)
    let isDragging = false;
    let startX = 0;
    let startProgress = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.clientX;
      startProgress = tl.progress();
      tl.pause();
      wrapper.style.cursor = 'grabbing';
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      const width = content.offsetWidth || 1000;
      let progressOffset = -deltaX / width;
      if (direction === 'right') progressOffset = deltaX / width;

      let newProgress = startProgress + progressOffset;
      newProgress = (newProgress % 1 + 1) % 1;
      tl.progress(newProgress);
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      tl.play();
      wrapper.style.cursor = 'grab';
    };

    // Mobile Touch Drag
    let startTouchX = 0;
    const onTouchStart = (e: TouchEvent) => {
      isDragging = true;
      startTouchX = e.touches[0].clientX;
      startProgress = tl.progress();
      tl.pause();
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const deltaX = e.touches[0].clientX - startTouchX;
      const width = content.offsetWidth || 1000;
      let progressOffset = -deltaX / width;
      if (direction === 'right') progressOffset = deltaX / width;

      let newProgress = startProgress + progressOffset;
      newProgress = (newProgress % 1 + 1) % 1;
      tl.progress(newProgress);
    };

    const onTouchEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      tl.play();
    };

    wrapper.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    wrapper.addEventListener('touchstart', onTouchStart, { passive: true });
    wrapper.addEventListener('touchmove', onTouchMove, { passive: true });
    wrapper.addEventListener('touchend', onTouchEnd);

    wrapper.style.cursor = 'grab';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!isDragging) tl.play();
        } else {
          tl.pause();
        }
      },
      { threshold: 0 }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
      tl.kill();
      wrapper.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);

      wrapper.removeEventListener('touchstart', onTouchStart);
      wrapper.removeEventListener('touchmove', onTouchMove);
      wrapper.removeEventListener('touchend', onTouchEnd);
    };
  }, [direction, speed]);

  return (
    <div 
      ref={wrapperRef}
      className={cn("overflow-hidden whitespace-nowrap flex w-full select-none", className)} 
      {...props}
    >
      <div ref={containerRef} className="flex whitespace-nowrap will-change-transform w-fit">
        <div ref={contentRef} className="flex items-center shrink-0">
          {children}
        </div>
        <div className="flex items-center shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
