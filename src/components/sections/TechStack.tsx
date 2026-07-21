'use client';

import React from 'react';
import { Marquee } from '@/components/ui/Marquee';

const TECHNOLOGIES = [
  { name: 'Gemini AI', icon: '/gemini.svg' },
  { name: 'Antigravity IDE', icon: '/antigravity.png' },
  { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000' },
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs/339933' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/21759B' },
  { name: 'Elementor Pro', icon: 'https://cdn.simpleicons.org/elementor/E11252' },
  { name: 'Yoast SEO', icon: 'https://cdn.simpleicons.org/yoast/A4286A' },
  { name: 'WP Rocket', icon: 'https://cdn.simpleicons.org/wprocket/F15A24' },
  { name: 'WooCommerce', icon: 'https://cdn.simpleicons.org/woocommerce/96588A' },
  { name: 'Shopify', icon: 'https://cdn.simpleicons.org/shopify/7AB55C' },
  { name: 'HostGator', icon: 'https://www.google.com/s2/favicons?domain=hostgator.com&sz=128' },
  { name: 'KingHost', icon: 'https://www.google.com/s2/favicons?domain=kinghost.com.br&sz=128' },
  { name: 'VPS / Cloud', icon: 'https://cdn.simpleicons.org/digitalocean/0080FF' },
  { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker/2496ED' },
  { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase/3ECF8E' },
  { name: 'Git', icon: 'https://cdn.simpleicons.org/git/F05032' },
  { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/181717' },
  { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma/F24E1E' },
  { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel/000000' },
];

export function TechStack() {
  return (
    <section className="py-20 bg-[#FAFAFA] text-neutral-900 border-t border-black/5 overflow-hidden">
      <div className="container mx-auto max-w-7xl px-6 mb-12">
        <p className="text-center font-display text-sm md:text-base uppercase tracking-[0.15em] font-black text-neutral-800">
          TECNOLOGIAS QUE UTILIZO
        </p>
      </div>

      <div className="relative">
        {/* Gradient Masks for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10 pointer-events-none" />

        <Marquee speed={0.3}>
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
              <span className="font-display text-xl font-bold text-neutral-900 group-hover:text-primary transition-colors duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
