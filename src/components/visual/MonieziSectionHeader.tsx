import React from 'react';

interface MonieziSectionHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

/** Shared section hierarchy for the v39 Home/dashboard architecture. */
export const MonieziSectionHeader: React.FC<MonieziSectionHeaderProps> = ({
  title,
  description,
  action,
  icon,
  className = '',
}) => (
  <div className={`v39-section-header ${className}`.trim()}>
    <div className="v39-section-header__main">
      {icon ? <div className="v39-section-header__icon" aria-hidden="true">{icon}</div> : null}
      <div>
        <h2 className="v39-section-header__title">{title}</h2>
        {description ? <p className="v39-section-header__description">{description}</p> : null}
      </div>
    </div>
    {action ? <div className="v39-section-header__action">{action}</div> : null}
  </div>
);

export default MonieziSectionHeader;
