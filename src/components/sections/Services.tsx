'use client';

import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { getServiceIcon } from '@/components/ui/ServiceIcons';
import { useLanguage } from '@/context/LanguageContext';

const SERVICE_HIGHLIGHTS = [
  [
    'Design orientado a conversão',
    'Integração com pixel e CRM',
    'Carregamento sub-segundo',
    'Testes A/B estruturados'
  ],
  [
    'Next.js App Router & React',
    'Design System personalizado',
    'SEO técnico avançado',
    'Painel administrativo integrado'
  ],
  [
    'Checkout de alta conversão',
    'Integração: Stripe, Pix, etc.',
    'Recuperação de carrinho',
    'Painel simples de vendas'
  ],
  [
    'Calendário em tempo real',
    'Notificações WhatsApp/Email',
    'Regras de agendamento automáticas',
    'Painel administrativo limpo'
  ],
  [
    'Conexão com HubSpot/RD Station',
    'Automação de e-mail marketing',
    'Integrações via Webhooks e APIs',
    'Sincronização de pixels de anúncios'
  ],
  [
    'Auditoria de Core Web Vitals',
    'Otimização técnica para o Google',
    'Compactação inteligente de imagens',
    'Monitoramento avançado'
  ]
];

function ServiceCard({ service, index }: { service: { title: string; desc: string }, index: number }) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const highlights = SERVICE_HIGHLIGHTS[index] || [];
  const { t } = useLanguage();

  return (
    <div 
      className="h-[340px] w-full [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className="relative w-full h-full transition-transform duration-700 ease-in-out"
        style={{ 
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'none'
        }}
      >
        {/* LADO DA FRENTE */}
        <div 
          className="absolute inset-0 w-full h-full group bg-white/80 hover:bg-white border border-black/[0.05] hover:border-primary/30 p-5 flex flex-col justify-between rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            pointerEvents: isFlipped ? 'none' : 'auto'
          }}
        >
          {/* Glow Effect inside Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Top Section Header */}
          <div className="flex justify-between items-center relative z-10">
            <span className="font-display text-xl font-black text-black/20 group-hover:text-primary transition-colors duration-300">
              0{index + 1}
            </span>
            <div className="w-7 h-7 border border-neutral-200 group-hover:border-primary/30 group-hover:bg-primary/10 text-neutral-400 group-hover:text-primary group-hover:-rotate-45 flex items-center justify-center rounded-full transition-all duration-300 bg-white/50 shadow-sm backdrop-blur-sm">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M19 5v10M19 5H9" />
              </svg>
            </div>
          </div>

          {/* Middle Animated SVG Visual Area */}
          <div className="relative z-10 my-2 h-[120px] w-full flex items-center justify-center bg-neutral-50/70 group-hover:bg-primary/[0.03] rounded-xl border border-black/[0.04] group-hover:border-primary/20 transition-all duration-300 overflow-hidden">
            {getServiceIcon(`0${index + 1}`, "w-28 h-28 text-neutral-800 transition-colors duration-300")}
          </div>

          {/* Bottom Section */}
          <div className="relative z-10">
            <h3 className="font-sans text-base font-bold tracking-tight mb-1 text-neutral-900 group-hover:text-primary transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-[11px] leading-relaxed font-light text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300 line-clamp-2">
              {service.desc}
            </p>
          </div>
        </div>

        {/* VERSO DO CARD */}
        <div 
          className="absolute inset-0 w-full h-full rounded-2xl bg-neutral-950 text-white p-5 flex flex-col justify-between shadow-xl overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            pointerEvents: isFlipped ? 'auto' : 'none'
          }}
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">Destaques Técnicos</span>
              <span className="text-[10px] font-mono text-neutral-400 hover:text-white cursor-pointer transition-colors">Voltar ↺</span>
            </div>
            <h3 className="font-sans text-base font-bold text-white mb-3">
              {service.title}
            </h3>

            {/* Highlights List */}
            <ul className="space-y-2">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Button CTA */}
          <div className="relative z-10 w-full mt-2">
            <Link 
              href={`/contato?subject=${encodeURIComponent('Orçamento: ' + service.title)}`}
              onClick={(e) => {
                e.stopPropagation();
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-[11px] font-bold tracking-widest uppercase rounded-full bg-primary text-white hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>{t.hero.ctaButton}</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const { t } = useLanguage();

  const serviceItems = [
    t.services.items.landingPages,
    t.services.items.sitesApps,
    t.services.items.ecommerce,
    t.services.items.agendamento,
    t.services.items.integracoes,
    t.services.items.performance,
  ];

  return (
    <section id="service" className="py-20 md:py-24 bg-[#FAFAFA] text-neutral-900 relative overflow-hidden border-t border-black/5">
      {/* Background Grid & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full bg-blue-500/5 blur-[120px] translate-x-1/4" />
      </div>

      <div className="container mx-auto max-w-[1440px] px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8">
          <AnimatedSection className="w-full">
             <div className="mb-4">
              <span className="text-primary font-sans text-xs tracking-widest uppercase px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 font-semibold">
                {t.services.tag}
              </span>
            </div>
            <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight leading-[1.08] text-neutral-900 w-full text-left">
              {t.services.title}
            </h2>
          </AnimatedSection>
        </div>

        {/* Services Premium Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceItems.map((service, index) => (
            <AnimatedSection key={index} options={{ delay: index * 0.08 }}>
              <ServiceCard service={service} index={index} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
