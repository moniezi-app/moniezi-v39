import React from 'react';

const sceneStroke = 'var(--v39-visual-ink)';

const SceneGrid: React.FC = () => (
  <g opacity="0.18" stroke={sceneStroke} strokeWidth="1">
    <path d="M18 42H302" strokeDasharray="2 12" />
    <path d="M18 110H302" strokeDasharray="2 12" />
    <path d="M18 178H302" strokeDasharray="2 12" />
    <path d="M60 18V202" strokeDasharray="2 12" />
    <path d="M160 18V202" strokeDasharray="2 12" />
    <path d="M260 18V202" strokeDasharray="2 12" />
  </g>
);

/**
 * Original v39 welcome scene.
 * A local business ledger sits in the center while invoice, receipt and
 * profit signals orbit it. The scene deliberately avoids stock characters.
 */
export const WelcomeVisualScene: React.FC = () => (
  <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
    <SceneGrid />

    <g transform="translate(89 35)">
      <rect
        x="0"
        y="0"
        width="142"
        height="154"
        rx="20"
        fill="var(--v39-visual-paper)"
        stroke={sceneStroke}
        strokeWidth="1.5"
      />
      <rect
        x="14"
        y="14"
        width="114"
        height="28"
        rx="10"
        fill="var(--v39-visual-blue)"
        fillOpacity="0.16"
        stroke="var(--v39-visual-blue)"
        strokeWidth="1.5"
      />
      <circle cx="31" cy="28" r="6" fill="var(--v39-visual-blue)" fillOpacity="0.78" />
      <path d="M45 24H111M45 31H87" stroke={sceneStroke} strokeWidth="1.5" strokeLinecap="round" opacity="0.62" />

      <rect x="14" y="55" width="114" height="34" rx="10" fill="var(--v39-visual-cyan)" fillOpacity="0.10" />
      <path d="M26 69H68M26 77H54" stroke={sceneStroke} strokeWidth="1.5" strokeLinecap="round" opacity="0.56" />
      <path d="M91 76l8-8 7 6 10-12" stroke="var(--v39-visual-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="116" cy="62" r="3.5" fill="var(--v39-visual-green)" />

      <rect x="14" y="101" width="52" height="39" rx="10" fill="var(--v39-visual-violet)" fillOpacity="0.11" />
      <path d="M27 113H53M27 121H46M27 129H38" stroke={sceneStroke} strokeWidth="1.4" strokeLinecap="round" opacity="0.58" />

      <rect x="76" y="101" width="52" height="39" rx="10" fill="var(--v39-visual-green)" fillOpacity="0.11" />
      <path d="M89 129V121M101 129V114M113 129V108" stroke="var(--v39-visual-green)" strokeWidth="4" strokeLinecap="round" />
    </g>

    <g transform="translate(28 62)">
      <rect width="72" height="58" rx="15" fill="var(--v39-visual-paper)" stroke="var(--v39-visual-cyan)" strokeWidth="1.5" />
      <path d="M18 15H54M18 23H45M18 36H33" stroke={sceneStroke} strokeWidth="1.5" strokeLinecap="round" opacity="0.66" />
      <path d="M48 34h9v9h-9z" fill="var(--v39-visual-cyan)" fillOpacity="0.26" stroke="var(--v39-visual-cyan)" strokeWidth="1.4" />
    </g>

    <g transform="translate(224 48)">
      <rect width="68" height="68" rx="18" fill="var(--v39-visual-paper)" stroke="var(--v39-visual-violet)" strokeWidth="1.5" />
      <path d="M21 18h25v33l-5-4-5 4-5-4-5 4-5-4V18z" fill="var(--v39-visual-violet)" fillOpacity="0.11" stroke={sceneStroke} strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M28 27h12M28 34h14M28 41h8" stroke={sceneStroke} strokeWidth="1.35" strokeLinecap="round" opacity="0.65" />
    </g>

    <g transform="translate(38 146)">
      <rect width="68" height="46" rx="14" fill="var(--v39-visual-paper)" stroke="var(--v39-visual-green)" strokeWidth="1.5" />
      <circle cx="20" cy="23" r="9" fill="var(--v39-visual-green)" fillOpacity="0.16" stroke="var(--v39-visual-green)" strokeWidth="1.4" />
      <path d="M20 17v12M16.5 20h5.2a2.7 2.7 0 010 5.4H18" stroke="var(--v39-visual-green)" strokeWidth="1.45" strokeLinecap="round" />
      <path d="M38 18h17M38 26h12" stroke={sceneStroke} strokeWidth="1.4" strokeLinecap="round" opacity="0.58" />
    </g>

    <path d="M99 89C110 89 111 89 118 89" stroke="var(--v39-visual-cyan)" strokeWidth="1.5" strokeDasharray="3 5" />
    <path d="M231 82C241 82 245 82 252 82" stroke="var(--v39-visual-violet)" strokeWidth="1.5" strokeDasharray="3 5" />
    <path d="M103 169C111 169 116 165 122 158" stroke="var(--v39-visual-green)" strokeWidth="1.5" strokeDasharray="3 5" />
  </svg>
);

/**
 * Invoice scene: a document moves toward a paid confirmation. It uses the
 * blue/cyan/green family and reads at small mobile sizes without text labels.
 */
