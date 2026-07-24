'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Lock, Sparkles } from 'lucide-react';

interface VolkHeroShowcaseProps {
  desktopImage?: string;
}

export function VolkHeroShowcase({ desktopImage = '/volk-desktop.png' }: VolkHeroShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Mouse Parallax suave
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

  const laptopTransform = `perspective(1600px) rotateX(${mousePos.y * -3}deg) rotateY(${mousePos.x * 4}deg)`;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[1240px] mx-auto flex flex-col items-center justify-center select-none overflow-visible pt-4"
    >
      {/* Glow de Fundo Sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[350px] bg-gradient-to-tr from-primary/15 via-blue-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Mockup do MacBook em Tela Cheia */}
      <div
        className="relative w-full z-20 transition-transform duration-300 ease-out"
        style={{ transform: laptopTransform }}
      >
        {/* Moldura Externa do MacBook */}
        <div className="w-full bg-[#141722] rounded-t-2xl sm:rounded-t-3xl p-2.5 sm:p-4 shadow-[0_30px_90px_rgba(0,0,0,0.85)] border border-white/15 relative overflow-hidden backdrop-blur-2xl">
          
          {/* Câmera / Notch */}
          <div className="absolute top-2 sm:top-2.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black border border-white/20 z-40" />

          {/* Moldura Interna da Tela */}
          <div className="w-full bg-[#05070f] rounded-lg sm:rounded-2xl overflow-hidden border border-white/10 relative flex flex-col">

            {/* Barra do Navegador Autêntica */}
            <div className="h-9 sm:h-11 bg-[#0c0f18] border-b border-white/10 px-4 flex items-center justify-between shrink-0 z-20">
              {/* Botões do sistema (Red, Yellow, Green) */}
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>

              {/* Endereço URL Centralizado */}
              <div className="flex items-center justify-center gap-2 bg-black/60 border border-white/10 px-4 sm:px-8 py-1 rounded-full max-w-sm sm:max-w-md w-full mx-2 text-neutral-300 shadow-inner">
                <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                <span className="text-[11px] sm:text-xs font-mono tracking-tight text-white/90 truncate">
                  https://volkpresenter.tv/pt
                </span>
              </div>

              {/* Badge HD */}
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-mono text-neutral-400 hidden sm:inline-block font-semibold">WEB LUNAR BUILD</span>
              </div>
            </div>

            {/* Imagem do Site FIXA ESTÁTICA (Sem scroll automático) */}
            <div className="relative w-full overflow-hidden bg-[#05070f] aspect-[16/10] sm:aspect-[16/9.5] flex items-start justify-center">
              <img
                src={desktopImage}
                alt="VOLK Presenter Official Website"
                className="w-full h-auto object-cover object-top select-none pointer-events-none"
              />

              {/* Reflexo sutil de vidro */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none" />
            </div>

          </div>

          {/* Base Inferior do MacBook */}
          <div className="w-[104%] -ml-[2%] h-4 sm:h-5 bg-[#1b202e] rounded-b-2xl border-x border-b border-white/15 relative shadow-2xl flex items-center justify-center">
            <div className="w-32 sm:w-40 h-1.5 bg-[#0a0d14] rounded-b-md border border-white/10" />
          </div>

        </div>
      </div>
    </div>
  );
}
