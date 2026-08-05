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

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[860px] mx-auto select-none py-6"
      style={{ perspective: '1600px' }}
    >
      {/* Glow de fundo */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '30%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60%', height: '280px',
          background: 'radial-gradient(ellipse, rgba(29,77,255,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div
        className="relative w-full flex flex-col items-center transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${mousePos.y * -2}deg) rotateY(${mousePos.x * 2}deg)`,
        }}
      >

        {/* ─── TELA ─── */}
        <div
          className="w-full"
          style={{
            background: '#1c1e26',
            borderRadius: '14px 14px 0 0',
            padding: '10px 10px 0',
            border: '1px solid rgba(255,255,255,0.12)',
            borderBottom: 'none',
            boxShadow: '0 -2px 0 rgba(255,255,255,0.06) inset',
          }}
        >
          {/* Notch câmera */}
          <div
            className="absolute top-[10px] left-1/2 -translate-x-1/2 flex items-center justify-center gap-1"
            style={{
              width: '60px', height: '10px',
              background: '#10121a',
              borderRadius: '0 0 6px 6px',
              zIndex: 10,
            }}
          >
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#1a1c23', border: '1px solid rgba(255,255,255,0.1)', display: 'inline-block' }} />
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 5px #22c55e', display: 'inline-block' }} className="animate-pulse" />
          </div>

          {/* Screenshot */}
          <div style={{ borderRadius: '6px 6px 0 0', overflow: 'hidden', lineHeight: 0 }}>
            <img
              src={desktopImage}
              alt="VOLK Presenter"
              className="w-full pointer-events-none"
              style={{ display: 'block', aspectRatio: '1914/885', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>

        {/* ─── BASE ─── */}
        <div
          style={{
            width: '106%',
            background: 'linear-gradient(180deg, #b8babe 0%, #aaacb0 50%, #9ea0a4 100%)',
            borderRadius: '0 0 10px 10px',
            border: '1px solid rgba(0,0,0,0.3)',
            borderTop: 'none',
            height: '28px',
            position: 'relative',
            transform: 'perspective(600px) rotateX(14deg)',
            transformOrigin: 'top center',
            boxShadow: '0 30px 60px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.5)',
          }}
        >
          {/* Reflexo no topo */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)' }} />
          {/* Entalhe frontal */}
          <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 70, height: 4, background: '#8e9094', borderRadius: '0 0 4px 4px', border: '1px solid rgba(0,0,0,0.15)', borderTop: 'none' }} />
        </div>

        {/* ─── SOMBRA ─── */}
        <div
          style={{
            width: '85%',
            height: '14px',
            marginTop: '-4px',
            background: 'rgba(0,0,0,0.5)',
            filter: 'blur(14px)',
            borderRadius: '50%',
          }}
        />

      </div>
    </div>
  );
}
