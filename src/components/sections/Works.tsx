"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trpc } from "@/utils/trpc";
import { useAudio } from "@/hooks/useAudio";
import { ExternalLink, Loader2 } from "lucide-react";

interface LocalProject {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
}

const DEFAULT_PROJECTS: LocalProject[] = [
  {
    id: "proj-1",
    title: "Plataforma Lunar E-Commerce",
    description: "Checkout fluído com preview de produtos 3D e micro-interações táteis de alta conversão.",
    category: "3D Web",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://lunar-commerce.weblunar.co",
    githubUrl: "https://github.com/weblunar/lunar-commerce",
    tags: ["Next.js", "R3F", "Tailwind CSS"],
  },
  {
    id: "proj-2",
    title: "Aether SaaS Dashboard",
    description: "Painel de controle com estética Vercel, gráficos interativos e gerenciamento de sessões em tempo real.",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://aether.weblunar.co",
    tags: ["React", "Prisma", "tRPC"],
  },
  {
    id: "proj-3",
    title: "Gravitational UI Components",
    description: "Biblioteca de componentes interativos que simulam física e gravidade através de GSAP e WebGL.",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop",
    liveUrl: "https://gravitational-ui.weblunar.co",
    githubUrl: "https://github.com/weblunar/gravitational-ui",
    tags: ["Framer Motion", "GSAP", "Radix UI"],
  },
];

const CATEGORIES = ["Todos", "SaaS", "3D Web", "UI/UX"];

export default function Works() {
  const { playHover, playClick } = useAudio();
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  // Fetch projects from tRPC
  const { data: dbProjects, isLoading } = trpc.getProjects.useQuery();

  // Combine database projects and defaults
  const projects: LocalProject[] = dbProjects && dbProjects.length > 0 
    ? dbProjects.map(p => ({
        id: p.id,
        title: p.title,
        description: p.description,
        category: p.category,
        image: p.image,
        liveUrl: p.liveUrl || undefined,
        githubUrl: p.githubUrl || undefined,
        tags: p.tags,
      }))
    : DEFAULT_PROJECTS;

  const filteredProjects = selectedCategory === "Todos"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="works" className="relative py-32 px-6 w-full max-w-7xl mx-auto z-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
        <div>
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-3">Estudos & Projetos</h2>
          <p className="text-3xl md:text-5xl font-bold text-white text-glow tracking-tight">
            Galeria Orbital
          </p>
        </div>

        {/* Categories filters */}
        <div className="flex flex-wrap gap-2.5 bg-white/[0.02] border border-white/[0.05] p-1.5 rounded-full backdrop-blur-md">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClick();
                setSelectedCategory(cat);
              }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-white text-black font-semibold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
          <span className="text-sm text-neutral-400">Escaneando órbita...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={playHover}
                className="glow-card overflow-hidden group flex flex-col justify-between"
              >
                {/* Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-white/[0.05]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-black/60 border border-white/10 text-indigo-300 backdrop-blur-sm">
                    {project.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed font-light mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4 mt-auto">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] border border-white/[0.05] text-neutral-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/[0.03]">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClick}
                          className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Projeto Online</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={playClick}
                          className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
                        >
                          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                          </svg>
                          <span>Código</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </section>
  );
}
