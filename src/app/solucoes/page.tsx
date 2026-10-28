import { Metadata } from 'next';
import Link from 'next/link';
import { CITIES_DATA, SERVICE_TYPES, NICHES_DATA } from '@/content/programmaticSeoData';

export const metadata: Metadata = {
  title: 'Soluções Digitais por Segmento e Região | Web Lunar',
  description:
    'Criação de sites profissionais, landing pages de alta conversão e lojas virtuais sob medida para empresas, clínicas e escritórios em todo o Brasil.',
  alternates: {
    canonical: 'https://weblunar.com.br/solucoes',
  },
};

export default function SolucoesHubPage() {
  return (
    <div className="min-h-screen bg-bg text-text pt-32 pb-24 selection:bg-primary selection:text-white">
      <div className="container mx-auto max-w-[1280px] px-6">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              DIRETÓRIO DE SOLUÇÕES WEB LUNAR
            </span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-5xl text-white leading-tight mb-6">
            Sites e Landing Pages por{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">
              Segmento e Região
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/75 font-light leading-relaxed">
            Explore nossas soluções especializadas desenvolvidas sob medida para os principais setores da economia e polos empresariais do Brasil.
          </p>
        </div>

        {/* Block 1: Niches */}
        <section className="mb-20">
          <div className="border-b border-white/10 pb-4 mb-8">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold block mb-1">
              ESPECIALIDADES POR SETOR
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Soluções por Segmento Profissional
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {NICHES_DATA.map((niche) => (
              <Link
                key={niche.slug}
                href={`/solucoes/${niche.slug}`}
                className="group rounded-xl border border-white/10 bg-white/[0.02] hover:border-primary/50 hover:bg-primary/[0.05] p-5 transition-all"
              >
                <span className="text-[10px] uppercase tracking-widest text-primary font-semibold block mb-1">
                  {niche.singular}
                </span>
                <h3 className="font-display text-base font-semibold text-white group-hover:text-primary transition-colors mb-2">
                  Sites e Landing Pages para {niche.name}
                </h3>
                <p className="text-xs text-white/55 line-clamp-2 font-light">
                  Foco em {niche.conversionGoal}.
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Block 2: Cities x Services */}
        {SERVICE_TYPES.map((service) => (
          <section key={service.slugPrefix} className="mb-16">
            <div className="border-b border-white/10 pb-4 mb-8">
              <span className="text-xs uppercase tracking-widest text-primary font-semibold block mb-1">
                ATENDIMENTO NACIONAL
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                {service.name} nos Principais Polos do Brasil
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {CITIES_DATA.map((city) => (
                <Link
                  key={`${service.slugPrefix}-${city.slug}`}
                  href={`/solucoes/${service.slugPrefix}-${city.slug}`}
                  className="rounded-lg border border-white/10 bg-white/[0.01] hover:border-primary/40 hover:bg-primary/10 px-4 py-3 text-xs sm:text-sm text-white/80 hover:text-white transition-all flex items-center justify-between"
                >
                  <span className="truncate">{city.name}</span>
                  <span className="text-[10px] text-white/40 ml-1 shrink-0">{city.state}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
