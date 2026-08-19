'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={(e) => toggleTheme(e)}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-subtle font-mono text-[11px] uppercase tracking-wider bg-hylos-surface-container text-hylos-on-surface border border-hylos-outline-variant hover:border-hylos-cyan transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-hylos-cyan"
      aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
    >
      {theme === 'light' ? (
        <>
          <Moon className="w-3.5 h-3.5 text-hylos-cyan-dark shrink-0" />
          <span className="hidden sm:inline">Dark</span>
        </>
      ) : (
        <>
          <Sun className="w-3.5 h-3.5 text-hylos-orange shrink-0" />
          <span className="hidden sm:inline">Light</span>
        </>
      )}
    </button>
  );
};
