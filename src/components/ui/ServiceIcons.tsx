'use client';

import React from 'react';

interface IconProps {
  className?: string;
}

const DEFAULT_CLASS = "w-8 h-8 text-neutral-400 group-hover:text-primary transition-colors duration-500";

// 1. Landing Pages (E-commerce / CTA web layout with synchronized clicking interaction)
export function LandingPagesIcon({ className = DEFAULT_CLASS }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <style>{`
        @keyframes cursorMoveAndClick {
          0% { transform: translate(14px, 8px) scale(1); opacity: 0; }
          15% { transform: translate(14px, 8px) scale(1); opacity: 0; }
          45% { transform: translate(0px, 0px) scale(1); opacity: 1; } /* Glides to button target */
          52% { transform: translate(0px, 0px) scale(0.75); opacity: 1; } /* Clicks down */
          60% { transform: translate(0px, 0px) scale(1); opacity: 1; } /* Releases */
          85%, 100% { transform: translate(14px, 8px) scale(1); opacity: 0; } /* Glides back & fades */
        }
        @keyframes buttonClickPulse {
          0%, 48% { fill: transparent; stroke: currentColor; }
          52% { fill: rgba(29, 77, 255, 0.35); stroke: #1D4DFF; } /* Pulses exactly on click */
          68% { fill: rgba(29, 77, 255, 0.1); stroke: #1D4DFF; }
          85%, 100% { fill: transparent; stroke: currentColor; }
        }
        @keyframes headerDraw {
          0%, 100% { stroke-dashoffset: 0; }
          50% { stroke-dashoffset: 4; }
        }
        .lp-cursor {
          transform-origin: 0px 0px;
        }
        .group:hover .lp-cursor {
          animation: cursorMoveAndClick 2.5s ease-in-out infinite;
        }
        .group:hover .lp-btn {
          animation: buttonClickPulse 2.5s ease-in-out infinite;
        }
        .group:hover .lp-window {
          stroke: #1D4DFF;
        }
        .lp-header-line {
          stroke-dasharray: 8 2;
        }
        .group:hover .lp-header-line {
          animation: headerDraw 2s ease-in-out infinite;
        }
      `}</style>
      {/* Browser window frame */}
      <rect x="2" y="3" width="20" height="18" rx="2" className="lp-window transition-colors duration-700" />
      <path d="M2 8h20" className="opacity-60" />
      <circle cx="5" cy="5.5" r="0.5" fill="currentColor" className="opacity-60" />
      <circle cx="7" cy="5.5" r="0.5" fill="currentColor" className="opacity-60" />
      
      {/* Skeleton Text lines */}
      <path d="M5 12h8" className="lp-header-line opacity-40 group-hover:opacity-80 transition-opacity" />
      <path d="M5 15h5" className="opacity-40 group-hover:opacity-80 transition-opacity" />
      
      {/* CTA Button */}
      <rect x="5" y="18" width="6" height="2.5" rx="0.5" className="lp-btn transition-colors duration-700" />
      
      {/* Large visual section representing landing layout */}
      <rect x="15" y="11" width="4" height="9.5" rx="1" className="opacity-30 group-hover:opacity-60 transition-opacity" />
      
      {/* Pointer/Cursor offset. Tip targets button at coordinates (7, 19.5) */}
      <g className="lp-cursor" transform="translate(7, 19.5)">
        <path d="M0 0l3 7.5l1.5-1.5l2 2l1-1l-2-2l2-1z" className="fill-neutral-400 group-hover:fill-primary stroke-none" />
      </g>
    </svg>
  );
}

