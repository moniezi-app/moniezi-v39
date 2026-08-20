import React from 'react';

const cx = (...parts: Array<string | false | null | undefined>) => parts.filter(Boolean).join(' ');

export type MonieziGlassTone = 'blue' | 'cyan' | 'teal' | 'green' | 'amber' | 'rose' | 'violet';

type CommonProps = {
  children: React.ReactNode;
  className?: string;
};

export function MonieziGlassCard({ children, className, hero = false }: CommonProps & { hero?: boolean }) {
  return <section className={cx('v391-glass-card', hero && 'v391-glass-card--hero', className)}>{children}</section>;
}

export function MonieziGlassInset({ children, className, interactive = false }: CommonProps & { interactive?: boolean }) {
  return <div className={cx('v391-glass-inset', interactive && 'v391-glass-inset--interactive', className)}>{children}</div>;
}

export function MonieziGlassIcon({ children, className, tone = 'blue', label }: CommonProps & { tone?: MonieziGlassTone; label?: string }) {
  return (
    <span className={cx('v391-glass-icon', `v391-glass-icon--${tone}`, className)} aria-label={label}>
      {children}
    </span>
  );
}

type ActionProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  tone?: MonieziGlassTone;
};

export function MonieziGlassAction({ children, className, tone = 'blue', type = 'button', ...props }: ActionProps) {
  return (
    <button type={type} className={cx('v391-glass-action', `v391-glass-action--${tone}`, className)} {...props}>
      {children}
    </button>
  );
}

export type MonieziSegmentOption<T extends string> = {
  value: T;
  label: string;
  ariaLabel?: string;
};

export function MonieziGlassSegments<T extends string>({
  value,
  options,
  onChange,
  className,
}: {
  value: T;
  options: MonieziSegmentOption<T>[];
  onChange: (value: T) => void;
  className?: string;
}) {
  return (
    <div className={cx('v391-glass-segments', className)} role="group" aria-label="Dashboard period">
      {options.map(option => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cx('v391-glass-segment', active && 'v391-glass-segment--active')}
            aria-pressed={active}
            aria-label={option.ariaLabel || option.label}
          >
            <span>{option.label}</span>
            {active && <span className="v391-glass-segment__indicator" aria-hidden="true" />}
          </button>
        );
      })}
    </div>
  );
}

export function MonieziGlassMetric({
  label,
  value,
  detail,
  tone = 'blue',
  icon,
  className,
  onClick,
  ariaLabel,
}: {
  label: string;
  value: React.ReactNode;
  detail?: React.ReactNode;
  tone?: MonieziGlassTone;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const content = (
    <>
      <div className="v391-glass-metric__top">
        {icon ? <span className="v391-glass-metric__icon">{icon}</span> : null}
        <span className="v391-glass-metric__label">{label}</span>
      </div>
      <div className="v391-glass-metric__value">{value}</div>
      {detail ? <div className="v391-glass-metric__detail">{detail}</div> : null}
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={ariaLabel || label}
        className={cx('v391-glass-metric', 'v391-glass-inset--interactive', `v391-glass-metric--${tone}`, className)}
      >
        {content}
      </button>
    );
  }

  return <div className={cx('v391-glass-metric', `v391-glass-metric--${tone}`, className)}>{content}</div>;
}

export function MonieziGlassDivider({ className }: { className?: string }) {
  return <div className={cx('v391-glass-divider', className)} aria-hidden="true" />;
}
