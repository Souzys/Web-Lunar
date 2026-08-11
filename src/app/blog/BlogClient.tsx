'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowUpRight, Search } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '@/context/LanguageContext';

export function BlogClient() {
  useLenis();
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = t.blog.posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const hero = heroRef.current;
    const glow = glowRef.current;
    if (!hero || !glow) return;

    gsap.set(glow, {
      x: typeof window !== 'undefined' ? window.innerWidth / 2 - 400 : 0,
      y: typeof window !== 'undefined' ? window.innerHeight / 4 - 400 : 0,
    });

    const xTo = gsap.quickTo(glow, 'x', { duration: 1.5, ease: 'power2.out' });
    const yTo = gsap.quickTo(glow, 'y', { duration: 1.5, ease: 'power2.out' });

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
      {/* Hero / background glow */}
      <div ref={heroRef} className="fixed top-0 left-0 h-[50vh] w-full flex flex-col items-center justify-center z-0 overflow-hidden pt-20 bg-bg">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            ref={glowRef}
            className="absolute w-[800px] h-[800px] bg-primary/15 rounded-full blur-[140px] opacity-40 mix-blend-screen pointer-events-none"
            style={{ left: 0, top: 0, willChange: 'transform' }}
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-[1440px] relative z-10 text-center">
          <AnimatedSection>
            <div className="flex items-center justify-center gap-2.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(29,77,255,0.4)]" />
              <span className="text-xs font-sans uppercase tracking-widest text-primary font-semibold">
                {t.blog.tag}
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">
              {t.blog.title}
            </h1>
            <p className="text-base md:text-lg text-white font-light leading-relaxed max-w-xl mx-auto pl-5 border-l-2 md:border-l-0 md:border-t border-primary/30 pt-4 text-balance">
              {t.blog.subtitle}
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Scrolling Content */}
      <div className="relative z-10 bg-white text-neutral-900 w-full mt-[50vh] border-t border-neutral-100">
        <div className="container mx-auto max-w-[1440px] px-6 py-24">
          
          {/* Search Box */}
          <div className="mb-16 max-w-md">
            <AnimatedSection options={{ delay: 0.1 }}>
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder={t.blog.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-sm bg-neutral-50"
                />
                <Search className="w-5 h-5 text-neutral-400 absolute left-4 pointer-events-none" />
              </div>
            </AnimatedSection>
          </div>

          {/* Posts Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredPosts.map((post, index) => (
                <AnimatedSection key={index} options={{ delay: index * 0.1 }} className="group cursor-pointer">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-100 rounded-2xl mb-6 relative border border-neutral-200/50 group-hover:border-primary/30 group-hover:shadow-md transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity" />
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-xs font-mono text-primary mb-3 tracking-widest uppercase">{post.date}</div>
                  <h3 className="font-sans text-xl md:text-2xl font-black mb-3 tracking-tight text-neutral-950 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-500 font-light leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-neutral-400 font-mono text-sm">{t.blog.noResults}</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
