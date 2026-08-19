import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'flat' | 'bordered' | 'elevated' | 'glass';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'bordered',
  className,
  ...props
}) => {
  const baseStyles = 'rounded-subtle p-6 md:p-8 transition-all duration-300';

  const variants = {
    flat: 'bg-hylos-surface-low text-hylos-on-surface',
    bordered:
      'glass-card text-hylos-on-surface border border-hylos-outline-variant hover:border-hylos-orange/60 hover:shadow-orange-glow dark:hover:border-hylos-cyan/60 dark:hover:shadow-accent-glow',
    elevated:
      'glass-panel text-hylos-on-surface border border-hylos-outline-variant shadow-xl',
    glass:
      'glass-card text-hylos-on-surface border border-hylos-outline-variant/60 shadow-lg',
  };

  return (
    <div className={twMerge(clsx(baseStyles, variants[variant], className))} {...props}>
      {children}
    </div>
  );
};
