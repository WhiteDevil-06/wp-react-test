import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: 'cyan' | 'orange' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center px-3 py-1 rounded-subtle font-mono text-[11px] font-medium uppercase tracking-[0.1em] border';

  const variants = {
    cyan: 'bg-hylos-cyan/10 text-hylos-cyan-dark border-hylos-cyan/30',
    orange: 'bg-hylos-orange/10 text-hylos-orange border-hylos-orange/30',
    neutral: 'bg-hylos-surface-container text-hylos-on-surface-variant border-hylos-outline-variant',
  };

  return (
    <span className={twMerge(clsx(baseStyles, variants[variant], className))} {...props}>
      {children}
    </span>
  );
};
