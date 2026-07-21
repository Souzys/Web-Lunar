'use client';

import React from 'react';
import Link from 'next/link';
import { siteContent } from '@/content';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { useAudio } from '@/hooks/useAudio';
import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contato';

  const { playHover, playClick } = useAudio();

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
                Disponível para novos projetos
              </span>
            </div>

            {/* Giant Heading */}
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.05] text-balance">
              Vamos Criar Algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Incrível</span> Juntos.
            </h2>

            {/* Supporting Description */}
            <p className="text-neutral-400 text-base md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-10 text-balance">
              Tem um projeto em mente ou quer escalar sua marca com design refinado e engenharia de software de alta performance?
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <Link
                href="/contato"
                onMouseEnter={playHover}
                onClick={playClick}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-semibold text-xs uppercase tracking-wider hover:bg-blue-600 transition-all duration-300 shadow-[0_0_25px_rgba(29,77,255,0.4)] hover:shadow-[0_0_35px_rgba(29,77,255,0.6)] hover:scale-105 active:scale-95 cursor-pointer font-sans w-full sm:w-auto"
              >
                <span>Solicitar Orçamento</span>
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
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Falar no WhatsApp</span>
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
            Estúdio de design e engenharia focado em criar produtos digitais premium de alta performance e valor percebido.
          </p>
          <p className="text-sm font-mono text-neutral-500">{siteContent.footer.contact.phone}</p>
        </div>

        {/* Studio */}
        <div>
          <h4 className="text-white text-xs font-mono uppercase tracking-[0.2em] mb-8 font-bold">STUDIO</h4>
          <ul className="flex flex-col gap-4">
            {siteContent.footer.links.pages.map(link => {
              let href = '#';
              if (link === 'Início') href = '/';
              if (link === 'Sobre') href = '/sobre';
              if (link === 'Portfólio') href = '/#projetos';
              if (link === 'Serviços') href = '/servicos';
              if (link === 'Contato') href = '/#contato';
              
              return (
                <li key={link}>
                  <Link href={href} className="text-sm text-neutral-400 hover:text-primary transition-colors duration-300">
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white text-xs font-mono uppercase tracking-[0.2em] mb-8 font-bold">SERVIÇOS</h4>
          <ul className="flex flex-col gap-4">
            {siteContent.footer.links.single.map(link => (
              <li key={link}>
                <Link href="/servicos" className="text-sm text-neutral-400 hover:text-primary transition-colors duration-300">
                  {link}
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
              <li key={social}>
                <a href="#" className="text-sm text-neutral-400 hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                  {social}
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-primary" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

        {/* Bottom bar */}
        <div className="container mx-auto max-w-[1440px] px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-neutral-500 tracking-widest">
          <p>© {new Date().getFullYear()} WEB LUNAR. TODOS OS DIREITOS RESERVADOS.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">PRIVACIDADE</Link>
            <Link href="#" className="hover:text-white transition-colors">TERMOS</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
