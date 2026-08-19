'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export const ThemeToggleSwitch: React.FC = () => {
  const { theme, toggleTheme, isRippling } = useTheme();

  return (
    <button
      onClick={(e) => toggleTheme(e)}
      className={`relative inline-flex items-center w-16 h-8 rounded-full p-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-hylos-cyan ${
        theme === 'dark'
          ? 'bg-[#1e2a3a] border border-hylos-cyan/40 shadow-accent-glow'
          : 'bg-hylos-surface-container border border-hylos-outline-variant shadow-sm'
      }`}
      aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
    >
      {/* Background Icons */}
      <div className="w-full flex items-center justify-between px-1 text-[10px] font-mono select-none">
        <Sun className={`w-3.5 h-3.5 transition-opacity ${theme === 'light' ? 'text-hylos-orange opacity-100' : 'text-gray-400 opacity-40'}`} />
        <Moon className={`w-3.5 h-3.5 transition-opacity ${theme === 'dark' ? 'text-hylos-cyan opacity-100' : 'text-gray-500 opacity-40'}`} />
      </div>

      {/* Sliding Knob */}
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 ease-out shadow-md ${
          theme === 'dark'
            ? 'transform translate-x-8 bg-hylos-cyan text-hylos-near-black'
            : 'transform translate-x-0 bg-white text-hylos-orange'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="w-3.5 h-3.5" />
        ) : (
          <Sun className="w-3.5 h-3.5" />
        )}
      </span>
    </button>
  );
};
