'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Calculator,
  Zap,
  Globe,
  ShoppingBag,
  Layers,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Clock,
  Gauge,
  MessageSquare,
} from 'lucide-react';

type ProjectType = 'landing' | 'institucional' | 'ecommerce' | 'pseo';
type TechPreference = 'nextjs' | 'wordpress' | 'auto';
type UrgencyType = 'urgente' | 'padrao' | 'estrutural';

const PROJECT_OPTIONS: Array<{
  id: ProjectType;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ReactNode;
}> = [
  {
    id: 'landing',
    title: 'Landing Page de Vendas',
    subtitle: 'Página focada em transformar cliques de anúncios no Google e Instagram em contatos no WhatsApp.',
    badge: 'Foco em Anúncios',
    icon: <Zap className="w-5 h-5 text-primary" />,
  },
  {
    id: 'institucional',
    title: 'Site ou Portal Institucional',
    subtitle: 'Presença completa com páginas de serviços, portfólio e blog para gerar autoridade no Google.',
    badge: 'Autoridade & Google',
    icon: <Globe className="w-5 h-5 text-primary" />,
  },
  {
    id: 'ecommerce',
    title: 'Loja Virtual / Catálogo',
    subtitle: 'Venda online com checkout rápido no celular, pagamento via Pix/cartão e gestão de produtos.',
    badge: 'Vendas Online 24h',
    icon: <ShoppingBag className="w-5 h-5 text-primary" />,
  },
  {
    id: 'pseo',
    title: 'Sistema Web / Software sob Medida',
    subtitle: 'Plataformas SaaS, painéis administrativos, agendamentos, área de clientes ou integrações.',
    badge: 'Sob Medida',
    icon: <Layers className="w-5 h-5 text-primary" />,
  },
];

const TECH_OPTIONS: Array<{
  id: TechPreference;
  title: string;
  desc: string;
  caseRef: string;
}> = [
  {
    id: 'nextjs',
    title: 'Máxima velocidade e zero dor de cabeça técnica',
    desc: 'Ideal para quem busca abertura instantânea no celular, alta segurança e estabilidade sem precisar cuidar de atualizações.',
    caseRef: 'Padrão utilizado em SNEWS e VOLK Presenter',
  },
  {
    id: 'wordpress',
    title: 'Autonomia para minha equipe editar toda semana',
    desc: 'Painel visual simples para publicar notícias, artigos e alterar textos ou fotos no dia a dia sem depender de programador.',
    caseRef: 'Padrão utilizado no portal oficial do Sinapro/SC',
  },
  {
    id: 'auto',
    title: 'Quero a recomendação da Web Lunar',
    desc: 'Deixe nossa equipe indicar a estrutura com melhor custo-benefício para o seu momento atual.',
    caseRef: 'Recomendação imparcial focada no seu objetivo',
  },
];

const EXTRA_FEATURES = [
  { id: 'qualificador', label: 'Filtro qualificador de clientes antes do WhatsApp', defaultChecked: true },
  { id: 'copy', label: 'Textos estratégicos escritos pela nossa equipe', defaultChecked: true },
  { id: 'seo_geo', label: 'Otimização para aparecer no Google e buscas por IA', defaultChecked: true },
  { id: 'i18n', label: 'Versão em outros idiomas (Inglês / Espanhol)', defaultChecked: false },
  { id: 'ads_pixel', label: 'Instalação de métricas de anúncios (Google e Instagram)', defaultChecked: false },
];

const URGENCY_OPTIONS: Array<{
  id: UrgencyType;
  label: string;
  desc: string;
}> = [
  { id: 'urgente', label: 'O quanto antes', desc: 'Quero lançar rapidamente para iniciar campanhas' },
  { id: 'padrao', label: 'Prazo planejado', desc: 'Equilíbrio ideal entre design cuidadoso e agilidade' },
  { id: 'estrutural', label: 'Projeto em etapas', desc: 'Sistema ou portal maior com entregas progressivas' },
];

