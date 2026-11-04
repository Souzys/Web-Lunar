'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function WhatsAppFloat() {
  const pathname = usePathname();

  if (pathname?.startsWith('/links') || pathname?.startsWith('/odonto')) {
    return null;
  }

  const phoneNumber = '5561982630397';

  // Mensagem dinâmica contextualizada de acordo com a página que o cliente está visitando
  let dynamicMessage = 'Olá equipe Web Lunar! Vim pelo site e gostaria de conversar sobre um projeto.';
  let dynamicLabel = 'Orçamento no WhatsApp';

  if (pathname?.startsWith('/solucoes/')) {
    const slug = pathname.replace('/solucoes/', '');
    const cleanTopic = slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    dynamicMessage = `Olá Lucas! Estava vendo a solução de *${cleanTopic}* no site da Web Lunar e gostaria de um orçamento.`;
    dynamicLabel = 'Falar com Especialista';
  } else if (pathname?.startsWith('/blog/')) {
    dynamicMessage = 'Olá Lucas! Estava lendo um artigo no blog da Web Lunar e gostaria de tirar uma dúvida sobre criação de site.';
    dynamicLabel = 'Tirar Dúvida no WhatsApp';
  } else if (pathname?.startsWith('/projetos')) {
    dynamicMessage = 'Olá Lucas! Vi os projetos no portfólio da Web Lunar e gostaria de solicitar um orçamento para o meu negócio.';
    dynamicLabel = 'Solicitar Orçamento';
  } else if (pathname?.startsWith('/calculadora')) {
    dynamicMessage = 'Olá Lucas! Fiz uma simulação na calculadora da Web Lunar e gostaria de alinhar o escopo do meu projeto.';
    dynamicLabel = 'Enviar Simulação';
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(dynamicMessage)}`;

  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    // Detecta se o botão flutuante está sobre uma seção de fundo claro
    const lightElements = document.querySelectorAll<HTMLElement>(
      'section.bg-white, section.bg-\\[\\#FAFAFA\\], div.bg-white, div.bg-\\[\\#FAFAFA\\], section.bg-slate-50, section.bg-slate-100, [data-light-section="true"]'
    );

    if (lightElements.length === 0) {
      setIsLightSection(false);
      return;
    }

    const intersectingElements = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            intersectingElements.add(entry.target);
          } else {
            intersectingElements.delete(entry.target);
          }
        });
        setIsLightSection(intersectingElements.size > 0);
      },
      {
        rootMargin: '0px 0px -70px 0px',
        threshold: 0,
      }
    );

    lightElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 pointer-events-auto whatsapp-float-container flex items-center gap-3"
    >
      {/* Tooltip / Badge de ação rápida */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border border-emerald-500/30 bg-[#0a0f1d]/90 text-white backdrop-blur-md hover:bg-neutral-900 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.4)] group"
      >
        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
        <span className="text-neutral-200 group-hover:text-white">{dynamicLabel}</span>
      </a>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 group ${
          isLightSection
            ? 'bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_0_20px_rgba(37,211,102,0.45)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] border border-transparent'
            : 'bg-[#0a0f1d]/90 hover:bg-neutral-950 border border-white/10 hover:border-primary/50 text-white shadow-[0_0_20px_rgba(29,77,255,0.2)] hover:shadow-[0_0_30px_rgba(29,77,255,0.5)]'
        }`}
        aria-label="Fale Conosco pelo WhatsApp"
      >
        {/* Soft pulse ring effect */}
        <span 
          className={`absolute inset-0 rounded-full animate-ping pointer-events-none transition-colors duration-500 ${
            isLightSection ? 'bg-[#25D366]/30' : 'bg-primary/20'
          }`} 
          style={{ animationDuration: '3s' }} 
        />

        {/* SVG WhatsApp icon */}
        <svg
          className="w-6 h-6 fill-current transition-colors duration-500 relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.155.57 4.177 1.564 5.927l-1.564 5.729 5.864-1.538c1.701.933 3.654 1.468 5.733 1.468 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      </a>
    </motion.div>
  );
}
