import React from 'react';

const ink = 'var(--v39-visual-ink)';
const blue = 'var(--v39-visual-blue)';
const paper = 'var(--v39-visual-paper)';
const teal = 'var(--v39-visual-teal)';
const cyan = 'var(--v39-visual-cyan)';
const green = 'var(--v39-visual-green)';
const violet = 'var(--v39-visual-violet)';
const amber = 'var(--v39-visual-amber)';
const publicBase = import.meta.env.BASE_URL;

export const WelcomeVisualScene: React.FC = () => (
  <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
    <rect x="70" y="28" width="180" height="132" rx="22" fill="var(--v39-visual-paper)" stroke={ink} strokeWidth="1.5" />
    <rect x="87" y="44" width="146" height="24" rx="10" fill="var(--v39-visual-blue)" fillOpacity="0.1" stroke={blue} strokeWidth="1.4" />
    <rect x="87" y="80" width="146" height="30" rx="12" fill="var(--v39-visual-teal)" fillOpacity="0.08" />
    <rect x="87" y="120" width="58" height="28" rx="12" fill="var(--v39-visual-green)" fillOpacity="0.08" />
    <rect x="159" y="120" width="74" height="28" rx="12" fill="var(--v39-visual-violet)" fillOpacity="0.08" />
    <path d="M102 56h88M102 92h52M102 100h39M173 135h46" stroke={ink} strokeWidth="1.45" strokeLinecap="round" opacity="0.56" />
    <path d="M187 95l9-9 8 6 11-13" stroke="var(--v39-visual-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <g transform="translate(25 74)">
      <rect width="70" height="56" rx="14" fill={paper} stroke="var(--v39-visual-cyan)" strokeWidth="1.5" />
      <path d="M17 17h36M17 25h28M17 38h13" stroke={ink} strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
      <rect x="47" y="33" width="10" height="10" fill="var(--v39-visual-cyan)" fillOpacity="0.22" stroke="var(--v39-visual-cyan)" strokeWidth="1.3" />
    </g>
    <g transform="translate(232 55)">
      <rect width="58" height="60" rx="16" fill={paper} stroke="var(--v39-visual-violet)" strokeWidth="1.5" />
      <path d="M18 18h21v26l-4-3-4 3-4-3-4 3-5-3V18z" fill="var(--v39-visual-violet)" fillOpacity="0.12" stroke={ink} strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M24 27h9M24 34h12" stroke={ink} strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
    </g>
    <g transform="translate(39 149)">
      <rect width="68" height="42" rx="14" fill={paper} stroke="var(--v39-visual-green)" strokeWidth="1.5" />
      <circle cx="19" cy="21" r="8" fill="var(--v39-visual-green)" fillOpacity="0.16" stroke="var(--v39-visual-green)" strokeWidth="1.3" />
      <path d="M19 16v10M16 18.5h4.4a2.2 2.2 0 010 4.4H17" stroke="var(--v39-visual-green)" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M35 18h16M35 25h10" stroke={ink} strokeWidth="1.3" strokeLinecap="round" opacity="0.56" />
    </g>
  </svg>
);

export const InvoiceVisualScene: React.FC = () => (
  <div className="v39-approved-illustration-pair" aria-hidden="true">
    <img
      src={`${publicBase}invoice-empty-v39-27-shared.webp`}
      alt=""
      className="v39-approved-illustration"
      loading="eager"
      decoding="async"
    />
  </div>
);

export const EstimateVisualScene: React.FC = () => (
  <div className="v39-approved-illustration-pair" aria-hidden="true">
    <img
      src={`${publicBase}estimate-empty-v39-27-shared.webp`}
      alt=""
      className="v39-approved-illustration"
      loading="eager"
      decoding="async"
    />
  </div>
);

export const ReceiptsVisualScene: React.FC = () => (
  <div className="v39-approved-illustration-pair" aria-hidden="true">
    <img
      src={`${publicBase}receipts-empty-v39-27-shared.webp`}
      alt=""
      className="v39-approved-illustration"
      loading="eager"
      decoding="async"
    />
  </div>
);

export const MileageVisualScene: React.FC = () => (
  <div className="v39-approved-illustration-pair" aria-hidden="true">
    <img
      src={`${publicBase}mileage-empty-v39-27-shared.webp`}
      alt=""
      className="v39-approved-illustration"
      loading="eager"
      decoding="async"
    />
  </div>
);

export const ClientsVisualScene: React.FC = () => (
  <div className="v39-approved-illustration-pair" aria-hidden="true">
    <img
      src={`${publicBase}clients-empty-v39-27-shared.webp`}
      alt=""
      className="v39-approved-illustration"
      loading="eager"
      decoding="async"
    />
  </div>
);

export const JobsVisualScene: React.FC = () => (
  <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
    <g transform="translate(48 32)">
      <rect x="50" width="124" height="156" rx="24" fill={paper} stroke={ink} strokeWidth="1.5" />
      <rect x="86" y="16" width="52" height="12" rx="6" fill={cyan} fillOpacity="0.18" stroke={cyan} strokeWidth="1.2" />
      <path d="M73 53h18l5 5 8-12" stroke={green} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M116 50h34M116 59h26" stroke={ink} strokeWidth="1.35" strokeLinecap="round" opacity="0.6" />
      <path d="M73 88h18l5 5 8-12" stroke={green} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M116 85h38M116 94h28" stroke={ink} strokeWidth="1.35" strokeLinecap="round" opacity="0.6" />
      <path d="M73 123h18l5 5 8-12" stroke={blue} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M116 120h32M116 129h24" stroke={ink} strokeWidth="1.35" strokeLinecap="round" opacity="0.6" />
    </g>
    <g transform="translate(34 135)">
      <rect width="62" height="40" rx="14" fill={paper} stroke={amber} strokeWidth="1.5" />
      <path d="M18 11v18M11 18h14" stroke={amber} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 16h14M34 24h10" stroke={ink} strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
    </g>
    <g transform="translate(236 108)">
      <rect width="48" height="58" rx="16" fill={paper} stroke={teal} strokeWidth="1.5" />
      <path d="M13 38l8-8 7 5 10-14" stroke={teal} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 18h18M15 25h13" stroke={ink} strokeWidth="1.25" strokeLinecap="round" opacity="0.54" />
    </g>
  </svg>
);

export default WelcomeVisualScene;
