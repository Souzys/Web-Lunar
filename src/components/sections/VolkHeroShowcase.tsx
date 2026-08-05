'use client';

import React, { useState, useEffect, useRef } from 'react';

interface VolkHeroShowcaseProps {
  desktopImage?: string;
}

export function VolkHeroShowcase({ desktopImage = '/printvolk.png' }: VolkHeroShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      setMousePos({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
    };

    const el = containerRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);
    return () => { if (el) el.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  const tilt = `perspective(2000px) rotateX(${mousePos.y * -2}deg) rotateY(${mousePos.x * 3}deg)`;

  // Helper: render a row of keys
  const KeyRow = ({ count, height = 'h-3 sm:h-5', extraClass = '' }: { count: number; height?: string; extraClass?: string }) => (
    <div className={`flex gap-[2px] sm:gap-[3px] w-full ${extraClass}`}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 ${height} bg-gradient-to-b from-[#d4d6d9] to-[#bbbec2] rounded-[3px] sm:rounded-[4px] border border-[#9fa2a8]/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(0,0,0,0.15)] relative`}
        >
          <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/30 to-transparent rounded-t-[3px]" />
        </div>
      ))}
    </div>
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[860px] mx-auto flex flex-col items-center select-none overflow-visible pt-2 pb-10"
    >
      {/* Glow de Fundo */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[340px] bg-gradient-to-tr from-primary/25 via-blue-600/15 to-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div
        className="relative w-full z-20 transition-transform duration-300 ease-out flex flex-col items-center"
        style={{ transform: tilt }}
      >

        {/* ═══ DISPLAY LID ═══ */}
        {/* Moldura Exterior (Alumínio Escuro Space Gray) */}
        <div
          className="w-full relative"
          style={{
            background: 'linear-gradient(180deg, #2a2d35 0%, #1e2028 100%)',
            borderRadius: '18px 18px 0 0',
            padding: '10px 10px 0 10px',
            boxShadow: '0 -2px 0 rgba(255,255,255,0.12) inset, 0 60px 120px rgba(0,0,0,0.9)',
            border: '1px solid rgba(255,255,255,0.14)',
            borderBottom: 'none',
          }}
        >
          {/* Notch da Câmera */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-1.5"
            style={{
              width: '80px',
              height: '14px',
              background: '#181a22',
              borderRadius: '0 0 10px 10px',
              border: '1px solid rgba(255,255,255,0.08)',
              borderTop: 'none',
            }}
          >
            <span className="w-[5px] h-[5px] rounded-full bg-[#111318] border border-white/15 inline-block" />
            <span className="w-[4px] h-[4px] rounded-full bg-emerald-500/80 inline-block animate-pulse" />
          </div>

          {/* Tela (Bezel Preto + Imagem) */}
          <div
            className="w-full overflow-hidden relative"
            style={{
              background: '#080a10',
              borderRadius: '10px 10px 0 0',
              border: '1px solid rgba(255,255,255,0.06)',
              borderBottom: 'none',
            }}
          >
            <div
              className="w-full relative overflow-hidden flex items-start justify-center"
              style={{ aspectRatio: '1914 / 885' }}
            >
              <img
                src={desktopImage}
                alt="VOLK Presenter website"
                className="w-full h-full object-cover object-top pointer-events-none"
              />
              {/* Reflexo sutil na tela */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.018] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ═══ HINGE (Dobradiça) ═══ */}
        <div
          className="w-full relative z-30"
          style={{
            height: '7px',
            background: 'linear-gradient(180deg, #141720 0%, #0a0c12 100%)',
            borderLeft: '1px solid rgba(255,255,255,0.10)',
            borderRight: '1px solid rgba(255,255,255,0.10)',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.6)',
          }}
        />

        {/* ═══ BASE DO LAPTOP (Alumínio Prata) ═══ */}
        <div
          className="w-[106%] relative z-20 overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, #c8cace 0%, #b0b3b8 30%, #a0a3a8 70%, #909399 100%)',
            borderRadius: '0 0 16px 16px',
            border: '1px solid rgba(0,0,0,0.25)',
            borderTop: 'none',
            padding: '10px 16px 14px',
            boxShadow: '0 40px 80px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.6)',
            transform: 'perspective(800px) rotateX(20deg)',
            transformOrigin: 'top center',
          }}
        >
          {/* Linha brilhante no topo da base */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent mb-2.5" />

          {/* ── KEYBOARD WELL (Recesso do Teclado) ── */}
          <div
            className="w-full max-w-[86%] mx-auto rounded-lg sm:rounded-xl px-2 sm:px-3 py-2 sm:py-2.5 flex flex-col gap-[3px] sm:gap-[4px]"
            style={{
              background: 'linear-gradient(180deg, #8a8d92 0%, #9598a0 100%)',
              boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.35), inset 0 -1px 0 rgba(255,255,255,0.15)',
              border: '1px solid rgba(0,0,0,0.18)',
            }}
          >
            {/* Row 0: Fn / Media keys (menores) */}
            <KeyRow count={14} height="h-2 sm:h-3" />
            {/* Row 1: Numbers */}
            <KeyRow count={14} />
            {/* Row 2: QWERTY */}
            <KeyRow count={14} />
            {/* Row 3: ASDF */}
            <KeyRow count={13} />
            {/* Row 4: ZXCV */}
            <KeyRow count={12} />
            {/* Row 5: Spacebar row */}
            <div className="flex gap-[2px] sm:gap-[3px] w-full">
              <div className="w-[8%] h-3 sm:h-5 bg-gradient-to-b from-[#d4d6d9] to-[#bbbec2] rounded-[3px] sm:rounded-[4px] border border-[#9fa2a8]/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]" />
              <div className="w-[8%] h-3 sm:h-5 bg-gradient-to-b from-[#d4d6d9] to-[#bbbec2] rounded-[3px] sm:rounded-[4px] border border-[#9fa2a8]/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]" />
              {/* Spacebar — mais largo */}
              <div
                className="flex-1 h-3 sm:h-5 rounded-[3px] sm:rounded-[4px] border border-[#9fa2a8]/60 relative"
                style={{
                  background: 'linear-gradient(180deg, #d8dadc 0%, #c2c5c9 100%)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -1px 0 rgba(0,0,0,0.12)',
                }}
              >
                <div className="absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-white/30 to-transparent rounded-t-[3px]" />
              </div>
              <div className="w-[8%] h-3 sm:h-5 bg-gradient-to-b from-[#d4d6d9] to-[#bbbec2] rounded-[3px] sm:rounded-[4px] border border-[#9fa2a8]/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]" />
              <div className="w-[8%] h-3 sm:h-5 bg-gradient-to-b from-[#d4d6d9] to-[#bbbec2] rounded-[3px] sm:rounded-[4px] border border-[#9fa2a8]/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]" />
            </div>
          </div>

          {/* ── TRACKPAD ── */}
          <div className="w-full flex justify-center mt-2 sm:mt-3">
            <div
              className="w-28 sm:w-44 h-10 sm:h-16 rounded-lg sm:rounded-xl"
              style={{
                background: 'linear-gradient(180deg, #b0b3b8 0%, #a5a8ae 100%)',
                border: '1px solid rgba(0,0,0,0.20)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.20), inset 0 -1px 0 rgba(255,255,255,0.3)',
              }}
            />
          </div>

          {/* Entalhe de abertura frontal */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            style={{
              width: '100px',
              height: '5px',
              background: '#888b90',
              borderRadius: '0 0 8px 8px',
              border: '1px solid rgba(0,0,0,0.20)',
              borderTop: 'none',
            }}
          />
        </div>

        {/* ═══ SOMBRA DO LAPTOP NA "MESA" ═══ */}
        <div
          className="w-[90%] pointer-events-none"
          style={{
            height: '20px',
            marginTop: '-8px',
            background: 'rgba(0,0,0,0.55)',
            filter: 'blur(18px)',
            borderRadius: '50%',
          }}
        />

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
