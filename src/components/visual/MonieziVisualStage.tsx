import React from 'react';

interface MonieziVisualStageProps {
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
  ariaLabel?: string;
}

/**
 * Shared illustration stage for the polished v39 record empty states.
 * It now behaves as a clean layout wrapper so approved illustration assets
 * render exactly as designed without generated background substitutions.
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
    <div className="v39-visual-stage__content">{children}</div>
  </div>
);

export default MonieziVisualStage;
