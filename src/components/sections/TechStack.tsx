'use client';

import React from 'react';
import { Marquee } from '@/components/ui/Marquee';

const TECHNOLOGIES = [
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Framer Motion', icon: 'https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion.png' },
  { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
];

export function TechStack() {
  return (
    <section className="py-20 bg-[#FAFAFA] text-neutral-900 border-t border-black/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center font-display text-sm md:text-base uppercase tracking-[0.15em] font-black text-neutral-800">
          TECNOLOGIAS QUE UTILIZO
        </p>
      </div>

      <div className="relative">
        {/* Gradient Masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        <Marquee speed={0.8}>
          {TECHNOLOGIES.map((tech, i) => (
            <div 
              key={i} 
              className="flex items-center gap-4 mx-8 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white border border-black/5 flex items-center justify-center shadow-sm group-hover:border-primary/30 group-hover:shadow-md transition-all duration-300">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-8 h-8 object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <span className="font-display text-xl font-bold text-neutral-400 group-hover:text-neutral-900 transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
