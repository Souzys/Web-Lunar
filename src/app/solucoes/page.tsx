import { Metadata } from 'next';
import Link from 'next/link';
import { CITIES_DATA, SERVICE_TYPES, NICHES_DATA, VERSUS_PAGES_DATA } from '@/content/programmaticSeoData';

export const metadata: Metadata = {
  title: 'Mais de 420 Soluções Digitais por Segmento, Região e Comparativos | Web Lunar',
  description:
    'Criação de sites profissionais, landing pages de alta conversão, lojas virtuais, comparativos WordPress vs Next.js e sistemas web sob medida para todo o Brasil.',
  alternates: {
    canonical: 'https://weblunar.com.br/solucoes',
  },
};

export default function SolucoesHubPage() {
  const topNiches = NICHES_DATA.slice(0, 12);
  const topCities = CITIES_DATA.slice(0, 10);
  const scCities = CITIES_DATA.filter((c) => c.state === 'SC');

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
                ECOSSISTEMA DE SOLUÇÕES WEB LUNAR (+420 PÁGINAS)
              </span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Sites, Landing Pages e Sistemas por{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-white">
                Segmento e Região
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed mb-8">
              Explore nossas soluções especializadas desenvolvidas sob medida para os 45 principais setores da economia e 50 maiores polos empresariais do Brasil.
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
                  DECISÃO TÉCNICA & COMERCIAL · AUTORIDADE DUPLA
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

          {/* Block 0.5: Santa Catarina Regional Authority Silo (Powered by Sinapro/SC Case) */}
          <section className="mb-20 rounded-2xl border border-amber-300/60 bg-gradient-to-br from-amber-50/70 via-white to-slate-50 p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6 pb-6 border-b border-slate-200/80">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[10px] font-bold uppercase tracking-widest mb-2">
                  POLO DE AUTORIDADE · SANTA CATARINA (SC)
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  Desenvolvedora do Portal Oficial do Sinapro/SC (Sindicato das Agências de Propaganda)
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Atendimento especializado de engenharia web, landing pages e SEO local para os principais polos econômicos catarinenses.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {scCities.map((city) => (
                <Link
                  key={`sc-silo-${city.slug}`}
                  href={`/solucoes/criacao-de-sites-em-${city.slug}`}
                  className="rounded-xl border border-slate-200 bg-white hover:border-primary p-3.5 text-xs font-semibold text-slate-800 hover:text-primary transition-all flex items-center justify-between"
                >
                  <span>Sites em {city.name}</span>
                  <span className="text-[10px] text-primary font-bold">SC →</span>
                </Link>
              ))}
              {scCities.map((city) => (
                <Link
                  key={`sc-seo-${city.slug}`}
                  href={`/solucoes/agencia-de-seo-em-${city.slug}`}
                  className="rounded-xl border border-slate-200 bg-white hover:border-primary p-3.5 text-xs font-semibold text-slate-800 hover:text-primary transition-all flex items-center justify-between"
                >
                  <span>SEO em {city.name}</span>
                  <span className="text-[10px] text-slate-400 font-bold">SC →</span>
                </Link>
              ))}
            </div>
          </section>
          {/* Block 1: 45 Niches */}
          <section className="mb-20">
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

          {/* Block 2: Niche x Top Capitals (120 combinations) */}
          <section className="mb-20">
            <div className="border-b border-slate-200 pb-4 mb-8">
              <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-1">
                ESPECIALIDADES NAS CAPITAIS E POLOS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                Soluções por Profissão nas Maiores Cidades
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {topNiches.map((niche) =>
                topCities.map((city) => (
                  <Link
                    key={`${niche.slug}-em-${city.slug}`}
                    href={`/solucoes/${niche.slug}-em-${city.slug}`}
                    className="rounded-lg border border-slate-200 bg-white hover:border-primary px-4 py-3 text-xs text-slate-700 hover:text-primary font-medium transition-all flex items-center justify-between shadow-2xs"
                  >
                    <span className="truncate">{niche.singular} em {city.name}</span>
                    <span className="text-[10px] text-slate-400 ml-1 shrink-0">{city.state}</span>
                  </Link>
                ))
              )}
            </div>
          </section>

          {/* Block 3: 5 Services x 50 Cities (250 combinations) */}
          {SERVICE_TYPES.map((service) => (
            <section key={service.slugPrefix} className="mb-16">
              <div className="border-b border-slate-200 pb-4 mb-8">
                <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-1">
                  ATENDIMENTO NACIONAL · 50 POLOS ECONÔMICOS
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  {service.name} por Cidade
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {CITIES_DATA.map((city) => (
                  <Link
                    key={`${service.slugPrefix}-${city.slug}`}
                    href={`/solucoes/${service.slugPrefix}-${city.slug}`}
                    className="rounded-lg border border-slate-200 bg-white hover:border-primary px-4 py-3 text-xs sm:text-sm text-slate-700 hover:text-primary font-medium transition-all flex items-center justify-between shadow-2xs"
                  >
                    <span className="truncate">{city.name}</span>
                    <span className="text-[10px] text-slate-400 ml-1 shrink-0 font-bold">{city.state}</span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
