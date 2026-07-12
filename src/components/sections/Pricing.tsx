'use client';

import React, { useState } from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { siteContent } from '@/content';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export function Pricing() {
  const { pricing } = siteContent;
  const [isAnnual, setIsAnnual] = useState(false);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR');
  };

  return (
    <section id="pricing" className="py-32 bg-white text-neutral-900 relative overflow-hidden border-t border-black/5">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <AnimatedSection>
            <div className="mb-6">
              <span className="text-primary font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-primary/30 bg-primary/10 inline-block">
                [ {pricing.tag} ]
              </span>
            </div>
          </AnimatedSection>
          <AnimatedSection options={{ delay: 0.1 }}>
            <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tight text-neutral-900">
              {pricing.title}
            </h2>
          </AnimatedSection>

          {/* Toggle with clean sharp layout */}
          <AnimatedSection options={{ delay: 0.2 }} className="mt-10 flex items-center p-1 bg-neutral-100 border border-black/5 rounded-full">
            <button 
              onClick={() => setIsAnnual(false)}
              className={cn(
                "px-6 py-3 text-xs font-mono uppercase tracking-widest transition-all rounded-full", 
                !isAnnual ? "bg-primary text-white shadow-lg" : "text-neutral-500 hover:text-neutral-900"
              )}
            >
              {pricing.toggle.monthly}
            </button>
            <button 
              onClick={() => setIsAnnual(true)}
              className={cn(
                "px-6 py-3 text-xs font-mono uppercase tracking-widest transition-all rounded-full", 
                isAnnual ? "bg-primary text-white shadow-lg" : "text-neutral-500 hover:text-neutral-900"
              )}
            >
              {pricing.toggle.annually}
            </button>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {pricing.plans.map((plan, index) => {
            const isMiddle = index === 1;
            
            return (
              <AnimatedSection 
                key={index} 
                options={{ delay: index * 0.08 }}
                className={cn(
                  "p-8 md:p-10 rounded-3xl flex flex-col justify-between transition-all duration-300 min-h-[580px] relative group",
                  isMiddle 
                    ? "bg-[#FAFAFA] border-2 border-primary/50 shadow-2xl z-10 md:scale-105" 
                    : "bg-white border border-black/5 hover:border-black/20 shadow-sm hover:shadow-md"
                )}
              >
                {/* Glow effect on hover for non-middle cards */}
                {!isMiddle && (
                  <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />
                )}

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-sans text-2xl font-black tracking-tight text-neutral-900">{plan.name}</h3>
                    {isMiddle && (
                      <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm mb-10 leading-relaxed font-light text-neutral-600">
                    {plan.description}
                  </p>

                  <div className="mb-10 flex items-baseline gap-1">
                    <span className="text-sm font-mono text-primary mr-1">R$</span>
                    <span className="font-display text-5xl md:text-6xl font-black tracking-tighter text-neutral-900">
                      {formatPrice(isAnnual ? plan.annuallyPrice : plan.monthlyPrice)}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 ml-1">
                      /mês
                    </span>
                  </div>

                  <div className="mb-10">
                    <p className="text-[10px] font-mono font-bold mb-6 uppercase tracking-[0.2em] text-neutral-400">
                      O QUE ESTÁ INCLUSO
                    </p>
                    <ul className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                          <Check className={cn("w-4 h-4 shrink-0 mt-0.5", isMiddle ? "text-primary" : "text-primary/70")} />
                          <span className="font-light text-neutral-700">{feature.replace('[', '')}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <PrimaryButton 
                  className={cn(
                    "w-full py-4 text-xs font-mono uppercase tracking-widest font-bold transition-all duration-300 rounded-full relative z-10 border", 
                    isMiddle ? "bg-primary text-white border-transparent hover:bg-primary-hover shadow-[0_0_20px_rgba(29,77,255,0.2)]" : "bg-transparent text-neutral-900 border-black/10 hover:bg-neutral-100"
                  )}
                  icon={false}
                >
                  {plan.buttonText}
                </PrimaryButton>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
