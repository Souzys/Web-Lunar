'use client';

import React from 'react';
import { useLenis } from '@/hooks/useLenis';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { ArrowLeft, Clock, Calendar, Share2, CheckCircle2, MessageCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { BlogPostDetail, BLOG_POSTS_I18N } from '@/content/blogPostsData';
import { useLanguage } from '@/context/LanguageContext';

export function ArtigoClient({ post: initialPost }: { post: BlogPostDetail | null }) {
  useLenis();
  const { language } = useLanguage();

  const activePost = initialPost
    ? (BLOG_POSTS_I18N[language]?.[initialPost.slug] || initialPost)
    : null;

  // Obter outros artigos para a seção de recomendação no final
  const allPosts = Object.values(BLOG_POSTS_I18N[language] || {});
  const relatedPosts = allPosts.filter((p) => p.slug !== activePost?.slug).slice(0, 2);

  const labels = {
    pt: {
      backToBlog: 'Voltar para o Blog',
      notFound: 'Artigo não encontrado',
      authorBy: 'Publicado por',
      share: 'Compartilhar',
      copied: 'Link copiado!',
      relatedTitle: 'Continue lendo',
      ctaTitle: 'Quer tirar seu projeto do papel?',
      ctaDesc: 'Desenvolvemos sites, landing pages e sistemas sob medida com foco em autoridade e conversão rápida.',
      ctaBtn: 'Solicitar Orçamento',
      whatsappBtn: 'Falar no WhatsApp',
      conclusionTitle: 'Conclusão',
      readArticle: 'Ler artigo',
    },
    en: {
      backToBlog: 'Back to Blog',
      notFound: 'Article not found',
      authorBy: 'Published by',
      share: 'Share',
      copied: 'Link copied!',
      relatedTitle: 'Keep reading',
      ctaTitle: 'Ready to launch your project?',
      ctaDesc: 'We build high-performance websites, landing pages, and systems tailored for business growth.',
      ctaBtn: 'Request a Proposal',
      whatsappBtn: 'Chat on WhatsApp',
      conclusionTitle: 'Conclusion',
      readArticle: 'Read article',
    },
    es: {
      backToBlog: 'Volver al Blog',
      notFound: 'Artículo no encontrado',
      authorBy: 'Publicado por',
      share: 'Compartir',
      copied: '¡Enlace copiado!',
      relatedTitle: 'Sigue leyendo',
      ctaTitle: '¿Listo para lanzar tu proyecto?',
      ctaDesc: 'Desarrollamos sitios web, landing pages y sistemas a medida para impulsar tu crecimiento.',
      ctaBtn: 'Solicitar Cotización',
      whatsappBtn: 'Hablar por WhatsApp',
      conclusionTitle: 'Conclusión',
      readArticle: 'Leer artículo',
    },
  }[language];

  if (!activePost) {
    return (
      <div className="bg-white text-neutral-900 min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-2xl font-mono text-neutral-500">{labels.notFound}</h1>
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-semibold text-sm">
          <ArrowLeft className="w-4 h-4" />
          <span>{labels.backToBlog}</span>
        </Link>
      </div>
    );
  }

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      if (navigator.share) {
        navigator.share({
          title: activePost.title,
          text: activePost.excerpt,
          url: window.location.href,
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        alert(labels.copied);
      }
    }
  };

  return (
    <div className="bg-white text-neutral-900 min-h-screen font-sans selection:bg-primary selection:text-white">
      {/* Header do Artigo */}
      <div className="relative pt-32 pb-12 border-b border-neutral-100 bg-[#FAFAFA]">
        <div className="container mx-auto max-w-4xl px-6">
          <AnimatedSection>
            {/* Voltar para o Blog */}
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-semibold text-xs uppercase tracking-widest font-mono transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{labels.backToBlog}</span>
              </Link>
            </div>

            {/* Metadados: Categoria, Data, Tempo de leitura */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-3.5 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-primary/10 border border-primary/20 text-primary font-bold">
                {activePost.category}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>{activePost.date}</span>
              </div>
              <span className="text-neutral-300">•</span>
              <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-mono">
                <Clock className="w-3.5 h-3.5" />
                <span>{activePost.readTime}</span>
              </div>
            </div>

            {/* Título Principal */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight text-neutral-950 mb-6 leading-[1.15]">
              {activePost.title}
            </h1>

            {/* Subtítulo / Resumo */}
            <p className="text-lg md:text-xl text-neutral-600 font-light leading-relaxed mb-8 border-l-2 border-primary/40 pl-5">
              {activePost.excerpt}
            </p>

            {/* Linha do Autor e Compartilhamento */}
            <div className="flex items-center justify-between py-4 border-t border-neutral-200 text-xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-bold text-primary text-xs">
                  WL
                </div>
                <div>
                  <p className="text-neutral-900 font-bold">{activePost.author.name}</p>
                  <p className="text-neutral-500 text-[11px]">{activePost.author.role}</p>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-700 transition-all cursor-pointer font-mono text-[11px] shadow-sm"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{labels.share}</span>
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Imagem de Capa */}
      <div className="container mx-auto max-w-4xl px-6 -mt-6 mb-16 relative z-10">
        <AnimatedSection options={{ delay: 0.15 }}>
          <div className="aspect-[16/9] w-full overflow-hidden rounded-3xl border border-neutral-200/80 shadow-lg bg-neutral-100">
            <img
              src={activePost.image}
              alt={activePost.title}
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>
      </div>

      {/* Corpo do Artigo */}
      <div className="container mx-auto max-w-3xl px-6 pb-24 text-neutral-800 leading-relaxed font-light">
        <div className="space-y-12">
          {activePost.sections.map((section, idx) => (
            <AnimatedSection key={idx} options={{ delay: 0.1 * idx }}>
              {section.heading && (
                <h2 className="font-display text-2xl md:text-3xl font-bold text-neutral-950 mb-5 tracking-tight">
                  {section.heading}
                </h2>
              )}

              <div className="space-y-4 text-base md:text-lg text-neutral-700 leading-relaxed">
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {section.callout && (
                <div className="my-6 p-6 rounded-2xl bg-primary/5 border-l-4 border-primary text-neutral-900 font-normal text-sm md:text-base shadow-sm">
                  {section.callout}
                </div>
              )}

              {section.list && (
                <ul className="mt-6 space-y-3 pl-2">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-3 text-sm md:text-base text-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </AnimatedSection>
          ))}

          {/* Conclusão */}
          {activePost.conclusion && (
            <AnimatedSection options={{ delay: 0.3 }}>
              <div className="pt-8 border-t border-neutral-200">
                <h3 className="text-xl font-bold text-neutral-950 mb-3">{labels.conclusionTitle}</h3>
                <p className="text-base md:text-lg text-neutral-700 leading-relaxed">
                  {activePost.conclusion}
                </p>
              </div>
            </AnimatedSection>
          )}
        </div>

        {/* Box CTA de Conversão no Final do Post */}
        <AnimatedSection options={{ delay: 0.35 }} className="mt-20">
          <div className="rounded-3xl border border-primary/20 bg-gradient-to-b from-primary/5 to-transparent p-8 md:p-12 text-center relative overflow-hidden shadow-md">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-neutral-950 mb-3">
              {labels.ctaTitle}
            </h3>
            <p className="text-neutral-600 text-sm md:text-base max-w-lg mx-auto mb-8 font-light">
              {labels.ctaDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contato"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-blue-600 text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-md"
              >
                {labels.ctaBtn}
              </Link>
              <a
                href="https://wa.me/5561982630397?text=Ol%C3%A1!%20Li%20o%20artigo%20no%20blog%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{labels.whatsappBtn}</span>
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Artigos Relacionados */}
        {relatedPosts.length > 0 && (
          <AnimatedSection options={{ delay: 0.4 }} className="mt-20 pt-16 border-t border-neutral-200">
            <h3 className="font-display text-xl font-bold text-neutral-950 mb-8 tracking-tight">
              {labels.relatedTitle}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  href={`/blog/${rPost.slug}`}
                  className="group bg-neutral-50 border border-neutral-200 hover:border-primary/40 hover:bg-white rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-mono text-primary uppercase tracking-widest mb-2 font-semibold">{rPost.category}</div>
                    <h4 className="text-base font-bold text-neutral-950 group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {rPost.title}
                    </h4>
                    <p className="text-neutral-600 text-xs line-clamp-2 font-light">
                      {rPost.excerpt}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-primary font-semibold mt-4">
                    <span>{labels.readArticle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        )}
      </div>
    </div>
  );
}
