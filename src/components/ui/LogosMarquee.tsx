'use client';

import React from 'react';
import { Marquee } from '@/components/ui/Marquee';

const LOGOS = [
  '/White-min.png',
  '/Ativo-1-1.png',
  '/Group-1.png',
  '/Group-13-8.png',
  '/image-1.png',
  '/Logo-Savage-Week-Negativo.png',
];

// Duplicamos para o loop ser contínuo
const ALL_LOGOS = [...LOGOS, ...LOGOS];

export function LogosMarquee() {
  return (
    <div className="mt-16 border-t border-black/5 pt-12 relative overflow-hidden w-full">
      {/* fade esquerda */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      {/* fade direita */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <Marquee speed={0.4} direction="left">
        {ALL_LOGOS.map((src, i) => (
          <div key={i} className="mx-10 flex items-center justify-center">
            <img
              src={src}
              alt={`Logo parceiro ${(i % LOGOS.length) + 1}`}
              style={{
                height: 36,
                objectFit: 'contain',
                opacity: 0.25,
                filter: 'brightness(0)',
                flexShrink: 0,
              }}
              className="hover:opacity-70 transition-all duration-300 cursor-pointer"
              loading="lazy"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
