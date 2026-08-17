import React from 'react';

interface MonieziEmptyStateProps {
  visual: React.ReactNode;
  title: string;
  body?: React.ReactNode;
  primaryAction?: React.ReactNode;
  secondaryAction?: React.ReactNode;
  eyebrow?: string;
  supportingContent?: React.ReactNode;
  className?: string;
}

/**
 * v39 empty-state composition: one visual, one message, supporting value points,
 * one primary action, and an optional secondary link-style action.
 */
export const MonieziEmptyState: React.FC<MonieziEmptyStateProps> = ({
  visual,
  title,
  body,
  primaryAction,
  secondaryAction,
  eyebrow,
  supportingContent,
  className = '',
}) => (
  <section className={`v39-empty-state ${className}`.trim()}>
    <div className="v39-empty-state__visual">{visual}</div>
    <div className="v39-empty-state__copy">
      {eyebrow ? <div className="v39-empty-state__eyebrow">{eyebrow}</div> : null}
      <h2 className="v39-empty-state__title">{title}</h2>
      {body ? <div className="v39-empty-state__body">{body}</div> : null}
    </div>
    {supportingContent ? <div className="v39-empty-state__supporting">{supportingContent}</div> : null}
    {primaryAction ? <div className="v39-empty-state__primary">{primaryAction}</div> : null}
    {secondaryAction ? <div className="v39-empty-state__secondary">{secondaryAction}</div> : null}
  </section>
);

export default MonieziEmptyState;
