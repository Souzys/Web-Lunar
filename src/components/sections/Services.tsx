'use client';

import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { siteContent } from '@/content';
import { getServiceIcon } from '@/components/ui/ServiceIcons';

export function Services() {
  const { services } = siteContent;

  return (
    <section id="service" className="py-32 px-6 bg-[#FAFAFA] text-neutral-900 relative overflow-hidden border-t border-black/5">
      {/* Subtle Background Grid & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Clean Repeating Grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px]" 
        />
        {/* Soft Radial Ambient Glows */}
        <div 
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px] -translate-x-1/2 -translate-y-1/2" 
        />
        <div 
          className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] translate-x-1/3 translate-y-1/3" 
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <AnimatedSection className="w-full">
             <div className="mb-6">
              <span className="text-primary font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
                [ Nossas Especialidades ]
              </span>
            </div>
            <h2 className="font-sans text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-neutral-900">
              Sites e sistemas planejados para gerar resultados reais.
            </h2>
          </AnimatedSection>
        </div>

        {/* Services Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.items.map((service, index) => (
            <AnimatedSection key={index} options={{ delay: index * 0.1 }}>
              <div 
                className="group relative bg-[#FAFAFA] hover:bg-white border border-black/5 hover:border-primary/30 p-8 md:p-12 min-h-[360px] flex flex-col justify-between cursor-pointer transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl rounded-2xl overflow-hidden"
              >
                {/* Glow Effect inside Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Top Section */}
                <div className="flex justify-between items-start relative z-10">
                  <span className="font-display text-3xl font-black text-black/10 group-hover:text-primary transition-colors duration-500">
                    {service.number}
                  </span>
                  <div className="w-12 h-12 border border-black/5 group-hover:border-primary/30 group-hover:bg-primary/10 text-neutral-400 group-hover:text-primary group-hover:-rotate-45 flex items-center justify-center rounded-full transition-all duration-500 bg-white shadow-sm backdrop-blur-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M19 5v10M19 5H9" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 relative z-10">
                  <h3 className="font-sans text-2xl font-black tracking-tight mb-4 text-neutral-900 group-hover:text-primary transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed font-light text-neutral-600 group-hover:text-neutral-900 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>

                {/* Background Watermark SVG */}
                <div className="absolute right-2 bottom-2 translate-x-4 translate-y-4 w-36 h-36 opacity-[0.03] group-hover:opacity-[0.08] text-neutral-950 group-hover:text-primary transition-all duration-700 pointer-events-none z-0">
                  {getServiceIcon(service.number, "w-full h-full")}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
