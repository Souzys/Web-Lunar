'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function WhatsAppFloat() {
  const phoneNumber = '5561982630397';
  const defaultMessage = encodeURIComponent('Olá equipe Web Lunar! Vim pelo site e gostaria de conversar sobre um projeto.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  const [isLightSection, setIsLightSection] = useState(false);

  useEffect(() => {
    let ticking = false;

    const checkBackground = () => {
      // 1. Se estiver no topo da página (Hero fixo escuro), mantém escuro por padrão
      if (typeof window !== 'undefined' && window.scrollY < window.innerHeight * 0.75) {
        setIsLightSection(false);
        return;
      }

      // Coordenadas do canto inferior direito onde o botão flutuante reside
      const x = window.innerWidth - 60;
      const y = window.innerHeight - 60;

      // Desativa o pointer-events do container do botão temporariamente para capturar o elemento no fundo
      const container = document.querySelector('.whatsapp-float-container') as HTMLElement;
      if (container) container.style.pointerEvents = 'none';

      const element = document.elementFromPoint(x, y);

      if (container) container.style.pointerEvents = 'auto';

      if (!element) return;

      // Sobe na árvore de elementos ignorando tags/botões/badges pequenos para pegar a cor real da seção
      let current: HTMLElement | null = element as HTMLElement;
      let foundLight = false;

      while (current && current !== document.body && current !== document.documentElement) {
        const tag = current.tagName;
        const isSmallElement =
          tag === 'SPAN' ||
          tag === 'BUTTON' ||
          tag === 'A' ||
          tag === 'SVG' ||
          tag === 'P' ||
          tag === 'H1' ||
          tag === 'H2' ||
          tag === 'H3' ||
          tag === 'IMG' ||
          current.classList.contains('badge') ||
          (current.offsetWidth > 0 && current.offsetWidth < 280 && current.offsetHeight < 120);

        if (!isSmallElement) {
          const bg = window.getComputedStyle(current).backgroundColor;
          if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)') {
            const rgbMatch = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
            if (rgbMatch) {
              const r = parseInt(rgbMatch[1], 10);
              const g = parseInt(rgbMatch[2], 10);
              const b = parseInt(rgbMatch[3], 10);

              // Se a média dos canais RGB for maior que 190, é uma seção clara/branca
              if ((r + g + b) / 3 > 190) {
                foundLight = true;
              }
              break; // Encontrou a cor do container da seção, encerra a busca
            }
          }
        }
        current = current.parentElement;
      }

      setIsLightSection(foundLight);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkBackground();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Verificação inicial
    checkBackground();
    const timer = setTimeout(checkBackground, 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 pointer-events-auto whatsapp-float-container"
    >
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
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.861-1.868-4.339-2.897-6.97-2.899-5.443 0-9.87 4.372-9.875 9.8.001 1.77.476 3.5 1.379 5.017l-.988 3.598 3.675-.952zm11.458-6.666c-.301-.15-1.785-.88-2.062-.98-.277-.1-.478-.15-.678.15-.2.3-.778.98-.953 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.084-.176-.3-.019-.462.132-.611.135-.134.301-.35.452-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.93-2.245-.245-.59-.496-.51-.678-.52-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.512s1.08 2.916 1.23 3.116c.15.2 2.126 3.246 5.15 4.553.719.31 1.28.496 1.717.636.722.23 1.38.197 1.901.12.58-.087 1.785-.73 2.036-1.436.251-.706.251-1.314.176-1.436-.076-.123-.277-.2-.577-.35z" />
        </svg>
      </a>
    </motion.div>
  );
}
