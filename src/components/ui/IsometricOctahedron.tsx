'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function IsometricOctahedron() {
  const svgRef = useRef<SVGSVGElement>(null);

  const size = 140; 
  
  // 6 vértices do octaedro (Perfeito para as 6 especialidades)
  const nodes = [
    [0, -size, 0], // 0: Top
    [0, size, 0],  // 1: Bottom
    [size, 0, 0],  // 2: Right
    [0, 0, size],  // 3: Front
    [-size, 0, 0], // 4: Left
    [0, 0, -size]  // 5: Back
  ];

  // Conexões (Arestas) - 12 arestas no total
  const edges = [
    // Top to Equator
    [0, 2], [0, 3], [0, 4], [0, 5],
    // Bottom to Equator
    [1, 2], [1, 3], [1, 4], [1, 5],
    // Equator square
    [2, 3], [3, 4], [4, 5], [5, 2]
  ];

  useEffect(() => {
    if (!svgRef.current) return;
    
    const lines = svgRef.current.querySelectorAll('.wire-line');
    const nodesG = svgRef.current.querySelectorAll('.wire-node');
    let animationFrame: number;

    // Motor Matemático 3D Isolado da Renderização do React
    const project = (node: number[], angleY: number, angleX: number, angleZ: number) => {
      const [x, y, z] = node;
      
      // Rotate Y
      const cosY = Math.cos(angleY), sinY = Math.sin(angleY);
      const x1 = x * cosY - z * sinY;
      const z1 = x * sinY + z * cosY;
      
      // Rotate X
      const cosX = Math.cos(angleX), sinX = Math.sin(angleX);
      const y2 = y * cosX - z1 * sinX;
      const z2 = y * sinX + z1 * cosX;

      // Rotate Z
      const cosZ = Math.cos(angleZ), sinZ = Math.sin(angleZ);
      const x3 = x1 * cosZ - y2 * sinZ;
      const y3 = x1 * sinZ + y2 * cosZ;

      // Simple pseudo-perspective
      const scale = 300 / (300 + z2);
      
      return { x: x3 * scale, y: y3 * scale, z: z2 };
    };

    const tl = gsap.timeline({ repeat: -1 });
    
    let isVisible = true;
    let isScrolledPast = false;

    const checkVisibilityState = () => {
      const shouldRun = isVisible && !isScrolledPast;
      if (shouldRun) {
        cancelAnimationFrame(animationFrame);
        animate();
        tl.play();
      } else {
        cancelAnimationFrame(animationFrame);
        tl.pause();
      }
    };

    const handleScroll = () => {
      const scrolled = typeof window !== 'undefined' && window.scrollY > (window.innerHeight || 800);
      if (scrolled !== isScrolledPast) {
        isScrolledPast = scrolled;
        checkVisibilityState();
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        checkVisibilityState();
      },
      { threshold: 0.05 }
    );
    
    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    // Atualização super rápida direto no DOM
    const animate = () => {
      if (!isVisible || isScrolledPast) return;

      const time = Date.now() / 3000;
      
      const currentAngleY = time;
      const currentAngleX = Math.PI / 6 + Math.cos(time * 1.5) * 0.2;
      const currentAngleZ = Math.sin(time * 0.5) * 0.1;

      const projectedNodes = nodes.map(n => project(n, currentAngleY, currentAngleX, currentAngleZ));

      edges.forEach((edge, i) => {
        const p1 = projectedNodes[edge[0]];
        const p2 = projectedNodes[edge[1]];
        if (lines[i]) {
          lines[i].setAttribute('x1', p1.x.toFixed(1));
          lines[i].setAttribute('y1', p1.y.toFixed(1));
          lines[i].setAttribute('x2', p2.x.toFixed(1));
          lines[i].setAttribute('y2', p2.y.toFixed(1));
          
          const avgZ = (p1.z + p2.z) / 2;
          const opacity = Math.max(0.1, 1 - (avgZ + size) / (size * 2.5));
          lines[i].setAttribute('opacity', opacity.toFixed(2));
        }
      });

      projectedNodes.forEach((p, i) => {
        if (nodesG[i]) {
          nodesG[i].setAttribute('x', (p.x - 4).toFixed(1));
          nodesG[i].setAttribute('y', (p.y - 4).toFixed(1));
          
          const opacity = Math.max(0.2, 1 - (p.z + size) / (size * 2.5));
          nodesG[i].setAttribute('opacity', opacity.toFixed(2));
        }
      });

      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();

    tl.fromTo(lines,
      { strokeDasharray: 400, strokeDashoffset: 400 },
      { strokeDashoffset: 0, duration: 2.5, stagger: 0.1, ease: "power2.out" }
    )
    .to({}, { duration: 1.5 })
    .to(lines,
      { strokeDashoffset: -400, duration: 2, stagger: { each: 0.1, from: "end" }, ease: "power2.inOut" }
    )
    .to({}, { duration: 0.5 });

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      tl.kill();
    };
  }, []);

  const initialProjected = nodes.map(n => {
    return { x: n[0], y: n[1] };
  });

  return (
    <div className="relative w-full max-w-[450px] md:max-w-[550px] lg:max-w-[650px] aspect-square flex items-center justify-center transform-gpu">
      {/* Brilho de Fundo otimizado com radial-gradient sem filtros pesados de blur */}
      <div 
        className="absolute inset-0 rounded-full opacity-60 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(29, 77, 255, 0.28) 0%, rgba(29, 77, 255, 0.08) 45%, transparent 70%)',
        }}
      />
      
      {/* Círculos Orbitais de Fundo (Estética de Radar/Performance) */}
      <div className="absolute w-3/4 h-3/4 border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute w-[90%] h-[90%] border border-primary/20 rounded-full border-dashed animate-[spin_30s_linear_infinite] pointer-events-none" />
      
      {/* Renderização Vetorial com drop-shadow único no container, sem recalcular em cada frame */}
      <svg 
        ref={svgRef} 
        viewBox="-200 -200 400 400" 
        className="w-full h-full overflow-visible relative z-10 pointer-events-none"
        style={{ filter: 'drop-shadow(0 0 10px rgba(29,77,255,0.75))' }}
      >
        {/* Wireframe Animado */}
        <g className="text-primary" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {edges.map((edge, i) => {
            const p1 = initialProjected[edge[0]];
            const p2 = initialProjected[edge[1]];
            return (
              <line 
                key={`edge-${i}`} 
                className="wire-line"
                x1={p1.x} y1={p1.y} 
                x2={p2.x} y2={p2.y}
              />
            );
          })}
          
          {/* Vértices Geométricos (Pontos das 6 Especialidades) */}
          {initialProjected.map((p, i) => (
            <rect 
              key={`node-${i}`} 
              className="wire-node fill-bg stroke-primary stroke-2"
              x={p.x - 4} y={p.y - 4} width="8" height="8" 
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
