'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ExternalLink,
  Copy,
  Check,
  Share2,
  Search,
  Flame,
  Star,
  ShieldCheck,
  Truck,
  Zap,
  Tag,
  ShoppingBag,
  Clock,
  Send,
  Headphones,
  Smartphone,
  Cpu,
  Mail,
  ChevronRight,
  SlidersHorizontal,
  Layers,
  Scissors,
  CheckCircle2,
  Award
} from 'lucide-react';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// Dados dos links da Bio
interface LinkItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'destaque' | 'shopee' | 'gadgets' | 'audio' | 'comunidade';
  url: string;
  badge?: string;
  badgeColor?: string;
  icon: any;
  featured?: boolean;
  highlightText?: string;
}

const ALL_LINKS: LinkItem[] = [
  {
    id: 'maquina-3em1-barbear',
    title: '🪒 Máquina De Barbear & Aparador Pelos 3 Em 1 (Shopee)',
    subtitle: 'O melhor custo-benefício para barbear, pelos de nariz/ouvido e corte rente',
    category: 'shopee',
    url: 'https://s.shopee.com.br/3LQ7SoW7NY',
    badge: '🔥 TOP 1 DA SEMANA',
    badgeColor: 'bg-orange-500/20 text-orange-300 border-orange-500/40',
    icon: Scissors,
    featured: true,
    highlightText: 'Mais de 1.850 avaliações com nota 4.9 na Shopee'
  },
  {
    id: 'grupo-vip',
    title: '🚀 Grupo VIP de Cupons & Achados Secretos',
    subtitle: 'Receba promoções relâmpago e bugs de preço antes de todo mundo (100% Grátis)',
    category: 'comunidade',
    url: 'https://t.me/techsemhype',
    badge: 'ENTRADA GRÁTIS',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    icon: Send,
    featured: true,
    highlightText: '+15.400 membros economizando diariamente'
  },
  {
    id: 'fones-custo-beneficio',
    title: '🎧 Top Fones Bluetooth que Valem a Pena',
    subtitle: 'Lista atualizada dos fones com cancelamento de ruído e grave potente por menos de R$ 150',
    category: 'audio',
    url: 'https://s.shopee.com.br/3LQ7SoW7NY',
    badge: 'TESTADOS & APROVADOS',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
    icon: Headphones,
  },
  {
    id: 'carregador-gan-rapido',
    title: '⚡ Carregador GaN 65W Ultra Rápido (Shopee)',
    subtitle: 'Carrega Notebook, iPhone e Samsung na velocidade máxima sem esquentar',
    category: 'shopee',
    url: 'https://s.shopee.com.br/3LQ7SoW7NY',
    badge: 'INDISPENSÁVEL',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
    icon: Zap,
  },
  {
    id: 'suporte-celular-mesa',
    title: '📱 Suporte Articulado e Hub USB-C para Mesa',
    subtitle: 'Os melhores acessórios de organização e produtividade para o seu setup',
    category: 'gadgets',
    url: 'https://s.shopee.com.br/3LQ7SoW7NY',
    badge: 'SETUP CLEAN',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    icon: Cpu,
  },
  {
    id: 'parcerias-comerciais',
    title: '💼 Contato Comercial & Parcerias',
    subtitle: 'Envio de produtos para reviews sinceros, publis e orçamentos',
    category: 'comunidade',
    url: 'mailto:contato.techsemhype@gmail.com',
    badge: 'COMERCIAL',
    badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
    icon: Mail,
  }
];

