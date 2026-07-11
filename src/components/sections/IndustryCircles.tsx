'use client';

import React, { useEffect, useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { siteContent } from '@/content';

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
  const { industryCircles } = siteContent;

  return (
    <section className="w-full h-full flex flex-col justify-center px-6 bg-bg text-text overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection>
          <div className="mb-16">
            <span className="text-primary font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
              [ Sobre Nós ]
            </span>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <AnimatedSection options={{ delay: 0.2 }}>
              <h2 className="font-display text-3xl md:text-5xl font-bold leading-[1.2] tracking-tight text-white mb-8">
                Não fazemos <span className="italic font-medium text-white/80 line-through decoration-white/40">apenas sites</span>. Desenvolvemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 italic pr-1">sistemas</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 italic pr-1">digitais</span> de <span className="italic font-medium text-white/80">alta performance</span>.
              </h2>
            </AnimatedSection>
            <AnimatedSection options={{ delay: 0.3 }}>
              <p className="text-lg md:text-2xl text-text-muted font-light leading-relaxed max-w-3xl text-balance">
                Desde 2021, atuamos como um estúdio de engenharia digital que une design estratégico, conversão e tecnologia avançada. O que entregamos não é apenas visual; é arquitetado meticulosamente para liderar o mercado e gerar resultados concretos.
              </p>
            </AnimatedSection>
          </div>
          
          <div className="lg:col-span-4 grid grid-cols-2 gap-x-8 gap-y-10 content-start">
            <AnimatedSection options={{ delay: 0.4 }}>
              <Stat label="Projetos Entregues" value={150} prefix="+" />
            </AnimatedSection>
            <AnimatedSection options={{ delay: 0.5 }}>
              <Stat label="Anos de Experiência" value={4} prefix="+" />
            </AnimatedSection>
            <AnimatedSection options={{ delay: 0.6 }}>
              <Stat label="Performance Média" value={98} suffix="%" />
            </AnimatedSection>
            <AnimatedSection options={{ delay: 0.7 }}>
              <Stat label="Taxa de Satisfação" value={99} suffix="%" />
            </AnimatedSection>
            <AnimatedSection options={{ delay: 0.8 }}>
              <Stat label="Alta de Conversão" value={35} prefix="+" suffix="%" />
            </AnimatedSection>
            <AnimatedSection options={{ delay: 0.9 }}>
              <Stat label="Clientes Ativos" value={15} prefix="+" />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
