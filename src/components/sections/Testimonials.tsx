'use client';

import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { siteContent } from '@/content';

export function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <section className="py-20 bg-[#FAFAFA] text-neutral-900 overflow-hidden relative border-t border-black/5">
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-12">
          <AnimatedSection>
            <div className="mb-4">
              <span className="text-primary font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
                [ {testimonials.tag} ]
              </span>
            </div>
            <h2 className="font-sans text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 max-w-xl">
              Quem já trabalhou conosco.
            </h2>
          </AnimatedSection>
        </div>

        {/* Clean, Minimalist 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.items.map((item, index) => (
            <AnimatedSection 
              key={index} 
              options={{ delay: index * 0.08 }}
              className="group relative bg-white border border-black/5 rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-md hover:border-black/10 flex flex-col justify-between"
            >
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  {/* Clean Minimalist Category Badge */}
                  <span className="text-[10px] font-mono tracking-wider uppercase text-primary font-bold mb-4 block">
                    {item.badge}
                  </span>
                  
                  {/* Smaller, highly legible text */}
                  <p className="text-base md:text-lg leading-relaxed text-neutral-700 mb-6 font-light">
                    "{item.text.split(item.highlight).map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span className="font-semibold text-primary">
                            {item.highlight}
                          </span>
                        )}
                      </React.Fragment>
                    ))}"
                  </p>
                </div>

                {/* Minimalist Author signature */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-black/5">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 border border-black/5 flex items-center justify-center font-sans font-bold text-xs shrink-0 text-neutral-500 shadow-sm">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-neutral-900 uppercase tracking-tight">{item.author}</h4>
                    <p className="text-[10px] text-neutral-400 font-mono tracking-wide">{item.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