export default function TechSemHypeLinksPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const [showShareModal, setShowShareModal] = useState(false);
  const [activeFeatureTab, setActiveFeatureTab] = useState<'barba' | 'nariz' | 'acabamento'>('barba');
  
  // Timer regressivo simulado para sensação de urgência
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 27, seconds: 15 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return { hours: 6, minutes: 0, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(label);
    setTimeout(() => setCopiedLink(null), 2500);
  };

  const handleShare = async () => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: 'Tech Sem Hype | Links & Ofertas',
          text: 'Confira os achados e ofertas recomendadas pelo @tech.sem.hype!',
          url: 'https://links.weblunar.com.br',
        });
      } catch (err) {
        setShowShareModal(true);
      }
    } else {
      setShowShareModal(true);
    }
  };

  // Filtro de links
  const filteredLinks = useMemo(() => {
    return ALL_LINKS.filter(link => {
      const matchesSearch =
        link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        link.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        activeCategory === 'todos' || link.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const categories = [
    { id: 'todos', label: '🔥 Todos os Links' },
    { id: 'shopee', label: '🛒 Achados Shopee' },
    { id: 'gadgets', label: '⚡ Gadgets & Setup' },
    { id: 'audio', label: '🎧 Áudio' },
    { id: 'comunidade', label: '🚀 Grupo & Contato' },
  ];

  return (
    <div className="min-h-screen bg-[#07090e] text-white selection:bg-cyan-500 selection:text-black font-sans relative overflow-x-hidden">
      {/* Background Glows & Cyber Grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-b from-cyan-600/20 via-blue-600/10 to-transparent rounded-full blur-[140px]" />
        <div className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[130px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* Container Principal */}
      <div className="relative z-10 max-w-xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        
        {/* Top Floating Action Bar */}
        <div className="w-full flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-mono tracking-wider uppercase text-emerald-400 font-semibold">
              Links Atualizados
            </span>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition-all text-xs font-medium backdrop-blur-md active:scale-95"
            aria-label="Compartilhar Perfil"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Compartilhar</span>
          </button>
        </div>

        {/* Profile Card Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center w-full mb-8"
        >
          {/* Avatar com Neon Ring */}
          <div className="relative mb-4 group cursor-pointer">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-md opacity-80 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-[#090d16] overflow-hidden border border-white/20">
              <img
                src="/links/techsemhype-logo.jpg"
                alt="Tech Sem Hype Logo"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-0 right-1 bg-cyan-500 text-black p-1.5 rounded-full shadow-lg border-2 border-[#07090e]" title="Criador Verificado">
              <CheckCircle2 className="w-4 h-4 fill-current" />
            </div>
          </div>

          {/* Nome do Criador & Handle */}
          <div className="flex items-center justify-center gap-1.5 mb-1">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display">
              Tech Sem Hype
            </h1>
            <Award className="w-5 h-5 text-cyan-400" />
          </div>

          <a
            href="https://instagram.com/tech.sem.hype"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors mb-3 px-3 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@tech.sem.hype</span>
          </a>

          {/* Bio Descritiva */}
          <p className="text-sm text-neutral-300 max-w-md leading-relaxed mb-5 text-balance">
            Tecnologia descomplicada, reviews sinceros e os melhores achados tech com custo-benefício real. <strong className="text-white">Sem hype, direto ao ponto ⚡</strong>
          </p>

          {/* Social Badges Grid */}
          <div className="flex items-center justify-center gap-2.5 flex-wrap">
            <a
              href="https://instagram.com/tech.sem.hype"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-[#833ab4]/20 via-[#fd1d1d]/20 to-[#fcb045]/20 hover:from-[#833ab4]/30 hover:to-[#fcb045]/30 border border-white/10 hover:border-pink-500/40 text-xs font-medium transition-all"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
              <span>Instagram</span>
            </a>

            <a
              href="https://t.me/techsemhype"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/20 hover:border-blue-400 text-xs font-medium text-blue-300 transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram VIP</span>
            </a>

            <a
              href="https://youtube.com/@techsemhype"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 hover:border-red-400 text-xs font-medium text-red-300 transition-all"
            >
              <YoutubeIcon className="w-3.5 h-3.5" />
              <span>YouTube</span>
            </a>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* 🔥 SUPER HERO PRODUCT CARD — MÁQUINA DE BARBEAR 3 EM 1 (DESTAQUE MÁXIMO) 🔥 */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full mb-8 relative group"
        >
          {/* Card Border Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-500 rounded-3xl blur-md opacity-70 group-hover:opacity-100 transition-all duration-500" />
          
          <div className="relative bg-[#0c101d]/95 backdrop-blur-xl border border-white/20 rounded-3xl p-5 sm:p-6 overflow-hidden shadow-2xl">
            
            {/* Ambient Background Light Inside Card */}
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Top Badges & Urgência */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-black tracking-wide uppercase shadow-lg shadow-orange-500/30 animate-pulse">
                <Flame className="w-3.5 h-3.5 fill-current" />
                <span>OFERTA EM DESTAQUE</span>
              </div>

              <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-neutral-300 text-[11px] font-mono">
                <Clock className="w-3 h-3 text-amber-400" />
                <span>Expira em: </span>
                <span className="font-bold text-amber-300">
                  {String(timeLeft.hours).padStart(2, '0')}:
                  {String(timeLeft.minutes).padStart(2, '0')}:
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>

            {/* Imagem do Produto + Detalhes */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center mb-5">
              
              {/* Foto Real do Produto (maquina3em1.png) */}
              <div className="sm:col-span-5 relative flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] max-w-[220px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#131b2e] to-[#0a0f1d] border border-white/15 p-2 shadow-inner group/img">
                  <img
                    src="/links/maquina3em1.png"
                    alt="Máquina De Barbear e Aparador Pelos Elétrico 3 Em 1"
                    className="w-full h-full object-cover rounded-xl group-hover/img:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Floating Micro Badge */}
                  <div className="absolute top-3 left-3 bg-red-600/90 text-white font-black text-[10px] uppercase px-2 py-0.5 rounded shadow-md tracking-wider">
                    SHOPEE OFICIAL
                  </div>
                </div>

                {/* Avaliações */}
                <div className="flex items-center gap-1.5 mt-2.5 text-xs text-neutral-300">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="font-bold text-white">4.9</span>
                  <span className="text-neutral-400 text-[11px]">(+1.850 reviews)</span>
                </div>
              </div>

              {/* Informações e Benefícios */}
              <div className="sm:col-span-7 flex flex-col">
                <div className="inline-flex items-center gap-1 text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Kemei Original • Kit Completo</span>
                </div>

                <h2 className="text-lg sm:text-xl font-extrabold text-white leading-snug mb-2 font-display">
                  Máquina De Barbear e Aparador Pelos Elétrico 3 Em 1
                </h2>

                <p className="text-xs text-neutral-300 mb-3.5 leading-relaxed">
                  O aparelho multifuncional mais prático do momento: faz a barba rente sem irritar a pele, apara pelos do nariz/orelha e corta cabelo e barba com pente guia.
                </p>

                {/* 3-in-1 Feature Selector Tabs */}
                <div className="bg-black/30 p-1 rounded-xl border border-white/10 mb-3.5">
                  <div className="grid grid-cols-3 gap-1 text-[11px] font-semibold text-center">
                    <button
                      onClick={() => setActiveFeatureTab('barba')}
                      className={`py-1.5 px-1 rounded-lg transition-all ${
                        activeFeatureTab === 'barba'
                          ? 'bg-cyan-500 text-black font-bold shadow-md'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      🪒 Barbeador
                    </button>
                    <button
                      onClick={() => setActiveFeatureTab('nariz')}
                      className={`py-1.5 px-1 rounded-lg transition-all ${
                        activeFeatureTab === 'nariz'
                          ? 'bg-cyan-500 text-black font-bold shadow-md'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      👃 Nariz/Ouvido
                    </button>
                    <button
                      onClick={() => setActiveFeatureTab('acabamento')}
                      className={`py-1.5 px-1 rounded-lg transition-all ${
                        activeFeatureTab === 'acabamento'
                          ? 'bg-cyan-500 text-black font-bold shadow-md'
                          : 'text-neutral-400 hover:text-white'
                      }`}
                    >
                      ✂️ Aparador
                    </button>
                  </div>
                </div>

                {/* Dynamic Tab Description */}
                <div className="text-[11px] text-cyan-200 bg-cyan-950/40 border border-cyan-500/20 rounded-lg p-2 mb-3.5 flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>
                    {activeFeatureTab === 'barba' && 'Lâmina flutuante de precisão: corte rente sem cortes ou foliculite.'}
                    {activeFeatureTab === 'nariz' && 'Ponteira rotativa 360° segura: remoção indolor e rápida.'}
                    {activeFeatureTab === 'acabamento' && 'Lâmina de acabamento em T com pente ajustável para cabelo e barba.'}
                  </span>
                </div>

                {/* Tags de Confiança */}
                <div className="grid grid-cols-2 gap-2 text-[10px] text-neutral-300 font-medium mb-1">
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Frete Grátis Disponível</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Bateria Recarregável USB</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Garantia Shopee Oficial</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <span>Cupom de Loja Ativo</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Call To Action Buttons (Shopee) */}
            <div className="flex flex-col sm:flex-row items-center gap-2.5 pt-3 border-t border-white/10">
              <a
                href="https://s.shopee.com.br/3LQ7SoW7NY"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-[#EE4D2D] via-[#FF5722] to-[#F0532D] hover:from-[#f0532d] hover:to-[#e63f1c] text-white font-extrabold text-sm uppercase tracking-wider shadow-[0_0_25px_rgba(238,77,45,0.45)] hover:shadow-[0_0_35px_rgba(238,77,45,0.7)] hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Ver Preço & Garantir Desconto</span>
                <ExternalLink className="w-4 h-4 opacity-80" />
              </a>

              <button
                onClick={() => handleCopy('https://s.shopee.com.br/3LQ7SoW7NY', 'Máquina 3 em 1')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3.5 rounded-2xl bg-white/[0.07] hover:bg-white/15 border border-white/15 text-white font-semibold text-xs transition-all active:scale-95 cursor-pointer"
                title="Copiar Link da Shopee"
              >
                {copiedLink === 'Máquina 3 em 1' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300">Link Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-300" />
                    <span>Copiar Link</span>
                  </>
                )}
              </button>
            </div>

          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* BUSCA E CATEGORIAS DE LINKS */}
        {/* ========================================================================= */}
        <div className="w-full mb-6 space-y-3">
          {/* Search Bar */}
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar produtos, cupons, reviews..."
              className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-white/[0.05] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-cyan-500/60 focus:bg-white/[0.08] transition-all backdrop-blur-md"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                    : 'bg-white/[0.04] text-neutral-400 hover:text-white hover:bg-white/[0.08] border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* LISTA DE LINKS ADICIONAIS TECH SEM HYPE */}
        {/* ========================================================================= */}
        <div className="w-full space-y-3.5 mb-10">
          <AnimatePresence mode="popLayout">
            {filteredLinks.map((link, idx) => {
              const IconComponent = link.icon;
              return (
                <motion.div
                  key={link.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group relative"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full p-4 rounded-2xl border transition-all duration-300 backdrop-blur-md relative overflow-hidden ${
                      link.featured
                        ? 'bg-gradient-to-r from-blue-950/60 via-[#0e172e] to-purple-950/60 border-blue-500/40 hover:border-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                        : 'bg-white/[0.03] hover:bg-white/[0.07] border-white/10 hover:border-cyan-500/40'
                    }`}
                  >
                    {/* Hover Glow Accent */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <div className="flex items-start justify-between gap-3 relative z-10">
                      
                      {/* Icon */}
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                        link.featured
                          ? 'bg-gradient-to-br from-cyan-500 to-blue-600 text-black shadow-lg shadow-cyan-500/30'
                          : 'bg-white/[0.08] text-cyan-400 border border-white/10 group-hover:border-cyan-500/50'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                            {link.title}
                          </h3>
                          {link.badge && (
                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${link.badgeColor || 'bg-white/10 text-white'}`}>
                              {link.badge}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed line-clamp-2">
                          {link.subtitle}
                        </p>

                        {link.highlightText && (
                          <p className="text-[11px] font-medium text-emerald-400 mt-1.5 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {link.highlightText}
                          </p>
                        )}
                      </div>

                      {/* Arrow Icon */}
                      <div className="w-8 h-8 rounded-full bg-white/[0.04] group-hover:bg-cyan-500 group-hover:text-black flex items-center justify-center shrink-0 transition-all duration-300 text-neutral-400">
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>

                    </div>
                  </a>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {filteredLinks.length === 0 && (
            <div className="text-center py-10 px-4 bg-white/[0.02] border border-white/10 rounded-2xl">
              <Search className="w-8 h-8 text-neutral-500 mx-auto mb-2" />
              <p className="text-sm text-neutral-400 font-medium">Nenhum link encontrado para "{searchQuery}"</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('todos'); }}
                className="mt-3 text-xs text-cyan-400 underline font-semibold"
              >
                Ver todos os links
              </button>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* PROMO BANNER / CUPOM EXTRA */}
        {/* ========================================================================= */}
        <div className="w-full mb-8 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border border-amber-500/20 backdrop-blur-md flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
              <Tag className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Quer mais cupons de desconto?</p>
              <p className="text-[11px] text-neutral-400">Acesse nosso canal gratuito no Telegram com ofertas em tempo real.</p>
            </div>
          </div>

          <a
            href="https://t.me/techsemhype"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-bold whitespace-nowrap transition-all shadow-md active:scale-95"
          >
            Entrar
          </a>
        </div>

        {/* ========================================================================= */}
        {/* FOOTER DISCRETO & SELO */}
        {/* ========================================================================= */}
        <footer className="w-full text-center pt-6 pb-4 border-t border-white/5 flex flex-col items-center gap-2 text-xs text-neutral-500 font-mono">
          <div className="flex items-center gap-2">
            <img src="/links/techsemhype-logo.jpg" alt="Logo" className="w-4 h-4 rounded-full" />
            <span className="text-neutral-400 font-sans font-bold">@tech.sem.hype</span>
            <span>•</span>
            <span>Links Oficiais</span>
          </div>
          <p className="text-[11px] text-neutral-600">
            © {new Date().getFullYear()} Tech Sem Hype. Todos os direitos reservados.
          </p>
        </footer>

      </div>

      {/* ========================================================================= */}
      {/* SHARE MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {showShareModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-[#0c101d] border border-white/20 rounded-3xl p-6 max-w-sm w-full shadow-2xl relative"
            >
              <div className="text-center mb-5">
                <div className="w-16 h-16 rounded-full mx-auto mb-3 p-1 bg-gradient-to-r from-cyan-500 to-purple-600">
                  <img src="/links/techsemhype-logo.jpg" alt="Tech Sem Hype" className="w-full h-full object-cover rounded-full" />
                </div>
                <h3 className="text-lg font-bold text-white">Compartilhar @tech.sem.hype</h3>
                <p className="text-xs text-neutral-400 mt-1">Copie o link da página para enviar a amigos ou colocar na bio</p>
              </div>

              <div className="flex items-center gap-2 bg-white/[0.05] border border-white/10 p-2 rounded-xl mb-4">
                <input
                  type="text"
                  readOnly
                  value="https://links.weblunar.com.br"
                  className="bg-transparent text-xs text-neutral-300 w-full px-2 outline-none font-mono"
                />
                <button
                  onClick={() => handleCopy('https://links.weblunar.com.br', 'Perfil')}
                  className="px-3 py-1.5 rounded-lg bg-cyan-500 text-black font-bold text-xs shrink-0 hover:bg-cyan-400 transition-all"
                >
                  {copiedLink === 'Perfil' ? 'Copiado!' : 'Copiar'}
                </button>
              </div>

              <button
                onClick={() => setShowShareModal(false)}
                className="w-full py-2.5 rounded-xl bg-white/[0.07] hover:bg-white/10 text-white font-medium text-xs transition-colors"
              >
                Fechar
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {copiedLink && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-emerald-500 text-black font-bold text-xs px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 border border-emerald-300"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>Link copiado para a área de transferência!</span>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
