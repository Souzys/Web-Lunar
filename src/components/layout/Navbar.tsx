'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { siteContent } from '@/content';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/content/translations';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  if (pathname?.startsWith('/links') || pathname?.startsWith('/odonto')) {
    return null;
  }

  // Detecta o scroll para alternar entre o menu horizontal completo e a pílula pequena
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 60) {
        setIsScrolled(true);
      } else if (scrollY < 30) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuRef.current || !contentRef.current || !titleRef.current || !bottomRef.current) return;

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    if (isOpen) {
      const targetWidth = isMobile ? Math.min(310, window.innerWidth - 32) : 320;
      const targetHeight = isMobile ? 490 : 520;

      gsap.to(menuRef.current, {
        width: targetWidth,
        height: targetHeight,
        borderRadius: 24,
        duration: isMobile ? 0.3 : 0.45,
        ease: isMobile ? 'power2.out' : 'back.out(1.2)',
        overwrite: 'auto'
      });
      
      gsap.to(titleRef.current, {
        opacity: 1,
        duration: 0.25,
        delay: 0.1,
        overwrite: 'auto'
      });

      gsap.to(contentRef.current, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
        delay: 0.05,
        overwrite: 'auto'
      });

      gsap.fromTo(linksRef.current, 
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.04, delay: 0.1, ease: 'power2.out', overwrite: 'auto' }
      );

      gsap.fromTo(bottomRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.3, delay: 0.2, ease: 'power2.out', overwrite: 'auto' }
      );
    } else {
      gsap.to(contentRef.current, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.15,
        overwrite: 'auto'
      });

      gsap.to(titleRef.current, {
        opacity: 0,
        duration: 0.15,
        overwrite: 'auto'
      });

      gsap.to(menuRef.current, {
        width: 48,
        height: 48,
        borderRadius: 24,
        duration: isMobile ? 0.25 : 0.35,
        ease: 'power3.inOut',
        overwrite: 'auto'
      });
    }
  }, [isOpen]);

  // Fechar o menu ao clicar fora da Ilha Flutuante
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: t.nav.inicio, href: '/' },
    { label: t.nav.sobre, href: '/sobre' },
    { label: t.nav.servicos, href: '/servicos' },
    { label: t.nav.projetos, href: '/projetos' },
    { label: t.nav.blog, href: '/blog' },
    { label: t.nav.contato, href: '/contato' },
  ];

  const languages: { code: Language; flag: string; label: string }[] = [
    { code: 'pt', flag: '🇧🇷', label: 'PT' },
    { code: 'en', flag: '🇺🇸', label: 'EN' },
    { code: 'es', flag: '🇪🇸', label: 'ES' },
  ];

  return (
    <>
      {/* 1. Header Horizontal Completo (no início da página) */}
      <header 
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-out will-change-transform ${
          isScrolled 
            ? '-translate-y-full opacity-0 pointer-events-none' 
            : 'translate-y-0 opacity-100 pointer-events-auto'
        }`}
      >
        <div className="container mx-auto max-w-[1440px] px-6 md:px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center shrink-0">
            <img 
              src="/logo-web-lunar-light.png" 
              alt="Web Lunar" 
              width={260} 
              height={65} 
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform hover:scale-105" 
            />
          </Link>

          {/* Links Horizontais Centrais (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 px-3 py-1.5 rounded-full bg-[#080a0f]/80 border border-white/10 backdrop-blur-xl shadow-2xl">
            {navItems.map((item) => {
              const isActive = item.href === '/' 
                ? pathname === '/' 
                : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-[0.14em] transition-all duration-300 ${
                    isActive
                      ? 'bg-primary text-white font-bold shadow-md shadow-primary/30'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Ações da Direita (Desktop & Mobile) */}
          <div className="flex items-center gap-3">
            {/* Seletor de Idioma (Desktop) */}
            <div className="hidden lg:flex items-center gap-1 bg-[#080a0f]/80 border border-white/10 rounded-full p-1 backdrop-blur-xl">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-bold transition-all ${
                    language === lang.code
                      ? 'bg-primary text-white shadow-sm'
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                  aria-label={`Mudar idioma para ${lang.label}`}
                >
                  <span className="mr-1">{lang.flag}</span>
                  <span>{lang.label}</span>
                </button>
              ))}
            </div>

            {/* Botão CTA (Desktop) */}
            <Link
              href="/contato"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold tracking-wide bg-primary hover:bg-primary-hover text-white transition-all shadow-[0_0_20px_rgba(29,77,255,0.35)] hover:scale-105 active:scale-95"
            >
              <span>{t.hero.ctaButton || 'Quero meu site'}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Pílula Pequena Flutuante (Ilha Dinâmica - surge após o scroll no desktop, ou fica acessível no mobile) */}
      <div 
        ref={menuRef}
        className={`fixed top-5 md:top-6 right-6 md:right-8 lg:right-12 z-50 bg-[#080a0f]/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 ${
          isScrolled || isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
            : 'md:opacity-0 md:-translate-y-6 md:pointer-events-none md:scale-90 max-md:opacity-100 max-md:pointer-events-auto'
        }`}
        style={{
          width: 48,
          height: 48,
          borderRadius: 24,
        }}
      >
        {/* Topo / Gatilho */}
        <div className="w-full flex items-center justify-between h-12 shrink-0 px-4 relative">
          <span 
            ref={titleRef} 
            className="text-[10px] font-mono tracking-[0.2em] text-primary uppercase font-bold opacity-0 select-none"
          >
            [ NAVEGAÇÃO ]
          </span>
          <button 
            onClick={toggleMenu} 
            className="w-12 h-12 absolute right-0 top-0 flex items-center justify-center text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5 text-primary animate-pulse" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Links e Conteúdo da Ilha Flutuante */}
        <div 
          ref={contentRef} 
          className="w-full h-full flex flex-col justify-between px-6 pb-6 pt-2 overflow-hidden opacity-0 pointer-events-none"
        >
          <nav className="flex flex-col gap-3 font-display text-2xl font-black uppercase tracking-tighter mt-2">
            {navItems.map((item, i) => {
              const isActive = item.href === '/' 
                ? pathname === '/' 
                : pathname?.startsWith(item.href);

              return (
                <div key={item.href} className="overflow-hidden">
                  <Link 
                    href={item.href}
                    ref={el => { linksRef.current[i] = el; }}
                    onClick={() => setIsOpen(false)}
                    className={`inline-block transition-colors duration-300 ${
                      isActive ? 'text-primary' : 'hover:text-primary'
                    }`}
                  >
                    {item.label}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* Rodapé Interno da Ilha */}
          <div 
            ref={bottomRef}
            className="flex flex-col gap-3 pb-1 border-t border-white/10 pt-3 text-[10px] text-text-muted font-mono tracking-widest uppercase"
          >
            <div>
              <p className="mb-0.5 text-white/30">{t.nav.localizacao}</p>
              <p className="text-white/70">{t.nav.atendimento}</p>
            </div>
            
            {/* Seleção de Idioma com Bandeiras */}
            <div>
              <p className="mb-1 text-white/30">{t.nav.idioma}</p>
              <div className="flex items-center gap-1.5">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-sans font-bold flex items-center gap-1.5 transition-all ${
                      language === lang.code
                        ? 'bg-primary text-white shadow-md border border-primary'
                        : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    <span className="text-sm">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
