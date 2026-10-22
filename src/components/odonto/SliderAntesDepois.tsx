"use client";

import React, { useState, useRef } from "react";
import { MoveHorizontal, Sparkles, CheckCircle } from "lucide-react";
import { ClienteData } from "@/types/cliente";

export default function SliderAntesDepois({ cliente }: { cliente: ClienteData }) {
  const [posicao, setPosicao] = useState(50);
  const [arrastando, setArrastando] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const caso = cliente.antesDepois[0];

  const atualizarPosicao = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentual = (x / rect.width) * 100;
    setPosicao(percentual);
  };

  return (
    <section id="resultados" className="py-16 sm:py-24 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Coluna de Texto e Autoridade */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-800 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-teal-600 shrink-0" />
              <span>Transformações Reais • Alta Naturalidade</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Arraste e Veja a Diferença das Lentes e Reabilitações
            </h2>

            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed">
              Esqueça tratamentos artificiais e sem vida. Utilizamos planejamento digital para desenhar procedimentos com textura, translucidez e harmonia facial com a {cliente.nomeClinica}.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Planejamento digital individualizado",
                "Textura, brilho e translucidez naturais",
                "Procedimentos com conforto absoluto e sem dor",
              ].map((beneficio) => (
                <div key={beneficio} className="flex items-center gap-3 text-slate-700 font-medium text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" />
                  <span>{beneficio}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#simulador"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm sm:text-base transition-all shadow-md whitespace-nowrap"
              >
                Quero Simular Meu Atendimento
              </a>
            </div>
          </div>

          {/* Coluna do Slider Interativo */}
          <div className="lg:col-span-7">
            <div className="bg-slate-100 p-3 sm:p-4 rounded-3xl border border-slate-200 shadow-xl">
              <div
                ref={containerRef}
                onPointerDown={(e) => {
                  setArrastando(true);
                  e.currentTarget.setPointerCapture(e.pointerId);
                  atualizarPosicao(e.clientX);
                }}
                onPointerMove={(e) => {
                  if (arrastando) {
                    atualizarPosicao(e.clientX);
                  }
                }}
                onPointerUp={(e) => {
                  setArrastando(false);
                  if (e.currentTarget.hasPointerCapture(e.pointerId)) {
                    e.currentTarget.releasePointerCapture(e.pointerId);
                  }
                }}
                onPointerCancel={() => setArrastando(false)}
                className="relative w-full h-[280px] sm:h-[400px] rounded-2xl overflow-hidden select-none cursor-ew-resize touch-pan-y"
              >
                {/* Imagem DEPOIS (Fundo completo) */}
                <img
                  src={caso.imagemDepois}
                  alt="Sorriso Depois"
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <span className="absolute top-3.5 right-3.5 z-20 bg-emerald-600/95 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow whitespace-nowrap">
                  Depois • Resultado
                </span>

                {/* Imagem ANTES (Recortada pela posição do slider) */}
                <div
                  style={{ clipPath: `inset(0 ${100 - posicao}% 0 0)` }}
                  className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                >
                  <img
                    src={caso.imagemAntes}
                    alt="Sorriso Antes"
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  <span className="absolute top-3.5 left-3.5 z-20 bg-slate-900/90 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow whitespace-nowrap">
                    Antes
                  </span>
                </div>

                {/* Linha Divisória e Botão Central */}
                <div
                  style={{ left: `${posicao}%` }}
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.6)] z-30 pointer-events-none"
                >
                  <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white text-slate-900 shadow-xl border-2 border-teal-500 flex items-center justify-center">
                    <MoveHorizontal className="w-5 h-5 text-teal-600" />
                  </div>
                </div>
              </div>

              {/* Controle auxiliar em barra */}
              <div className="mt-4 px-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-700 block">
                    {caso.tag}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base">{caso.titulo}</h3>
                </div>
                <div className="flex items-center gap-3 bg-white px-3.5 py-2 rounded-xl border border-slate-200">
                  <span className="text-xs font-medium text-slate-600 whitespace-nowrap">
                    Arraste para comparar:
                  </span>
                  <input
                    type="range"
                    min={5}
                    max={95}
                    value={posicao}
                    onChange={(e) => setPosicao(Number(e.target.value))}
                    className="w-full sm:w-32 accent-teal-600 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
