"use client";

import React from "react";
import Link from "next/link";
import { useAudio } from "@/hooks/useAudio";
import { Sparkles } from "lucide-react";

export default function Header() {
  const { playHover, playClick } = useAudio();

  const handleNavClick = () => {
    playClick();
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/[0.05] bg-[#030307]/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          onClick={handleNavClick}
          onMouseEnter={playHover}
          className="flex items-center gap-2.5 font-medium text-lg text-white text-glow tracking-wider group"
        >
          <Sparkles className="w-5 h-5 text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
          <span>WEB LUNAR</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            onClick={handleNavClick}
            onMouseEnter={playHover}
            className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
          >
            Conceito
          </a>
          <a
            href="#works"
            onClick={handleNavClick}
            onMouseEnter={playHover}
            className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
          >
            Portfólio
          </a>
          <a
            href="#contact"
            onClick={handleNavClick}
            onMouseEnter={playHover}
            className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
          >
            Contato
          </a>
        </nav>

        <div>
          <a
            href="#contact"
            onClick={handleNavClick}
            onMouseEnter={playHover}
            className="inline-flex items-center justify-center px-4 py-2 text-xs font-medium tracking-wide uppercase border border-white/10 rounded-full bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            Iniciar Projeto
          </a>
        </div>
      </div>
    </header>
  );
}
