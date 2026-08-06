'use client';

import React from 'react';

interface IconProps {
  className?: string;
}

const DEFAULT_CLASS = "w-28 h-28 text-neutral-800 transition-colors duration-300";

// ==========================================
// 1. LANDING PAGES (Browser, CTA Click & Conversion Funnel Spark)
// ==========================================
export function LandingPagesIcon({ className = DEFAULT_CLASS }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D4DFF" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes lpFunnelDot {
          0% { stroke-dashoffset: 40; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0; }
        }
        @keyframes lpCursorGlide {
          0%, 15% { transform: translate(115px, 115px); opacity: 0; }
          30% { opacity: 1; }
          50% { transform: translate(42px, 86px); opacity: 1; }
          55% { transform: translate(42px, 86px) scale(0.85); opacity: 1; }
          60% { transform: translate(42px, 86px) scale(1); opacity: 1; }
          85%, 100% { transform: translate(115px, 115px); opacity: 0; }
        }
        @keyframes lpBtnPulse {
          0%, 52% { fill: url(#lpGrad); transform: scale(1); }
          55% { fill: #1D4DFF; transform: scale(0.96); }
          60% { fill: url(#lpGrad); transform: scale(1); }
          100% { fill: url(#lpGrad); transform: scale(1); }
        }
        @keyframes lpSparkPop {
          0%, 53% { transform: scale(0); opacity: 0; }
          58% { transform: scale(1.3); opacity: 1; }
          75%, 100% { transform: scale(1.8); opacity: 0; }
        }
        .lp-funnel-path {
          stroke-dasharray: 40;
          animation: lpFunnelDot 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: stroke-dashoffset, opacity;
        }
        .lp-cursor-g {
          animation: lpCursorGlide 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform, opacity;
        }
        .lp-btn-rect {
          transform-origin: 45px 91px;
          animation: lpBtnPulse 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform;
        }
        .lp-spark-ring {
          transform-origin: 45px 91px;
          animation: lpSparkPop 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform, opacity;
        }
        @media (prefers-reduced-motion: reduce) {
          .lp-funnel-path, .lp-cursor-g, .lp-btn-rect, .lp-spark-ring { animation: none !important; }
        }
      `}</style>

      {/* Layer 1: Background Funnel & Conversion Metaphor */}
      <path d="M 132 25 L 142 65 L 136 135" stroke="#1D4DFF" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.25" strokeLinecap="round" />
      <path d="M 132 25 L 142 65 L 136 135" stroke="#1D4DFF" strokeWidth="2.5" strokeLinecap="round" className="lp-funnel-path" />

      {/* Layer 2: Browser Frame */}
      <rect x="16" y="24" width="108" height="112" rx="8" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
      <line x1="16" y1="44" x2="124" y2="44" stroke="#E8E8E8" strokeWidth="1.5" />
      <circle cx="28" cy="34" r="2.5" fill="#EF4444" opacity="0.8" />
      <circle cx="36" cy="34" r="2.5" fill="#F59E0B" opacity="0.8" />
      <circle cx="44" cy="34" r="2.5" fill="#10B981" opacity="0.8" />

      {/* Hero Content Blocks */}
      <rect x="28" y="56" width="55" height="7" rx="3.5" fill="#171717" />
      <rect x="28" y="68" width="70" height="4" rx="2" fill="#A3A3A3" />
      <rect x="28" y="75" width="45" height="4" rx="2" fill="#D4D4D4" />

      {/* Hero Visual Card Right */}
      <rect x="90" y="56" width="22" height="48" rx="4" fill="#F5F5F5" stroke="#E5E5E5" strokeWidth="1.5" />
      <line x1="94" y1="64" x2="108" y2="64" stroke="#1D4DFF" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* CTA Button */}
      <rect x="28" y="84" width="34" height="14" rx="4" className="lp-btn-rect" />

      {/* Conversion Spark Circle */}
      <circle cx="45" cy="91" r="12" fill="none" stroke="#1D4DFF" strokeWidth="2" className="lp-spark-ring" />

      {/* Animated Cursor */}
      <g className="lp-cursor-g">
        <path d="M 0 0 L 0 16 L 4.5 12 L 8 18 L 11 16.5 L 7.5 10.5 L 13 10.5 Z" fill="#171717" stroke="#FFFFFF" strokeWidth="1" />
      </g>
    </svg>
  );
}

// ==========================================
// 2. SITES & APPS (Overlapping Monitor & Phone, UI Block Assembly)
// ==========================================
export function SitesAppsIcon({ className = DEFAULT_CLASS }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="saGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D4DFF" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes saBlockFade1 {
          0%, 10% { opacity: 0; transform: translateY(6px); }
          25%, 85% { opacity: 1; transform: translateY(0); }
          95%, 100% { opacity: 0; transform: translateY(-4px); }
        }
        @keyframes saBlockFade2 {
          0%, 25% { opacity: 0; transform: translateY(6px); }
          40%, 85% { opacity: 1; transform: translateY(0); }
          95%, 100% { opacity: 0; transform: translateY(-4px); }
        }
        @keyframes saBlockFade3 {
          0%, 40% { opacity: 0; transform: translateY(6px); }
          55%, 85% { opacity: 1; transform: translateY(0); }
          95%, 100% { opacity: 0; transform: translateY(-4px); }
        }
        @keyframes saTagFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .sa-block-1 { animation: saBlockFade1 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; will-change: transform, opacity; }
        .sa-block-2 { animation: saBlockFade2 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; will-change: transform, opacity; }
        .sa-block-3 { animation: saBlockFade3 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; will-change: transform, opacity; }
        .sa-code-tag { animation: saTagFloat 3s ease-in-out infinite; will-change: transform; }
        @media (prefers-reduced-motion: reduce) {
          .sa-block-1, .sa-block-2, .sa-block-3, .sa-code-tag { animation: none !important; }
        }
      `}</style>

      {/* Layer 1: Background Subtle Grid */}
      <path d="M 20 20 H 140 M 20 50 H 140 M 20 80 H 140 M 20 110 H 140 M 20 140 H 140" stroke="#E8E8E8" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />

      {/* Desktop Monitor */}
      <rect x="14" y="24" width="98" height="66" rx="6" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
      <path d="M 48 90 L 40 108 H 86 L 78 90" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="#FFFFFF" />

      {/* Desktop Screen UI Blocks Assembling */}
      <rect x="22" y="32" width="82" height="10" rx="2" fill="url(#saGrad)" className="sa-block-1" />
      <rect x="22" y="46" width="24" height="36" rx="2" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1" className="sa-block-2" />
      <rect x="50" y="46" width="54" height="36" rx="2" fill="#171717" className="sa-block-3" />

      {/* Overlapping Smartphone */}
      <g transform="translate(94, 52)">
        <rect x="0" y="0" width="50" height="82" rx="8" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
        <rect x="16" y="4" width="18" height="3" rx="1.5" fill="#171717" />
        
        {/* Mobile UI Blocks */}
        <rect x="6" y="14" width="38" height="16" rx="3" fill="#1D4DFF" opacity="0.9" className="sa-block-1" />
        <rect x="6" y="34" width="38" height="24" rx="3" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="1" className="sa-block-2" />
        <rect x="6" y="62" width="38" height="12" rx="3" fill="#171717" className="sa-block-3" />
      </g>

      {/* Floating Code Tag </> */}
      <g transform="translate(122, 18)" className="sa-code-tag">
        <rect x="0" y="0" width="28" height="20" rx="4" fill="#171717" />
        <path d="M 6 10 L 10 6 M 6 10 L 10 14 M 22 10 L 18 6 M 22 10 L 18 14" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

// ==========================================
// 3. E-COMMERCE (Shopping Bag Dashoffset, Item Drop, Card Slide & Checkmark)
// ==========================================
export function EcommerceIcon({ className = DEFAULT_CLASS }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ecGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D4DFF" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes ecItemDrop {
          0% { transform: translateY(-18px); opacity: 0; }
          30% { opacity: 1; }
          60%, 100% { transform: translateY(32px); opacity: 0; }
        }
        @keyframes ecCardSlide {
          0%, 20% { transform: translateX(25px); opacity: 0; }
          45%, 85% { transform: translateX(0); opacity: 1; }
          95%, 100% { transform: translateX(25px); opacity: 0; }
        }
        @keyframes ecCheckPop {
          0%, 48% { transform: scale(0); opacity: 0; }
          58% { transform: scale(1.25); opacity: 1; }
          85% { transform: scale(1); opacity: 1; }
          95%, 100% { transform: scale(0); opacity: 0; }
        }
        @keyframes ecDotTravel {
          0% { stroke-dashoffset: 35; }
          100% { stroke-dashoffset: 0; }
        }
        .ec-item-circle { animation: ecItemDrop 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; will-change: transform, opacity; }
        .ec-card-g { animation: ecCardSlide 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; will-change: transform, opacity; }
        .ec-check-g { transform-origin: 125px 95px; animation: ecCheckPop 4s cubic-bezier(0.4, 0, 0.2, 1) infinite; will-change: transform, opacity; }
        .ec-dot-line { stroke-dasharray: 4 4; animation: ecDotTravel 2s linear infinite; will-change: stroke-dashoffset; }
        @media (prefers-reduced-motion: reduce) {
          .ec-item-circle, .ec-card-g, .ec-check-g, .ec-dot-line { animation: none !important; }
        }
      `}</style>

      {/* Layer 1: Checkout Dotted Path */}
      <path d="M 65 95 Q 85 125 125 95" stroke="#1D4DFF" strokeWidth="2" strokeLinecap="round" className="ec-dot-line" opacity="0.6" />

      {/* Falling Item into Bag */}
      <circle cx="50" cy="35" r="7" fill="url(#ecGrad)" className="ec-item-circle" />

      {/* Minimal Shopping Bag */}
      <path d="M 24 55 H 76 L 82 135 H 18 Z" fill="#FFFFFF" stroke="#171717" strokeWidth="2" strokeLinejoin="round" />
      <path d="M 36 55 C 36 36, 64 36, 64 55" stroke="#171717" strokeWidth="2" strokeLinecap="round" />

      {/* Payment Card Sliding alongside */}
      <g className="ec-card-g" transform="translate(80, 62)">
        <rect x="0" y="0" width="62" height="42" rx="6" fill="#171717" stroke="#333333" strokeWidth="1.5" />
        <rect x="0" y="10" width="62" height="8" fill="#1D4DFF" opacity="0.8" />
        <rect x="8" y="24" width="16" height="8" rx="2" fill="#D4D4D4" opacity="0.6" />
      </g>

      {/* Approved Checkmark Icon Badge */}
      <g className="ec-check-g">
        <circle cx="125" cy="95" r="14" fill="#10B981" />
        <path d="M 118 95 L 123 100 L 132 90" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

// ==========================================
// 4. SISTEMAS DE AGENDAMENTO (Calendar, Continuous Clock Hands & WhatsApp Notification Pop)
// ==========================================
export function BookingIcon({ className = DEFAULT_CLASS }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D4DFF" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes clockSpinHour {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes clockSpinMinute {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(4320deg); }
        }
        @keyframes bkRingPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.25); opacity: 0.3; }
        }
        @keyframes bkNotifPop {
          0%, 20% { transform: translateY(10px) scale(0); opacity: 0; }
          30%, 80% { transform: translateY(0) scale(1); opacity: 1; }
          90%, 100% { transform: translateY(-5px) scale(0); opacity: 0; }
        }
        .bk-hour-hand { transform-origin: 116px 112px; animation: clockSpinHour 12s linear infinite; will-change: transform; }
        .bk-minute-hand { transform-origin: 116px 112px; animation: clockSpinMinute 12s linear infinite; will-change: transform; }
        .bk-active-day { transform-origin: 82px 82px; animation: bkRingPulse 2.5s ease-in-out infinite; will-change: transform, opacity; }
        .bk-notif-g { transform-origin: 40px 125px; animation: bkNotifPop 4.5s cubic-bezier(0.4, 0, 0.2, 1) infinite; will-change: transform, opacity; }
        @media (prefers-reduced-motion: reduce) {
          .bk-hour-hand, .bk-minute-hand, .bk-active-day, .bk-notif-g { animation: none !important; }
        }
      `}</style>

      {/* Calendar Frame */}
      <rect x="18" y="24" width="104" height="96" rx="8" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
      <path d="M 18 48 H 122" stroke="#171717" strokeWidth="2" />
      <line x1="42" y1="16" x2="42" y2="28" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="98" y1="16" x2="98" y2="28" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" />

      {/* Days Grid Dots */}
      <circle cx="38" cy="64" r="3" fill="#D4D4D4" />
      <circle cx="60" cy="64" r="3" fill="#D4D4D4" />
      <circle cx="82" cy="64" r="3" fill="#D4D4D4" />
      <circle cx="104" cy="64" r="3" fill="#D4D4D4" />

      <circle cx="38" cy="82" r="3" fill="#D4D4D4" />
      <circle cx="60" cy="82" r="3" fill="#D4D4D4" />
      {/* Selected Day Ring */}
      <circle cx="82" cy="82" r="8" fill="url(#bkGrad)" className="bk-active-day" />
      <circle cx="82" cy="82" r="4" fill="#FFFFFF" />
      <circle cx="104" cy="82" r="3" fill="#D4D4D4" />

      <circle cx="38" cy="100" r="3" fill="#D4D4D4" />
      <circle cx="60" cy="100" r="3" fill="#D4D4D4" />

      {/* Overlapping Clock Badge Bottom Right */}
      <circle cx="116" cy="112" r="24" fill="#171717" stroke="#FFFFFF" strokeWidth="2" />
      <line x1="116" y1="112" x2="116" y2="98" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" className="bk-hour-hand" />
      <line x1="116" y1="112" x2="126" y2="112" stroke="#1D4DFF" strokeWidth="2" strokeLinecap="round" className="bk-minute-hand" />
      <circle cx="116" cy="112" r="2" fill="#FFFFFF" />

      {/* WhatsApp / Notification Bubble Floating Bottom Left */}
      <g className="bk-notif-g" transform="translate(18, 110)">
        <rect x="0" y="0" width="56" height="26" rx="13" fill="#25D366" />
        <text x="28" y="16" fill="#FFFFFF" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">15:00 ✓</text>
      </g>
    </svg>
  );
}

// ==========================================
// 5. INTEGRAÇÕES & APIS (Hexagonal Central Hub, Bezier Connected Nodes & Traveling Data Packets)
// ==========================================
export function IntegrationsIcon({ className = DEFAULT_CLASS }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="intGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D4DFF" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes intPacketFlow {
          0% { stroke-dashoffset: 48; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes intHubPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }
        .int-flow-line {
          stroke-dasharray: 6 12;
          animation: intPacketFlow 2s linear infinite;
          will-change: stroke-dashoffset;
        }
        .int-hub-g {
          transform-origin: 80px 80px;
          animation: intHubPulse 3s ease-in-out infinite;
          will-change: transform;
        }
        @media (prefers-reduced-motion: reduce) {
          .int-flow-line, .int-hub-g { animation: none !important; }
        }
      `}</style>

      {/* Layer 1: Elegant Bezier Connection Lines */}
      {/* Node 1: Circle (30, 30) */}
      <path d="M 30 30 Q 55 55 80 80" stroke="#E5E7EB" strokeWidth="2" />
      <path d="M 30 30 Q 55 55 80 80" stroke="#1D4DFF" strokeWidth="2" className="int-flow-line" />

      {/* Node 2: Square (130, 30) */}
      <path d="M 130 30 Q 105 55 80 80" stroke="#E5E7EB" strokeWidth="2" />
      <path d="M 130 30 Q 105 55 80 80" stroke="#06B6D4" strokeWidth="2" className="int-flow-line" />

      {/* Node 3: Diamond (135, 125) */}
      <path d="M 135 125 Q 110 100 80 80" stroke="#E5E7EB" strokeWidth="2" />
      <path d="M 135 125 Q 110 100 80 80" stroke="#1D4DFF" strokeWidth="2" className="int-flow-line" />

      {/* Node 4: Triangle (80, 142) */}
      <path d="M 80 142 L 80 80" stroke="#E5E7EB" strokeWidth="2" />
      <path d="M 80 142 L 80 80" stroke="#06B6D4" strokeWidth="2" className="int-flow-line" />

      {/* Node 5: Pill (25, 125) */}
      <path d="M 25 125 Q 50 100 80 80" stroke="#E5E7EB" strokeWidth="2" />
      <path d="M 25 125 Q 50 100 80 80" stroke="#1D4DFF" strokeWidth="2" className="int-flow-line" />

      {/* Peripheral Nodes */}
      {/* Node 1: Circle */}
      <circle cx="30" cy="30" r="9" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
      <circle cx="30" cy="30" r="3" fill="#1D4DFF" />

      {/* Node 2: Square */}
      <rect x="121" y="21" width="18" height="18" rx="4" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
      <rect x="126" y="26" width="8" height="8" rx="2" fill="#06B6D4" />

      {/* Node 3: Diamond */}
      <g transform="translate(135, 125) rotate(45)">
        <rect x="-8" y="-8" width="16" height="16" rx="3" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
        <rect x="-4" y="-4" width="8" height="8" rx="1.5" fill="#1D4DFF" />
      </g>

      {/* Node 4: Triangle */}
      <polygon points="80,132 90,148 70,148" fill="#FFFFFF" stroke="#171717" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="80" cy="142" r="2.5" fill="#06B6D4" />

      {/* Node 5: Pill */}
      <rect x="15" y="118" width="22" height="14" rx="7" fill="#FFFFFF" stroke="#171717" strokeWidth="2" />
      <circle cx="26" cy="125" r="3" fill="#1D4DFF" />

      {/* Central Hexagonal Hub Node */}
      <g className="int-hub-g">
        <polygon points="80,62 96,71 96,89 80,98 64,89 64,71" fill="#171717" />
        <polygon points="80,66 92,73 92,87 80,94 68,87 68,73" fill="url(#intGrad)" />
        <circle cx="80" cy="80" r="4" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

// ==========================================
// 6. PERFORMANCE & SEO (Speedometer Semicircle, Revving Needle & Sliding Magnifying Glass Graph)
// ==========================================
export function PerformanceIcon({ className = DEFAULT_CLASS }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="perfGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#1D4DFF" />
        </linearGradient>
      </defs>
      <style>{`
        @keyframes perfNeedleRev {
          0% { transform: rotate(-70deg); }
          25% { transform: rotate(65deg); }
          45% { transform: rotate(45deg); }
          65%, 85% { transform: rotate(70deg); }
          100% { transform: rotate(-70deg); }
        }
        @keyframes perfGraphDraw {
          0% { stroke-dashoffset: 120; }
          50%, 100% { stroke-dashoffset: 0; }
        }
        @keyframes perfGlassSlide {
          0%, 15% { transform: translate(32px, 125px); opacity: 0; }
          40%, 85% { transform: translate(110px, 92px); opacity: 1; }
          95%, 100% { transform: translate(32px, 125px); opacity: 0; }
        }
        .perf-needle-g {
          transform-origin: 80px 105px;
          animation: perfNeedleRev 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform;
        }
        .perf-graph-path {
          stroke-dasharray: 120;
          animation: perfGraphDraw 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: stroke-dashoffset;
        }
        .perf-glass-g {
          animation: perfGlassSlide 4s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          will-change: transform, opacity;
        }
        @media (prefers-reduced-motion: reduce) {
          .perf-needle-g, .perf-graph-path, .perf-glass-g { animation: none !important; }
        }
      `}</style>

      {/* Layer 1: Background SEO Graph Line */}
      <path d="M 25 135 L 55 122 L 85 128 L 135 88" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 25 135 L 55 122 L 85 128 L 135 88" stroke="url(#perfGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="perf-graph-path" />

      {/* Speedometer Arc */}
      <path d="M 28 105 A 52 52 0 0 1 132 105" stroke="#E5E7EB" strokeWidth="4" strokeLinecap="round" />
      <path d="M 95 56 A 52 52 0 0 1 132 105" stroke="url(#perfGrad)" strokeWidth="5" strokeLinecap="round" />

      {/* Ticks */}
      <line x1="38" y1="95" x2="44" y2="90" stroke="#171717" strokeWidth="2" />
      <line x1="56" y1="68" x2="62" y2="74" stroke="#171717" strokeWidth="2" />
      <line x1="80" y1="56" x2="80" y2="64" stroke="#171717" strokeWidth="2" />
      <line x1="104" y1="68" x2="98" y2="74" stroke="#10B981" strokeWidth="2" />
      <line x1="122" y1="95" x2="116" y2="90" stroke="#10B981" strokeWidth="2" />

      {/* Speedometer Needle */}
      <g className="perf-needle-g">
        <line x1="80" y1="105" x2="114" y2="70" stroke="#171717" strokeWidth="3" strokeLinecap="round" />
        <circle cx="80" cy="105" r="7" fill="#171717" />
        <circle cx="80" cy="105" r="3" fill="#FFFFFF" />
      </g>

      {/* Sliding SEO Magnifying Glass */}
      <g className="perf-glass-g">
        <circle cx="0" cy="0" r="9" fill="#FFFFFF" stroke="#1D4DFF" strokeWidth="2" />
        <line x1="6" y1="6" x2="12" y2="12" stroke="#1D4DFF" strokeWidth="2.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Map service numbers/slugs to specific icon components
export function getServiceIcon(number: string, className?: string) {
  switch (number) {
    case '01':
      return <LandingPagesIcon className={className} />;
    case '02':
      return <SitesAppsIcon className={className} />;
    case '03':
      return <EcommerceIcon className={className} />;
    case '04':
      return <BookingIcon className={className} />;
    case '05':
      return <IntegrationsIcon className={className} />;
    case '06':
      return <PerformanceIcon className={className} />;
    default:
      return null;
  }
}
