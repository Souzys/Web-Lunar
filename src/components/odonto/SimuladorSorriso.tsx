"use client";

import React, { useState } from "react";
import {
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { ClienteData } from "@/types/cliente";

const OPCOES_OBJETIVO = [
  "Quero agendar minha consulta ainda esta semana",
  "Gostaria de entender valores e formas de parcelamento",
  "Preciso de atendimento rápido (dor / urgência)",
];

const OPCOES_DIA = ["Segunda ou Terça", "Quarta ou Quinta", "Sexta-feira", "Sábado de Manhã"];
const OPCOES_TURNO = ["Período da Manhã (08h - 12h)", "Período da Tarde (13h - 18h)", "Fim do Dia (Após 18h)"];

export default function SimuladorSorriso({ cliente }: { cliente: ClienteData }) {
  const opcoesProcedimento = cliente.procedimentos.map((p) => ({
    id: p.id,
    titulo: p.titulo,
    sub: p.subCurto || p.tempoEstimado,
    icone: p.icone || "🦷",
  }));

  const [procedimento, setProcedimento] = useState<string>(opcoesProcedimento[0]?.id || "");
  const [objetivo, setObjetivo] = useState<string>(OPCOES_OBJETIVO[0]);
  const [diaPreferido, setDiaPreferido] = useState<string>(OPCOES_DIA[0]);
  const [turnoPreferido, setTurnoPreferido] = useState<string>(OPCOES_TURNO[1]);
  const [nomePaciente, setNomePaciente] = useState<string>("");

  const gerarLinkWhatsapp = () => {
    const saudacao = nomePaciente.trim()
      ? `Olá! Meu nome é *${nomePaciente.trim()}*.`
      : `Olá! Acessei o site oficial da *${cliente.nomeClinica.trim()}*.`;

    const mensagem = `${saudacao}

Fiz a simulação de pré-agendamento pelo site:
• *Interesse Principal:* ${procedimento}
• *Objetivo:* ${objetivo}
• *Melhores Dias:* ${diaPreferido}
• *Turno Preferido:* ${turnoPreferido}

Gostaria de verificar a disponibilidade e receber mais informações!`;

    return `https://wa.me/${cliente.whatsappNumero}?text=${encodeURIComponent(mensagem)}`;
  };

  return (
    <section id="simulador" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-teal-500/10 border border-teal-500/30 text-teal-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Simulador Rápido de Pré-Agendamento & Orçamento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Personalize seu Atendimento em 30 Segundos
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Sem filas de espera no telefone. Selecione abaixo o que você busca e a equipe da {cliente.nomeClinica} já recebe sua preferência pronta no WhatsApp.
          </p>
        </div>

        <div className="bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Coluna Esquerda */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-400 mb-3">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-xs">
                    1
                  </span>
                  Qual tratamento você deseja avaliar?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {opcoesProcedimento.map((item) => {
                    const ativo = procedimento === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setProcedimento(item.id)}
                        className={`text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3 cursor-pointer ${
                          ativo
                            ? "bg-teal-500/15 border-teal-400 shadow-lg shadow-teal-500/10"
                            : "bg-slate-900/70 border-slate-800 hover:border-slate-700"
                        }`}
                      >
                        <span className="text-2xl">{item.icone}</span>
                        <div className="flex-1">
                          <div className="font-semibold text-white text-sm sm:text-base flex items-center justify-between">
                            {item.titulo}
                            {ativo && <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />}
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">{item.sub}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-400 mb-3">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-xs">
                    2
                  </span>
                  Qual o seu momento atual?
                </label>
                <div className="space-y-2.5">
                  {OPCOES_OBJETIVO.map((item) => {
                    const ativo = objetivo === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setObjetivo(item)}
                        className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all flex items-center justify-between cursor-pointer ${
                          ativo
                            ? "bg-teal-500/15 border-teal-400 text-white font-medium"
                            : "bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700"
                        }`}
                      >
                        <span>{item}</span>
                        {ativo && <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-teal-400 mb-3">
                  <span className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-xs">
                    3
                  </span>
                  Sua Janela de Horário Preferida
                </label>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-slate-400 flex items-center gap-1.5 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-teal-400" />
                      Melhores dias da semana:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {OPCOES_DIA.map((dia) => (
                        <button
                          key={dia}
                          type="button"
                          onClick={() => setDiaPreferido(dia)}
                          className={`px-3 py-2.5 rounded-lg text-xs font-medium border transition-all cursor-pointer whitespace-nowrap ${
                            diaPreferido === dia
                              ? "bg-teal-500 text-slate-950 border-teal-400 font-semibold"
                              : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                          }`}
                        >
                          {dia}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 flex items-center gap-1.5 mb-2">
                      <Clock className="w-3.5 h-3.5 text-teal-400" />
                      Turno de preferência:
                    </span>
                    <div className="grid grid-cols-1 gap-2">
                      {OPCOES_TURNO.map((turno) => (
                        <button
                          key={turno}
                          type="button"
                          onClick={() => setTurnoPreferido(turno)}
                          className={`px-3.5 py-2.5 rounded-lg text-xs font-medium border text-left transition-all flex items-center justify-between cursor-pointer whitespace-nowrap ${
                            turnoPreferido === turno
                              ? "bg-teal-500/20 text-teal-300 border-teal-400"
                              : "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"
                          }`}
                        >
                          <span>{turno}</span>
                          {turnoPreferido === turno && <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Seu nome (opcional):
                    </label>
                    <input
                      type="text"
                      value={nomePaciente}
                      onChange={(e) => setNomePaciente(e.target.value)}
                      placeholder="Ex: Mariana Silva"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>
              </div>

              {/* Resumo */}
              <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-xs space-y-1 text-slate-300">
                <div className="text-slate-400 font-medium mb-1">Resumo da sua solicitação:</div>
                <div>• <strong className="text-white">{procedimento}</strong></div>
                <div>• Preferência: <strong className="text-teal-300">{diaPreferido}</strong> ({turnoPreferido.split(" ")[2]})</div>
              </div>

              {/* Botão Final */}
              <a
                href={gerarLinkWhatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 shrink-0" />
                <span>Consultar Horários no WhatsApp</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 text-center">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Atendimento humano imediato • Sem compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
