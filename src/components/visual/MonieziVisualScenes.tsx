import React from 'react';

const ink = 'var(--v39-visual-ink)';
const blue = 'var(--v39-visual-blue)';
const paper = 'var(--v39-visual-paper)';
const plant = 'var(--v39-visual-teal)';

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
  <svg viewBox="0 0 320 200" fill="none" aria-hidden="true">
    <path d="M69 164H262" stroke={ink} strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
    <g transform="translate(27 110)">
      <path d="M14 38V12" stroke={ink} strokeWidth="1.4" strokeLinecap="round" opacity="0.5" />
      <path d="M14 12c8 0 12 5 12 11-6 1-10 0-12-2-2 2-6 3-12 2 0-6 4-11 12-11z" fill={blue} fillOpacity="0.72" />
      <path d="M11 0c6 0 9 4 9 8-5 1-8 0-9-1-2 1-5 2-9 1 0-4 3-8 9-8z" fill={plant} fillOpacity="0.74" transform="translate(3 8)" />
      <rect x="0" y="38" width="28" height="3.5" rx="1.75" fill={ink} opacity="0.45" />
    </g>
    <g transform="translate(84 24)">
      <rect width="132" height="116" rx="14" fill={paper} stroke={ink} strokeWidth="1.5" />
      <rect x="0" y="0" width="132" height="18" rx="14" fill="transparent" />
      <circle cx="108" cy="9" r="1.6" fill={ink} opacity="0.36" />
      <circle cx="114" cy="9" r="1.6" fill={ink} opacity="0.36" />
      <circle cx="120" cy="9" r="1.6" fill={ink} opacity="0.36" />
      <path d="M16 36h44" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="18" y="55" width="28" height="34" rx="7" fill={blue} fillOpacity="0.12" />
      <path d="M31 62v20M25 68h11a4 4 0 010 8h-7" stroke={blue} strokeWidth="2.8" strokeLinecap="round" />
      <path d="M58 58h42M58 66h36M58 78h48M58 86h30" stroke={blue} strokeWidth="1.7" strokeLinecap="round" opacity="0.25" />
      <path d="M16 101h88" stroke={ink} strokeWidth="1.5" strokeLinecap="round" opacity="0.15" />
    </g>
    <path d="M223 76c18 2 27 9 32 21" stroke={ink} strokeWidth="1.5" strokeDasharray="4 5" strokeLinecap="round" opacity="0.46" />
    <path d="M252 91l4 6 6-4" stroke={ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
    <path d="M248 75l17 6-14 11" stroke={ink} strokeWidth="1.5" strokeLinejoin="round" opacity="0.62" />
    <circle cx="279" cy="53" r="2.5" fill={blue} fillOpacity="0.12" />
    <circle cx="49" cy="84" r="2.2" fill={blue} fillOpacity="0.12" />
  </svg>
);

export const EstimateVisualScene: React.FC = () => (
  <svg viewBox="0 0 320 200" fill="none" aria-hidden="true">
    <path d="M42 164H286" stroke={ink} strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
    <g transform="translate(24 112)">
      <path d="M12 34V14" stroke={ink} strokeWidth="1.35" strokeLinecap="round" opacity="0.52" />
      <path d="M12 14c7 0 11 4 11 9-5 1-9 0-11-2-2 2-6 3-11 2 0-5 4-9 11-9z" fill={blue} fillOpacity="0.68" />
      <path d="M9 0c5 0 8 3 8 7-4 1-7 0-8-1-2 1-5 2-8 1 0-4 3-7 8-7z" fill={plant} fillOpacity="0.74" transform="translate(3 9)" />
      <rect x="0" y="34" width="24" height="3.5" rx="1.75" fill={ink} opacity="0.45" />
    </g>
    <g transform="translate(77 37)">
      <rect width="145" height="100" rx="14" fill={paper} stroke={ink} strokeWidth="1.5" />
      <circle cx="8" cy="9" r="1.6" fill={ink} opacity="0.36" />
      <circle cx="14" cy="9" r="1.6" fill={ink} opacity="0.36" />
      <circle cx="20" cy="9" r="1.6" fill={ink} opacity="0.36" />
      <path d="M18 34h48" stroke={ink} strokeWidth="1.8" strokeLinecap="round" />
      <rect x="18" y="46" width="40" height="28" rx="6" fill={blue} fillOpacity="0.12" />
      <circle cx="31" cy="58" r="5.3" fill={blue} fillOpacity="0.22" />
      <path d="M28 72l8-9 10 9 7-6 7 6" stroke={blue} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M72 48h44M72 58h50M72 68h42" stroke={blue} strokeWidth="1.7" strokeLinecap="round" opacity="0.25" />
      <path d="M95 82h24" stroke={ink} strokeWidth="2" strokeLinecap="round" opacity="0.9" />
    </g>
    <g transform="translate(245 60)">
      <path d="M22 0c10 0 18 7 18 18s-8 18-18 18c-3 0-6-.7-9-2l-10 4 3-10c-3-3-4-6-4-10C2 7 10 0 22 0z" fill={paper} stroke={ink} strokeWidth="1.4" />
      <path d="M15 18l5 5 10-11" stroke={blue} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <g transform="translate(225 103)">
      <path d="M36 53V18c0-8-6-14-14-14s-14 6-14 14v35" stroke={ink} strokeWidth="1.4" strokeLinecap="round" opacity="0.8" />
      <circle cx="22" cy="8" r="7" fill="transparent" stroke={ink} strokeWidth="1.4" />
      <path d="M22 15v15M12 33c5-3 16-3 21 0M11 43c4-3 18-3 23 0" stroke={ink} strokeWidth="1.4" strokeLinecap="round" opacity="0.78" />
      <rect x="0" y="18" width="42" height="24" rx="4" fill={blue} fillOpacity="0.78" />
      <path d="M4 42h40" stroke={ink} strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
    </g>
  </svg>
);

export default WelcomeVisualScene;