export const InvoiceVisualScene: React.FC = () => (
  <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
    <SceneGrid />

    <g transform="translate(49 27)">
      <rect width="146" height="164" rx="18" fill="var(--v39-visual-paper)" stroke={sceneStroke} strokeWidth="1.5" />
      <path d="M24 27H91M24 39H72" stroke={sceneStroke} strokeWidth="1.7" strokeLinecap="round" />
      <rect x="101" y="20" width="25" height="25" rx="7" fill="var(--v39-visual-blue)" fillOpacity="0.16" stroke="var(--v39-visual-blue)" strokeWidth="1.4" />
      <path d="M108 28h11M108 34h11M108 40h7" stroke="var(--v39-visual-blue)" strokeWidth="1.25" strokeLinecap="round" />

      <path d="M24 66H122" stroke={sceneStroke} strokeWidth="1.4" opacity="0.22" />
      <path d="M24 83H80M104 83H122M24 101H70M100 101H122" stroke={sceneStroke} strokeWidth="1.5" strokeLinecap="round" opacity="0.58" />

      <rect x="24" y="121" width="98" height="24" rx="8" fill="var(--v39-visual-cyan)" fillOpacity="0.10" />
      <path d="M34 133H67" stroke={sceneStroke} strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
      <path d="M88 133h24" stroke="var(--v39-visual-blue)" strokeWidth="2" strokeLinecap="round" />
    </g>

    <path d="M202 76c22 0 31 8 38 22" stroke="var(--v39-visual-blue)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" />
    <path d="M236 91l5 8 8-4" stroke="var(--v39-visual-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    <g transform="translate(213 104)">
      <circle cx="35" cy="35" r="35" fill="var(--v39-visual-green)" fillOpacity="0.13" stroke="var(--v39-visual-green)" strokeWidth="1.6" />
      <circle cx="35" cy="35" r="23" fill="var(--v39-visual-paper)" stroke="var(--v39-visual-green)" strokeWidth="1.4" />
      <path d="M24 35l7 7 15-17" stroke="var(--v39-visual-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <g transform="translate(209 40)">
      <rect width="72" height="35" rx="12" fill="var(--v39-visual-paper)" stroke="var(--v39-visual-blue)" strokeWidth="1.4" />
      <circle cx="18" cy="17.5" r="8" fill="var(--v39-visual-blue)" fillOpacity="0.15" />
      <path d="M18 12v11M15 15h4.4a2.3 2.3 0 010 4.6H16" stroke="var(--v39-visual-blue)" strokeWidth="1.35" strokeLinecap="round" />
      <path d="M34 14h25M34 21h17" stroke={sceneStroke} strokeWidth="1.3" strokeLinecap="round" opacity="0.55" />
    </g>
  </svg>
);

/**
 * Estimate scene: a quote sheet, pricing blocks and an approval path.
 * Violet is dominant so Estimates remain visually distinct from Invoices.
 */
export const EstimateVisualScene: React.FC = () => (
  <svg viewBox="0 0 320 220" fill="none" aria-hidden="true">
    <SceneGrid />

    <g transform="translate(63 30) rotate(-3 73 80)">
      <rect width="146" height="160" rx="18" fill="var(--v39-visual-paper)" stroke={sceneStroke} strokeWidth="1.5" />
      <rect x="22" y="22" width="68" height="10" rx="5" fill="var(--v39-visual-violet)" fillOpacity="0.20" />
      <path d="M22 46H120M22 58H85" stroke={sceneStroke} strokeWidth="1.5" strokeLinecap="round" opacity="0.58" />

      <rect x="22" y="77" width="102" height="20" rx="7" fill="var(--v39-visual-violet)" fillOpacity="0.09" />
      <path d="M31 87H70M101 87H115" stroke={sceneStroke} strokeWidth="1.35" strokeLinecap="round" opacity="0.62" />

      <rect x="22" y="105" width="102" height="20" rx="7" fill="var(--v39-visual-amber)" fillOpacity="0.10" />
      <path d="M31 115H62M100 115H115" stroke={sceneStroke} strokeWidth="1.35" strokeLinecap="round" opacity="0.62" />

      <path d="M76 139H123" stroke="var(--v39-visual-violet)" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="29" cy="139" r="7" fill="var(--v39-visual-violet)" fillOpacity="0.15" stroke="var(--v39-visual-violet)" strokeWidth="1.4" />
      <path d="M26 139h6M29 136v6" stroke="var(--v39-visual-violet)" strokeWidth="1.4" strokeLinecap="round" />
    </g>

    <g transform="translate(205 46)">
      <rect width="72" height="62" rx="17" fill="var(--v39-visual-paper)" stroke="var(--v39-visual-amber)" strokeWidth="1.5" />
      <path d="M21 18h30M21 28h22" stroke={sceneStroke} strokeWidth="1.45" strokeLinecap="round" opacity="0.58" />
      <path d="M20 44h9l5-7 7 10 5-5h7" stroke="var(--v39-visual-amber)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    <path d="M207 129c23 0 31 7 39 20" stroke="var(--v39-visual-violet)" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 6" />
    <path d="M241 142l6 7 8-5" stroke="var(--v39-visual-violet)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    <g transform="translate(214 151)">
      <rect width="66" height="38" rx="13" fill="var(--v39-visual-violet)" fillOpacity="0.13" stroke="var(--v39-visual-violet)" strokeWidth="1.5" />
      <path d="M18 19l7 7 14-15" stroke="var(--v39-visual-violet)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45 15h9M45 22h7" stroke={sceneStroke} strokeWidth="1.3" strokeLinecap="round" opacity="0.54" />
    </g>

    <g transform="translate(35 126)">
      <circle cx="21" cy="21" r="20" fill="var(--v39-visual-paper)" stroke="var(--v39-visual-violet)" strokeWidth="1.5" />
      <path d="M14 28l4-11 13-6-6 13-11 4z" fill="var(--v39-visual-violet)" fillOpacity="0.14" stroke="var(--v39-visual-violet)" strokeWidth="1.3" strokeLinejoin="round" />
      <circle cx="22.5" cy="20.5" r="2.3" fill="var(--v39-visual-violet)" />
    </g>
  </svg>
);

export default WelcomeVisualScene;
