'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function IdeaToCodeAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const q  = (s: string) => root.querySelector(s);
    const qa = (s: string): Element[] => Array.from(root.querySelectorAll(s));

    // Seleciona todos os elementos do "Sketch/UI"
    const shapes = qa('.shape-el');
    const fills = qa('.fill-el');
    const cta = q('.cta-btn');
    const graphLine = q('.graph-line');

    // ── ESTADO INICIAL (Rascunho Desalinhado) ──────────────────────
    // Para cada forma, aplicamos uma leve rotação e deslocamento aleatório
    shapes.forEach((el) => {
      // Usamos uma string no dataset ou geramos determinístico baseado no index
      const i = Array.from(shapes).indexOf(el);
      const rot = (i % 2 === 0 ? 1 : -1) * (1.5 + (i % 2));
      const dx = (i % 3 === 0 ? 1 : -1) * 2;
      const dy = (i % 2 === 0 ? 1 : -1) * 2;
      
      // Definimos o length aproximado para o dashoffset (stroke drawing)
      const pathLength = (el as SVGGeometryElement).getTotalLength?.() || 1000;
      
      gsap.set(el, { 
        rotation: rot, 
        x: dx, 
        y: dy, 
        opacity: 0,
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        transformOrigin: '50% 50%' 
      });
    });

    gsap.set(fills, { opacity: 0 });
    gsap.set(graphLine, { opacity: 0, strokeDasharray: 300, strokeDashoffset: 300 });

    // ── MASTER TIMELINE ───────────────────────────────────────────
    const tl = gsap.timeline({
      onComplete: function() {
        this.play('loop_start');
      },
      defaults: { ease: 'power2.out' }
    });

    // FASE 1: DESENHO (Sketch) - ≈1.5s
    // As linhas são desenhadas como se fossem à mão (só acontece na primeira vez)
    tl.to(shapes, {
      opacity: 0.4,
      strokeDashoffset: 0,
      duration: 1.5,
      stagger: 0.05,
      ease: 'power1.inOut'
    })
    .to({}, { duration: 0.2 }) // Hold
    .addLabel('loop_start');

    // FASE 2: ALINHAMENTO (Wireframe) - ≈0.8s
    // Tudo se encaixa perfeitamente no grid (Auto-Layout visual)
    tl.to(shapes, {
      rotation: 0,
      x: 0,
      y: 0,
      opacity: 0.8,
      duration: 0.8,
      ease: 'back.out(1.2)'
    }, 'align')
    // Ajusta as cores das bordas para o estilo premium
    .to(shapes, {
      stroke: 'rgba(255, 255, 255, 0.15)',
      duration: 0.5
    }, 'align')
    .to({}, { duration: 0.3 }); // Hold

    // FASE 3: UI FINAL (Cores e Fills) - ≈1.2s
    tl.to(fills, {
      opacity: 1,
      duration: 0.8,
      stagger: 0.05,
      ease: 'power2.out'
    }, 'ui')
    .to(graphLine, {
      opacity: 1,
      strokeDashoffset: 0,
      duration: 1,
      ease: 'power2.out'
    }, 'ui+=0.2')
    .to({}, { duration: 1.5 }); // Hold para apreciar o resultado

    // FASE 4: RESET SUAVE (Volta ao Sketch)
    // Para não sumir por completo, apenas apagamos o preenchimento
    // e devolvemos os traços ao estado de rascunho bagunçado
    tl.to([fills, graphLine], {
      opacity: 0,
      duration: 0.6,
      ease: 'power1.inOut'
    }, 'reset')
    .to(shapes, {
      rotation: (i) => (i % 2 === 0 ? 1 : -1) * (1.5 + (i % 2)),
      x: (i) => (i % 3 === 0 ? 1 : -1) * 2,
      y: (i) => (i % 2 === 0 ? 1 : -1) * 2,
      stroke: '#DDE4FF',
      opacity: 0.4,
      duration: 0.8,
      ease: 'power2.inOut'
    }, 'reset+=0.2')
    .to({}, { duration: 0.5 }); // Hold antes de recomeçar o loop

    return () => { tl.kill(); };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[500px] sm:max-w-[560px] md:max-w-[620px] lg:max-w-[660px] aspect-square flex items-center justify-center overflow-visible"
    >
      {/* Ambient glow sutil */}
      <div
        className="absolute inset-0 rounded-full blur-[100px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #2D6BFF 0%, transparent 70%)' }}
      />

      <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible select-none">
        <defs>
          {/* Brilho neon azul para destaques */}
          <filter id="gf-blue" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── BASE UI (Strokes e Fills unificados) ── */}
        <g>
          {/* Browser Frame */}
          <rect className="fill-el" x="20" y="40" width="360" height="320" rx="10" fill="#05070D" />
          <rect className="shape-el" x="20" y="40" width="360" height="320" rx="10" fill="none" stroke="#DDE4FF" strokeWidth="1.5" />
          
          {/* Topbar Fill */}
          <rect className="fill-el" x="20" y="40" width="360" height="40" rx="10" fill="#09101f" />
          <line className="shape-el" x1="20" y1="80" x2="380" y2="80" stroke="#DDE4FF" strokeWidth="1.5" />

          {/* OS Dots */}
          <circle className="fill-el" cx="40" cy="60" r="4.5" fill="#ff5f56" />
          <circle className="shape-el" cx="40" cy="60" r="4.5" fill="none" stroke="#DDE4FF" strokeWidth="1.2" />
          
          <circle className="fill-el" cx="55" cy="60" r="4.5" fill="#ffbd2e" />
          <circle className="shape-el" cx="55" cy="60" r="4.5" fill="none" stroke="#DDE4FF" strokeWidth="1.2" />
          
          <circle className="fill-el" cx="70" cy="60" r="4.5" fill="#27c93f" />
          <circle className="shape-el" cx="70" cy="60" r="4.5" fill="none" stroke="#DDE4FF" strokeWidth="1.2" />

          {/* URL Bar */}
          <rect className="fill-el" x="120" y="50" width="160" height="20" rx="10" fill="#0d1525" />
          <rect className="shape-el" x="120" y="50" width="160" height="20" rx="10" fill="none" stroke="#DDE4FF" strokeWidth="1.2" />

          {/* Linhas Internas Navbar */}
          <rect className="fill-el" x="150" y="58" width="100" height="4" rx="2" fill="rgba(255,255,255,0.1)" />
          <rect className="shape-el" x="150" y="58" width="100" height="4" rx="2" fill="none" stroke="#DDE4FF" strokeWidth="1" />

          {/* Content Cards */}
          <rect className="fill-el" x="40" y="100" width="90" height="80" rx="8" fill="#09101f" />
          <rect className="shape-el" x="40" y="100" width="90" height="80" rx="8" fill="none" stroke="#DDE4FF" strokeWidth="1.2" />
          <rect className="fill-el" x="50" y="115" width="50" height="6" rx="3" fill="#2D6BFF" />
          <rect className="shape-el" x="50" y="115" width="50" height="6" rx="3" fill="none" stroke="#DDE4FF" strokeWidth="1" />
          
          <rect className="fill-el" x="155" y="100" width="90" height="80" rx="8" fill="#09101f" />
          <rect className="shape-el" x="155" y="100" width="90" height="80" rx="8" fill="none" stroke="#DDE4FF" strokeWidth="1.2" />
          <rect className="fill-el" x="165" y="115" width="40" height="6" rx="3" fill="#DDE4FF" fillOpacity="0.8" />
          <rect className="shape-el" x="165" y="115" width="40" height="6" rx="3" fill="none" stroke="#DDE4FF" strokeWidth="1" />

          <rect className="fill-el" x="270" y="100" width="90" height="80" rx="8" fill="#09101f" />
          <rect className="shape-el" x="270" y="100" width="90" height="80" rx="8" fill="none" stroke="#DDE4FF" strokeWidth="1.2" />
          <rect className="fill-el" x="280" y="115" width="60" height="6" rx="3" fill="#DDE4FF" fillOpacity="0.8" />
          <rect className="shape-el" x="280" y="115" width="60" height="6" rx="3" fill="none" stroke="#DDE4FF" strokeWidth="1" />

          {/* Graph Area */}
          <rect className="fill-el" x="40" y="200" width="205" height="130" rx="8" fill="#09101f" />
          <rect className="shape-el" x="40" y="200" width="205" height="130" rx="8" fill="none" stroke="#DDE4FF" strokeWidth="1.2" />
          
          {/* Graph Line */}
          <path className="graph-line" d="M 50 290 Q 90 230 130 260 T 230 230" fill="none" stroke="#4A8BFF" strokeWidth="2.5" strokeLinecap="round" filter="url(#gf-blue)" />

          {/* Sidebar */}
          <rect className="fill-el" x="265" y="200" width="95" height="130" rx="8" fill="#09101f" />
          <rect className="shape-el" x="265" y="200" width="95" height="130" rx="8" fill="none" stroke="#DDE4FF" strokeWidth="1.2" />
          
          {/* Avatar/Profile in Sidebar */}
          <circle className="fill-el" cx="312" cy="235" r="16" fill="#111932" />
          <circle className="shape-el" cx="312" cy="235" r="16" fill="none" stroke="#DDE4FF" strokeWidth="1.2" />
          
          {/* CTA Button */}
          <g className="cta-btn">
            <rect className="fill-el" x="275" y="280" width="75" height="26" rx="13" fill="#2D6BFF" filter="url(#gf-blue)" />
            <rect className="shape-el" x="275" y="280" width="75" height="26" rx="13" fill="none" stroke="#DDE4FF" strokeWidth="1.2" />
            <rect className="fill-el" x="292" y="291" width="40" height="4" rx="2" fill="white" />
            <rect className="shape-el" x="292" y="291" width="40" height="4" rx="2" fill="none" stroke="#DDE4FF" strokeWidth="1" />
          </g>

        </g>

      </svg>
    </div>
  );
}
