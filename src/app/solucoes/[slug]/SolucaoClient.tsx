'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ProgrammaticPageData } from '@/content/programmaticSeoData';

interface Props {
  page: ProgrammaticPageData;
  relatedPages: ProgrammaticPageData[];
}

export default function SolucaoClient({ page, relatedPages }: Props) {
  const [projectType, setProjectType] = useState('Landing Page de Alta Conversão');
  const [timeline, setTimeline] = useState('Quero começar o quanto antes');
  const [goal, setGoal] = useState('Receber mais clientes no WhatsApp');
  const [companyName, setCompanyName] = useState('');

  const handleQualifiedWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const contextText = page.cityName
      ? `${page.serviceName} em ${page.cityName} (${page.stateCode})`
      : `${page.serviceName}`;

    const message = `Olá, equipe da Web Lunar! Vim pela página de *${contextText}* e gostaria de uma proposta qualificada:\n\n` +
      `• *Empresa / Área:* ${companyName || (page.nicheName ?? 'Não informado')}\n` +
      `• *Tipo de Projeto:* ${projectType}\n` +
      `• *Objetivo Principal:* ${goal}\n` +
      `• *Prazo Desejado:* ${timeline}\n\n` +
      `Podemos conversar sobre o escopo?`;

    const whatsappUrl = `https://wa.me/5561982630397?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-bg text-text pt-28 pb-20 selection:bg-primary selection:text-white">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-white/10 pb-16 md:pb-24">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="container mx-auto max-w-[1280px] px-6 relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Início</Link>
            <span>/</span>
            <Link href="/solucoes" className="hover:text-white transition-colors">Soluções</Link>
            <span>/</span>
            <span className="text-primary font-medium truncate max-w-[260px] sm:max-w-none">{page.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {page.badge}
                </span>
              </div>

              <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white mb-6">
                {page.heroTitle}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-white">
                  {page.heroHighlight}
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
                {page.heroSubtitle}
              </p>

              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">✓</span>
                  <span>Nota 90+ no Google PageSpeed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">✓</span>
                  <span>SEO Técnico para Google & IAs</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">✓</span>
                  <span>Foco Total em Conversão</span>
                </div>
              </div>
            </div>

            {/* ANTI-CURIOSO QUALIFIER CARD */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                    Orçamento Rápido & Qualificado
                  </span>
                  <span className="text-xs text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Online agora
                  </span>
                </div>

                <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                  Solicite um Diagnóstico para seu Projeto
                </h2>
                <p className="text-xs sm:text-sm text-white/60 mb-6">
                  Selecione 3 opções rápidas para nossa equipe já entender sua demanda no WhatsApp sem perda de tempo:
                </p>

                <form onSubmit={handleQualifiedWhatsApp} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      Nome da sua Empresa ou Área de Atuação
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder={page.nicheName ? `Ex: ${page.nicheName}` : 'Ex: Clínica, Escritório, Loja...'}
                      className="w-full rounded-xl bg-black/50 border border-white/15 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      1. O que você busca desenvolver?
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full rounded-xl bg-black/80 border border-white/15 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
                    >
                      <option value="Landing Page de Alta Conversão">Landing Page de Alta Conversão</option>
                      <option value="Site Institucional Completo">Site Institucional Completo</option>
                      <option value="Loja Virtual / E-commerce">Loja Virtual / E-commerce</option>
                      <option value="Reformulação de Site Atual">Reformular Meu Site Atual</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      2. Qual o seu objetivo principal?
                    </label>
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full rounded-xl bg-black/80 border border-white/15 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
                    >
                      <option value="Receber mais clientes no WhatsApp">Receber mais clientes no WhatsApp</option>
                      <option value="Aparecer na 1ª página do Google">Aparecer na 1ª página do Google</option>
                      <option value="Rodar anúncios no Google Ads / Instagram">Rodar anúncios no Google Ads / Meta</option>
                      <option value="Transmitir mais autoridade e confiança">Transmitir mais autoridade e confiança</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-white/80 mb-1.5">
                      3. Qual a sua urgência?
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full rounded-xl bg-black/80 border border-white/15 px-4 py-3 text-sm text-white focus:border-primary focus:outline-none"
                    >
                      <option value="Quero começar o quanto antes">Quero começar imediatamente</option>
                      <option value="Nos próximos 15 dias">Nos próximos 15 dias</option>
                      <option value="Neste mês ainda">Neste mês ainda</option>
                      <option value="Estou planejando para o próximo mês">Estou planejando para o próximo mês</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-6 text-sm sm:text-base transition-all shadow-[0_0_25px_rgba(29,77,255,0.4)] cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Receber Proposta no WhatsApp</span>
                    <span>→</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL / NICHE CONTEXT SECTION */}
      <section className="py-16 md:py-24 border-b border-white/10">
        <div className="container mx-auto max-w-[1280px] px-6">
          <div className="max-w-4xl">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold block mb-3">
              CENÁRIO E ESTRATÉGIA
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mb-8">
              {page.contextHeading}
            </h2>
            <div className="space-y-5 text-white/75 text-base sm:text-lg leading-relaxed font-light">
              {page.contextParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS vs DELIVERABLES */}
      <section className="py-16 md:py-24 border-b border-white/10 bg-white/[0.01]">
        <div className="container mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Pain points */}
            <div>
              <span className="text-xs uppercase tracking-widest text-red-400 font-semibold block mb-3">
                GARGALOS COMUNS
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
                {page.painPointsTitle}
              </h2>
              <div className="space-y-6">
                {page.painPoints.map((pain, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-black/40 p-6"
                  >
                    <h3 className="font-display text-lg font-semibold text-white mb-2 flex items-center gap-2.5">
                      <span className="text-red-400 text-sm">✕</span>
                      {pain.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/65 font-light leading-relaxed">
                      {pain.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block mb-3">
                SOLUÇÃO WEB LUNAR
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8">
                {page.deliverablesTitle}
              </h2>
              <div className="rounded-2xl border border-primary/30 bg-primary/[0.04] p-6 sm:p-8 space-y-5">
                {page.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                      0{idx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-white/85 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}

                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wider">Quer ver projetos reais?</p>
                    <p className="text-sm text-white font-medium">Confira nosso portfólio de alta performance</p>
                  </div>
                  <Link
                    href="/projetos"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:text-white transition-colors"
                  >
                    <span>Ver Cases Entregues</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 md:py-24 border-b border-white/10">
        <div className="container mx-auto max-w-[1000px] px-6">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold block mb-3">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
              Perguntas Frequentes sobre {page.title}
            </h2>
          </div>

          <div className="space-y-4">
            {page.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
              >
                <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-white/70 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKING MESH (SEO AUTHORITY DISTRIBUTION) */}
      <section className="py-16">
        <div className="container mx-auto max-w-[1280px] px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-primary font-semibold block mb-2">
                NAVEGAÇÃO ESTRATÉGICA
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                Outras Soluções e Regiões Atendidas pela Web Lunar
              </h2>
            </div>
            <Link
              href="/solucoes"
              className="text-xs sm:text-sm text-primary hover:text-white transition-colors font-medium"
            >
              Ver todas as 150+ soluções →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedPages.map((rel) => (
              <Link
                key={rel.slug}
                href={`/solucoes/${rel.slug}`}
                className="group rounded-xl border border-white/10 bg-white/[0.02] hover:border-primary/50 hover:bg-primary/[0.05] p-5 transition-all"
              >
                <span className="text-[10px] uppercase tracking-widest text-primary font-semibold block mb-1">
                  {rel.badge}
                </span>
                <h3 className="font-display text-base font-semibold text-white group-hover:text-primary transition-colors">
                  {rel.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
