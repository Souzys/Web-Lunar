'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, ChevronDown, Check } from 'lucide-react';
import gsap from 'gsap';
import { useLanguage } from '@/context/LanguageContext';
import { Language } from '@/content/translations';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  if (pathname?.startsWith('/links') || pathname?.startsWith('/odonto')) {
    return null;
  }

  // Detecta páginas que possuem fundo claro no topo (como os artigos individuais do blog)
  const isLightHeader = Boolean(
    pathname && pathname.startsWith('/blog/') && pathname.replace(/\/+$/, '') !== '/blog'
  );

  // Reset do menu e do estado de scroll ao mudar de página
  useEffect(() => {
    setIsScrolled(false);
    setIsOpen(false);
    setIsLangOpen(false);
  }, [pathname]);

  // Detecta o scroll para alternar entre o menu horizontal completo e a pílula pequena
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 60) {
        setIsScrolled(true);
        setIsLangOpen(false);
      } else if (scrollY < 30) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar dropdown de idioma ao clicar fora
  useEffect(() => {
    if (!isLangOpen) return;
    const handleClickOutsideLang = (e: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(e.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutsideLang);
    return () => document.removeEventListener('mousedown', handleClickOutsideLang);
  }, [isLangOpen]);

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

  const languages: { code: Language; flag: string; label: string; fullName: string }[] = [
    { code: 'pt', flag: '🇧🇷', label: 'PT', fullName: 'Português' },
    { code: 'en', flag: '🇺🇸', label: 'EN', fullName: 'English' },
    { code: 'es', flag: '🇪🇸', label: 'ES', fullName: 'Español' },
  ];

  const activeLang = languages.find((l) => l.code === language) || languages[0];

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
        <div className="container mx-auto max-w-[1440px] px-6 md:px-10 py-4 md:py-5 relative flex items-center justify-between">
          {/* Coluna Esquerda: Logo com proporção óptica refinada */}
          <Link href="/" className="relative z-50 flex items-center shrink-0 group">
            <img 
              src={isLightHeader ? "/logo-web-lunar-dark.png" : "/logo-web-lunar-light.png"} 
              alt="Web Lunar" 
              width={220} 
              height={55} 
              className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]" 
            />
          </Link>

          {/* Coluna Central: Dock de Navegação perfeitamente centralizado (Adaptive Glassmorphism) */}
          <nav 
            className={`hidden md:flex items-center gap-1 p-1.5 rounded-full backdrop-blur-2xl transition-all duration-300 md:absolute md:left-1/2 md:-translate-x-1/2 ${
              isLightHeader
                ? 'bg-white/85 border border-neutral-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.9)]'
                : 'bg-[#0A0D16]/75 border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]'
            }`}
          >
            {navItems.map((item) => {
              const isActive = item.href === '/' 
                ? pathname === '/' 
                : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-sans font-medium tracking-[0.01em] transition-all duration-200 ${
                    isActive
                      ? 'bg-primary text-white font-semibold shadow-[0_2px_12px_rgba(29,77,255,0.35)]'
                      : isLightHeader
                        ? 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-900/[0.04]'
                        : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Coluna Direita: Idioma Compacto + CTA Principal */}
          <div className="hidden md:flex items-center gap-2.5 z-50">
            {/* Seletor de Idioma Compacto (Popover) */}
            <div ref={langDropdownRef} className="relative">
              <button
                onClick={() => setIsLangOpen((prev) => !prev)}
                className={`h-10 px-3.5 rounded-full text-xs font-sans font-semibold flex items-center gap-1.5 backdrop-blur-2xl transition-all duration-200 cursor-pointer ${
                  isLightHeader
                    ? 'bg-white/85 border border-neutral-200/80 text-neutral-700 hover:text-neutral-950 hover:border-neutral-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
                    : 'bg-[#0A0D16]/75 border border-white/[0.08] text-white/80 hover:text-white hover:border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.3)]'
                }`}
                aria-label="Selecionar idioma"
                aria-expanded={isLangOpen}
              >
                <span className="text-sm leading-none">{activeLang.flag}</span>
                <span>{activeLang.label}</span>
                <ChevronDown 
                  className={`w-3.5 h-3.5 opacity-60 transition-transform duration-200 ${
                    isLangOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute right-0 mt-2 w-40 rounded-2xl p-1.5 backdrop-blur-2xl transition-all duration-200 origin-top-right ${
                  isLightHeader
                    ? 'bg-white/95 border border-neutral-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.12)] text-neutral-800'
                    : 'bg-[#0A0D16]/95 border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] text-white'
                } ${
                  isLangOpen
                    ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
                    : 'opacity-0 scale-95 -translate-y-1 pointer-events-none'
                }`}
              >
                {languages.map((lang) => {
                  const isSelected = language === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full px-3 py-2 rounded-xl text-xs font-sans font-medium flex items-center justify-between transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-primary/10 text-primary font-semibold'
                          : isLightHeader
                            ? 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100/80'
                            : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-sm">{lang.flag}</span>
                        <span>{lang.fullName}</span>
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-primary" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Botão CTA Principal */}
            <Link
              href="/contato"
              className="group h-10 inline-flex items-center gap-1.5 px-5 rounded-full text-[13px] font-sans font-semibold tracking-[0.01em] bg-primary hover:bg-[#2956ff] text-white border border-white/15 transition-all duration-300 shadow-[0_4px_20px_rgba(29,77,255,0.35)] hover:shadow-[0_6px_28px_rgba(29,77,255,0.5)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t.hero.ctaButton || 'Quero meu site'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* 2. Pílula Pequena Flutuante (Ilha Dinâmica - surge após o scroll no desktop, ou fica acessível no mobile) */}
      <div 
        ref={menuRef}
        className={`fixed top-4 md:top-6 right-6 md:right-8 lg:right-12 z-50 bg-[#080a0f]/95 border border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 ${
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
            className="w-12 h-12 absolute right-0 top-0 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
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
                      isActive ? 'text-primary' : 'text-white/90 hover:text-primary'
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
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-sans font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
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
