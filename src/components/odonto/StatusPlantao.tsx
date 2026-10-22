"use client";

import React, { useEffect, useState } from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { ClienteData } from "@/types/cliente";

export default function StatusPlantao({ cliente }: { cliente: ClienteData }) {
  const [emAtendimento, setEmAtendimento] = useState(true);
  const [horaAtual, setHoraAtual] = useState<string>("");

  useEffect(() => {
    const verificarHorario = () => {
      const agora = new Date();
      const hora = agora.getHours();
      const diaSemana = agora.getDay();

      const formatado = agora.toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      });
      setHoraAtual(formatado);

      const { abertura, fechamento } = cliente.horarioAtendimento;
      if (diaSemana === 0) {
        setEmAtendimento(false);
      } else if (diaSemana === 6) {
        setEmAtendimento(hora >= abertura && hora < 13);
      } else {
        setEmAtendimento(hora >= abertura && hora < fechamento);
      }
    };

    verificarHorario();
    const timer = setInterval(verificarHorario, 60000);
    return () => clearInterval(timer);
  }, [cliente.horarioAtendimento]);

  return (
    <div className="bg-slate-950 text-white border-b border-slate-800/80 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Status Dinâmico em Linha Única */}
        <div className="flex items-center gap-2 whitespace-nowrap">
          {emAtendimento ? (
            <>
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-300">
                Recepção Online {horaAtual && `(${horaAtual})`}
              </span>
              <span className="hidden lg:inline text-slate-400">
                — Resposta no WhatsApp em <strong>3 min</strong>
              </span>
            </>
          ) : (
            <>
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              <span className="font-semibold text-amber-300">
                Plantão Digital Ativo
              </span>
              <span className="hidden lg:inline text-slate-400">
                — Agende agora para retorno prioritário às 08h
              </span>
            </>
          )}
        </div>

        {/* Barra Direita em Linha Única */}
        <div className="flex items-center gap-3 whitespace-nowrap">
          <div className="inline-flex items-center gap-1.5 bg-teal-500/15 border border-teal-500/30 text-teal-300 px-3 py-0.5 rounded-full text-xs font-medium whitespace-nowrap">
            <Sparkles className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>
              Agenda da Semana: <strong>{cliente.vagasSemana} horários disponíveis</strong>
            </span>
          </div>
          <div className="hidden xl:flex items-center gap-1.5 text-slate-400 text-xs whitespace-nowrap">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>{cliente.croResponsavel.split("|")[0].trim()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