// 2. Sites & Apps (Responsive Design / Desktop & Mobile Screens)
export function SitesAppsIcon({ className = DEFAULT_CLASS }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <style>{`
        @keyframes floatMobile {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3.5px); }
        }
        @keyframes scrollScreen {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -12; }
        }
        @keyframes lineShimmer {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; stroke: #1D4DFF; }
        }
        .sa-mobile-g {
          transform-origin: center;
        }
        .group:hover .sa-mobile-g {
          animation: floatMobile 2s ease-in-out infinite;
        }
        .group:hover .sa-mobile-frame {
          stroke: #1D4DFF;
        }
        .group:hover .sa-desktop {
          stroke: #1D4DFF;
        }
        .group:hover .sa-scroll {
          animation: scrollScreen 2s linear infinite;
          stroke-dasharray: 4 2;
          stroke: #1D4DFF;
        }
        .group:hover .sa-line-1 {
          animation: lineShimmer 2s ease-in-out infinite;
        }
        .group:hover .sa-line-2 {
          animation: lineShimmer 2s ease-in-out infinite 0.5s;
        }
      `}</style>
      {/* Laptop / Desktop monitor */}
      <rect x="2" y="4" width="14" height="10" rx="1.5" className="sa-desktop transition-colors duration-700" />
      <path d="M1 14h16" className="sa-desktop transition-colors duration-700" />
      <path d="M6 14l-1 3.5h8l-1-3.5" className="sa-desktop transition-colors duration-700" />
      {/* Desktop screen lines */}
      <path d="M5 7h4" className="sa-line-1 opacity-40" />
      <path d="M5 10h2" className="sa-line-2 opacity-40" />
      
      {/* Phone container overlapping - outer group holds static translation, inner handles float animation */}
      <g transform="translate(14, 7)">
        <g className="sa-mobile-g">
          <rect x="0" y="0" width="7" height="12" rx="1.5" fill="white" className="sa-mobile-frame stroke-neutral-400 transition-colors duration-700" />
          <circle cx="3.5" cy="1.5" r="0.25" fill="currentColor" className="opacity-60" />
          {/* Phone screen lines */}
          <path d="M1.5 4h4" className="sa-scroll opacity-50" strokeWidth="1" />
          <path d="M1.5 6.5h3" className="sa-scroll opacity-50" strokeWidth="1" />
          <path d="M1.5 9h4" className="sa-scroll opacity-50" strokeWidth="1" />
        </g>
      </g>
    </svg>
  );
}

// 3. E-commerce (Shopping Cart / Floating Box)
export function EcommerceIcon({ className = DEFAULT_CLASS }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <style>{`
        @keyframes cartWheel {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes boxDrop {
          0% { transform: translateY(-8px); opacity: 0; }
          40% { transform: translateY(0); opacity: 1; }
          75%, 100% { transform: translateY(0); opacity: 1; }
        }
        .ec-wheel-1 {
          transform-origin: 9px 19px;
        }
        .ec-wheel-2 {
          transform-origin: 17px 19px;
        }
        .group:hover .ec-wheel {
          animation: cartWheel 1.5s linear infinite;
        }
        .group:hover .ec-box {
          animation: boxDrop 2s ease-in-out infinite;
        }
        .group:hover .ec-cart {
          stroke: #1D4DFF;
        }
      `}</style>
      {/* Shopping Cart body */}
      <path d="M2 3h3.5l2.5 10h10l2-7H7" className="ec-cart transition-colors duration-700" />
      {/* Wheels */}
      <circle cx="9" cy="19" r="2" className="ec-wheel ec-wheel-1 transition-colors duration-700" />
      <circle cx="17" cy="19" r="2" className="ec-wheel ec-wheel-2 transition-colors duration-700" />
      {/* Floating box being added to cart */}
      <path d="M9 7h6v4H9z" className="ec-box opacity-0 group-hover:opacity-100 fill-primary/10 stroke-primary transition-opacity" />
    </svg>
  );
}

