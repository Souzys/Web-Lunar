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
    <div className="bg-slate-950 text-white border-b border-slate-800/80 text-[11px] sm:text-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-1.5 sm:py-2 flex items-center justify-between gap-2">
        {/* Status Dinâmico */}
        <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
          {emAtendimento ? (
            <>
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-300 truncate">
                Recepção Online {horaAtual && <span className="opacity-80">({horaAtual})</span>}
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
              <span className="font-semibold text-amber-300 truncate">
                Plantão Digital
              </span>
              <span className="hidden lg:inline text-slate-400">
                — Agende agora para retorno prioritário às 08h
              </span>
            </>
          )}
        </div>

        {/* Barra Direita */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-teal-500/15 border border-teal-500/30 text-teal-300 px-2 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-medium">
            <Sparkles className="w-3 h-3 text-teal-400 shrink-0" />
            <span>
              Agenda: <strong>{cliente.vagasSemana} vagas</strong>
            </span>
          </div>
          <div className="hidden xl:flex items-center gap-1.5 text-slate-400 text-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>{cliente.croResponsavel.split("|")[0].trim()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
