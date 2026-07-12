'use client';

import React from 'react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { siteContent } from '@/content';
import { getServiceIcon } from '@/components/ui/ServiceIcons';

// Destaques reais correspondentes aos serviços
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

function ServiceCard({ service, index }: { service: any, index: number }) {
  const [isFlipped, setIsFlipped] = React.useState(false);
  const highlights = SERVICE_HIGHLIGHTS[index] || [];
  const Icon = getServiceIcon; // Não é o componente direto mas temos a imagem/SVG de watermark

  return (
    <div 
      className="h-[380px] w-full [perspective:1000px] cursor-pointer"
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
          className="absolute inset-0 w-full h-full group bg-white/75 hover:bg-white border border-black/[0.04] hover:border-primary/20 p-8 md:p-10 flex flex-col justify-between rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(29,77,255,0.06)] overflow-hidden"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {/* Glow Effect inside Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          {/* Top Section */}
          <div className="flex justify-between items-start relative z-10">
            <span className="font-display text-3xl font-black text-black/10 group-hover:text-primary transition-colors duration-500">
              {service.number}
            </span>
            <div className="w-10 h-10 border border-white/80 group-hover:border-primary/30 group-hover:bg-primary/10 text-neutral-400 group-hover:text-primary group-hover:-rotate-45 flex items-center justify-center rounded-full transition-all duration-500 bg-white/50 shadow-sm backdrop-blur-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M19 5v10M19 5H9" />
              </svg>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 relative z-10">
            <h3 className="font-sans text-2xl font-black tracking-tight mb-4 text-neutral-900 group-hover:text-primary transition-colors duration-500">
              {service.title}
            </h3>
            <p className="text-sm leading-relaxed font-light text-neutral-600 group-hover:text-neutral-900 transition-colors duration-500">
              {service.description}
            </p>
          </div>

          {/* Background Watermark SVG */}
          <div className="absolute right-2 bottom-2 translate-x-4 translate-y-4 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.08] text-neutral-950 group-hover:text-primary transition-all duration-700 pointer-events-none z-0">
            {getServiceIcon(service.number, "w-full h-full")}
          </div>
        </div>

        {/* LADO DE TRÁS */}
        <div 
          className="absolute inset-0 w-full h-full bg-white border border-primary/20 p-8 md:p-10 flex flex-col justify-between rounded-2xl shadow-[0_20px_50px_rgba(29,77,255,0.06)] overflow-hidden"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Decorative Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />

          {/* Top Info */}
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-mono tracking-widest text-primary uppercase font-bold">
                [ Detalhes do Serviço ]
              </span>
              <span className="font-display text-sm font-bold text-neutral-400">
                {service.number}
              </span>
            </div>
            
            <h3 className="font-sans text-xl font-bold tracking-tight text-neutral-900 mb-6">
              {service.title}
            </h3>

            {/* Highlights List */}
            <ul className="space-y-3">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-center gap-3 text-xs md:text-sm text-neutral-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/20 shrink-0 flex items-center justify-center">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {/* Button CTA */}
          <div className="relative z-10 w-full mt-4">
            <a 
              href="#contact"
              onClick={(e) => {
                e.stopPropagation(); // Previne o flip de disparar de novo ao clicar no botão
              }}
              className="flex items-center justify-center gap-2 w-full py-3.5 text-xs font-bold tracking-widest uppercase rounded-full bg-primary text-white hover:bg-primary-hover transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span>Contratar Projeto</span>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const { services } = siteContent;

  return (
    <section id="service" className="py-32 bg-[#FAFAFA] text-neutral-900 relative overflow-hidden border-t border-black/5">
      {/* Subtle Background Grid & Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Clean Repeating Grid */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:40px_40px]" 
        />
        {/* Soft Radial Ambient Glows - amplificados para brilhar através do vidro das abas */}
        <div 
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[100px] -translate-x-1/2 -translate-y-1/2" 
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full bg-blue-500/5 blur-[120px] translate-x-1/4" 
        />
      </div>

      <div className="container mx-auto max-w-[1440px] px-6 relative z-10">
        
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
              <ServiceCard service={service} index={index} />
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
