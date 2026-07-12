'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { IsometricWireframe } from '@/components/ui/IsometricWireframe';
import { Server, Zap, Code2, Shield, Activity, Lock, Terminal, Box, CheckCircle2, ArrowRight } from 'lucide-react';
import { siteContent } from '@/content';
import gsap from 'gsap';
import Link from 'next/link';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Generates a random latency-like SVG path with 15 points
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

export default function SobrePage() {
  useLenis();
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const pillarsContainerRef = useRef<HTMLDivElement>(null);

  const glowCombinedRef = useRef<HTMLDivElement>(null);
  const xCombinedTo = useRef<any>(null);
  const yCombinedTo = useRef<any>(null);

  // Monitor state is handled inside the <SystemMonitor /> component below to prevent full page re-renders.

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const container = pillarsContainerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('.pillar-card');

    // Free scroll animation: cards rise from staggered depths and align perfectly as you scroll past
    const tl = gsap.fromTo(cards,
      { 
        y: (i) => 150 + i * 70, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 92%',   // starts when container is near bottom of screen
          end: 'bottom 85%',  // aligns perfectly when container scrolls into view
          scrub: 1.2,         // smooth scrub lag
        }
      }
    );

    return () => {
      if (tl.scrollTrigger) tl.scrollTrigger.kill();
      tl.kill();
    };
  }, []);

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
      // Desliga o cálculo pesado se já rolou pra fora da Hero
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
      <div ref={heroRef} className="fixed top-0 left-0 h-screen w-full flex flex-col items-center justify-center z-0 overflow-hidden pt-20 bg-bg">
        {/* Deep blue radial glow (Mouse Tracking) */}
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

        {/* Floating background grids for deep perspective */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Esquerda: Conteúdo de Texto */}
          <div className="flex flex-col items-start text-left">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(29,77,255,0.4)]" />
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
                  // OPERAÇÕES E DIRETRIZES DE ENGENHARIA
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-6 leading-tight">
                A Infraestrutura Oculta <br className="hidden lg:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Por Trás de Interfaces
                </span> <br className="hidden lg:block"/>
                De <span className="italic">Alto Padrão</span>
              </h1>
            </AnimatedSection>
            <AnimatedSection options={{ delay: 0.2 }}>
              <p className="text-base md:text-lg text-text-muted font-light leading-relaxed max-w-xl border-l border-primary/30 pl-5 text-balance">
                Não projetamos páginas estáticas. Construímos ecossistemas digitais robustos, projetados matematicamente para suportar tráfego severo, proteger margens de lucro e expandir operações sem gargalos técnicos.
              </p>
            </AnimatedSection>
          </div>
          
          {/* Direita: Wireframe Isométrico */}
          <AnimatedSection options={{ delay: 0.4 }} className="flex items-center justify-center lg:justify-end w-full">
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
      <section className="py-32 px-6 border-y border-white/5 bg-[#05070B] relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          {/* Main text in full width with Typewriter Effect */}
          <div className="mb-16 max-w-5xl">
            <h2 className="text-xs uppercase font-mono tracking-widest text-white/40 mb-6 font-bold">[ O MANIFESTO CORPORATIVO ]</h2>
            <div className="text-xl md:text-3xl text-neutral-300 font-light leading-relaxed">
              <TypewriterRichText
                speed={25}
                delay={400}
                parts={[
                  { text: "No mercado digital de alta performance, a infraestrutura tecnológica é a linha divisória entre a escala previsível e o colapso. Quando campanhas de tráfego pago tracionam e ecossistemas enfrentam picos severos de acessos, arquiteturas genéricas não suportam a carga. Nesse nível de operation, " },
                  { text: "milissegundos de latência destroem taxas de conversão e queimam capital.", className: "text-white font-medium" }
                ]}
              />
            </div>
          </div>
          
          {/* Sub-text and animation split in 2 columns below */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: sub-text */}
            <div>
              <AnimatedSection options={{ delay: 0.15 }}>
                <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
                  A WEB LUNAR opera estritamente nos bastidores da tecnologia de ponta. Afastamos o clichê das biografias tradicionais para entregar o que empresas sérias e agências de software houses procuram: previsibilidade, velocidade brutal e arquitetura modular. Atuamos de forma cirúrgica na intersecção entre o design estritamente minimalista e a engenharia bruta de software.
                </p>
              </AnimatedSection>
            </div>
            
            {/* Right: Live Performance Monitor */}
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
      <section className="py-28 w-full bg-white border-y border-neutral-100 relative overflow-hidden">
        <div className="w-full max-w-[92%] mx-auto relative z-10">

          {/* Header — left-aligned, editorial style */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 pb-8 border-b border-neutral-100">
            <div>
              <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-primary mb-3 font-bold">[ ARQUITETURA WEB LUNAR ]</p>
              <h2 className="font-display text-5xl md:text-7xl lg:text-[80px] font-semibold tracking-tighter text-neutral-950 leading-[0.9]">
                Os Quatro Pilares
              </h2>
            </div>
            <p className="text-lg text-neutral-900 font-light max-w-sm leading-relaxed hidden md:block">
              Princípios de engenharia que definem cada linha de código que entregamos.
            </p>
          </div>

          {/* Pillars — horizontal editorial columns */}
          <div ref={pillarsContainerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-100">
            {[
              {
                icon: <Server className="w-5 h-5" />,
                num: "01",
                title: "Engenharia Full-Stack Desacoplada",
                desc: "Separamos a interface visual (Front-End) do processamento (Back-End). A interface roda globalmente em redes ultra velozes, e os dados sensíveis permanecem isolados e seguros.",
                tag: "Architecture"
              },
              {
                icon: <Zap className="w-5 h-5" />,
                num: "02",
                title: "Desempenho Sub-Segundo (Zero Latência)",
                desc: "Cada script, imagem e requisição ao banco passa por otimização estrita. Usamos Server Components para garantir que o primeiro render aconteça em frações de segundo.",
                tag: "Performance"
              },
              {
                icon: <Code2 className="w-5 h-5" />,
                num: "03",
                title: "Type-Safe End-to-End & Escalabilidade",
                desc: "Códigos 100% tipados de ponta a ponta que eliminam falhas entre a interface e o servidor, garantindo estabilidade para acoplar novos módulos sem quebras.",
                tag: "Engineering"
              },
              {
                icon: <Shield className="w-5 h-5" />,
                num: "04",
                title: "Prontidão para Auditoria Técnica",
                desc: "Projetos limpos, sem caixas-pretas ou código confuso. Entregamos infraestrutura documentada, componentizada e pronta para auditorias de CTOs.",
                tag: "Quality"
              }
            ].map((item, i) => (
              <div key={i} className="pillar-card flex flex-col justify-between p-8 min-h-[380px] bg-white group hover:bg-neutral-50 transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="font-mono text-xs text-neutral-400 group-hover:text-primary transition-colors">{item.tag}</span>
                </div>
                <div className="mt-8">
                  <span className="font-mono text-xs text-neutral-300 block mb-2">{item.num}</span>
                  <h3 className="font-display text-xl font-bold text-neutral-950 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-neutral-500 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          BLOCO 03: MANIFESTO DE VELOCIDADE
      ========================================= */}
      <section className="py-28 px-6 bg-[#FAFAFA] border-b border-neutral-100 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-24 pb-8 border-b border-neutral-200">
            <AnimatedSection>
              <div>
                <p className="text-[10px] uppercase font-mono tracking-[0.3em] text-primary mb-3 font-bold">[ ENGENHARIA DE DETALHE ]</p>
                <h2 className="font-display font-semibold text-5xl md:text-6xl tracking-tighter text-neutral-900 leading-[0.95]">
                  Velocidade Brutal. <br/>
                  Segurança Inviolável.
                </h2>
              </div>
            </AnimatedSection>
            
            <AnimatedSection options={{ delay: 0.15 }}>
              <p className="text-neutral-600 font-light text-lg md:text-xl leading-relaxed max-w-xl text-balance">
                Interfaces refinadas não servem para nada se falharem sob estresse técnico. Nosso desenvolvimento foca em garantir imunidade contra gargalos e vazamento de dados.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Activity className="w-8 h-8 text-primary mb-6" />,
                title: "Analytics Avançado & Rastreamento Privado",
                desc: "Implementação de trackers otimizados que contornam bloqueadores de anúncios sem sacrificar a velocidade da página."
              },
              {
                icon: <Box className="w-8 h-8 text-primary mb-6" />,
                title: "Ecossistemas de Dados Comportamentais",
                desc: "Integração profunda com ferramentas de mapas de calor e gravação de sessão sem inserção de scripts pesados de terceiros."
              },
              {
                icon: <Lock className="w-8 h-8 text-primary mb-6" />,
                title: "Segurança de Dados e Conformidade",
                desc: "Estruturas preparadas com as melhores práticas de proteção de tráfego, mitigação de vulnerabilidades em formulários e APIs protegidas."
              }
            ].map((item, i) => (
              <AnimatedSection key={i} options={{ delay: i * 0.15 }}>
                <div className="flex flex-col h-full bg-white border border-neutral-100 hover:border-primary/20 hover:shadow-lg transition-all duration-500 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                  {item.icon}
                  <h3 className="text-xl font-bold text-neutral-900 mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-neutral-500 font-light leading-relaxed text-sm">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          BLOCO 04 E 05: CORE STACK & ENGAJAMENTO
      ========================================= */}
      <section 
        className="py-24 px-6 border-t border-white/5 bg-[#020408] relative overflow-hidden"
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
        {/* Glow interativo que segue o mouse para toda a seção */}
        <div ref={glowCombinedRef} className="absolute w-[800px] h-[800px] bg-primary/15 rounded-full blur-[100px] opacity-0 pointer-events-none top-0 left-0 will-change-transform" />
        
        <div className="w-full max-w-7xl mx-auto flex flex-col gap-32">
          
          {/* MURAL DE AUTORIDADE TÉCNICA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
            <AnimatedSection>
              <div>
                <h2 className="text-xs uppercase tracking-widest text-primary font-mono mb-3 font-bold">[ CORE STACK ]</h2>
                <p className="font-display font-bold text-4xl md:text-5xl lg:text-5xl leading-[1.1] tracking-tighter text-white/95">
                  Mural de Autoridade Técnica
                </p>
                <p className="mt-6 text-neutral-400 font-light text-lg md:text-xl leading-relaxed text-balance">
                  Para agências e empresas que inspecionam nossa infraestrutura, operamos rigorosamente com a vanguarda tecnológica do mercado global de software:
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection options={{ delay: 0.2 }}>
            {/* TERMINAL UI (SOLID PREMIUM) */}
            <div className="w-full rounded-3xl overflow-hidden border border-white/[0.06] bg-[#07090e] shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
              {/* Terminal Header */}
              <div className="bg-white/[0.02] border-b border-white/[0.08] px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="mx-auto flex items-center gap-2 text-[#8b949e] text-xs font-mono">
                  <Terminal className="w-3 h-3" />
                  <span>root@weblunar: ~/stack-ativa-contra-gargalos</span>
                </div>
              </div>
              {/* Terminal Body */}
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
                    <span className="text-[#ff7b72] font-semibold">Frontend & Framework:</span> <br className="md:hidden"/> <span className="text-[#a5d6ff]">Next.js (App Router) // React Server Components // Tailwind CSS // Shadcn/UI.</span>
                  </p>
                  <p>
                    <span className="text-[#ff7b72] font-semibold">Comunicação & Cache:</span> <br className="md:hidden"/> <span className="text-[#a5d6ff]">tRPC Type-Safe APIs // PostgreSQL Database // Redis Caching.</span>
                  </p>
                  <p>
                    <span className="text-[#ff7b72] font-semibold">Animações Fluidas:</span> <br className="md:hidden"/> <span className="text-[#a5d6ff]">GSAP Engine // ScrollTrigger // Lenis Smooth Scroll.</span>
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
                <h2 className="text-xs uppercase tracking-widest text-primary font-mono mb-3 font-bold">[ CONTRATAÇÃO ]</h2>
                <p className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tighter text-white/95 mb-6">
                  Modelos de Engajamento
                </p>
                <p className="text-neutral-400 font-light leading-relaxed text-lg md:text-xl text-balance">
                  Não atuamos com o formato informal do mercado tradicional de freelancers. A WEB LUNAR estabelece relações corporativas estruturadas para atender demandas específicas de crescimento:
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Desenvolvimento de Escopo Fechado",
                  desc: "Engenharia pontual de ponta a ponta, desde o desenho da arquitetura técnica ao deploy final em ambientes de produção de alta performance."
                },
                {
                  title: "Outsourcing e Transbordo Técnico",
                  desc: "Alocação contínua de capacidade sênior para agências de design ou lançamentos que exigem um parceiro confiável para absorver demandas complexas sob prazos rígidos."
                },
                {
                  title: "Contratos de Evolução e SLA",
                  desc: "Acordos de nível de serviço mensais focados em monitoramento ativo, auditoria de performance, otimização de conversão e atualizações de infraestrutura."
                }
              ].map((item, i) => (
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

      {/* =========================================
          TEASER DE SERVIÇOS
      ========================================= */}
      <section className="py-24 lg:py-32 px-6 border-t border-white/5 bg-[#05070B] relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/10 blur-[120px] rounded-full w-full max-w-4xl h-[400px] pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <AnimatedSection>
            <h2 className="text-xs uppercase tracking-widest text-primary font-mono mb-6 font-bold">[ Nossas Especialidades ]</h2>
            <p className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tighter text-white/95 mb-8">
              Sites e sistemas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 italic pr-1">planejados</span> para gerar resultados reais.
            </p>
            <p className="text-neutral-400 font-light leading-relaxed text-lg md:text-xl text-balance mb-12 max-w-2xl mx-auto">
              Descubra como nossa engenharia digital atua em Landing Pages, E-commerce, Integrações e Arquiteturas de Alta Performance.
            </p>
          </AnimatedSection>
          
          <AnimatedSection options={{ delay: 0.2 }}>
            <Link 
              href="/servicos"
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-bg px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
            >
              <span className="relative z-10">Explorar Especialidades</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      </div> {/* END OF SCROLLING OVERLAY */}
    </div>
  );
}

function SystemMonitor() {
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
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
          <span className="text-white/40 tracking-widest uppercase text-[10px]">SYS MONITOR</span>
        </div>
        <span className="text-white/20 text-[10px]">PROD / BR-1</span>
      </div>

      {/* Live Latency Graph */}
      <div className="mb-5">
        <div className="flex justify-between text-white/30 mb-2 text-[10px]">
          <span>LATENCY</span>
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

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-3 mb-5">
        {[
          { label: 'UPTIME', value: '99.98%', color: '#3fb950' },
          { label: 'TTFB', value: `${latencyMs + 4}ms`, color: '#a5d6ff' },
          { label: 'ERRORS', value: '0.00%', color: '#3fb950' },
        ].map((m) => (
          <div key={m.label} className="bg-white/[0.03] rounded-lg p-2.5 text-center border border-white/5">
            <p className="text-white/30 text-[9px] mb-1 tracking-widest">{m.label}</p>
            <p className="font-bold text-[11px] tabular-nums transition-all duration-700" style={{ color: m.color }}>{m.value}</p>
          </div>
        ))}
      </div>

      {/* Live Throughput Bars */}
      <div className="space-y-2">
        <div className="flex justify-between text-white/30 text-[10px] mb-1.5">
          <span>THROUGHPUT</span>
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
          count += 3; // Reveal 3 characters at a time for ultra-fast, smooth pop-in
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
    <div ref={containerRef} className="relative w-full">
      {/* Invisible Ghost layer to reserve exact wrapping height */}
      <div className="invisible pointer-events-none select-none opacity-0" aria-hidden="true">
        {parts.map((part, i) => (
          <span key={i} className={part.className}>
            {part.text}
          </span>
        ))}
      </div>

      {/* Actual typewriter overlay */}
      <div className="absolute inset-0 w-full h-full">
        {parts.map((part, i) => {
          const startIdx = typewriterCount;
          const endIdx = startIdx + part.text.length;
          typewriterCount = endIdx;

          if (charCount <= startIdx) return null;

          let displayStr = part.text;
          if (charCount < endIdx) {
            displayStr = part.text.slice(0, charCount - startIdx);
          }

          return (
            <span key={i} className={part.className}>
              {displayStr}
            </span>
          );
        })}
      </div>
    </div>
  );
}
