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
    <div className="min-h-screen bg-bg text-text selection:bg-primary selection:text-white">
      {/* 1. HERO SECTION (DARK THEME) */}
      <section className="relative overflow-hidden bg-[#05070F] pt-28 pb-20 md:pb-28 border-b border-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[420px] bg-primary/15 rounded-full blur-[130px] pointer-events-none" />

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

              <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-white/80">
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
              <div className="rounded-2xl border border-white/15 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
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
                      <option value="Otimização SEO / Reformulação">Otimização SEO / Reformular Site Atual</option>
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
                    className="w-full mt-2 rounded-xl bg-primary hover:bg-blue-600 text-white font-semibold py-4 px-6 text-sm sm:text-base transition-all shadow-[0_0_25px_rgba(29,77,255,0.4)] cursor-pointer flex items-center justify-center gap-2"
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

      {/* 2. LOCAL / NICHE CONTEXT SECTION (LIGHT EDITORIAL THEME) */}
      <section className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
        <div className="container mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-xs uppercase tracking-widest font-bold mb-4">
                CENÁRIO E ESTRATÉGIA COMERCIAL
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                {page.contextHeading}
              </h2>
              <div className="space-y-5 text-slate-600 text-base sm:text-lg leading-relaxed">
                {page.contextParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-slate-50 border border-slate-200/80 p-6 sm:p-8 shadow-sm">
                <span className="text-xs font-bold uppercase tracking-wider text-primary block mb-2">
                  POR QUE ESCOLHER A WEB LUNAR
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 mb-4">
                  Engenharia focada no resultado do seu negócio
                </h3>
                <ul className="space-y-3.5 text-sm text-slate-600 mb-6">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                    <span>Código limpo sem peso de templates lentos</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                    <span>Estrutura semântica lida pelo Google e por IAs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                    <span>Atendimento direto com especialistas, sem robôs</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-600 font-bold mt-0.5">✓</span>
                    <span>Suporte próximo após a publicação do projeto</span>
                  </li>
                </ul>
                <Link
                  href="/contato"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 hover:bg-primary text-white text-sm font-semibold py-3.5 px-5 transition-colors"
                >
                  <span>Falar com Especialista</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PAIN POINTS vs DELIVERABLES (LIGHT SLATE THEME) */}
      <section className="py-20 md:py-28 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="container mx-auto max-w-[1280px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Pain points */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs uppercase tracking-widest font-bold mb-4">
                GARGALOS COMUNS DO MERCADO
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-8 leading-snug">
                {page.painPointsTitle}
              </h2>
              <div className="space-y-5">
                {page.painPoints.map((pain, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="font-display text-lg font-bold text-slate-900 mb-2 flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold shrink-0">
                        ✕
                      </span>
                      {pain.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed pl-8">
                      {pain.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs uppercase tracking-widest font-bold mb-4">
                METODOLOGIA WEB LUNAR
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-8 leading-snug">
                {page.deliverablesTitle}
              </h2>
              <div className="rounded-2xl border-2 border-primary/20 bg-white p-6 sm:p-8 shadow-md space-y-5">
                {page.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <span className="w-7 h-7 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold border border-primary/20">
                      0{idx + 1}
                    </span>
                    <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}

                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Quer ver projetos reais?</p>
                    <p className="text-sm text-slate-800 font-semibold">Confira nosso portfólio de alta performance</p>
                  </div>
                  <Link
                    href="/projetos"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-primary hover:text-blue-700 transition-colors"
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

      {/* 4. FAQ SECTION (CLEAN WHITE THEME) */}
      <section className="py-20 md:py-28 bg-white text-slate-900 border-b border-slate-200">
        <div className="container mx-auto max-w-[960px] px-6">
          <div className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-primary text-xs uppercase tracking-widest font-bold mb-3">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
              Perguntas Frequentes sobre {page.title}
            </h2>
          </div>

          <div className="space-y-4">
            {page.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 transition-all hover:border-slate-300"
              >
                <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERNAL LINKING MESH (SOFT SLATE THEME) */}
      <section className="py-20 bg-slate-100 text-slate-900">
        <div className="container mx-auto max-w-[1280px] px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-primary font-bold block mb-2">
                NAVEGAÇÃO ESTRATÉGICA
              </span>
              <h2 className="font-display text-xl sm:text-3xl font-bold text-slate-900">
                Outras Soluções e Regiões Atendidas pela Web Lunar
              </h2>
            </div>
            <Link
              href="/solucoes"
              className="text-xs sm:text-sm text-primary hover:text-blue-700 transition-colors font-bold"
            >
              Ver todas as 400+ soluções →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedPages.map((rel) => (
              <Link
                key={rel.slug}
                href={`/solucoes/${rel.slug}`}
                className="group rounded-xl border border-slate-200 bg-white hover:border-primary hover:shadow-md p-5 transition-all"
              >
                <span className="text-[10px] uppercase tracking-widest text-primary font-bold block mb-1.5">
                  {rel.badge}
                </span>
                <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-primary transition-colors">
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
