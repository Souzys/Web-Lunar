"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { ClienteData } from "@/types/cliente";

export default function FaqInteligente({ cliente }: { cliente: ClienteData }) {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section id="duvidas" className="py-16 sm:py-24 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
            <HelpCircle className="w-4 h-4 text-teal-600" />
            <span>Transparência Total</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Dúvidas Frequentes dos Pacientes
          </h2>
        </div>

        <div className="space-y-3">
          {cliente.faq.map((item, idx) => {
            const ativo = aberta === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  ativo ? "border-teal-500 bg-teal-50/20 shadow-sm" : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setAberta(ativo ? null : idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {item.pergunta}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      ativo ? "rotate-180 text-teal-600" : ""
                    }`}
                  />
                </button>
                {ativo && (
                  <div className="px-6 pb-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {item.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Gatilho de Dúvida Não Respondida */}
        <div className="mt-8 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-base">Ainda ficou com alguma dúvida específica?</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
              A equipe da {cliente.nomeClinica} responde no WhatsApp em poucos minutos.
            </p>
          </div>
          <a
            href={`https://wa.me/${cliente.whatsappNumero}?text=${encodeURIComponent(
              `Olá! Vi o site da ${cliente.nomeClinica.trim()} e gostaria de tirar uma dúvida rápida.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 shrink-0 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-slate-950 shrink-0" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