export default function CalculadoraClient() {
  const [projectType, setProjectType] = useState<ProjectType>('institucional');
  const [techPref, setTechPref] = useState<TechPreference>('auto');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['qualificador', 'copy', 'seo_geo']);
  const [urgency, setUrgency] = useState<UrgencyType>('padrao');
  const [companySector, setCompanySector] = useState('');

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const diagnostic = useMemo(() => {
    let recommendedStack = '';
    let referenceCase = { name: '', url: '', reason: '' };
    let deliveryDays = '';
    let pageSpeedTarget = 'Abertura < 1s no 4G';

    if (projectType === 'pseo') {
      recommendedStack = 'Software Web sob Medida (Arquitetura Escalável)';
      referenceCase = {
        name: 'SNEWS & CAPI Digital',
        url: '/projetos/snews',
        reason: 'Estrutura feita sob medida para suportar regras de negócio, painéis e integrações com total estabilidade.',
      };
      deliveryDays = urgency === 'urgente' ? '20 a 30 dias úteis' : '20 a 40 dias úteis';
      pageSpeedTarget = 'Alta Performance';
    } else if (projectType === 'landing') {
      if (techPref === 'wordpress') {
        recommendedStack = 'Landing Page Rápida com Painel de Edição';
        referenceCase = {
          name: 'Sinapro/SC',
          url: '/projetos/sinapro',
          reason: 'Prática para equipes de marketing que precisam criar e editar campanhas com autonomia.',
        };
        pageSpeedTarget = 'Rápido no Celular';
      } else {
        recommendedStack = 'Landing Page de Alta Velocidade e Conversão';
        referenceCase = {
          name: 'VOLK Presenter',
          url: '/projetos/volk',
          reason: 'Carregamento quase instantâneo no celular para aproveitar 100% dos cliques dos seus anúncios.',
        };
        pageSpeedTarget = 'Abertura < 1s no 4G';
      }
      deliveryDays = urgency === 'urgente' ? '7 a 10 dias úteis' : '7 a 14 dias úteis';
    } else if (projectType === 'institucional') {
      if (techPref === 'wordpress') {
        recommendedStack = 'Site Institucional com Painel Editorial Completo';
        referenceCase = {
          name: 'Sinapro/SC',
          url: '/projetos/sinapro',
          reason: 'Ideal para portais com notícias, blog ativo e atualizações frequentes pela sua equipe.',
        };
        pageSpeedTarget = 'Rápido no Celular';
      } else if (techPref === 'nextjs') {
        recommendedStack = 'Site Institucional Sob Medida de Alta Performance';
        referenceCase = {
          name: 'SNEWS',
          url: '/projetos/snews',
          reason: 'Máxima velocidade no Google, segurança reforçada e suporte nativo para múltiplos idiomas.',
        };
        pageSpeedTarget = 'Abertura < 1s no 4G';
      } else {
        recommendedStack = selectedFeatures.includes('i18n')
          ? 'Site Institucional Multi-idioma Sob Medida'
          : 'Site Institucional Sob Medida (Estrutura Recomendada)';
        referenceCase = {
          name: 'Sinapro/SC & SNEWS',
          url: '/projetos/sinapro',
          reason: 'Alinhamos na primeira conversa se sua prioridade maior é edição diária pela equipe ou velocidade máxima.',
        };
        pageSpeedTarget = 'Abertura < 1s no 4G';
      }
      deliveryDays = urgency === 'urgente' ? '15 a 20 dias úteis' : '15 a 25 dias úteis';
    } else {
      recommendedStack = 'Loja Virtual Rápida com Checkout Otimizado';
      referenceCase = {
        name: 'KRONOS Store',
        url: '/projetos/kronos-store',
        reason: 'Catálogo leve pensado para facilitar a compra rápida direto pelo celular.',
      };
      deliveryDays = urgency === 'urgente' ? '20 a 30 dias úteis' : '20 a 40 dias úteis';
      pageSpeedTarget = 'Alta Performance';
    }

    return {
      recommendedStack,
      referenceCase,
      deliveryDays,
      pageSpeedTarget,
    };
  }, [projectType, techPref, selectedFeatures, urgency]);

  const handleSendWhatsApp = () => {
    const projectLabel = PROJECT_OPTIONS.find((p) => p.id === projectType)?.title || '';
    const featuresLabels = EXTRA_FEATURES.filter((f) => selectedFeatures.includes(f.id))
      .map((f) => f.label)
      .join(', ');

    const text = [
      'Olá, equipe Web Lunar! Fiz a simulação do meu projeto no site:',
      '',
      `*Tipo de Projeto:* ${projectLabel}`,
      `*Formato Recomendado:* ${diagnostic.recommendedStack}`,
      `*Prazo Estimado:* ${diagnostic.deliveryDays}`,
      `*Recursos:* ${featuresLabels || 'Estrutura base'}`,
      companySector ? `*Meu Segmento/Cidade:* ${companySector}` : '',
      '',
      'Gostaria de receber uma proposta comercial para esse escopo!',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(
      `https://wa.me/5561982630397?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="min-h-screen bg-bg text-text selection:bg-primary selection:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#05070F] pt-32 pb-16 border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-primary/15 rounded-full blur-[130px] pointer-events-none" />
        <div className="container mx-auto max-w-[1280px] px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
              <Calculator className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                SIMULADOR GRATUITO · WEB LUNAR
              </span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-5xl text-white leading-tight mb-5">
              Simulador de Projeto e{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-white">
                Orçamento
              </span>
            </h1>
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
              Responda 4 perguntas rápidas e receba o formato ideal, o prazo estimado e o resumo pronto para solicitar sua proposta.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE CALCULATOR */}
      <section className="bg-slate-50 text-slate-900 py-16">
        <div className="container mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* LEFT: 4 STEPS */}
            <div className="lg:col-span-7 space-y-10">
              {/* STEP 1 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                    O que você precisa construir?
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROJECT_OPTIONS.map((option) => {
                    const active = projectType === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setProjectType(option.id)}
                        className={`text-left p-5 rounded-xl border transition-all ${
                          active
                            ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="p-2 rounded-lg bg-slate-100">{option.icon}</div>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                            {option.badge}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 mb-1.5">
                          {option.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">{option.subtitle}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 2 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                    Como sua equipe pretende usar e atualizar?
                  </h2>
                </div>
                <div className="space-y-3">
                  {TECH_OPTIONS.map((option) => {
                    const active = techPref === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setTechPref(option.id)}
                        className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all ${
                          active
                            ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                            : 'border-slate-200 bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                            {option.title}
                          </h3>
                          <span className="text-[11px] font-semibold text-primary shrink-0">
                            {active ? 'Selecionado ✓' : 'Selecionar'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mb-2">{option.desc}</p>
                        <p className="text-[11px] font-medium text-slate-500">
                          📌 Referência real: {option.caseRef}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* STEP 3 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                    Quais recursos extras fazem sentido para você?
                  </h2>
                </div>
                <div className="space-y-2.5">
                  {EXTRA_FEATURES.map((feat) => {
                    const checked = selectedFeatures.includes(feat.id);
                    return (
                      <label
                        key={feat.id}
                        onClick={() => toggleFeature(feat.id)}
                        className={`flex items-center gap-3.5 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          checked
                            ? 'border-primary/50 bg-primary/5 text-slate-900 font-medium'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => {}}
                          className="w-4 h-4 accent-primary rounded"
                        />
                        <span className="text-xs sm:text-sm">{feat.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* STEP 4 */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-7 h-7 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">
                    4
                  </span>
                  <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                    Qual a urgência e o seu segmento?
                  </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                  {URGENCY_OPTIONS.map((u) => {
                    const active = urgency === u.id;
                    return (
                      <button
                        key={u.id}
                        type="button"
                        onClick={() => setUrgency(u.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          active
                            ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <p className="font-bold text-xs text-slate-900 mb-1">{u.label}</p>
                        <p className="text-[11px] text-slate-500">{u.desc}</p>
                      </button>
                    );
                  })}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2">
                    Seu segmento e cidade (Opcional — ex: Clínica Odontológica em Florianópolis)
                  </label>
                  <input
                    type="text"
                    value={companySector}
                    onChange={(e) => setCompanySector(e.target.value)}
                    placeholder="Ex: Escritório de Advocacia em São Paulo, Clínica em Florianópolis..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: STICKY DIAGNOSTIC RESULT */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="rounded-3xl bg-[#070A14] text-white border border-white/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold uppercase tracking-wider mb-5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Resumo em Tempo Real
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-6">
                  Formato Recomendado para o Seu Projeto
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-1">
                      Formato Ideal
                    </p>
                    <p className="text-sm sm:text-base font-bold text-primary">
                      {diagnostic.recommendedStack}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-1.5 text-white/60 text-xs mb-1">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span>Prazo Estimado</span>
                      </div>
                      <p className="text-sm font-bold text-white">{diagnostic.deliveryDays}</p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-1.5 text-white/60 text-xs mb-1">
                        <Gauge className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Experiência Mobile</span>
                      </div>
                      <p className="text-sm font-bold text-emerald-400">{diagnostic.pageSpeedTarget}</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-[11px] uppercase tracking-wider text-white/50 font-semibold mb-1">
                      Case Semelhante no Nosso Portfólio
                    </p>
                    <Link
                      href={diagnostic.referenceCase.url}
                      className="text-sm font-bold text-white hover:text-primary underline decoration-primary/50 transition-colors inline-flex items-center gap-1.5 mb-1"
                    >
                      {diagnostic.referenceCase.name}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <p className="text-xs text-white/70 leading-relaxed">
                      {diagnostic.referenceCase.reason}
                    </p>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-3">
                    Incluso no seu escopo selecionado:
                  </p>
                  <ul className="space-y-2 text-xs text-white/80">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Design exclusivo 100% responsivo (Mobile-First)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Código e domínio 100% de propriedade da sua empresa</span>
                    </li>
                    {selectedFeatures.map((fId) => {
                      const feat = EXTRA_FEATURES.find((item) => item.id === fId);
                      if (!feat) return null;
                      return (
                        <li key={fId} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span>{feat.label}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full py-4 px-6 rounded-xl bg-primary hover:bg-blue-600 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Receber Orçamento Desse Escopo no WhatsApp</span>
                </button>

                <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-white/50">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Atendimento direto com engenheiro responsável · Sem compromisso</span>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM COMPARISONS & AUTHORITY LINKS */}
          <div className="mt-20 pt-12 border-t border-slate-200">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-6">
              Ainda em dúvida sobre a melhor escolha? Confira nossos comparativos técnicos:
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Link
                href="/solucoes/wordpress-vs-nextjs-qual-escolher"
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-primary transition-all group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">
                  COMPARATIVO DE TECNOLOGIA
                </span>
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-primary mb-1">
                  WordPress vs Next.js: Qual escolher em 2026?
                </h3>
                <p className="text-xs text-slate-500">
                  A visão de quem criou o portal Sinapro/SC (WordPress) e a plataforma SNEWS (Next.js).
                </p>
              </Link>

              <Link
                href="/solucoes/landing-page-vs-site-institucional-qual-melhor"
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-primary transition-all group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">
                  DECISÃO COMERCIAL
                </span>
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-primary mb-1">
                  Landing Page vs Site Institucional: Qual vende mais?
                </h3>
                <p className="text-xs text-slate-500">
                  Saiba qual modelo traz retorno mais rápido para o seu momento.
                </p>
              </Link>

              <Link
                href="/solucoes/anuncio-direto-whatsapp-vs-landing-page"
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-primary transition-all group"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">
                  TRÁFEGO PAGO & VENDAS
                </span>
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-primary mb-1">
                  Anúncio Direto pro WhatsApp vs Landing Page com Filtro
                </h3>
                <p className="text-xs text-slate-500">
                  Como eliminar curiosos perguntando preço e focar em quem fecha contrato.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
