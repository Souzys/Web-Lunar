import { Metadata } from 'next';
import Link from 'next/link';
import { CITIES_DATA, SERVICE_TYPES, NICHES_DATA } from '@/content/programmaticSeoData';

export const metadata: Metadata = {
  title: 'Mais de 400 Soluções Digitais por Segmento e Região | Web Lunar',
  description:
    'Criação de sites profissionais, landing pages de alta conversão, lojas virtuais, SEO e sistemas web sob medida para empresas em todo o Brasil.',
  alternates: {
    canonical: 'https://weblunar.com.br/solucoes',
  },
};

export default function SolucoesHubPage() {
  const topNiches = NICHES_DATA.slice(0, 12);
  const topCities = CITIES_DATA.slice(0, 10);

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
                ECOSSISTEMA DE SOLUÇÕES WEB LUNAR (+415 PÁGINAS)
              </span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Sites, Landing Pages e Sistemas por{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-white">
                Segmento e Região
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
              Explore nossas soluções especializadas desenvolvidas sob medida para os 45 principais setores da economia e 50 maiores polos empresariais do Brasil.
            </p>
          </div>
        </div>
      </section>

      {/* 2. LIGHT EDITORIAL CONTENT */}
      <div className="bg-slate-50 text-slate-900 py-20">
        <div className="container mx-auto max-w-[1280px] px-6">
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