// 4. Agendamento (Calendar & Clock / Booking Action)
export function BookingIcon({ className = DEFAULT_CLASS }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <style>{`
        @keyframes clockHandSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes checkMarkDraw {
          0% { stroke-dashoffset: 12; opacity: 0; }
          50%, 100% { stroke-dashoffset: 0; opacity: 1; }
        }
        .bk-hand-hour {
          transform-origin: 0px 0px;
        }
        .bk-hand-minute {
          transform-origin: 0px 0px;
        }
        .group:hover .bk-hand-hour {
          animation: clockHandSpin 6s linear infinite;
        }
        .group:hover .bk-hand-minute {
          animation: clockHandSpin 1.2s linear infinite;
        }
        .group:hover .bk-check {
          animation: checkMarkDraw 2s ease-in-out infinite;
          stroke: #1D4DFF;
          stroke-dasharray: 12;
        }
        .group:hover .bk-calendar {
          stroke: #1D4DFF;
        }
      `}</style>
      {/* Calendar layout */}
      <rect x="3" y="4" width="18" height="16" rx="2" className="bk-calendar transition-colors duration-700" />
      <path d="M16 2v4M8 2v4M3 9h18" className="opacity-60" />
      {/* Dates placeholders */}
      <circle cx="7" cy="13" r="1" className="opacity-40" />
      <circle cx="12" cy="13" r="1" className="opacity-40" />
      
      {/* Interactive Time / Appointment marker (clock) */}
      <g transform="translate(17, 15)">
        <circle cx="0" cy="0" r="4.5" fill="white" className="stroke-neutral-400 group-hover:stroke-primary transition-colors" />
        <line x1="0" y1="0" x2="0" y2="-2.5" className="bk-hand-hour" />
        <line x1="0" y1="0" x2="2.5" y2="0" className="bk-hand-minute" />
      </g>
      {/* Checkmark overlay that appears */}
      <path d="M6 14.5l2 2 4-4" className="bk-check opacity-0" strokeWidth="2.5" />
    </svg>
  );
}

// 5. Integrações (Database Connections & API nodes)
export function IntegrationsIcon({ className = DEFAULT_CLASS }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <style>{`
        @keyframes pulseNodeScale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.25); }
        }
        @keyframes flowDataPoints {
          0% { stroke-dashoffset: 12; }
          100% { stroke-dashoffset: 0; }
        }
        .int-node-1 { transform-origin: 5px 6px; }
        .int-node-2 { transform-origin: 19px 6px; }
        .int-node-3 { transform-origin: 12px 19px; }
        .group:hover .int-node {
          animation: pulseNodeScale 1.5s ease-in-out infinite;
        }
        .group:hover .int-line {
          animation: flowDataPoints 1.2s linear infinite;
          stroke: #1D4DFF;
          stroke-dasharray: 4 2;
        }
        .group:hover .int-center {
          fill: #1D4DFF;
          stroke: #1D4DFF;
        }
      `}</style>
      {/* Connection lines */}
      <line x1="12" y1="12" x2="5" y2="6" className="int-line" />
      <line x1="12" y1="12" x2="19" y2="6" className="int-line" />
      <line x1="12" y1="12" x2="12" y2="19" className="int-line" />
      
      {/* Outer nodes */}
      <circle cx="5" cy="6" r="2.5" className="int-node int-node-1 fill-white stroke-neutral-400 group-hover:stroke-primary" />
      <circle cx="19" cy="6" r="2.5" className="int-node int-node-2 fill-white stroke-neutral-400 group-hover:stroke-primary" />
      <circle cx="12" cy="19" r="2.5" className="int-node int-node-3 fill-white stroke-neutral-400 group-hover:stroke-primary" />
      
      {/* Central Hub node */}
      <circle cx="12" cy="12" r="3.5" className="int-center fill-neutral-200 stroke-neutral-400 transition-colors" />
    </svg>
  );
}

// 6. Performance (Speedometer / Needle Speeding Up)
export function PerformanceIcon({ className = DEFAULT_CLASS }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <style>{`
        @keyframes needleRevving {
          0% { transform: rotate(-60deg); }
          25% { transform: rotate(75deg); }
          45% { transform: rotate(50deg); }
          65% { transform: rotate(80deg); }
          100% { transform: rotate(-60deg); }
        }
        .perf-needle {
          transform-origin: 12px 16px;
          transform: rotate(-60deg);
          transition: transform 0.5s ease-out;
        }
        .group:hover .perf-needle {
          animation: needleRevving 2.2s ease-in-out infinite;
          stroke: #1D4DFF;
        }
        .group:hover .perf-gauge {
          stroke: #1D4DFF;
        }
      `}</style>
      {/* Gauge Arc */}
      <path d="M 4 16 A 8 8 0 0 1 20 16" className="perf-gauge transition-colors duration-700" />
      {/* Arc decoration lines */}
      <path d="M 4 16h2M 18 16h2M 12 8v2" className="opacity-60" />
      {/* Needle centered at (12, 16) */}
      <line x1="12" y1="16" x2="12" y2="9" className="perf-needle" strokeWidth="2.5" />
      {/* Center cap */}
      <circle cx="12" cy="16" r="1.5" className="fill-neutral-800" />
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
