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
      src={`${publicBase}invoice-empty-v39-17-light.webp`}
      alt=""
      className="v39-approved-illustration v39-approved-illustration--light"
      loading="eager"
      decoding="async"
    />
    <img
      src={`${publicBase}invoice-empty-v39-17-dark.webp`}
      alt=""
      className="v39-approved-illustration v39-approved-illustration--dark"
      loading="eager"
      decoding="async"
    />
  </div>
);

export const EstimateVisualScene: React.FC = () => (
  <div className="v39-approved-illustration-pair" aria-hidden="true">
    <img
      src={`${publicBase}estimate-empty-v39-17-light.webp`}
      alt=""
      className="v39-approved-illustration v39-approved-illustration--light"
      loading="eager"
      decoding="async"
    />
    <img
      src={`${publicBase}estimate-empty-v39-17-dark.webp`}
      alt=""
      className="v39-approved-illustration v39-approved-illustration--dark"
      loading="eager"
      decoding="async"
    />
  </div>
);


export const ReceiptsVisualScene: React.FC = () => (
  <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
    <g transform="translate(46 32)">
      <rect x="86" y="10" width="102" height="152" rx="24" fill={paper} stroke={ink} strokeWidth="1.5" />
      <rect x="98" y="25" width="78" height="116" rx="14" fill={blue} fillOpacity="0.08" stroke={blue} strokeOpacity="0.22" strokeWidth="1.3" />
      <path d="M114 43h46M114 54h34" stroke={ink} strokeWidth="1.35" strokeLinecap="round" opacity="0.62" />
      <path d="M116 74h42M116 84h46M116 94h28M116 116h18" stroke={ink} strokeWidth="1.35" strokeLinecap="round" opacity="0.56" />
      <path d="M139 123l9 8 18-23" stroke={green} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="137" cy="153" r="4" fill={ink} opacity="0.48" />
    </g>
    <g transform="translate(34 80)">
      <path d="M0 10c10 0 10-6 20-6s10 6 20 6 10-6 20-6 10 6 20 6v54c-10 0-10 6-20 6s-10-6-20-6-10 6-20 6-10-6-20-6V10z" fill={paper} stroke={amber} strokeWidth="1.5" />
      <path d="M16 21h37M16 31h45M16 41h32" stroke={ink} strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
      <path d="M15 53h20" stroke={ink} strokeWidth="1.3" strokeLinecap="round" opacity="0.46" />
      <circle cx="59" cy="51" r="10" fill={amber} fillOpacity="0.15" stroke={amber} strokeWidth="1.3" />
      <path d="M59 46v10M55 48.5h5.6a2.3 2.3 0 010 4.6H56.5" stroke={amber} strokeWidth="1.3" strokeLinecap="round" />
    </g>
    <g transform="translate(232 56)">
      <rect width="48" height="48" rx="14" fill={paper} stroke={cyan} strokeWidth="1.5" />
      <circle cx="18" cy="18" r="5.5" fill={cyan} fillOpacity="0.18" stroke={cyan} strokeWidth="1.2" />
      <path d="M13 18h10M18 13v10" stroke={cyan} strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 35l7-8 4 4 7-10" stroke={ink} strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" opacity="0.72" />
    </g>
    <path d="M111 67c-7 4-13 11-17 20" stroke={amber} strokeWidth="2.4" strokeLinecap="round" strokeDasharray="3 6" opacity="0.85" />
  </svg>
);

export const MileageVisualScene: React.FC = () => (
  <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
    <g transform="translate(38 44)">
      <rect width="188" height="126" rx="24" fill={paper} stroke={ink} strokeWidth="1.5" />
      <path d="M33 86c17-12 23-43 49-43 17 0 24 12 39 12 19 0 22-16 44-16 15 0 28 9 41 24" stroke={cyan} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="34" cy="86" r="6.5" fill={paper} stroke={cyan} strokeWidth="2.4" />
      <circle cx="161" cy="63" r="6.5" fill={paper} stroke={cyan} strokeWidth="2.4" />
      <g transform="translate(56 78)">
        <rect x="6" y="14" width="56" height="17" rx="8.5" fill={teal} fillOpacity="0.18" stroke={teal} strokeWidth="1.4" />
        <path d="M16 14l7-12h22l7 12" stroke={ink} strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="32" r="6" fill={paper} stroke={ink} strokeWidth="1.35" />
        <circle cx="48" cy="32" r="6" fill={paper} stroke={ink} strokeWidth="1.35" />
        <path d="M15 22h38" stroke={ink} strokeWidth="1.25" strokeLinecap="round" opacity="0.7" />
      </g>
    </g>
    <g transform="translate(237 66)">
      <path d="M21 0c11.6 0 21 8.8 21 20.5 0 14.8-18 30.6-21 34-3-3.4-21-19.2-21-34C0 8.8 9.4 0 21 0z" fill={blue} fillOpacity="0.12" stroke={blue} strokeWidth="1.5" />
      <circle cx="21" cy="20" r="6.8" fill={paper} stroke={ink} strokeWidth="1.3" />
    </g>
    <g transform="translate(214 141)">
      <rect width="62" height="40" rx="14" fill={paper} stroke={green} strokeWidth="1.5" />
      <path d="M15 16h21M15 24h31" stroke={ink} strokeWidth="1.3" strokeLinecap="round" opacity="0.56" />
      <path d="M39 15l5 5 8-10" stroke={green} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export const ClientsVisualScene: React.FC = () => (
  <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
    <g transform="translate(35 82)">
      <rect width="114" height="84" rx="22" fill={paper} stroke={ink} strokeWidth="1.5" />
      <circle cx="31" cy="29" r="13" fill={violet} fillOpacity="0.16" stroke={violet} strokeWidth="1.4" />
      <path d="M31 24a5 5 0 110 10 5 5 0 010-10zM21 46c2.7-5 15.3-5 20 0" stroke={ink} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M56 25h38M56 35h28" stroke={ink} strokeWidth="1.35" strokeLinecap="round" opacity="0.6" />
      <path d="M20 60h73" stroke={ink} strokeWidth="1.2" strokeLinecap="round" opacity="0.14" />
      <path d="M20 69h42" stroke={ink} strokeWidth="1.25" strokeLinecap="round" opacity="0.42" />
    </g>
    <g transform="translate(134 44)">
      <rect width="142" height="104" rx="24" fill={paper} stroke={amber} strokeWidth="1.5" />
      <rect x="18" y="18" width="46" height="46" rx="16" fill={amber} fillOpacity="0.15" stroke={amber} strokeWidth="1.3" />
      <path d="M41 28a8 8 0 110 16 8 8 0 010-16zM26 53c4.6-8.1 25.4-8.1 30 0" stroke={ink} strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M79 28h41M79 39h31M79 56h45" stroke={ink} strokeWidth="1.35" strokeLinecap="round" opacity="0.62" />
      <g transform="translate(80 68)">
        <rect width="40" height="18" rx="9" fill={green} fillOpacity="0.14" stroke={green} strokeWidth="1.2" />
        <path d="M12 10h16" stroke={green} strokeWidth="1.8" strokeLinecap="round" />
      </g>
    </g>
    <path d="M141 153c-6 9-14 16-23 20" stroke={violet} strokeWidth="2.3" strokeLinecap="round" strokeDasharray="3 6" opacity="0.8" />
  </svg>
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
