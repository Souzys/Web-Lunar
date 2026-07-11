'use client';

import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { 
  LayoutTemplate, 
  MonitorSmartphone, 
  ShoppingBag, 
  CalendarDays, 
  Network, 
  Rocket 
} from 'lucide-react';

const services = [
  {
    num: "01",
    title: "Landing Pages",
    description: "Páginas únicas otimizadas pra captar leads ou vender direto, com design persuasivo e testes A/B.",
    icon: LayoutTemplate,
  },
  {
    num: "02",
    title: "Sites & Apps",
    description: "Presença online completa em React, Next.js ou WordPress, com foco em usabilidade e identidade visual.",
    icon: MonitorSmartphone,
  },
  {
    num: "03",
    title: "E-commerce",
    description: "Plataformas de venda robustas com integração de pagamentos, carrinho inteligente e gestão simples.",
    icon: ShoppingBag,
  },
  {
    num: "04",
    title: "Agendamento",
    description: "Sistemas personalizados para serviços com calendários automáticos e notificações inteligentes.",
    icon: CalendarDays,
  },
  {
    num: "05",
    title: "Integrações",
    description: "Conexão com CRMs, e-mail marketing, pixels de anúncios e APIs para fluxos 100% automáticos.",
    icon: Network,
  },
  {
    num: "06",
    title: "Performance",
    description: "SEO técnico, Core Web Vitals, mobile-first e analytics avançado para maximizar tráfego e conversões.",
    icon: Rocket,
  }
];

export function StickyScrollServices() {
  return (
    <section className="relative w-full bg-bg text-text py-24 lg:py-40 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative items-start">
          
          {/* Lado Esquerdo Fixo */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-40 pt-4">
            <AnimatedSection>
              <div className="mb-6 inline-flex">
                <span className="text-primary font-mono text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
                  [ Nossas Especialidades ]
                </span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection options={{ delay: 0.1 }}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight text-white mb-8">
                Sites e sistemas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 italic pr-1">planejados</span> para gerar resultados reais.
              </h2>
            </AnimatedSection>
            
            <AnimatedSection options={{ delay: 0.2 }}>
              <p className="text-lg md:text-xl text-text-muted font-light leading-relaxed max-w-md">
                Cada projeto é desenvolvido sob medida com tecnologias de ponta, focando em performance absoluta, design premium e altas taxas de conversão.
              </p>
            </AnimatedSection>
          </div>

          {/* Lado Direito Scrollável */}
          <div className="w-full lg:w-7/12 flex flex-col gap-8 lg:gap-16">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.num} options={{ delay: 0.1 }}>
                  <div className="group relative p-8 md:p-12 rounded-[2rem] bg-[#09101f] border border-white/5 hover:border-primary/40 transition-colors duration-500 overflow-hidden">
                    
                    {/* Background Glow Effect */}
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] group-hover:bg-primary/20 transition-colors duration-700 opacity-50 pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                      <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#111932] border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-xl shadow-black/50">
                        <Icon size={28} strokeWidth={2} />
                      </div>
                      
                      <div className="flex flex-col">
                        <span className="font-mono text-xs tracking-widest text-primary/60 mb-3">{service.num}</span>
                        <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-200 transition-all duration-300">
                          {service.title}
                        </h3>
                        <p className="text-text-muted text-lg md:text-xl font-light leading-relaxed text-balance">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
