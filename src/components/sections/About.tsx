"use client";

import React from "react";
import { motion } from "framer-motion";
import { useAudio } from "@/hooks/useAudio";
import { Box, Code2, Cpu, Eye, Layers, Palette } from "lucide-react";

export default function About() {
  const { playHover } = useAudio();

  const cards = [
    {
      icon: <Palette className="w-6 h-6 text-indigo-400" />,
      title: "Apple Concept Design",
      desc: "Interfaces limpas, espaçamentos generosos, contraste refinado e foco absoluto no detalhe e na tipografia.",
      size: "md:col-span-2",
    },
    {
      icon: <Box className="w-6 h-6 text-indigo-400" />,
      title: "Experiências 3D WebGL",
      desc: "Desenvolvimento tridimensional interativo com Three.js e React Three Fiber para engajamento imersivo de nova geração.",
      size: "md:col-span-1",
    },
    {
      icon: <Code2 className="w-6 h-6 text-indigo-400" />,
      title: "Código Type-Safe",
      desc: "Aplicações escaláveis criadas com Next.js 15, TypeScript estrito, Server Actions e tRPC para estabilidade absoluta.",
      size: "md:col-span-1",
    },
    {
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
      title: "Arquitetura SaaS Moderna",
      desc: "Desenvolvimento focado em produto: performance extrema, SEO impecável e componentes modulares e reutilizáveis.",
      size: "md:col-span-2",
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6 w-full max-w-[1440px] mx-auto z-10">
      <div className="text-center mb-20">
        <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-3">Conceito e Filosofia</h2>
        <p className="text-3xl md:text-5xl font-bold text-white text-glow tracking-tight">
          A Gravidade no Design Web
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onMouseEnter={playHover}
            className={`glow-card p-8 flex flex-col justify-between min-h-[260px] ${card.size}`}
          >
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6">
              {card.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">{card.title}</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">{card.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
