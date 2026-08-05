'use client';

import React, { useEffect, useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { siteContent } from '@/content';
import { useLanguage } from '@/context/LanguageContext';

// Simple count up hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(ease * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return count;
}

const Stat = ({ label, value, prefix = '', suffix = '' }: { label: string, value: number, prefix?: string, suffix?: string }) => {
  const count = useCountUp(value, 2500);
  return (
    <div className="flex flex-col border-t border-white/10 pt-6">
      <span className="font-display text-4xl lg:text-5xl font-semibold text-white mb-2 tracking-tight">
        {prefix}{count}{suffix}
      </span>
      <span className="text-xs font-mono uppercase tracking-widest text-text-muted">{label}</span>
    </div>
  );
};

export function IndustryCircles() {
  const { t } = useLanguage();

  return (
    <section className="w-full h-full flex flex-col justify-center bg-bg text-text overflow-hidden">
      <div className="container mx-auto max-w-[1440px] px-6">
        <AnimatedSection>
          <div className="mb-16">
            <span className="text-primary font-sans text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 font-semibold">
              {t.about.tag}
            </span>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <AnimatedSection options={{ delay: 0.2 }}>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.2] tracking-tight text-white mb-8">
                {t.about.title}
              </h2>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-4 grid grid-cols-2 gap-x-8 gap-y-10 content-start">
            <AnimatedSection options={{ delay: 0.4 }}>
              <Stat label={t.impact.stats.projects} value={50} prefix="+" />
            </AnimatedSection>
            <AnimatedSection options={{ delay: 0.5 }}>
              <Stat label={t.impact.stats.years} value={4} prefix="+" />
            </AnimatedSection>
            <AnimatedSection options={{ delay: 0.6 }}>
              <Stat label={t.impact.stats.satisfaction} value={100} suffix="%" />
            </AnimatedSection>
            <AnimatedSection options={{ delay: 0.7 }}>
              <Stat label={t.impact.stats.clients} value={30} prefix="+" />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
