'use client';

import React, { useState, useEffect, useRef } from 'react';

interface VolkHeroShowcaseProps {
  desktopImage?: string;
}

export function VolkHeroShowcase({ desktopImage = '/printvolk.png' }: VolkHeroShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Parallax suave 3D
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      setMousePos({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (el) el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const laptopTransform = `perspective(1800px) rotateX(${mousePos.y * -2.5 + 2}deg) rotateY(${mousePos.x * 3.5}deg)`;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[920px] mx-auto flex flex-col items-center justify-center select-none overflow-visible pt-2 pb-8"
    >
      {/* Glow de Fundo Sutil Estilo Apple */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[360px] bg-gradient-to-tr from-primary/20 via-blue-600/15 to-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Mockup do Laptop 3D (Tela + Base com Teclado) */}
      <div
        className="relative w-full z-20 transition-transform duration-300 ease-out flex flex-col items-center"
        style={{ transform: laptopTransform }}
      >
        {/* TELA / DISPLAY LID (Moldura Fina) */}
        <div className="w-full bg-[#181a24] rounded-t-2xl sm:rounded-t-[24px] p-2 sm:p-2.5 shadow-2xl border border-white/20 relative overflow-hidden backdrop-blur-2xl">
          
          {/* Reflexo Shimmer no Alumínio */}
          <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent w-full h-full skew-x-12 animate-[shimmer_10s_infinite]" />

          {/* Moldura Interna da Tela */}
          <div className="w-full bg-[#05070f] rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 relative flex flex-col">

            {/* Notch de Câmera Discreto no Topo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-3 sm:h-4 bg-[#05070f] rounded-b-lg border-x border-b border-white/10 z-40 flex items-center justify-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0a0d14] border border-white/20 inline-block" />
              <span className="w-1 h-1 rounded-full bg-emerald-500/70 inline-block animate-pulse" />
            </div>

            {/* Tela com Imagem do Site (Proporção Exata do Print 1914x885) */}
            <div
              className="relative w-full overflow-hidden bg-[#05070f] flex items-start justify-center"
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

        {/* HINGE / DOBRADIÇA */}
        <div className="w-[96%] h-2 sm:h-3 bg-[#0d0f16] border-x border-white/10 relative z-30 shadow-inner" />

        {/* CORPO INFERIOR DO LAPTOP (BASE COM TECLADO E TRACKPAD) */}
        <div
          className="w-[104%] bg-gradient-to-b from-[#1d202e] via-[#161824] to-[#0e1017] rounded-b-2xl sm:rounded-b-3xl border-x border-b border-white/20 p-2.5 sm:p-4 pt-2 relative z-20 shadow-[0_40px_90px_rgba(0,0,0,0.9)] overflow-hidden"
          style={{
            transform: 'perspective(900px) rotateX(24deg)',
            transformOrigin: 'top center',
          }}
        >
          {/* Linha Brilhante no Topo da Base */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent mb-2" />

          {/* RECESSO DO TECLADO (KEYBOARD WELL) */}
          <div className="w-full max-w-[88%] mx-auto bg-[#0a0c13] rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 border border-white/10 shadow-inner flex flex-col gap-0.5 sm:gap-1">
            
            {/* Linha 1: Teclas de Função */}
            <div className="grid grid-cols-14 gap-0.5 sm:gap-1 w-full">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="h-1.5 sm:h-2.5 bg-[#181b28] rounded-[2px] border border-white/5 shadow-sm" />
              ))}
            </div>

            {/* Linha 2: Números */}
            <div className="grid grid-cols-14 gap-0.5 sm:gap-1 w-full">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="h-2 sm:h-3.5 bg-[#181b28] rounded-[2px] border border-white/5 shadow-sm" />
              ))}
            </div>

            {/* Linha 3: QWERTY */}
            <div className="grid grid-cols-14 gap-0.5 sm:gap-1 w-full">
              {Array.from({ length: 14 }).map((_, i) => (
                <div key={i} className="h-2 sm:h-3.5 bg-[#181b28] rounded-[2px] border border-white/5 shadow-sm" />
              ))}
            </div>

            {/* Linha 4: ASDF */}
            <div className="grid grid-cols-13 gap-0.5 sm:gap-1 w-full">
              {Array.from({ length: 13 }).map((_, i) => (
                <div key={i} className="h-2 sm:h-3.5 bg-[#181b28] rounded-[2px] border border-white/5 shadow-sm" />
              ))}
            </div>

            {/* Linha 5: Barra de Espaço */}
            <div className="flex gap-0.5 sm:gap-1 w-full">
              <div className="w-[15%] h-2 sm:h-3.5 bg-[#181b28] rounded-[2px] border border-white/5" />
              <div className="w-[10%] h-2 sm:h-3.5 bg-[#181b28] rounded-[2px] border border-white/5" />
              <div className="w-[50%] h-2 sm:h-3.5 bg-[#202436] rounded-[2px] border border-white/10 shadow-md" /> {/* Barra de espaço */}
              <div className="w-[10%] h-2 sm:h-3.5 bg-[#181b28] rounded-[2px] border border-white/5" />
              <div className="w-[15%] h-2 sm:h-3.5 bg-[#181b28] rounded-[2px] border border-white/5" />
            </div>

          </div>

          {/* PALMREST & TRACKPAD (Área do Touchpad) */}
          <div className="w-full flex flex-col items-center mt-2 sm:mt-3">
            <div className="w-28 sm:w-40 h-8 sm:h-14 rounded-lg sm:rounded-xl border border-white/15 bg-white/[0.02] shadow-inner relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-[1px] bg-white/20" />
            </div>
          </div>

          {/* Entalhe Frontal da Tampa (Lip Notch) */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 sm:w-28 h-1 bg-[#090b10] rounded-t-md border-x border-t border-white/10" />
        </div>

        {/* SOMBRA REALISTA NA MESA */}
        <div className="w-[95%] h-5 sm:h-8 bg-black/80 blur-xl rounded-full -mt-2 sm:-mt-4 pointer-events-none" />

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

