'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Activity, Cpu, Zap, Radio, Layers, BarChart3, Globe, Sparkles, ShieldCheck } from 'lucide-react';

interface VolkHeroShowcaseProps {
  desktopImage?: string;
  tabletImage?: string;
  mobileImage?: string;
}

export function VolkHeroShowcase({ desktopImage, tabletImage, mobileImage }: VolkHeroShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse Parallax State
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  // Screens to cycle inside the live software mockup
  const screens = [
    {
      id: 'dashboard',
      label: '01. Dashboard',
      title: 'Controle de Transmissão Ao Vivo',
      badge: 'LIVE · 60 FPS',
      stats: [
        { label: 'Espectadores', value: '42.840', change: '+18.4%' },
        { label: 'Latência Stream', value: '84 ms', status: 'Estável' },
        { label: 'Bitrate de Saída', value: '12.5 Mbps', status: 'Optimal' },
      ],
    },
    {
      id: 'media',
      label: '02. Mídia & Cenas',
      title: 'Gerenciador Multicanal de Mídias',
      badge: '4K BROADCAST',
      stats: [
        { label: 'Cenas Ativas', value: '12 Cenas', status: 'Sincronizado' },
        { label: 'Presets Gráficos', value: '38 Layouts', status: 'Pronto' },
        { label: 'Render GPU', value: '14.2 ms', status: 'Ultra Fast' },
      ],
    },
    {
      id: 'analytics',
      label: '03. Analytics',
      title: 'Métricas & Retenção em Tempo Real',
      badge: 'REALTIME CORE',
      stats: [
        { label: 'Retenção Média', value: '94.2%', change: '+8.1%' },
        { label: 'Engajamento', value: '8.4k/min', status: 'Pico' },
        { label: 'Uptime Sistema', value: '99.99%', status: 'Nominal' },
      ],
    },
  ];

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

  // Cycle screens automatically every 4.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreenIndex((prev) => (prev + 1) % screens.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [screens.length]);

  const currentScreen = screens[activeScreenIndex];

  // Calculated 3D tilts
  const laptopTransform = `perspective(1200px) rotateX(${mousePos.y * -5}deg) rotateY(${mousePos.x * 7}deg) translateZ(30px)`;
  const tabletTransform = `perspective(1200px) rotateX(${mousePos.y * -7}deg) rotateY(${mousePos.x * 12 - 10}deg) translateZ(70px) rotateZ(-5deg)`;
  const phoneTransform = `perspective(1200px) rotateX(${mousePos.y * -9}deg) rotateY(${mousePos.x * 10 + 12}deg) translateZ(100px) rotateZ(6deg)`;

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] sm:h-[620px] lg:h-[680px] flex items-center justify-center select-none overflow-visible group"
      style={{ perspective: '1400px' }}
    >
      {/* === CAMADA 1: BACKGROUND GLOW & AMBIENCE === */}
      {/* Giant Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] bg-gradient-to-tr from-[#001530] via-primary/20 to-indigo-600/10 rounded-full blur-[140px] opacity-70 pointer-events-none transition-all duration-700" />

      {/* Screen Illumination Glow under Laptop */}
      <div className="absolute top-[52%] left-1/2 -translate-x-1/2 w-[550px] h-[220px] bg-primary/30 rounded-full blur-[110px] pointer-events-none animate-pulse" />

      {/* Glass Studio Reflective Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-40" />

      {/* === CAMADA 2: 3D COMPOSITION OF FLOATING DEVICES === */}
      <div className="relative w-full max-w-[950px] flex items-center justify-center h-full">

        {/* 1. TABLET MOCKUP (Left Floating) */}
        <div
          className="absolute left-0 sm:left-4 md:left-8 top-[32%] z-20 transition-transform duration-300 ease-out"
          style={{ transform: tabletTransform }}
        >
          <div className="w-[170px] sm:w-[220px] md:w-[260px] bg-[#121622] rounded-2xl p-2 sm:p-2.5 shadow-[0_30px_70px_rgba(0,0,0,0.85)] border border-white/15 backdrop-blur-xl relative group/tablet">
            {/* Camera notch */}
            <div className="absolute left-2.5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-black rounded-full z-30" />
            
            {/* Screen */}
            <div className="w-full h-[110px] sm:h-[145px] md:h-[170px] bg-[#07090e] rounded-xl overflow-hidden border border-white/10 relative flex flex-col justify-between p-3 text-left">
              {/* Tablet Header UI */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-wider">LIVE FEED</span>
                </div>
                <span className="text-[9px] font-mono text-neutral-400">VOLK Pad v2.4</span>
              </div>

              {/* Tablet Content Sim */}
              <div className="space-y-1.5 my-auto">
                <div className="flex justify-between items-center text-[10px] text-white font-semibold">
                  <span>Stream Controller</span>
                  <span className="text-primary font-mono font-bold">ONLINE</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-blue-400 w-[78%] animate-pulse" />
                </div>
                <div className="grid grid-cols-2 gap-1.5 pt-1">
                  <div className="bg-white/5 border border-white/10 rounded p-1 text-[8px] text-neutral-300">
                    <p className="text-neutral-500 font-mono">SCENE 01</p>
                    <p className="font-bold text-white">Main Cam</p>
                  </div>
                  <div className="bg-primary/20 border border-primary/40 rounded p-1 text-[8px] text-primary">
                    <p className="text-primary/70 font-mono">SCENE 02</p>
                    <p className="font-bold text-white">Graphics B</p>
                  </div>
                </div>
              </div>

              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none opacity-40" />
            </div>
          </div>
        </div>

        {/* 2. MAIN LAPTOP MOCKUP (Center Perspective) */}
        <div
          className="relative z-30 transition-transform duration-300 ease-out -translate-y-4"
          style={{ transform: laptopTransform }}
        >
          {/* Laptop Lid / Body */}
          <div className="w-[300px] sm:w-[480px] md:w-[620px] lg:w-[700px] bg-[#161a26] rounded-2xl p-2 sm:p-3 shadow-[0_35px_90px_rgba(0,0,0,0.9)] border border-white/15 relative overflow-hidden backdrop-blur-2xl">

            {/* Glass Studio Shimmer Line */}
            <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent w-full h-full skew-x-12 animate-[shimmer_8s_infinite]" />

            {/* Webcam dot */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black border border-white/20 z-40" />

            {/* Display Screen */}
            <div className="w-full h-[185px] sm:h-[300px] md:h-[380px] lg:h-[420px] bg-[#080b12] rounded-xl overflow-hidden border border-white/10 relative flex flex-col">

              {/* App Header Bar */}
              <div className="h-9 bg-[#0e121d] border-b border-white/10 px-4 flex items-center justify-between shrink-0 z-20">
                {/* Window Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-[10px] font-mono text-neutral-400 hidden sm:inline-block">VOLK Presenter Website // Official Live Experience</span>
                </div>

                {/* Auto Switcher Tabs */}
                <div className="flex items-center gap-1 bg-black/40 p-1 rounded-lg border border-white/5">
                  {screens.map((sc, idx) => (
                    <button
                      key={sc.id}
                      onClick={() => setActiveTab(idx)}
                      className={`px-2.5 py-0.5 text-[9px] font-mono rounded font-semibold transition-all cursor-pointer ${
                        activeScreenIndex === idx
                          ? 'bg-primary text-white shadow-sm'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      {sc.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Progress Bar for Auto-Switching */}
              <div className="w-full h-0.5 bg-white/5 relative z-20">
                <div
                  key={activeScreenIndex}
                  className="h-full bg-gradient-to-r from-primary to-blue-400 animate-[progress_4.5s_linear]"
                />
              </div>

              {/* Screen Content Body */}
              <div className="relative flex-grow p-4 sm:p-6 flex flex-col justify-between overflow-hidden bg-radial from-[#0d121f] to-[#07090f]">

                {/* Top Section Header inside software */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10 pb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold uppercase tracking-wider">
                        {currentScreen.badge}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">Latência &lt; 85ms</span>
                    </div>
                    <h3 className="text-white text-base sm:text-xl font-bold font-sans tracking-tight">
                      {currentScreen.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[10px] font-mono text-neutral-300 font-bold uppercase">SISTEMA ATIVO</span>
                  </div>
                </div>

                {/* Animated Graphic Waves / Interactive Dashboard Preview */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
                  {currentScreen.stats.map((st, i) => (
                    <div key={i} className="bg-white/[0.03] border border-white/10 p-3 rounded-xl flex flex-col justify-between hover:border-primary/40 transition-colors">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-mono text-neutral-400">{st.label}</span>
                        {st.change && (
                          <span className="text-[9px] font-mono text-emerald-400 font-bold">{st.change}</span>
                        )}
                        {st.status && (
                          <span className="text-[9px] font-mono text-primary font-bold">{st.status}</span>
                        )}
                      </div>
                      <span className="text-xl sm:text-2xl font-bold font-mono text-white tracking-tight">{st.value}</span>
                    </div>
                  ))}
                </div>

                {/* Simulated Waveform & Live Audio Bar */}
                <div className="bg-white/[0.02] border border-white/10 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
                      <Activity className="w-4 h-4 animate-pulse" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold text-white">Processamento Gráfico Ultra Fast</p>
                      <p className="text-[10px] text-neutral-400 font-light">Renderização contínua via GPU WebGL & React Next.js</p>
                    </div>
                  </div>

                  {/* Equalizer Wave Bar */}
                  <div className="flex items-end gap-1 h-6 pr-2">
                    <span className="w-1 bg-primary h-3 animate-[bounce_1s_infinite_100ms]" />
                    <span className="w-1 bg-blue-400 h-5 animate-[bounce_1s_infinite_300ms]" />
                    <span className="w-1 bg-emerald-400 h-2 animate-[bounce_1s_infinite_200ms]" />
                    <span className="w-1 bg-primary h-6 animate-[bounce_1s_infinite_400ms]" />
                    <span className="w-1 bg-purple-400 h-4 animate-[bounce_1s_infinite_150ms]" />
                  </div>
                </div>

                {/* Simulated Floating Cursor */}
                <div className="absolute top-[45%] left-[62%] transition-all duration-700 ease-out pointer-events-none z-30">
                  <svg className="w-5 h-5 text-primary drop-shadow-[0_0_10px_rgba(29,77,255,0.8)] fill-primary stroke-white stroke-1" viewBox="0 0 24 24">
                    <path d="M3 3l7 18 3-7 7-3L3 3z" />
                  </svg>
                  <div className="ml-4 -mt-2 px-2 py-0.5 rounded bg-primary text-white text-[9px] font-mono font-bold shadow-md">
                    Live Pointer
                  </div>
                </div>

              </div>
            </div>

            {/* Laptop Base Stand */}
            <div className="w-[120%] -ml-[10%] h-4 bg-[#1e2330] rounded-b-xl border-x border-b border-white/10 relative shadow-xl">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-[#0e121d] rounded-b-md border border-white/10" />
            </div>

          </div>
        </div>

        {/* 3. SMARTPHONE MOCKUP (Right Floating) */}
        <div
          className="absolute right-0 sm:right-2 md:right-6 top-[28%] z-40 transition-transform duration-300 ease-out"
          style={{ transform: phoneTransform }}
        >
          <div className="w-[95px] sm:w-[130px] md:w-[150px] bg-[#121622] rounded-[24px] sm:rounded-[32px] p-2 shadow-[0_30px_70px_rgba(0,0,0,0.88)] border border-white/20 backdrop-blur-xl relative">
            {/* Dynamic Island Notch */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 sm:w-12 h-2.5 bg-black rounded-full z-40 flex items-center justify-end pr-1">
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
            </div>

            {/* Screen */}
            <div className="w-full h-[180px] sm:h-[250px] md:h-[290px] bg-[#07090e] rounded-[18px] sm:rounded-[26px] overflow-hidden border border-white/10 relative flex flex-col justify-between p-3 text-left">
              
              {/* Phone Header */}
              <div className="pt-4 pb-2 border-b border-white/10">
                <p className="text-[9px] font-mono text-neutral-400">VOLK Mobile</p>
                <p className="text-[11px] font-bold text-white leading-tight">Painel Mobile</p>
              </div>

              {/* Phone Content */}
              <div className="space-y-2 my-auto">
                <div className="bg-primary/20 border border-primary/40 rounded-lg p-2">
                  <p className="text-[8px] font-mono text-primary font-bold">STATUS BROADCAST</p>
                  <p className="text-[10px] font-bold text-white">Transmissão 100% Ok</p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-2">
                  <p className="text-[8px] font-mono text-neutral-400">CONTROLE REMOTO</p>
                  <p className="text-[10px] font-bold text-emerald-400">Ativo via QR Code</p>
                </div>
              </div>

              {/* Phone Footer Status */}
              <div className="flex items-center justify-between text-[8px] font-mono text-neutral-400 border-t border-white/10 pt-2">
                <span>iOS / Android</span>
                <span className="text-primary font-bold">v2.4.0</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* === CAMADA 3: FLOATING EXPLODED UI WIDGETS (FOREGROUND) === */}
      {/* Widget 1: Top Left Floating Badge */}
      <div className="absolute top-6 left-4 sm:left-12 lg:left-24 z-40 bg-[#0e1320]/90 border border-white/15 p-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl hidden md:flex items-center gap-3 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
          <Zap className="w-5 h-5 animate-pulse" />
        </div>
        <div className="text-left">
          <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Performance Web</p>
          <p className="text-xs font-bold text-white">100/100 Core Web Vitals</p>
        </div>
      </div>

      {/* Widget 2: Bottom Right Floating Badge */}
      <div className="absolute bottom-4 right-4 sm:right-12 lg:right-24 z-40 bg-[#0e1320]/90 border border-white/15 p-3 rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl hidden md:flex items-center gap-3 transform rotate-3 hover:rotate-0 transition-transform duration-300">
        <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/30 flex items-center justify-center text-primary">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div className="text-left">
          <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Stack Next.js 15</p>
          <p className="text-xs font-bold text-white">Interface Reativa & Segura</p>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(12deg); }
          100% { transform: translateX(250%) skewX(12deg); }
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );

  function setActiveTab(idx: number) {
    setActiveScreenIndex(idx);
  }
}
