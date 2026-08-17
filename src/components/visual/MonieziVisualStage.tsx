import React from 'react';

interface MonieziVisualStageProps {
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
  ariaLabel?: string;
}

/**
 * Shared presentation stage for v39 illustrations.
 * The illustration itself stays screen-specific; the spacing, surface and treatment do not.
 */
export const MonieziVisualStage: React.FC<MonieziVisualStageProps> = ({
  children,
  className = '',
  compact = false,
  ariaLabel,
}) => (
  <div
    className={`v39-visual-stage ${compact ? 'v39-visual-stage--compact' : ''} ${className}`.trim()}
    role={ariaLabel ? 'img' : undefined}
    aria-label={ariaLabel}
    aria-hidden={ariaLabel ? undefined : true}
  >
    <div className="v39-visual-stage__glow" />
    <div className="v39-visual-stage__content">{children}</div>
  </div>
);

export default MonieziVisualStage;
