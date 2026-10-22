"use client";

import React from "react";
import { MapPin, Navigation, Compass, MessageCircle, Clock, ArrowUpRight } from "lucide-react";
import { ClienteData } from "@/types/cliente";

export default function RoteadorLocalizacao({ cliente }: { cliente: ClienteData }) {
  const setores = [
    {
      titulo: "Agendamentos & Primeira Consulta",
      sub: "Para novos pacientes, valores e horários disponíveis",
      cor: "bg-emerald-500/10 border-emerald-500/30 text-emerald-700",
      badge: "Atendimento Imediato",
      msg: `Olá! Gostaria de agendar uma avaliação na ${cliente.nomeClinica.trim()}.`,
    },
    {
      titulo: "Dúvidas sobre Tratamentos",
      sub: "Tire dúvidas com nossa equipe de atendimento",
      cor: "bg-teal-500/10 border-teal-500/30 text-teal-700",
      badge: "Falar com Equipe",
      msg: `Olá! Tenho uma dúvida sobre os tratamentos da ${cliente.nomeClinica.trim()}.`,
    },
    {
      titulo: "Já sou Paciente / Documentação & Recibos",
      sub: "Retornos, pós-operatório ou recibos para reembolso",
      cor: "bg-blue-500/10 border-blue-500/30 text-blue-700",
      badge: "Recepção / Suporte",
      msg: `Olá! Já sou paciente da ${cliente.nomeClinica.trim()} e preciso falar com a recepção.`,
    },
  ];

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Coluna 1: GPS com 1 Toque */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span>Localização Privilegiada • Fácil Acesso</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                Como Chegar na Clínica com 1 Toque
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mb-6">
                {cliente.enderecoCompleto}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6 flex items-center gap-3 text-sm text-slate-700">
                <Clock className="w-5 h-5 text-teal-600 shrink-0" />
                <span>
                  <strong>Horário de Funcionamento:</strong> {cliente.horarioAtendimento.texto}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={cliente.linksMapas.waze}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold text-sm transition-all shadow-sm whitespace-nowrap"
              >
                <Compass className="w-5 h-5 shrink-0" />
                <span>Abrir Rota no Waze</span>
              </a>

              <a
                href={cliente.linksMapas.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-4 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all shadow-sm whitespace-nowrap"
              >
                <Navigation className="w-4 h-4 shrink-0" />
                <span>Abrir no Google Maps</span>
              </a>
            </div>
          </div>

          {/* Coluna 2: Micro-Roteador de WhatsApp por Setor */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-semibold mb-4">
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Central de Atendimento Direto</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Fale Direto com o Setor Desejado
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              Sem robôs travando sua conversa. Escolha abaixo com quem deseja falar agora:
            </p>

            <div className="space-y-3">
              {setores.map((setor, idx) => (
                <a
                  key={idx}
                  href={`https://wa.me/${cliente.whatsappNumero}?text=${encodeURIComponent(setor.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-2xl border border-slate-200 hover:border-teal-500 hover:shadow-md transition-all group bg-slate-50/50 hover:bg-white"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <span className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border mb-1.5 ${setor.cor}`}>
                        {setor.badge}
                      </span>
                      <h4 className="font-bold text-slate-900 text-base group-hover:text-teal-700 transition-colors">
                        {setor.titulo}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">{setor.sub}</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
