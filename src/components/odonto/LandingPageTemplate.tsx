import React from "react";
import {
  Sparkles,
  Star,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Clock,
  MapPin,
} from "lucide-react";
import { ClienteData } from "@/types/cliente";
import StatusPlantao from "./StatusPlantao";
import SeloCredenciais from "./SeloCredenciais";
import SliderAntesDepois from "./SliderAntesDepois";
import SimuladorSorriso from "./SimuladorSorriso";
import RoteadorLocalizacao from "./RoteadorLocalizacao";
import FaqInteligente from "./FaqInteligente";

export default function LandingPageTemplate({ cliente }: { cliente: ClienteData }) {
  const linkWhatsappDireto = `https://wa.me/${cliente.whatsappNumero}?text=${encodeURIComponent(
    `Olá! Acessei o site da ${cliente.nomeClinica.trim()} e gostaria de agendar uma avaliação.`
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans">
      {/* 1. Header Fixo no Topo (Plantão + Navbar) */}
      <div className="fixed top-0 left-0 right-0 z-40 shadow-md">
        <StatusPlantao cliente={cliente} />

        <header className="bg-white/95 backdrop-blur-md border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-20 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              {cliente.logoUrl ? (
                <img
                  src={cliente.logoUrl}
                  alt={`Logo ${cliente.nomeClinica}`}
                  className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl object-contain p-0.5 border border-slate-200/90 shadow-sm shrink-0 bg-white"
                />
              ) : (
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-teal-500 to-slate-900 text-white flex items-center justify-center font-bold text-sm sm:text-lg shadow-sm shrink-0">
                  🦷
                </div>
              )}
              <div className="min-w-0">
                <span className="font-bold text-slate-900 text-sm sm:text-lg tracking-tight block truncate">
                  {cliente.nomeClinica.trim()}
                </span>
                <span className="text-[10px] sm:text-[11px] text-slate-500 flex items-center gap-1 mt-0.5 truncate">
                  <MapPin className="w-3 h-3 text-teal-600 shrink-0" />
                  <span className="truncate">{cliente.cidadeBairro}</span>
                </span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 shrink-0">
              <a href="#procedimentos" className="hover:text-teal-600 transition-colors whitespace-nowrap">
                Especialidades
              </a>
              <a href="#resultados" className="hover:text-teal-600 transition-colors whitespace-nowrap">
                Antes & Depois
              </a>
              <a href="#simulador" className="hover:text-teal-600 transition-colors whitespace-nowrap">
                Simulador de Horário
              </a>
              <a href="#avaliacoes" className="hover:text-teal-600 transition-colors whitespace-nowrap">
                Avaliações
              </a>
              <a href="#localizacao" className="hover:text-teal-600 transition-colors whitespace-nowrap">
                Como Chegar
              </a>
            </nav>

            <a
              href="#simulador"
              className="px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-1.5 shadow-sm transition-all whitespace-nowrap shrink-0"
            >
              <span className="sm:hidden">Agendar</span>
              <span className="hidden sm:inline">Agendar Avaliação</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            </a>
          </div>
        </header>
      </div>

      {/* 2. Hero Section com Top Padding para compensar o Header Fixo */}
      <section className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-24 sm:pt-36 pb-12 sm:pb-24 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-500/30 text-teal-300 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                <Sparkles className="w-4 h-4 text-teal-400 shrink-0" />
                <span className="truncate">{cliente.hero.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.14] text-white">
                {cliente.hero.tituloPrincipal}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {cliente.hero.subtitulo}
              </p>

              {/* Botões Principais */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href="#simulador"
                  className="px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all text-center"
                >
                  <span>{cliente.hero.ctaTexto}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                </a>

                <a
                  href="#resultados"
                  className="px-6 py-4 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all text-center"
                >
                  <span>Ver Casos Antes e Depois</span>
                </a>
              </div>

              {/* Prova Social Rápida Abaixo do Botão */}
              <div className="pt-4 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span>
                    <strong>{cliente.notaGoogle}/5.0</strong> ({cliente.totalAvaliacoesGoogle} avaliações)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-teal-300">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Escaneamento Digital & Segurança</span>
                </div>
              </div>
            </div>

            {/* Imagem Principal + Card Flutuante de Confiança */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
                <img
                  src={
                    cliente.imagemHero ||
                    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                  }
                  alt={`Clínica ${cliente.nomeClinica}`}
                  className="w-full h-[320px] sm:h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 p-3.5 sm:p-4 rounded-2xl flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-[11px] sm:text-xs text-teal-400 font-semibold block truncate">
                      Atendimento Humanizado & Especializado
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-white block truncate">
                      {cliente.enderecoCompleto.split("—")[0]}
                    </span>
                  </div>
                  <a
                    href={linkWhatsappDireto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs shrink-0 whitespace-nowrap hover:bg-teal-400 transition-colors"
                  >
                    Chamar Agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Faixa Anti-Golpe & Credenciais Oficiais */}
      <SeloCredenciais cliente={cliente} />

      {/* 4. Seção de Procedimentos com Ancoragem de Condições */}
      <section id="procedimentos" className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
              Nossas Especialidades
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mt-2 mb-3 sm:mb-4">
              Tratamentos com Transparência, Pontualidade e Conforto
            </h2>
            <p className="text-slate-600 text-sm sm:text-lg">
              Reunimos especialidades completas para o seu conforto na {cliente.cidadeBairro.split("—")[0].trim()}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {cliente.procedimentos.map((proc) => (
              <div
                key={proc.id}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                    <span className="px-2.5 sm:px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200 text-xs font-bold whitespace-nowrap">
                      {proc.destaque}
                    </span>
                    <span className="text-xs font-medium text-slate-500 flex items-center gap-1 whitespace-nowrap">
                      <Clock className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      {proc.tempoEstimado}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2 sm:mb-2.5 flex items-center gap-2">
                    {proc.icone && <span>{proc.icone}</span>}
                    <span>{proc.titulo}</span>
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                    {proc.descricao}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 block">
                      Condição Comercial
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-900">{proc.ancoraValor}</span>
                  </div>

                  <a
                    href={`https://wa.me/${cliente.whatsappNumero}?text=${encodeURIComponent(
                      `Olá! Vi no site sobre *${proc.titulo}* e gostaria de saber mais sobre como funciona e valores.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-slate-900 hover:bg-teal-600 text-white font-semibold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>Consultar no WhatsApp</span>
                    <ArrowRight className="w-4 h-4 shrink-0" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Slider Interativo de Antes e Depois */}
      <SliderAntesDepois cliente={cliente} />

      {/* 6. Simulador Interativo de Pré-Agendamento em 3 Cliques */}
      <SimuladorSorriso cliente={cliente} />

      {/* 7. Avaliações Verificadas do Google */}
      <section id="avaliacoes" className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3">
              <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
              <span>Nota {cliente.notaGoogle} de 5.0 no Google Meu Negócio</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900">
              O Que Nossos Pacientes Dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {cliente.depoimentos.map((dep, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Verificado
                    </span>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed mb-5 sm:mb-6">
                    &ldquo;{dep.texto}&rdquo;
                  </p>
                </div>

                <div className="border-t border-slate-200/80 pt-3 sm:pt-4">
                  <div className="font-bold text-slate-900 text-xs sm:text-sm">{dep.nome}</div>
                  <div className="text-[11px] sm:text-xs text-slate-500">
                    {dep.procedimento} • {dep.bairro}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GPS 1 Toque (Waze / Maps) + Roteador de WhatsApp */}
      <RoteadorLocalizacao cliente={cliente} />

      {/* 9. FAQ Acordeão Inteligente */}
      <FaqInteligente cliente={cliente} />

      {/* 10. Rodapé Institucional */}
      <footer className="bg-slate-950 text-slate-400 py-10 sm:py-12 border-t border-slate-800 text-xs sm:text-sm pb-24 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <div className="font-bold text-white text-base">{cliente.nomeClinica}</div>
            <p className="mt-1">{cliente.enderecoCompleto}</p>
            <p className="mt-0.5 text-slate-500">{cliente.croResponsavel}</p>
            {cliente.instagramUrl && (
              <a
                href={cliente.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-teal-400 hover:text-teal-300 font-medium mt-2 transition-colors"
              >
                <span>Instagram Oficial: {cliente.instagramHandle}</span>
              </a>
            )}
          </div>
          <div className="text-center sm:text-right">
            <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
            <p className="text-slate-500 mt-1">
              Tecnologia de Alta Conversão por <strong className="text-teal-400">⚡ WEB LUNAR</strong>
            </p>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante de WhatsApp Compacto */}
      <a
        href={linkWhatsappDireto}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl shadow-emerald-500/40 transition-all hover:scale-105 text-xs sm:text-sm"
      >
        <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-slate-950 shrink-0" />
        <span>Agendar pelo WhatsApp</span>
      </a>
    </div>
  );
}
