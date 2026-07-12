'use client';

import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Accordion } from '@/components/ui/Accordion';
import { siteContent } from '@/content';

export function FAQ() {
  const { faq } = siteContent;

  return (
    <section className="py-24 bg-[#FAFAFA] border-y border-black/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <AnimatedSection>
            <div className="mb-6">
              <span className="text-primary font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-primary/30 bg-primary/10 inline-block">
                [ {faq.tag} ]
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection options={{ delay: 0.1 }}>
            <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tight text-neutral-900">
              {faq.title}
            </h2>
          </AnimatedSection>
        </div>
        <div className="lg:col-span-7 mt-8 lg:mt-0">
          <AnimatedSection options={{ delay: 0.2 }}>
            <Accordion items={faq.questions} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
