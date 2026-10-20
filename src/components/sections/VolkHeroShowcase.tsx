'use client';

import React, { useEffect, useRef } from 'react';

interface VolkHeroShowcaseProps {
  desktopImage?: string;
}

export function VolkHeroShowcase({ desktopImage = '/printvolk.webp' }: VolkHeroShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax suave 3D direto no DOM (0 re-renders de React)
  useEffect(() => {
    const container = containerRef.current;
    const laptop = laptopRef.current;
    if (!container || !laptop) return;

    let rafId: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      targetX = Math.max(-1, Math.min(1, x));
      targetY = Math.max(-1, Math.min(1, y));
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const loop = () => {
      // Interpolação fluida a 120 FPS
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      laptop.style.transform = `perspective(1800px) rotateX(${currentY * -3.5}deg) rotateY(${currentX * 4.5}deg)`;
      rafId = requestAnimationFrame(loop);
    };

    container.addEventListener('mousemove', handleMouseMove, { passive: true });
    container.addEventListener('mouseleave', handleMouseLeave);
    rafId = requestAnimationFrame(loop);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[960px] mx-auto flex flex-col items-center justify-center select-none overflow-visible pt-4"
    >
      {/* Glow de Fundo Sutil Estilo Apple */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[400px] bg-gradient-to-tr from-primary/20 via-blue-600/15 to-indigo-500/10 rounded-full blur-[90px] pointer-events-none transform-gpu" />

      {/* Mockup Minimalista com Bordas Finas */}
      <div
        ref={laptopRef}
        className="relative w-full z-20 will-change-transform transform-gpu"
        style={{ transform: 'perspective(1800px) rotateX(0deg) rotateY(0deg)' }}
      >
        {/* Moldura Externa Slim (Bordas Finas) */}
        <div className="w-full bg-[#121520] rounded-2xl p-1.5 sm:p-2 shadow-[0_35px_90px_rgba(0,0,0,0.85)] border border-white/15 relative overflow-hidden">
          
          {/* Reflexo Shimmer no Alumínio */}
          <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent w-full h-full skew-x-12 animate-[shimmer_10s_infinite]" />

          {/* Moldura Interna da Tela */}
          <div className="w-full bg-[#05070f] rounded-xl overflow-hidden border border-white/10 relative flex flex-col">

            {/* Barra do Navegador Minimalista (Sem URL e Sem Notch) */}
            <div className="h-7 sm:h-8 bg-[#0a0d15] border-b border-white/10 px-3.5 flex items-center justify-between shrink-0">
              {/* Botões macOS (Red, Yellow, Green) */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block opacity-90" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block opacity-90" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block opacity-90" />
              </div>
            </div>

            {/* Tela com Imagem do Site (Proporção Exata do Print 1914x885) */}
            <div
              className="relative w-full overflow-hidden bg-[#05070f] flex items-start justify-center rounded-b-xl"
              style={{ aspectRatio: '1914 / 885' }}
            >
              <img
                src={desktopImage}
                alt="VOLK Presenter Official Website View"
                className="w-full h-full object-cover object-top select-none pointer-events-none"
              />

              {/* Reflexo Suave de Vidro Studio */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(12deg); }
          100% { transform: translateX(250%) skewX(12deg); }
        }
      `}</style>
    </div>
  );
}
