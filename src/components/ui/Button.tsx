import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'action' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-mono text-xs uppercase tracking-wider font-semibold rounded-subtle transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-hylos-cyan focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

  const variants = {
    primary:
      'bg-hylos-cyan text-hylos-near-black hover:bg-[#009bd1] shadow-accent-glow',
    secondary:
      'bg-transparent text-hylos-on-surface border border-hylos-outline-variant hover:border-hylos-cyan hover:bg-hylos-container-low',
    action:
      'bg-hylos-orange text-white hover:bg-[#d55516] shadow-orange-glow',
    ghost:
      'bg-transparent text-hylos-on-surface-variant hover:text-hylos-on-surface hover:bg-hylos-container-low',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-[11px] gap-1.5',
    md: 'px-5 py-2.5 text-xs gap-2',
    lg: 'px-7 py-3.5 text-xs gap-2.5',
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
