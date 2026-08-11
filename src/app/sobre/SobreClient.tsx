'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { IsometricWireframe } from '@/components/ui/IsometricWireframe';
import { Server, Zap, Code2, Shield, Activity, Lock, Terminal, Box, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useLanguage } from '@/context/LanguageContext';

function generateLatencyPath() {
  const pts: number[] = [];
  let prev = 35;
  for (let i = 0; i < 15; i++) {
    const delta = (Math.random() - 0.5) * 18;
    prev = Math.max(6, Math.min(54, prev + delta));
    pts.push(prev);
  }
  return pts;
}

const staticInitialPath = [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35];

function pointsToPath(pts: number[]): string {
  const step = 280 / (pts.length - 1);
  return pts.map((y, i) => `${i === 0 ? 'M' : 'L'}${Math.round(i * step)},${y}`).join(' ');
}

function pointsToFill(pts: number[]): string {
  const step = 280 / (pts.length - 1);
  const line = pts.map((y, i) => `${Math.round(i * step)},${y}`).join(' L');
  return `M0,${pts[0]} L${line} L280,60 L0,60 Z`;
}

const PILLAR_ICONS = [
  Server,
  Zap,
  Code2,
  Shield,
];

const DETAIL_ICONS = [
  Activity,
  Box,
  Lock,
];

