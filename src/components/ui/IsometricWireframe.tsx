'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function IsometricWireframe() {
  const svgRef = useRef<SVGSVGElement>(null);

  const size = 110; 
  
  // 8 vértices do cubo
  const nodes = [
    [-size, -size, -size], [ size, -size, -size], [ size,  size, -size], [-size,  size, -size],
    [-size, -size,  size], [ size, -size,  size], [ size,  size,  size], [-size,  size,  size],
  ];

  // Conexões (Arestas)
  const edges = [
    [0, 1], [1, 2], [2, 3], [3, 0],
    [4, 5], [5, 6], [6, 7], [7, 4],
    [0, 4], [1, 5], [2, 6], [3, 7]
  ];

  useEffect(() => {
    if (!svgRef.current) return;
    
    const lines = svgRef.current.querySelectorAll('line');
    const rects = svgRef.current.querySelectorAll('rect');
    let animationFrame: number;

    // Motor Matemático 3D Isolado da Renderização do React
    const project = (node: number[], angleY: number, angleX: number) => {
      const [x, y, z] = node;
      const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;
      const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
      const y2 = y * cosX - z1 * sinX;
      return { x: x1, y: y2 };
    };

    // Atualização super rápida direto no DOM (bypassa o React e não causa re-renders de 60fps)
    const animate = () => {
      const time = Date.now() / 2500;
      const currentAngleY = Math.PI / 4 + Math.sin(time) * 0.15;
      const currentAngleX = Math.PI / 6 + Math.cos(time * 0.8) * 0.1;

      const projectedNodes = nodes.map(n => project(n, currentAngleY, currentAngleX));

      edges.forEach((edge, i) => {
        const p1 = projectedNodes[edge[0]];
        const p2 = projectedNodes[edge[1]];
        if (lines[i]) {
          lines[i].setAttribute('x1', p1.x.toString());
          lines[i].setAttribute('y1', p1.y.toString());
          lines[i].setAttribute('x2', p2.x.toString());
          lines[i].setAttribute('y2', p2.y.toString());
        }
      });

      projectedNodes.forEach((p, i) => {
        if (rects[i]) {
          rects[i].setAttribute('x', (p.x - 4).toString());
          rects[i].setAttribute('y', (p.y - 4).toString());
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();

    // Timeline de Montagem/Desmontagem
    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(lines,
      { strokeDasharray: 400, strokeDashoffset: 400 },
      { strokeDashoffset: 0, duration: 2, stagger: 0.1, ease: "power2.out" }
    )
    .to({}, { duration: 2 })
    .to(lines,
      { strokeDashoffset: -400, duration: 1.5, stagger: { each: 0.1, from: "end" }, ease: "power2.in" }
    );

    return () => {
      cancelAnimationFrame(animationFrame);
      tl.kill();
    };
  }, []);

  // Projeção estática inicial apenas para o primeiro render do React
  const initialProjected = nodes.map(n => {
    const angleY = Math.PI / 4;
    const angleX = Math.PI / 6;
    const [x, y, z] = n;
    const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
    const x1 = x * cosY - z * sinY;
    const z1 = x * sinY + z * cosY;
    const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
    const y2 = y * cosX - z1 * sinX;
    return { x: x1, y: y2 };
  });

  return (
    <div className="relative w-full max-w-[450px] md:max-w-[550px] lg:max-w-[650px] aspect-square flex items-center justify-center">
      {/* Brilho de Fundo (Glow Tecnológico) */}
      <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse opacity-60 pointer-events-none" />
      
      {/* Renderização Vetorial */}
      <svg ref={svgRef} viewBox="-200 -200 400 400" className="w-full h-full overflow-visible relative z-10 pointer-events-none">
        
        {/* Wireframe Animado */}
        <g className="text-primary" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {edges.map((edge, i) => {
            const p1 = initialProjected[edge[0]];
            const p2 = initialProjected[edge[1]];
            return (
              <line 
                key={`edge-${i}`} 
                x1={p1.x} y1={p1.y} 
                x2={p2.x} y2={p2.y}
                style={{ filter: 'drop-shadow(0 0 6px rgba(29,77,255,0.7))' }}
              />
            );
          })}
          
          {/* Vértices Geométricos Quadrados */}
          {initialProjected.map((p, i) => (
            <rect 
              key={`node-${i}`} 
              x={p.x - 4} y={p.y - 4} width="8" height="8" 
              className="fill-bg stroke-primary stroke-2"
              style={{ filter: 'drop-shadow(0 0 8px rgba(29,77,255,1))' }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
