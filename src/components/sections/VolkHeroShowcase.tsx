'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Globe, Lock, ArrowUpRight, Sparkles, CheckCircle2, Monitor, Smartphone, Tablet, Zap, Layers } from 'lucide-react';

interface VolkHeroShowcaseProps {
  desktopImage?: string;
  tabletImage?: string;
  mobileImage?: string;
}

export function VolkHeroShowcase({ desktopImage = '/volk-desktop.png', tabletImage = '/volk-tablet.png', mobileImage = '/volk-mobile.png' }: VolkHeroShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Mouse move handler for 3D Parallax tilt
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

  // 3D Tilt Transformations
  const laptopTransform = `perspective(1400px) rotateX(${mousePos.y * -4}deg) rotateY(${mousePos.x * 5}deg) translateZ(20px)`;
  const tabletTransform = `perspective(1400px) rotateX(${mousePos.y * -6}deg) rotateY(${mousePos.x * 9 - 14}deg) translateZ(60px) rotateZ(-6deg)`;
  const phoneTransform = `perspective(1400px) rotateX(${mousePos.y * -8}deg) rotateY(${mousePos.x * 8 + 14}deg) translateZ(90px) rotateZ(8deg)`;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[540px] sm:h-[640px] lg:h-[720px] flex items-center justify-center select-none overflow-visible group"
      style={{ perspective: '1600px' }}
    >
      {/* === CAMADA 1: BACKGROUND GLOW & AMBIENCE === */}
      {/* Giant Studio Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[700px] sm:h-[950px] bg-gradient-to-tr from-[#001530] via-primary/20 to-indigo-500/10 rounded-full blur-[150px] opacity-75 pointer-events-none transition-all duration-700" />

      {/* Screen Projection Glow beneath Laptop */}
      <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[650px] h-[240px] bg-primary/25 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* Subtle Studio Grid Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none opacity-40" />

      {/* === CAMADA 2: 3D FLOATING DEVICES (SPACIOUS & EXPANSIVE) === */}
      <div className="relative w-full max-w-[1050px] flex items-center justify-center h-full">

        {/* 1. TABLET MOCKUP (Left Frame - Displaced outside main area) */}
        <div
          className="absolute -left-4 sm:left-2 md:-left-8 top-[36%] z-20 transition-transform duration-300 ease-out hidden sm:block"
          style={{ transform: tabletTransform }}
        >
          <div className="w-[160px] sm:w-[210px] md:w-[250px] bg-[#121622] rounded-2xl p-2 shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/15 backdrop-blur-xl relative">
            {/* Tablet Camera notch */}
            <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full z-30 border border-white/20" />
            
            {/* Tablet Display with Real Website Screenshot */}
            <div className="w-full h-[120px] sm:h-[155px] md:h-[185px] bg-[#05070f] rounded-xl overflow-hidden border border-white/10 relative">
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src={tabletImage}
                  alt="VOLK Presenter Website Tablet View"
                  className="w-full h-auto object-cover object-top animate-[scroll-tablet_22s_ease-in-out_infinite]"
                />
              </div>
              <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[8px] font-mono text-emerald-400 font-bold">
                TABLET 100% RESPONSIVE
              </div>
            </div>
          </div>
        </div>

        {/* 2. MAIN LAPTOP MOCKUP (Center Expansive Showcase) */}
        <div
          className="relative z-30 transition-transform duration-300 ease-out -translate-y-2"
          style={{ transform: laptopTransform }}
        >
          {/* Laptop Frame */}
          <div className="w-[340px] sm:w-[560px] md:w-[720px] lg:w-[840px] bg-[#151926] rounded-2xl p-2.5 sm:p-3.5 shadow-[0_40px_100px_rgba(0,0,0,0.92)] border border-white/15 relative overflow-hidden backdrop-blur-2xl">

            {/* Light Studio Reflex Line */}
            <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/[0.08] to-transparent w-full h-full skew-x-12 animate-[shimmer_9s_infinite]" />

            {/* Webcam */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black border border-white/20 z-40" />

            {/* Display Screen */}
            <div className="w-full h-[210px] sm:h-[340px] md:h-[430px] lg:h-[490px] bg-[#05070f] rounded-xl overflow-hidden border border-white/10 relative flex flex-col">

              {/* Realistic Browser Header Bar */}
              <div className="h-9 sm:h-10 bg-[#0e121d] border-b border-white/10 px-3 sm:px-4 flex items-center justify-between shrink-0 z-20">
                {/* Traffic lights */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>

                {/* URL Address Bar */}
                <div className="flex items-center justify-center gap-2 bg-black/50 border border-white/10 px-3 sm:px-6 py-1 rounded-full max-w-xs sm:max-w-md w-full mx-2 text-neutral-300">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-[10px] sm:text-xs font-mono tracking-tight text-white/90 truncate">
                    https://volkpresenter.tv/pt
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[8px] font-mono bg-primary/20 text-primary font-bold hidden sm:inline-block">
                    PRODUÇÃO
                  </span>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-mono text-neutral-300 hidden sm:inline-block font-semibold">60 FPS</span>
                </div>
              </div>

              {/* Website Real Screenshot Display with Smooth Scroll Animation */}
              <div className="relative flex-grow overflow-hidden bg-[#05070f] group/screen cursor-grab">
                <img
                  src={desktopImage}
                  alt="VOLK Presenter Official Website Screenshot"
                  className="w-full h-auto object-cover object-top select-none pointer-events-none animate-[scroll-desktop_38s_ease-in-out_infinite]"
                />

                {/* Glass Reflection Tint */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none" />

                {/* Interactive Overlay Tag */}
                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs font-mono text-white flex items-center gap-2 shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-primary" />
                  <span>UX/UI & Front-end por Web Lunar</span>
                </div>
              </div>

            </div>

            {/* Laptop Base Notch */}
            <div className="w-[110%] -ml-[5%] h-4 bg-[#1b2030] rounded-b-xl border-x border-b border-white/10 relative shadow-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-1.5 bg-[#0e121d] rounded-b-md border border-white/10" />
            </div>

          </div>
        </div>

        {/* 3. SMARTPHONE MOCKUP (Right Frame - Displaced outside main area) */}
        <div
          className="absolute -right-2 sm:right-2 md:-right-6 top-[28%] z-40 transition-transform duration-300 ease-out hidden sm:block"
          style={{ transform: phoneTransform }}
        >
          <div className="w-[90px] sm:w-[125px] md:w-[145px] bg-[#121622] rounded-[24px] sm:rounded-[32px] p-2 shadow-[0_25px_60px_rgba(0,0,0,0.9)] border border-white/20 backdrop-blur-xl relative">
            {/* Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 sm:w-12 h-2.5 bg-black rounded-full z-40 flex items-center justify-end pr-1">
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
            </div>

            {/* Phone Display with Real Mobile Screenshot */}
            <div className="w-full h-[180px] sm:h-[250px] md:h-[295px] bg-[#05070f] rounded-[18px] sm:rounded-[26px] overflow-hidden border border-white/10 relative">
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src={mobileImage}
                  alt="VOLK Presenter Mobile View"
                  className="w-full h-auto object-cover object-top animate-[scroll-mobile_25s_ease-in-out_infinite]"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* === CAMADA 3: FLOATING ENGINEERING HIGHLIGHTS === */}
      {/* Widget 1: Top Left */}
      <div className="absolute top-4 left-2 sm:left-8 lg:left-16 z-40 bg-[#0e1320]/90 border border-white/15 p-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl hidden md:flex items-center gap-3 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
        <div className="w-8 h-8 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
          <Layers className="w-4 h-4" />
        </div>
        <div className="text-left">
          <p className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">Animações & Motion</p>
          <p className="text-xs font-bold text-white">GSAP & Smooth Scroll</p>
        </div>
      </div>

      {/* Widget 2: Bottom Right */}
      <div className="absolute bottom-6 right-2 sm:right-8 lg:right-16 z-40 bg-[#0e1320]/90 border border-white/15 p-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl hidden md:flex items-center gap-3 transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <Zap className="w-4 h-4 animate-pulse" />
        </div>
        <div className="text-left">
          <p className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">Performance Web</p>
          <p className="text-xs font-bold text-white">100/100 Core Web Vitals</p>
        </div>
      </div>

      {/* CSS Animations for Smooth Screenshot Auto-Scroll */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(12deg); }
          100% { transform: translateX(250%) skewX(12deg); }
        }
        @keyframes scroll-desktop {
          0%, 10% { transform: translateY(0%); }
          50%, 60% { transform: translateY(-75%); }
          90%, 100% { transform: translateY(0%); }
        }
        @keyframes scroll-tablet {
          0%, 10% { transform: translateY(0%); }
          50%, 60% { transform: translateY(-70%); }
          90%, 100% { transform: translateY(0%); }
        }
        @keyframes scroll-mobile {
          0%, 10% { transform: translateY(0%); }
          50%, 60% { transform: translateY(-70%); }
          90%, 100% { transform: translateY(0%); }
        }
      `}</style>
    </div>
  );
}
