'use client';

import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  vx: number;
  vy: number;
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  dx: number;
  dy: number;
  length: number;
  speed: number;
  alpha: number;
  life: number;
  maxLife: number;
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const starColors = [
      '255, 255, 255',   // Crisp White
      '224, 231, 255', // Soft Indigo White
      '192, 132, 252', // Soft Purple
      '147, 197, 253', // Soft Sky Blue
    ];

    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    let lastShootingStarTime = Date.now();

    const initStars = () => {
      stars = [];
      const count = Math.min(Math.max(Math.floor((width * height) / 6000), 90), 220);

      for (let i = 0; i < count; i++) {
        const baseAlpha = Math.random() * 0.5 + 0.2;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.2 + 0.5, // Crisp 0.5px to 1.7px star points
          baseAlpha,
          alpha: baseAlpha,
          twinkleSpeed: Math.random() * 0.02 + 0.008,
          twinklePhase: Math.random() * Math.PI * 2,
          vx: (Math.random() - 0.5) * 0.12, // Slow cosmic float
          vy: (Math.random() - 0.5) * 0.12,
          color: starColors[Math.floor(Math.random() * starColors.length)],
        });
      }
    };

    const spawnShootingStar = () => {
      const angle = (Math.random() * 15 + 30) * (Math.PI / 180);
      const speed = Math.random() * 7 + 8;
      const startX = Math.random() * (width * 0.85);
      const startY = Math.random() * (height * 0.35);

      shootingStars.push({
        x: startX,
        y: startY,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length: Math.random() * 70 + 40,
        speed,
        alpha: 1,
        life: 0,
        maxLife: Math.random() * 30 + 35,
      });
    };

    initStars();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initStars();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const now = Date.now();

      // Periodically spawn shooting star (every 4-7 seconds)
      if (now - lastShootingStarTime > Math.random() * 3000 + 4000) {
        if (shootingStars.length < 2) {
          spawnShootingStar();
        }
        lastShootingStarTime = now;
      }

      // --- Stars Rendering ---
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];

        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;

        s.twinklePhase += s.twinkleSpeed;
        const twinkle = Math.sin(s.twinklePhase) * 0.25;
        let currentAlpha = Math.min(Math.max(s.baseAlpha + twinkle, 0.15), 0.9);

        // Friendly mouse repulsion & brightening
        const dx = mouse.x - s.x;
        const dy = mouse.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let offsetX = 0;
        let offsetY = 0;

        if (dist < mouse.radius) {
          const factor = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          offsetX = -Math.cos(angle) * factor * 12;
          offsetY = -Math.sin(angle) * factor * 12;
          currentAlpha = Math.min(currentAlpha + factor * 0.4, 1);
        }

        const renderX = s.x + offsetX;
        const renderY = s.y + offsetY;

        // Render pure star point
        ctx.beginPath();
        ctx.arc(renderX, renderY, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${currentAlpha})`;
        ctx.fill();
      }

      // --- Shooting Stars Rendering ---
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life++;

        ss.x += ss.dx;
        ss.y += ss.dy;

        const progress = ss.life / ss.maxLife;
        ss.alpha = Math.max(1 - progress, 0);

        const tailX = ss.x - (ss.dx / ss.speed) * ss.length;
        const tailY = ss.y - (ss.dy / ss.speed) * ss.length;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grad.addColorStop(0.7, `rgba(165, 180, 252, ${ss.alpha * 0.6})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${ss.alpha * 0.95})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.2;
        ctx.lineCap = 'round';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 1.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${ss.alpha})`;
        ctx.fill();

        if (ss.life >= ss.maxLife || ss.x > width + 100 || ss.y > height + 100) {
          shootingStars.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-transparent"
    />
  );
}
