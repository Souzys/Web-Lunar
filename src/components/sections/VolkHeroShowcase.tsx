'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Lock, ArrowDown } from 'lucide-react';

interface VolkHeroShowcaseProps {
  desktopImage?: string;
}

export function VolkHeroShowcase({ desktopImage = '/volk-desktop.png' }: VolkHeroShowcaseProps) {
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

  const laptopTransform = `perspective(1800px) rotateX(${mousePos.y * -3.5}deg) rotateY(${mousePos.x * 4.5}deg)`;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[1280px] mx-auto flex flex-col items-center justify-center select-none overflow-visible pt-4"
    >
      {/* Glow de Fundo Sutil Estilo Apple */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[400px] bg-gradient-to-tr from-primary/20 via-blue-600/15 to-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Mockup do MacBook Pro 16" Autêntico */}
      <div
        className="relative w-full z-20 transition-transform duration-300 ease-out"
        style={{ transform: laptopTransform }}
      >
        {/* Chassi de Alumínio Externo do MacBook Pro (Space Gray) */}
        <div className="w-full bg-[#181a24] rounded-t-[28px] sm:rounded-t-[36px] p-2.5 sm:p-4 shadow-[0_45px_110px_rgba(0,0,0,0.95)] border border-white/20 relative overflow-hidden backdrop-blur-2xl">
          
          {/* Reflexo Shimmer no Alumínio */}
          <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent w-full h-full skew-x-12 animate-[shimmer_10s_infinite]" />

          {/* Moldura de Vidro Interna da Tela (Black Bezel) */}
          <div className="w-full bg-[#05070f] rounded-[18px] sm:rounded-[26px] overflow-hidden border border-white/10 relative flex flex-col">

            {/* Apple Camera Notch no topo centro */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-36 h-4 sm:h-5 bg-[#05070f] rounded-b-xl border-x border-b border-white/10 z-50 flex items-center justify-center gap-2 px-3 shadow-md">
              {/* Camera Lens */}
              <span className="w-2 h-2 rounded-full bg-[#0a0d14] border border-white/20 inline-block" />
              {/* Green LED */}
              <span className="w-1 h-1 rounded-full bg-emerald-500/80 inline-block animate-pulse" />
            </div>

            {/* Barra do Navegador Safari Autêntica */}
            <div className="h-9 sm:h-11 bg-[#0c0f18] border-b border-white/10 px-4 flex items-center justify-between shrink-0 z-20 pt-1">
              {/* Botões macOS (Red, Yellow, Green) */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-black/20 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black/20 inline-block" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-black/20 inline-block" />
              </div>

              {/* Endereço URL Centralizado */}
              <div className="flex items-center justify-center gap-2 bg-black/60 border border-white/10 px-4 sm:px-8 py-1 rounded-full max-w-sm sm:max-w-md w-full mx-2 text-neutral-300 shadow-inner">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="text-[11px] sm:text-xs font-mono tracking-tight text-white/90 truncate">
                  https://volkpresenter.tv/pt
                </span>
              </div>

              {/* Badge HD / Stack */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline-block font-semibold">MACBOOK PRO 16"</span>
              </div>
            </div>

            {/* Tela com Imagem do Site FIXA ESTÁTICA */}
            <div className="relative w-full overflow-hidden bg-[#05070f] aspect-[16/10] sm:aspect-[16/9.8] flex items-start justify-center">
              <img
                src={desktopImage}
                alt="VOLK Presenter Official Website MacBook View"
                className="w-full h-auto object-cover object-top select-none pointer-events-none"
              />

              {/* Reflexo Suave de Vidro Studio */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.025] to-transparent pointer-events-none" />
            </div>

          </div>

          {/* Base Inferior do Chassi do MacBook com Hinge Lip Notch */}
          <div className="w-[104%] -ml-[2%] h-4 sm:h-5 bg-[#1c1f2e] rounded-b-2xl border-x border-b border-white/20 relative shadow-2xl flex items-center justify-center">
            <div className="w-32 sm:w-44 h-1.5 bg-[#0a0d14] rounded-b-md border border-white/10" />
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
