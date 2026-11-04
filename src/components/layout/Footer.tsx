'use client';

import React from 'react';
import Link from 'next/link';
import { siteContent } from '@/content';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { useAudio } from '@/hooks/useAudio';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export function Footer() {
  const pathname = usePathname();
  
  if (pathname?.startsWith('/links') || pathname?.startsWith('/odonto')) {
    return null;
  }

  const isContactPage = pathname === '/contato';
  const { t } = useLanguage();
  const { playHover, playClick } = useAudio();

  const studioLinks = [
    { label: t.nav.inicio, href: '/' },
    { label: t.nav.sobre, href: '/sobre' },
    { label: t.nav.projetos, href: '/projetos' },
    { label: t.nav.servicos, href: '/servicos' },
    { label: 'Soluções', href: '/solucoes' },
    { label: 'Simulador de Orçamento', href: '/calculadora' },
    { label: t.nav.contato, href: '/contato' },
  ];

  return (
    <footer className="relative z-10 overflow-hidden" id="contact">

      {/* === CTA BANNER — CONVITE PARA ORÇAMENTO === */}
      {!isContactPage && (
        <div className="py-24 md:py-32 relative bg-[#05070F] text-white border-t border-white/5 overflow-hidden text-center">
          {/* Glow ambient background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/15 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

          <div className="container mx-auto px-6 max-w-4xl relative z-10 flex flex-col items-center">
            {/* Status dot badge */}
            <div className="flex items-center justify-center gap-2.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(29,77,255,0.6)]" />
              <span className="text-xs font-sans uppercase tracking-widest text-primary font-semibold">
                {t.nav.atendimento}
              </span>
            </div>

            {/* Giant Heading */}
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.05] text-balance">
              {t.contactPage.title}
            </h2>

            {/* Supporting Description */}
            <p className="text-neutral-400 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
              {t.contactPage.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/contato"
                onMouseEnter={playHover}
                onClick={playClick}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 shadow-[0_0_25px_rgba(29,77,255,0.4)] hover:shadow-[0_0_35px_rgba(29,77,255,0.6)] hover:scale-105 active:scale-95 cursor-pointer font-sans w-full sm:w-auto"
              >
                <span>{t.hero.ctaButton}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/5561982630397?text=Ol%C3%A1%20equipe%20Web%20Lunar!%20Gostaria%20de%20fazer%20um%20or%C3%A7amento%20para%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/[0.05] border border-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer font-sans w-full sm:w-auto"
              >
                <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97-1.861-1.868-4.339-2.897-6.97-2.899-5.443 0-9.87 4.372-9.875 9.8.001 1.77.476 3.5 1.379 5.017l-.988 3.598 3.675-.952zm11.458-6.666c-.301-.15-1.785-.88-2.062-.98-.277-.1-.478-.15-.678.15-.2.3-.778.98-.953 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.084-.176-.3-.019-.462.132-.611.135-.134.301-.35.452-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.678-1.635-.93-2.245-.245-.59-.496-.51-.678-.52-.175-.008-.376-.01-.577-.01-.2 0-.527.075-.803.375-.276.3-1.054 1.03-1.054 2.512s1.08 2.916 1.23 3.116c.15.2 2.126 3.246 5.15 4.553.719.31 1.28.496 1.717.636.722.23 1.38.197 1.901.12.58-.087 1.785-.73 2.036-1.436.251-.706.251-1.314.176-1.436-.076-.123-.277-.2-.577-.35z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* === FOOTER LINKS === (Modo Escuro) */}
      <div className="bg-[#05070B] text-white">
        <div className="container mx-auto max-w-[1440px] px-6 py-20 grid grid-cols-2 md:grid-cols-5 gap-12 border-b border-white/5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 pr-12">
            <div className="mb-8">
              <img src="/logo-web-lunar-light.png" alt="Web Lunar" className="h-10 md:h-14 w-auto object-contain" />
            </div>
          <p className="text-sm font-light text-neutral-400 leading-relaxed max-w-sm mb-8">
            {t.footer.tagline}
          </p>
          <p className="text-sm font-mono text-neutral-500">{siteContent.footer.contact.phone}</p>
        </div>

        {/* Studio */}
        <div>
          <h4 className="text-white text-xs font-mono uppercase tracking-[0.2em] mb-8 font-bold">STUDIO</h4>
          <ul className="flex flex-col gap-4">
            {studioLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-neutral-400 hover:text-primary transition-colors duration-300">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-xs font-mono uppercase tracking-[0.2em] mb-8 font-bold">{t.nav.servicos}</h4>
          <ul className="flex flex-col gap-4">
            {[
              t.services.items.landingPages.title,
              t.services.items.sitesApps.title,
              t.services.items.ecommerce.title,
              t.services.items.integracoes.title,
            ].map(linkTitle => (
              <li key={linkTitle}>
                <Link href="/servicos" className="text-sm text-neutral-400 hover:text-primary transition-colors duration-300">
                  {linkTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white text-xs font-mono uppercase tracking-[0.2em] mb-8 font-bold">SOCIAL</h4>
          <ul className="flex flex-col gap-4">
            {siteContent.footer.social.map(social => (
              <li key={social.name}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                >
                  {social.name}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-primary" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

        {/* Bottom bar */}
        <div className="container mx-auto max-w-[1440px] px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500 tracking-widest uppercase">
          <p>© {new Date().getFullYear()} WEB LUNAR. {t.footer.allRightsReserved}</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">{t.footer.privacy}</Link>
            <Link href="#" className="hover:text-white transition-colors">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
