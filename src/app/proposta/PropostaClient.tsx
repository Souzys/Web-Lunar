'use client';

import React, { useState, useEffect } from 'react';
import { 
  Printer, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Phone, 
  Mail, 
  Globe, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ListFilter,
  MessageCircle,
  FileCheck,
  Check
} from 'lucide-react';
import { PROPOSTA_PADRAO, PropostaConfig } from '@/content/propostaData';

export function PropostaClient({ initialData = PROPOSTA_PADRAO }: { initialData?: PropostaConfig }) {
  const [data] = useState<PropostaConfig>(initialData);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'slides' | 'all'>('slides');

  const totalSlides = 4;

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (viewMode === 'slides') {
        if (e.key === 'ArrowRight' || e.key === 'Space') {
          nextSlide();
        } else if (e.key === 'ArrowLeft') {
          prevSlide();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode]);

  const handlePrint = () => {
    setViewMode('all');
    setTimeout(() => {
      window.print();
    }, 150);
  };

  return (
    <div className="bg-[#03050c] text-white min-h-screen font-sans antialiased selection:bg-primary selection:text-white relative overflow-x-hidden">
      
      {/* ========================================================
          BARRA FLUTUANTE DE NAVEGAÇÃO E CONTROLE (OCULTA NO PDF)
      ======================================================== */}
      <aside aria-label="Controles da Proposta" className="print:hidden fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 sm:gap-4 px-4 py-2.5 rounded-full bg-[#080d1e]/90 border border-primary/30 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.8)] text-xs text-white">
        
        {/* Logo / Badge */}
        <div className="flex items-center gap-2 pr-3 border-r border-white/10 font-mono">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#1d4dff]" />
          <span className="font-bold text-white tracking-wider hidden sm:inline">PITCH DECK</span>
        </div>

        {/* Controles de Slides (se no modo slides) */}
        {viewMode === 'slides' && (
          <div className="flex items-center gap-1.5 font-mono">
            <button
              onClick={prevSlide}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors cursor-pointer"
              title="Lâmina anterior (Seta Esquerda)"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] px-2 font-bold text-primary">
              {currentSlide + 1} / {totalSlides}
            </span>
            <button
              onClick={nextSlide}
              className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors cursor-pointer"
              title="Próxima lâmina (Seta Direita)"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Alternador de Modo (Slides vs Todos) */}
        <button
          onClick={() => setViewMode(viewMode === 'slides' ? 'all' : 'slides')}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer text-[11px] font-medium"
        >
          {viewMode === 'slides' ? (
            <>
              <ListFilter className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Ver Todas</span>
            </>
          ) : (
            <>
              <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden sm:inline">Modo Slide</span>
            </>
          )}
        </button>

        {/* Botão Exportar PDF Horizontal */}
        <button
          onClick={handlePrint}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary hover:bg-blue-600 text-white font-bold shadow-[0_0_20px_rgba(29,77,255,0.4)] hover:shadow-[0_0_25px_rgba(29,77,255,0.7)] transition-all cursor-pointer text-xs uppercase tracking-wider"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Salvar PDF</span>
        </button>
      </aside>

      {/* ========================================================
          SLIDES HORIZONTAIS DE ALTO IMPACTO (16:9 / A4 LANDSCAPE)
      ======================================================== */}
      <main className={`w-full flex flex-col items-center justify-center ${viewMode === 'slides' ? 'h-screen' : 'py-20 gap-16'}`}>
        
        {/* SLIDE 01: CAPA EXECUTIVA */}
        {(viewMode === 'all' || currentSlide === 0) && (
          <section className="slide-page w-full max-w-[1400px] aspect-[16/9] min-h-[640px] max-h-[880px] p-8 sm:p-12 lg:p-16 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#070b19] via-[#05070f] to-[#020308] border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.8)] relative overflow-hidden print:m-0 print:rounded-none print:border-none print:shadow-none">
            
            {/* Elementos visuais de fundo */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

            {/* Topo do Slide 1 */}
            <div className="relative z-10 flex justify-between items-center pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img src="/logo-web-lunar-light.png" alt="Web Lunar" className="h-10 w-auto" />
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest bg-primary/20 border border-primary/40 text-blue-300 shadow-[0_0_12px_rgba(29,77,255,0.3)]">
                  {data.proposta.codigo}
                </span>
                <span className="text-xs font-mono text-neutral-400">PROPOSTA COMERCIAL</span>
              </div>
            </div>

            {/* Centro do Slide 1 */}
            <div className="relative z-10 my-auto py-6 max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-semibold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{data.projeto.categoria}</span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05] mb-6">
                {data.projeto.titulo}
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 font-light leading-relaxed max-w-2xl border-l-2 border-primary/50 pl-5">
                {data.projeto.resumo}
              </p>
            </div>

            {/* Rodapé Metadados do Slide 1 */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold mb-1">CLIENTE</p>
                <p className="text-sm font-bold text-white">{data.cliente.nome}</p>
                <p className="text-xs text-neutral-400">{data.cliente.empresa}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold mb-1">DATA DE EMISSÃO</p>
                <p className="text-sm font-bold text-white">{data.proposta.dataEmissao}</p>
                <p className="text-xs text-neutral-400">Validade: {data.proposta.validade}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold mb-1">TECNOLOGIAS</p>
                <p className="text-sm font-bold text-blue-300 font-mono">Next.js 15 & Motion</p>
                <p className="text-xs text-neutral-400">TypeScript • Tailwind CSS</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold mb-1">AUTORIA</p>
                <p className="text-sm font-bold text-white">Web Lunar Studio</p>
                <p className="text-xs text-neutral-400">{data.empresa.email}</p>
              </div>
            </div>
          </section>
        )}

        {/* SLIDE 02: DIAGNÓSTICO & OBJETIVOS */}
        {(viewMode === 'all' || currentSlide === 1) && (
          <section className="slide-page w-full max-w-[1400px] aspect-[16/9] min-h-[640px] max-h-[880px] p-8 sm:p-12 lg:p-16 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#070b19] via-[#05070f] to-[#020308] border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.8)] relative overflow-hidden print:m-0 print:rounded-none print:border-none print:shadow-none">
            
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[130px] pointer-events-none" />

            {/* Header do Slide */}
            <div className="flex justify-between items-center pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                  01 // ESCOPO & DIAGNÓSTICO ESTRATÉGICO
                </span>
              </div>
              <span className="text-xs font-mono text-neutral-500">{data.proposta.codigo} • LÂMINA 02/04</span>
            </div>

            {/* Conteúdo em 2 Colunas Horizontais */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-4 items-center">
              
              {/* Coluna Esquerda: Contexto & KPIs */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                    Arquitetura projetada para gerar resultados reais
                  </h2>
                  <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                    Não desenvolvemos apenas páginas estáticas. Criamos ecossistemas digitais rápidos, modulares e preparados para converter visitantes em clientes qualificados.
                  </p>
                </div>

                {/* Métricas rápidas */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <p className="text-2xl font-black font-mono text-primary">&lt; 1.5s</p>
                    <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono">Carregamento no 4G</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    <p className="text-2xl font-black font-mono text-emerald-400">95-100</p>
                    <p className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono">Google PageSpeed</p>
                  </div>
                </div>
              </div>

              {/* Coluna Direita: 4 Objetivos Principais em Cards */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.projeto.objetivos.map((obj, i) => (
                  <div 
                    key={i} 
                    className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/40 transition-all flex flex-col justify-between shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary font-bold text-xs font-mono">
                        0{i + 1}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    </div>
                    <p className="text-sm text-neutral-200 font-normal leading-relaxed">
                      {obj}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* Rodapé do Slide 2 */}
            <div className="flex justify-between items-center pt-4 border-t border-white/10 text-xs font-mono text-neutral-500">
              <span>{data.empresa.nome} • {data.cliente.empresa}</span>
              <span>Engenharia Full Stack & UI/UX</span>
            </div>
          </section>
        )}

        {/* SLIDE 03: CRONOGRAMA & FASES */}
        {(viewMode === 'all' || currentSlide === 2) && (
          <section className="slide-page w-full max-w-[1400px] aspect-[16/9] min-h-[640px] max-h-[880px] p-8 sm:p-12 lg:p-16 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#070b19] via-[#05070f] to-[#020308] border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.8)] relative overflow-hidden print:m-0 print:rounded-none print:border-none print:shadow-none">
            
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[140px] pointer-events-none" />

            {/* Header do Slide */}
            <div className="flex justify-between items-center pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                  02 // METODOLOGIA, CRONOGRAMA & ENTREGÁVEIS
                </span>
              </div>
              <span className="text-xs font-mono text-neutral-500">{data.proposta.codigo} • LÂMINA 03/04</span>
            </div>

            {/* 3 Fases em Layout Horizontal */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto py-4">
              {data.etapas.map((etapa, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-primary/40 flex flex-col justify-between shadow-lg relative group"
                >
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="px-3 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-primary text-white">
                        {etapa.fase}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-blue-300 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        <span>{etapa.duracao}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                      {etapa.titulo}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed mb-6">
                      {etapa.descricao}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-white/10">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold">Entregáveis:</p>
                    {etapa.entregaveis.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Diferenciais Inclusos */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/15 via-primary/5 to-transparent border border-primary/30 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-mono font-bold text-blue-300 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                Diferenciais Inclusos:
              </span>
              {data.diferenciais.slice(0, 3).map((d, i) => (
                <div key={i} className="flex items-center gap-2 text-neutral-200">
                  <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SLIDE 04: INVESTIMENTO & APROVAÇÃO */}
        {(viewMode === 'all' || currentSlide === 3) && (
          <section className="slide-page w-full max-w-[1400px] aspect-[16/9] min-h-[640px] max-h-[880px] p-8 sm:p-12 lg:p-16 flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#070b19] via-[#05070f] to-[#020308] border border-white/10 shadow-[0_20px_70px_rgba(0,0,0,0.8)] relative overflow-hidden print:m-0 print:rounded-none print:border-none print:shadow-none">
            
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />

            {/* Header do Slide */}
            <div className="flex justify-between items-center pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-primary">
                  03 // INVESTIMENTO, CONDIÇÕES & APROVAÇÃO
                </span>
              </div>
              <span className="text-xs font-mono text-neutral-500">{data.proposta.codigo} • LÂMINA 04/04</span>
            </div>

            {/* Conteúdo em 3 Colunas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-auto py-4">
              
              {/* Coluna 1 (4 cols): Preço & Formas de Pagamento */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-4">
                <div className="p-6 rounded-2xl bg-gradient-to-b from-primary/20 to-primary/5 border border-primary/40 shadow-xl">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-300 block mb-1">
                    INVESTIMENTO TOTAL
                  </span>
                  <div className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white mb-2">
                    {data.investimento.valorTotal}
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold font-mono">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>30 Dias de Suporte e Garantia</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {data.investimento.condicoes.map((cond, i) => (
                    <div 
                      key={i} 
                      className={`p-3 rounded-xl border text-xs ${
                        cond.destaque 
                          ? 'bg-primary/10 border-primary/40 text-white font-semibold' 
                          : 'bg-white/[0.02] border-white/10 text-neutral-300'
                      }`}
                    >
                      <p className="font-bold text-white mb-0.5">{cond.titulo}</p>
                      <p className="text-[11px] text-neutral-400">{cond.descricao}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coluna 2 (4 cols): Incluso na Proposta */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Incluso no Pacote</span>
                  </h4>
                  <div className="space-y-2.5">
                    {data.investimento.incluso.map((item, idx) => (
                      <div key={idx} className="text-xs text-neutral-300 flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10">
                  <p className="text-[10px] font-mono text-neutral-400 uppercase">Validade da proposta: {data.proposta.validade}</p>
                </div>
              </div>

              {/* Coluna 3 (4 cols): Aceite, Assinaturas & Contato */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                    <FileCheck className="w-4 h-4" />
                    <span>Aprovação do Projeto</span>
                  </h4>
                  <p className="text-xs text-neutral-400 font-light mb-4">
                    Para aprovar e dar início ao cronograma de desenvolvimento, confirme pelos canais abaixo:
                  </p>
                  
                  <a
                    href={`https://wa.me/5561982630397?text=${encodeURIComponent(`Olá equipe Web Lunar! Gostaria de aprovar a proposta comercial ${data.proposta.codigo} (${data.projeto.titulo}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-neutral-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#25D366]/20 transition-all mb-3"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Aprovar via WhatsApp</span>
                  </a>
                </div>

                {/* Linhas de Assinatura */}
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-center">
                  <div>
                    <div className="h-8 border-b border-white/20" />
                    <p className="text-[10px] font-bold text-white mt-1">{data.empresa.nome}</p>
                  </div>
                  <div>
                    <div className="h-8 border-b border-white/20" />
                    <p className="text-[10px] font-bold text-white mt-1">{data.cliente.nome}</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Rodapé do Slide 4 */}
            <div className="flex justify-between items-center pt-4 border-t border-white/10 text-xs font-mono text-neutral-500">
              <span>{data.empresa.site} • {data.empresa.whatsapp}</span>
              <span>Documento Executivo Confidencial</span>
            </div>
          </section>
        )}

      </main>

      {/* ========================================================
          ESTILOS DE IMPRESSÃO A4 HORIZONTAL (@media print)
      ======================================================== */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          html, body {
            background-color: #03050c !important;
            color: #ffffff !important;
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
            width: 100%;
            height: 100%;
            margin: 0 !important;
            padding: 0 !important;
          }
          header, footer, nav, aside {
            display: none !important;
          }
          .slide-page {
            width: 100vw !important;
            height: 100vh !important;
            max-width: none !important;
            max-height: none !important;
            aspect-ratio: auto !important;
            page-break-after: always !important;
            break-after: page !important;
            border-radius: 0 !important;
            border: none !important;
            box-shadow: none !important;
            box-sizing: border-box !important;
            padding: 24mm 20mm !important;
          }
        }
      `}</style>
    </div>
  );
}