export function SobreClient() {
  useLenis();
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const glowCombinedRef = useRef<HTMLDivElement>(null);
  const xCombinedTo = useRef<any>(null);
  const yCombinedTo = useRef<any>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    gsap.set(glow, {
      x: typeof window !== 'undefined' ? window.innerWidth / 2 - 400 : 0,
      y: typeof window !== 'undefined' ? window.innerHeight / 4 - 400 : 0,
    });

    const xTo = gsap.quickTo(glow, "x", { duration: 1.5, ease: "power2.out" });
    const yTo = gsap.quickTo(glow, "y", { duration: 1.5, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      if (window.scrollY < (window.innerHeight || 800)) {
        xTo(e.clientX - 400);
        yTo(e.clientY - 400);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-bg text-text min-h-screen font-sans selection:bg-primary selection:text-white">
      
      {/* =========================================
          HERO SECTION (FIXED BACKGROUND)
      ========================================= */}
      <div ref={heroRef} className="fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center z-0 overflow-hidden pt-24 sm:pt-28 md:pt-20 bg-bg">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div 
            ref={glowRef}
            className="absolute w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none"
            style={{
              left: 0,
              top: 0,
              willChange: 'transform',
            }}
          />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-[1440px] relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="flex flex-col items-start text-left">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-6 max-w-full">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0 shadow-[0_0_8px_rgba(29,77,255,0.4)]" />
                <span className="text-[10px] sm:text-xs font-sans uppercase tracking-widest text-primary font-semibold leading-normal">
                  {t.sobrePage.badge}
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-6 leading-tight">
                {t.sobrePage.title} <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  {t.sobrePage.titleHighlight}
                </span>
              </h1>
            </AnimatedSection>
            <AnimatedSection options={{ delay: 0.2 }}>
              <p className="text-base md:text-lg text-text-muted font-light leading-relaxed max-w-xl border-l border-primary/30 pl-5 text-balance">
                {t.sobrePage.subtitle}
              </p>
            </AnimatedSection>
          </div>
          
          <AnimatedSection options={{ delay: 0.4 }} className="hidden lg:flex items-center justify-center lg:justify-end w-full">
            <IsometricWireframe />
          </AnimatedSection>
        </div>
      </div>

      {/* =========================================
          SCROLLING OVERLAY CONTENT
      ========================================= */}
      <div className="relative z-10 bg-bg w-full mt-[100vh]">
      
      {/* =========================================
          BLOCO 01: MANIFESTO CORPORATIVO
      ========================================= */}
      <section className="py-32 border-y border-white/5 bg-[#05070B] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="container mx-auto max-w-[1440px] px-6 relative z-10">
          <div className="mb-16 w-full">
            <h2 className="text-xs uppercase font-sans tracking-widest text-white/40 mb-6 font-semibold">{t.sobrePage.manifestoTag}</h2>
            <div className="text-xl md:text-3xl text-neutral-300 font-light leading-relaxed w-full">
              <TypewriterRichText
                speed={25}
                delay={400}
                parts={[
                  { text: t.sobrePage.manifestoP1 },
                  { text: t.sobrePage.manifestoHighlight, className: "text-white font-medium" }
                ]}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <AnimatedSection options={{ delay: 0.15 }}>
                <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-xl border-l border-primary/30 pl-5 text-balance font-sans">
                  {t.sobrePage.manifestoP2}
                </p>
                <div className="mt-8 pl-5">
                  <Link href="/contato">
                    <PrimaryButton>{t.sobrePage.ctaButton}</PrimaryButton>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
            
            <div className="relative flex items-center justify-end">
              <AnimatedSection options={{ delay: 0.3 }} className="w-full flex justify-end">
                <SystemMonitor />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BLOCO 02: OS QUATRO PILARES
      ========================================= */}
      <section className="py-32 w-full bg-[#050713] text-white border-y border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto max-w-[1440px] px-6 relative z-10">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 pb-8 border-b border-white/10">
            <div>
              <p className="text-xs uppercase font-sans tracking-widest text-indigo-400 mb-3 font-semibold">{t.sobrePage.pillarsTag}</p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-[76px] font-bold tracking-tighter text-white leading-[0.95]">
                {t.sobrePage.pillarsTitle}
              </h2>
            </div>
            <p className="text-base sm:text-lg text-neutral-300 font-light max-w-sm leading-relaxed hidden md:block">
              {t.sobrePage.pillarsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.sobrePage.pillars.map((item, i) => {
              const Icon = PILLAR_ICONS[i] || Server;
              return (
                <div key={i} className="pillar-card flex flex-col justify-between p-8 min-h-[360px] rounded-2xl bg-[#0A0E23]/90 border border-white/10 hover:border-indigo-500/50 hover:bg-[#0F1532] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group relative overflow-hidden">
                  <div className="flex justify-between items-center mb-8">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 shadow-[0_0_15px_rgba(29,77,255,0.2)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full tracking-widest uppercase">{item.tag}</span>
                  </div>
                  <div>
                    <span className="font-mono text-xs text-indigo-400 font-bold tracking-widest block mb-2">{item.num}</span>
                    <h3 className="font-display text-xl font-bold text-white mb-3 tracking-tight group-hover:text-indigo-200 transition-colors">{item.title}</h3>
                    <p className="text-neutral-300 font-normal text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          BLOCO 03: MANIFESTO DE VELOCIDADE
      ========================================= */}
      <section className="py-32 bg-[#03050C] text-white border-b border-white/10 relative overflow-hidden">
        <div className="container mx-auto max-w-[1440px] px-6 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-20 pb-8 border-b border-white/10">
            <AnimatedSection>
              <div>
                <p className="text-xs uppercase font-sans tracking-widest text-indigo-400 mb-3 font-semibold">{t.sobrePage.detailTag}</p>
                <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tighter text-white leading-[0.95]">
                  {t.sobrePage.detailTitle}
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection options={{ delay: 0.15 }}>
              <p className="text-neutral-300 font-light text-lg md:text-xl leading-relaxed max-w-xl text-balance">
                {t.sobrePage.detailSubtitle}
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.sobrePage.detailCards.map((item, i) => {
              const Icon = DETAIL_ICONS[i] || Activity;
              return (
                <AnimatedSection key={i} options={{ delay: i * 0.15 }}>
                  <div className="flex flex-col h-full bg-[#0A0E23]/80 border border-white/10 hover:border-indigo-500/40 hover:bg-[#0F1532] transition-all duration-500 rounded-3xl p-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                    <Icon className="w-8 h-8 text-indigo-400 mb-6" />
                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-neutral-300 font-normal leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================
          BLOCO 04 E 05: CORE STACK & ENGAJAMENTO
      ========================================= */}
      <section 
        className="py-24 border-t border-white/5 bg-[#020408] relative overflow-hidden"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left - 400;
          const y = e.clientY - rect.top - 400;
          
          if (!xCombinedTo.current && glowCombinedRef.current) {
            xCombinedTo.current = gsap.quickTo(glowCombinedRef.current, "x", { duration: 1.5, ease: "power2.out" });
            yCombinedTo.current = gsap.quickTo(glowCombinedRef.current, "y", { duration: 1.5, ease: "power2.out" });
            gsap.set(glowCombinedRef.current, { opacity: 0.45 });
          }
          
          if (xCombinedTo.current) {
            xCombinedTo.current(x);
            yCombinedTo.current(y);
          }
        }}
        onMouseLeave={() => {
          xCombinedTo.current = null;
          yCombinedTo.current = null;
          if (glowCombinedRef.current) {
            gsap.to(glowCombinedRef.current, { opacity: 0, duration: 1.5 });
          }
        }}
      >
        <div ref={glowCombinedRef} className="absolute w-[800px] h-[800px] bg-primary/15 rounded-full blur-[100px] opacity-0 pointer-events-none top-0 left-0 will-change-transform" />
        
        <div className="container mx-auto max-w-[1440px] px-6 flex flex-col gap-32">
          
          {/* MURAL DE AUTORIDADE TÉCNICA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            <AnimatedSection>
              <div>
                <h2 className="text-xs uppercase tracking-widest text-primary font-sans mb-3 font-semibold">{t.sobrePage.coreStackTag}</h2>
                <p className="font-display font-bold text-4xl md:text-5xl lg:text-5xl leading-[1.1] tracking-tighter text-white/95">
                  {t.sobrePage.coreStackTitle}
                </p>
                <p className="mt-6 text-neutral-400 font-light text-lg md:text-xl leading-relaxed text-balance">
                  {t.sobrePage.coreStackSubtitle}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection options={{ delay: 0.2 }}>
            <div className="w-full rounded-3xl overflow-hidden border border-white/[0.06] bg-[#07090e] shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
              <div className="bg-white/[0.02] border-b border-white/[0.08] px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="mx-auto flex items-center gap-2 text-[#8b949e] text-xs font-mono">
                  <Terminal className="w-3 h-3" />
                  <span>root@weblunar: ~/core-stack</span>
                </div>
              </div>
              <div className="p-6 md:p-10 font-mono text-sm md:text-base leading-relaxed overflow-x-auto">
                <div className="flex gap-4 mb-6">
                  <span className="text-[#3fb950] font-bold">➜</span>
                  <span className="text-[#58a6ff]">~</span>
                  <span className="text-white font-semibold">cat core_stack.config</span>
                </div>
                
                <div className="text-[#8b949e] pl-6 border-l-2 border-white/[0.08] ml-2 flex flex-col gap-4">
                  <p>
                    <span className="text-[#ff7b72] font-semibold">Runtime & Backend:</span> <br className="md:hidden"/> <span className="text-[#a5d6ff]">Node.js (TypeScript Strict Mode) // Docker Containers // Prisma ORM.</span>
                  </p>
                  <p>
                    <span className="text-[#ff7b72] font-semibold">Frontend & Framework:</span> <br className="md:hidden"/> <span className="text-[#a5d6ff]">Next.js (App Router) // React Server Components // Tailwind CSS.</span>
                  </p>
                  <p>
                    <span className="text-[#ff7b72] font-semibold">APIs & Cache:</span> <br className="md:hidden"/> <span className="text-[#a5d6ff]">tRPC Type-Safe APIs // PostgreSQL Database // Redis Caching.</span>
                  </p>
                  <p>
                    <span className="text-[#ff7b72] font-semibold">Motion & Scroll:</span> <br className="md:hidden"/> <span className="text-[#a5d6ff]">GSAP Engine // ScrollTrigger // Lenis Smooth Scroll.</span>
                  </p>
                </div>
                
                <div className="flex gap-4 mt-8 items-center">
                  <span className="text-[#3fb950] font-bold">➜</span>
                  <span className="text-[#58a6ff]">~</span>
                  <span className="w-2 h-5 bg-white/80 animate-pulse block" />
                </div>
              </div>
            </div>
          </AnimatedSection>
          </div>

          {/* MODELOS DE ENGAJAMENTO */}
          <div className="relative z-10">
            <AnimatedSection>
              <div className="text-center mb-16 max-w-4xl mx-auto">
                <h2 className="text-xs uppercase tracking-widest text-primary font-sans mb-3 font-semibold">{t.sobrePage.hireTag}</h2>
                <p className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tighter text-white/95 mb-6">
                  {t.sobrePage.hireTitle}
                </p>
                <p className="text-neutral-400 font-light leading-relaxed text-lg md:text-xl text-balance">
                  {t.sobrePage.hireSubtitle}
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {t.sobrePage.hireModels.map((item, i) => (
                <AnimatedSection key={i} options={{ delay: i * 0.15 }}>
                  <div className="bg-[#05070c]/80 border border-white/[0.05] hover:bg-[#05070c]/90 hover:border-white/[0.1] hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 lg:p-10 h-full group shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                    <CheckCircle2 className="w-8 h-8 text-primary mb-8 opacity-50 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-neutral-400 font-light text-base leading-relaxed">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

        </div>
      </section>

      </div>
    </div>
  );
}

function SystemMonitor() {
  const { t } = useLanguage();
  const [latencyMs, setLatencyMs] = useState(12);
  const [graphPts, setGraphPts] = useState(staticInitialPath);
  const [bars, setBars] = useState([88, 62, 76, 44]);
  const [reqsPerSec, setReqsPerSec] = useState(2.4);

  useEffect(() => {
    setGraphPts(generateLatencyPath());
    const interval = setInterval(() => {
      const newMs = Math.round(8 + Math.random() * 18);
      setLatencyMs(newMs);
      setGraphPts(generateLatencyPath());
      setBars([88, 62, 76, 44].map(b => Math.max(20, Math.min(98, b + (Math.random() - 0.5) * 20))));
      setReqsPerSec(parseFloat((2.0 + Math.random() * 1.2).toFixed(1)));
    }, 1600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm bg-[#080b12] border border-white/10 rounded-2xl p-6 font-mono text-xs shadow-2xl shadow-primary/5">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
          <span className="text-white/40 tracking-widest uppercase text-[10px]">{t.sobrePage.sysMonitor}</span>
        </div>
        <span className="text-white/20 text-[10px]">PROD / CLOUD</span>
      </div>

      <div className="mb-5">
        <div className="flex justify-between text-white/30 mb-2 text-[10px]">
          <span>{t.sobrePage.latency}</span>
          <span
            className="tabular-nums transition-all duration-500"
            style={{ color: latencyMs < 20 ? '#3fb950' : '#f59e0b' }}
          >
            {latencyMs}ms
          </span>
        </div>
        <svg viewBox="0 0 280 60" className="w-full h-12" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1d4dff" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#1d4dff" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d={pointsToFill(graphPts)} fill="url(#lineGrad2)" style={{ transition: 'd 0.8s ease-in-out' }} />
          <path
            d={pointsToPath(graphPts)}
            fill="none"
            stroke="#1d4dff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: 'd 0.8s ease-in-out' }}
          />
          <circle
            cx={280}
            cy={graphPts[graphPts.length - 1]}
            r="3"
            fill="#1d4dff"
            className="animate-pulse"
            style={{ transition: 'cy 0.8s ease-in-out' }}
          />
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: t.sobrePage.uptime, value: '99.98%', color: '#3fb950' },
          { label: t.sobrePage.ttfb, value: `${latencyMs + 4}ms`, color: '#a5d6ff' },
          { label: t.sobrePage.errors, value: '0.00%', color: '#3fb950' },
        ].map((m) => (
          <div key={m.label} className="bg-white/[0.03] rounded-lg p-2.5 text-center border border-white/5">
            <p className="text-white/30 text-[9px] mb-1 tracking-widest">{m.label}</p>
            <p className="font-bold text-[11px] tabular-nums transition-all duration-700" style={{ color: m.color }}>{m.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-white/30 text-[10px] mb-1.5">
          <span>{t.sobrePage.throughput}</span>
          <span className="tabular-nums transition-all duration-700">{reqsPerSec}k req/s</span>
        </div>
        {bars.map((w, i) => (
          <div key={i} className="h-1.5 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
              style={{ width: `${w}%`, transition: 'width 0.9s cubic-bezier(0.4,0,0.2,1)' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

type TextPart = { text: string; className?: string };

function TypewriterRichText({ parts, delay = 0, speed = 20 }: { parts: TextPart[], delay?: number, speed?: number }) {
  const [charCount, setCharCount] = useState(0);
  const [started, setStarted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalChars = parts.reduce((acc, part) => acc + part.text.length, 0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    
    let timeout: NodeJS.Timeout;
    const startDelay = setTimeout(() => {
      let count = 0;
      const type = () => {
        if (count <= totalChars) {
          setCharCount(count);
          count += 3;
          timeout = setTimeout(type, speed);
        }
      };
      type();
    }, delay);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeout);
    };
  }, [started, totalChars, speed, delay]);

  let typewriterCount = 0;

  return (
    <div ref={containerRef} className="w-full">
      {parts.map((part, i) => {
        const startIdx = typewriterCount;
        const endIdx = startIdx + part.text.length;
        typewriterCount = endIdx;

        if (charCount <= startIdx) {
          return (
            <span key={i} className={part.className} style={{ opacity: 0, visibility: 'hidden' }}>
              {part.text}
            </span>
          );
        }

        if (charCount >= endIdx) {
          return (
            <span key={i} className={part.className}>
              {part.text}
            </span>
          );
        }

        const typedStr = part.text.slice(0, charCount - startIdx);
        const untypedStr = part.text.slice(charCount - startIdx);

        return (
          <span key={i} className={part.className}>
            <span>{typedStr}</span>
            <span style={{ opacity: 0, visibility: 'hidden' }}>{untypedStr}</span>
          </span>
        );
      })}
    </div>
  );
}
