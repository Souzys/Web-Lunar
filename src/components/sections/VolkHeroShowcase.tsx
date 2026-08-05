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

  const tiltX = mousePos.y * -2;
  const tiltY = mousePos.x * 2.5;

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[880px] mx-auto select-none overflow-visible py-4"
      style={{ perspective: '2000px' }}
    >
      {/* Glow ambiente */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[300px] bg-gradient-to-tr from-primary/20 via-blue-500/12 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Laptop wrapper com 3D tilt */}
      <div
        className="relative w-full flex flex-col items-center transition-transform duration-300 ease-out"
        style={{ transform: `rotateX(${tiltX}deg) rotateY(${tiltY}deg)` }}
      >

        {/* ┌─────────────────────────────────┐ */}
        {/*         TAMPA / DISPLAY LID         */}
        {/* └─────────────────────────────────┘ */}
        <div
          className="w-full relative"
          style={{
            background: 'linear-gradient(160deg, #2c2f3a 0%, #1a1c24 60%, #13151c 100%)',
            borderRadius: '16px 16px 0 0',
            padding: '8px 8px 0 8px',
            border: '1px solid rgba(255,255,255,0.13)',
            borderBottom: 'none',
            boxShadow: `
              0 -1px 0 rgba(255,255,255,0.08) inset,
              0 50px 100px rgba(0,0,0,0.85),
              0 20px 50px rgba(0,0,0,0.6)
            `,
          }}
        >
          {/* Câmera / Notch */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center gap-1.5"
            style={{
              width: '72px',
              height: '12px',
              background: '#10121a',
              borderRadius: '0 0 8px 8px',
              border: '1px solid rgba(255,255,255,0.07)',
              borderTop: 'none',
            }}
          >
            <span className="w-[5px] h-[5px] rounded-full inline-block"
              style={{ background: 'radial-gradient(circle at 35% 35%, #2a2d36, #0d0e14)', border: '1px solid rgba(255,255,255,0.1)' }} />
            <span className="w-[4px] h-[4px] rounded-full inline-block animate-pulse"
              style={{ background: 'radial-gradient(circle, #22c55e 0%, #16a34a 100%)', boxShadow: '0 0 4px #22c55e80' }} />
          </div>

          {/* Tela */}
          <div
            className="w-full overflow-hidden relative"
            style={{
              background: '#050709',
              borderRadius: '9px 9px 0 0',
              border: '1px solid rgba(255,255,255,0.05)',
              borderBottom: 'none',
            }}
          >
            <div
              className="w-full relative overflow-hidden"
              style={{ aspectRatio: '1914 / 885' }}
            >
              <img
                src={desktopImage}
                alt="VOLK Presenter website"
                className="w-full h-full object-cover object-top pointer-events-none"
              />
              {/* Glare */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.025) 0%, transparent 50%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* ┌─────────────────────────────────┐ */}
        {/*           HINGE / DOBRADIÇA         */}
        {/* └─────────────────────────────────┘ */}
        <div
          className="w-[98%]"
          style={{
            height: '5px',
            background: 'linear-gradient(180deg, #0c0e14 0%, #080a10 100%)',
            borderLeft: '1px solid rgba(255,255,255,0.07)',
            borderRight: '1px solid rgba(255,255,255,0.07)',
          }}
        />

        {/* ┌─────────────────────────────────┐ */}
        {/*       BASE (ALUMÍNIO PRATA)          */}
        {/* └─────────────────────────────────┘ */}
        <div
          className="relative overflow-hidden"
          style={{
            width: '105%',
            background: 'linear-gradient(180deg, #c9cbcf 0%, #b8bbbf 25%, #aaadB1 60%, #9fa2a6 100%)',
            borderRadius: '0 0 14px 14px',
            border: '1px solid rgba(0,0,0,0.28)',
            borderTop: 'none',
            padding: '8px 16px 12px',
            transform: 'perspective(700px) rotateX(18deg)',
            transformOrigin: 'top center',
            boxShadow: `
              0 35px 70px rgba(0,0,0,0.9),
              0 15px 30px rgba(0,0,0,0.5),
              inset 0 1px 0 rgba(255,255,255,0.65)
            `,
          }}
        >
          {/* Reflexo no topo da base */}
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%)',
            }}
          />

          {/* ── KEYBOARD WELL ── */}
          <div
            className="w-[85%] mx-auto rounded-[8px] overflow-hidden"
            style={{
              background: 'linear-gradient(180deg, #8c8f94 0%, #979a9e 100%)',
              border: '1px solid rgba(0,0,0,0.2)',
              boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.3), inset 0 -1px 0 rgba(255,255,255,0.15)',
              padding: '5px 6px',
            }}
          >
            {/* Renderizar as fileiras do teclado */}
            {[
              { cols: 14, h: 5 },  // Fn row
              { cols: 14, h: 9 },  // Numbers
              { cols: 14, h: 9 },  // QWERTY
              { cols: 13, h: 9 },  // ASDF
              { cols: 12, h: 9 },  // ZXCV
            ].map((row, ri) => (
              <div
                key={ri}
                className="flex gap-[2px] mb-[2px]"
              >
                {Array.from({ length: row.cols }).map((_, ki) => (
                  <div
                    key={ki}
                    className="flex-1 rounded-[3px]"
                    style={{
                      height: `${row.h}px`,
                      background: 'linear-gradient(180deg, #d2d4d7 0%, #c0c3c7 100%)',
                      border: '1px solid rgba(0,0,0,0.18)',
                      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.25)',
                    }}
                  />
                ))}
              </div>
            ))}

            {/* Spacebar row */}
            <div className="flex gap-[2px]">
              {[7, 6, 44, 6, 6, 6, 6, 6, 6, 7].map((w, i) => (
                <div
                  key={i}
                  className="rounded-[3px]"
                  style={{
                    width: `${w}%`,
                    height: '9px',
                    flexShrink: 0,
                    background: i === 2
                      ? 'linear-gradient(180deg, #d6d8db 0%, #c4c7cb 100%)'
                      : 'linear-gradient(180deg, #d2d4d7 0%, #c0c3c7 100%)',
                    border: '1px solid rgba(0,0,0,0.18)',
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.5), 0 1px 2px rgba(0,0,0,0.25)',
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── TRACKPAD ── */}
          <div className="flex justify-center mt-2">
            <div
              className="rounded-[8px]"
              style={{
                width: '130px',
                height: '45px',
                background: 'linear-gradient(180deg, #b0b3b7 0%, #a6a9ad 100%)',
                border: '1px solid rgba(0,0,0,0.22)',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.18), inset 0 -1px 0 rgba(255,255,255,0.25)',
              }}
            />
          </div>

          {/* Entalhe de abertura frontal */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            style={{
              width: '80px',
              height: '4px',
              background: '#8a8d91',
              borderRadius: '0 0 6px 6px',
              border: '1px solid rgba(0,0,0,0.2)',
              borderTop: 'none',
            }}
          />
        </div>

        {/* Sombra na "mesa" */}
        <div
          className="pointer-events-none"
          style={{
            width: '88%',
            height: '16px',
            marginTop: '-6px',
            background: 'rgba(0,0,0,0.55)',
            filter: 'blur(16px)',
            borderRadius: '50%',
          }}
        />

      </div>
    </div>
  );
}
