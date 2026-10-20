'use client';

import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Counter } from '@/components/ui/Counter';
import { siteContent } from '@/content';
import { useLanguage } from '@/context/LanguageContext';

const Stat = ({ label, value, prefix = '', suffix = '' }: { label: string, value: number, prefix?: string, suffix?: string }) => {
  return (
    <div className="flex flex-col border-t border-white/10 pt-6">
      <span className="font-display text-4xl lg:text-5xl font-semibold text-white mb-2 tracking-tight">
        <Counter value={value} prefix={prefix} suffix={suffix} duration={2} />
      </span>
      <span className="text-xs font-mono uppercase tracking-widest text-text-muted">{label}</span>
    </div>
  );
};

export function IndustryCircles() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-16 md:py-24 flex flex-col justify-center bg-bg text-text overflow-hidden">
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
