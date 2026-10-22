import React from "react";
import { ShieldCheck, Award, Star, FileCheck2 } from "lucide-react";
import { ClienteData } from "@/types/cliente";

export default function SeloCredenciais({ cliente }: { cliente: ClienteData }) {
  const itens = [
    {
      icone: ShieldCheck,
      titulo: "Registro Oficial Verificado",
      sub: cliente.croResponsavel.split("|")[0].trim(),
    },
    {
      icone: Star,
      titulo: `Nota ${cliente.notaGoogle}/5.0 no Google`,
      sub: `+${cliente.totalAvaliacoesGoogle} avaliações verificadas`,
    },
    {
      icone: Award,
      titulo: cliente.anosExperiencia,
      sub: cliente.pacientesAtendidos,
    },
    {
      icone: FileCheck2,
      titulo: "Garantia Formal em Contrato",
      sub: "Nota fiscal e documentação para reembolso",
    },
  ];

  return (
    <section className="bg-slate-900 border-y border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {itens.map((item, idx) => {
            const Icone = item.icone;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0">
                  <Icone className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{item.titulo}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{item.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
