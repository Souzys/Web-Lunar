'use client';

import React, { useState } from 'react';
import { 
  Printer, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Layers, 
  FileText, 
  Phone, 
  Mail, 
  Globe, 
  Sun, 
  Moon,
  Sparkles,
  ArrowRight,
  Info,
  XCircle
} from 'lucide-react';
import { PROPOSTA_PADRAO, PropostaConfig } from '@/content/propostaData';

export function PropostaClient({ initialData = PROPOSTA_PADRAO }: { initialData?: PropostaConfig }) {
  const [data] = useState<PropostaConfig>(initialData);
  const [isPrintMode, setIsPrintMode] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
      isPrintMode ? 'bg-[#F4F6F9] text-neutral-900' : 'bg-[#05070F] text-white'
    }`}>
      
      {/* ========================================================
          BARRA DE CONTROLE FLUTUANTE SUPERIOR (OCULTA NO PDF/PRINT)
      ======================================================== */}
      <aside aria-label="Controles da Proposta" className="print:hidden fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-full bg-neutral-950/90 border border-white/20 backdrop-blur-xl shadow-2xl text-xs text-white">
        <div className="flex items-center gap-2 pr-3 border-r border-white/10 font-mono">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white/90">PROPOSTA COMERCIAL</span>
        </div>

        {/* Alternador de Tema Digital / Impressão */}
        <button
          onClick={() => setIsPrintMode(!isPrintMode)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer text-[11px] font-medium"
          title="Alternar entre visualização escura e visualização clara para PDF"
        >
          {isPrintMode ? (
            <>
              <Moon className="w-3.5 h-3.5 text-blue-400" />
              <span>Modo Noturno</span>
            </>
          ) : (
            <>
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Modo Claro (PDF)</span>
            </>
          )}
        </button>

        {/* Botão de Exportar PDF / Imprimir */}
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary hover:bg-blue-600 text-white font-semibold shadow-lg shadow-primary/30 transition-all cursor-pointer text-xs"
        >
          <Printer className="w-3.5 h-3.5" />
          <span>Salvar como PDF</span>
        </button>
      </aside>

      {/* ========================================================
          DOCUMENTO DA PROPOSTA (FORMATO A4 COMPATÍVEL)
      ======================================================== */}
      <main className="container mx-auto px-4 sm:px-6 pt-24 pb-20 max-w-4xl print:p-0 print:m-0 print:max-w-none">
        
        {/* Folha do Documento */}
        <div className={`rounded-3xl p-8 sm:p-12 md:p-16 border shadow-2xl transition-all duration-300 print:shadow-none print:border-none print:p-8 print:rounded-none ${
          isPrintMode 
            ? 'bg-white border-neutral-200 text-neutral-900 shadow-neutral-200/50' 
            : 'bg-[#080B14] border-white/10 text-white shadow-black/80'
        }`}>
          
          {/* =========================================
              1. CABEÇALHO EXECUTIVO
          ========================================= */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pb-8 border-b border-white/10 print:border-neutral-200">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <img 
                  src="/logo-web-lunar-light.png" 
                  alt="Web Lunar" 
                  className={`h-10 w-auto ${isPrintMode ? 'invert brightness-0' : ''}`} 
                />
              </div>
              <p className={`text-xs font-light ${isPrintMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
                {data.empresa.tagline}
              </p>
            </div>

            <div className="text-left sm:text-right font-mono">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-primary/10 border border-primary/30 text-primary mb-2">
                {data.proposta.codigo}
              </span>
              <p className={`text-xs ${isPrintMode ? 'text-neutral-600' : 'text-neutral-300'}`}>
                Emissão: <strong className="font-semibold text-white print:text-neutral-900">{data.proposta.dataEmissao}</strong>
              </p>
              <p className={`text-xs ${isPrintMode ? 'text-neutral-500' : 'text-neutral-400'}`}>
                Validade: {data.proposta.validade}
              </p>
            </div>
          </div>

          {/* =========================================
              2. IDENTIFICAÇÃO DO CLIENTE & PROJETO
          ========================================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8 p-6 rounded-2xl border print:border-neutral-200 bg-white/[0.02] border-white/10 print:bg-neutral-50">
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold mb-2">
                [ APRESENTADO A ]
              </p>
              <h2 className="text-lg font-bold tracking-tight text-white print:text-neutral-900">
                {data.cliente.nome}
              </h2>
              <p className="text-sm font-medium text-neutral-300 print:text-neutral-700">
                {data.cliente.empresa} {data.cliente.cargo ? `• ${data.cliente.cargo}` : ''}
              </p>
              <p className="text-xs text-neutral-400 print:text-neutral-500 mt-1">
                {data.cliente.email} • {data.cliente.whatsapp}
              </p>
            </div>

            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold mb-2">
                [ PROPOSTO POR ]
              </p>
              <h2 className="text-lg font-bold tracking-tight text-white print:text-neutral-900">
                {data.empresa.nome}
              </h2>
              <p className="text-sm text-neutral-300 print:text-neutral-700">
                {data.empresa.cidade}
              </p>
              <p className="text-xs text-neutral-400 print:text-neutral-500 mt-1">
                {data.empresa.email} • {data.empresa.whatsapp}
              </p>
            </div>
          </div>

          {/* =========================================
              3. VISÃO GERAL DO PROJETO & OBJETIVOS
          ========================================= */}
          <div className="mb-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              01 // ESCOPO & DIAGNÓSTICO
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-4 text-white print:text-neutral-900">
              {data.projeto.titulo}
            </h2>
            <p className={`text-sm md:text-base leading-relaxed font-light mb-6 ${
              isPrintMode ? 'text-neutral-700' : 'text-neutral-300'
            }`}>
              {data.projeto.resumo}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {data.projeto.objetivos.map((obj, i) => (
                <div 
                  key={i} 
                  className={`flex items-start gap-3 p-3.5 rounded-xl border text-xs sm:text-sm ${
                    isPrintMode 
                      ? 'bg-neutral-50 border-neutral-200 text-neutral-800' 
                      : 'bg-white/[0.03] border-white/10 text-neutral-200'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
              4. ETAPAS DE EXECUÇÃO E CRONOGRAMA
          ========================================= */}
          <div className="mb-12 break-inside-avoid">
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              02 // METODOLOGIA E ETAPAS
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 text-white print:text-neutral-900">
              Cronograma & Entregáveis
            </h3>

            <div className="space-y-4">
              {data.etapas.map((etapa, idx) => (
                <div 
                  key={idx}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all ${
                    isPrintMode 
                      ? 'bg-white border-neutral-200 shadow-sm' 
                      : 'bg-white/[0.02] border-white/10'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold uppercase bg-primary text-white">
                        {etapa.fase}
                      </span>
                      <h4 className="text-base font-bold text-white print:text-neutral-900">
                        {etapa.titulo}
                      </h4>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-primary font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{etapa.duracao}</span>
                    </div>
                  </div>

                  <p className={`text-xs sm:text-sm mb-4 ${isPrintMode ? 'text-neutral-600' : 'text-neutral-400'}`}>
                    {etapa.descricao}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {etapa.entregaveis.map((item, itemIdx) => (
                      <span 
                        key={itemIdx}
                        className={`text-[11px] px-3 py-1 rounded-lg border font-mono ${
                          isPrintMode 
                            ? 'bg-neutral-100 border-neutral-200 text-neutral-700' 
                            : 'bg-white/5 border-white/10 text-neutral-300'
                        }`}
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
              5. DIFERENCIAIS DA ENGENHARIA LUNAR
          ========================================= */}
          <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30 break-inside-avoid">
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Diferenciais Inclusos no Projeto</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.diferenciais.map((dif, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200 print:text-neutral-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span>{dif}</span>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================
              6. TABELA DE INVESTIMENTO & CONDIÇÕES
          ========================================= */}
          <div className="mb-12 break-inside-avoid">
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              03 // INVESTIMENTO
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-6 text-white print:text-neutral-900">
              Valores e Condições de Pagamento
            </h3>

            {/* Card Principal de Valor */}
            <div className={`p-8 rounded-3xl border mb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center gap-6 ${
              isPrintMode 
                ? 'bg-neutral-900 text-white border-neutral-800' 
                : 'bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border-primary/40'
            }`}>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-300 block mb-1">
                  Investimento Total do Projeto
                </span>
                <div className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white">
                  {data.investimento.valorTotal}
                </div>
                <p className="text-xs text-neutral-300 mt-2">
                  Engenharia completa, design sob medida e suporte de 30 dias.
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                  Garantia de 30 Dias
                </span>
              </div>
            </div>

            {/* Opções de Pagamento */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {data.investimento.condicoes.map((cond, i) => (
                <div 
                  key={i}
                  className={`p-5 rounded-2xl border flex flex-col justify-between ${
                    cond.destaque
                      ? 'bg-primary/15 border-primary/40 shadow-lg shadow-primary/10'
                      : isPrintMode
                      ? 'bg-white border-neutral-200'
                      : 'bg-white/[0.02] border-white/10'
                  }`}
                >
                  <div>
                    <h5 className="font-bold text-sm text-white print:text-neutral-900 mb-2">
                      {cond.titulo}
                    </h5>
                    <p className={`text-xs leading-relaxed ${isPrintMode ? 'text-neutral-600' : 'text-neutral-300'}`}>
                      {cond.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* O que está incluso vs Não incluso */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className={`p-5 rounded-2xl border ${
                isPrintMode ? 'bg-neutral-50 border-neutral-200' : 'bg-white/[0.02] border-white/10'
              }`}>
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Incluso na Proposta</span>
                </h5>
                <ul className="space-y-2">
                  {data.investimento.incluso.map((item, idx) => (
                    <li key={idx} className="text-xs text-neutral-300 print:text-neutral-700 flex items-start gap-2">
                      <span className="text-emerald-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`p-5 rounded-2xl border ${
                isPrintMode ? 'bg-neutral-50 border-neutral-200' : 'bg-white/[0.02] border-white/10'
              }`}>
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  <span>Não Incluso (Opcionais)</span>
                </h5>
                <ul className="space-y-2">
                  {data.investimento.naoIncluso.map((item, idx) => (
                    <li key={idx} className="text-xs text-neutral-400 print:text-neutral-600 flex items-start gap-2">
                      <span className="text-neutral-500 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* =========================================
              7. TERMOS & APROVAÇÃO FORMAL
          ========================================= */}
          <div className="pt-8 border-t border-white/10 print:border-neutral-200 break-inside-avoid">
            <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block mb-2">
              04 // APROVAÇÃO & PRÓXIMOS PASSOS
            </span>
            <h3 className="text-lg font-bold text-white print:text-neutral-900 mb-4">
              Termos Gerais de Contratação
            </h3>
            
            <ul className="space-y-2 mb-8">
              {data.termos.map((termo, i) => (
                <li key={i} className="text-xs text-neutral-400 print:text-neutral-600 flex items-start gap-2">
                  <span className="text-primary font-bold">{i + 1}.</span>
                  <span>{termo}</span>
                </li>
              ))}
            </ul>

            {/* Área de Assinatura */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8 border-t border-white/10 print:border-neutral-200 mt-6">
              <div>
                <div className="h-16 flex items-end">
                  <div className="w-full border-b border-white/30 print:border-neutral-400" />
                </div>
                <p className="text-xs font-bold text-white print:text-neutral-900 mt-2">{data.empresa.nome}</p>
                <p className="text-[11px] text-neutral-400 print:text-neutral-500">Desenvolvimento & Estratégia</p>
              </div>

              <div>
                <div className="h-16 flex items-end">
                  <div className="w-full border-b border-white/30 print:border-neutral-400" />
                </div>
                <p className="text-xs font-bold text-white print:text-neutral-900 mt-2">{data.cliente.nome}</p>
                <p className="text-[11px] text-neutral-400 print:text-neutral-500">{data.cliente.empresa}</p>
              </div>
            </div>

            {/* Rodapé Interno da Proposta */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-6 border-t border-white/5 print:border-neutral-100 text-[10px] text-neutral-500 font-mono">
              <span>{data.empresa.site} • {data.empresa.email}</span>
              <span>Documento gerado confidencial • {data.proposta.codigo}</span>
            </div>
          </div>

        </div>
      </main>

      {/* ========================================================
          ESTILOS DE IMPRESSÃO ESPECÍFICOS (@media print)
      ======================================================== */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 12mm 10mm;
          }
          body {
            background-color: #ffffff !important;
            color: #111827 !important;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          header, footer, nav, aside {
            display: none !important;
          }
          .break-inside-avoid {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>
    </div>
  );
}
