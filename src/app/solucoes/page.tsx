import { Metadata } from 'next';
import Link from 'next/link';
import { NICHES_DATA, VERSUS_PAGES_DATA } from '@/content/programmaticSeoData';

export const metadata: Metadata = {
  title: 'Soluções Digitais por Segmento e Comparativos',
  description:
    'Criação de sites profissionais, landing pages de alta conversão, comparativos WordPress vs Next.js e sistemas web sob medida para empresas em todo o Brasil.',
  alternates: {
    canonical: 'https://weblunar.com.br/solucoes',
  },
  openGraph: {
    title: 'Soluções Digitais por Segmento e Comparativos | Web Lunar',
    description:
      'Criação de sites profissionais, landing pages de alta conversão, comparativos WordPress vs Next.js e sistemas web sob medida para empresas em todo o Brasil.',
    url: 'https://weblunar.com.br/solucoes',
    siteName: 'Web Lunar',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/printvolk.webp',
        width: 1902,
        height: 885,
        alt: 'Soluções Digitais Web Lunar',
      },
    ],
  },
};

export default function SolucoesHubPage() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-primary selection:text-white">
      {/* 1. DARK HERO HEADER */}
      <section className="relative overflow-hidden bg-[#05070F] pt-32 pb-20 border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[380px] bg-primary/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="container mx-auto max-w-[1280px] px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                ECOSSISTEMA DE SOLUÇÕES WEB LUNAR
              </span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Sites, Landing Pages e Sistemas por{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-white">
                Segmento Profissional
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-8">
              Explore nossas soluções especializadas desenvolvidas sob medida para os principais setores da economia e comparativos técnicos para escolher a melhor arquitetura.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/calculadora"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-primary hover:bg-blue-600 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-lg"
              >
                <span>⚡ Simular Escopo e Orçamento em 30s</span>
              </Link>
              <Link
                href="/projetos/sinapro"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold transition-all"
              >
                <span>Ver Case Oficial Sinapro/SC →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIGHT EDITORIAL CONTENT */}
      <div className="bg-slate-50 text-slate-900 py-20">
        <div className="container mx-auto max-w-[1280px] px-6">
          {/* Block 0: Versus / High-Intent Comparison Pages */}
          <section className="mb-20">
            <div className="border-b border-slate-200 pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-1">
                  DECISÃO TÉCNICA &amp; COMERCIAL · AUTORIDADE DUPLA
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                  Comparativos: Qual a Melhor Escolha para o Seu Negócio?
                </h2>
              </div>
              <Link
                href="/calculadora"
                className="text-xs font-bold text-primary hover:underline"
              >
                Abrir Simulador Interativo de Tecnologia →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {VERSUS_PAGES_DATA.map((vs) => (
                <Link
                  key={vs.slug}
                  href={`/solucoes/${vs.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white hover:border-primary hover:shadow-md p-5 transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-1.5">
                      {vs.badge}
                    </span>
                    <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                      {vs.title}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    {vs.metaDescription}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Block 0.5: Sinapro/SC Authority Highlight */}
          <section className="mb-20 rounded-2xl border border-amber-300/60 bg-gradient-to-br from-amber-50/70 via-white to-slate-50 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-widest mb-2">
                  CASE DE REFERÊNCIA · ENGENHARIA WEB
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  Desenvolvedora do Portal Oficial do Sinapro/SC (Sindicato das Agências de Propaganda)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Atendimento especializado de engenharia web, landing pages e SEO técnico para empresas em Brasília, Santa Catarina e todo o Brasil.
                </p>
              </div>
              <Link
                href="/projetos/sinapro"
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-primary text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <span>Conhecer o Case Sinapro/SC</span>
                <span>→</span>
              </Link>
            </div>
          </section>

          {/* Block 1: 45 Niches */}
          <section className="mb-10">
            <div className="border-b border-slate-200 pb-4 mb-8">
              <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-1">
                45 ESPECIALIDADES POR SETOR
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                Soluções por Segmento Profissional
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {NICHES_DATA.map((niche) => (
                <Link
                  key={niche.slug}
                  href={`/solucoes/${niche.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white hover:border-primary hover:shadow-md p-5 transition-all"
                >
                  <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-1">
                    {niche.singular}
                  </span>
                  <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    Sites e Landing Pages para {niche.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Foco em {niche.conversionGoal}.
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
