'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isRippling?: boolean;
  toggleTheme: (event?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [isRippling, setIsRippling] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('hylos-theme') as Theme | null;
    if (storedTheme) {
      setTheme(storedTheme);
      if (storedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = (event?: React.MouseEvent) => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setIsRippling(true);

    const clientX = event ? event.clientX : window.innerWidth / 2;
    const clientY = event ? event.clientY : window.innerHeight / 2;

    const endRadius = Math.hypot(
      Math.max(clientX, window.innerWidth - clientX),
      Math.max(clientY, window.innerHeight - clientY)
    );

    // Create Solar Flare Glow Beam Element
    const flare = document.createElement('div');
    flare.style.position = 'fixed';
    flare.style.left = `${clientX}px`;
    flare.style.top = `${clientY}px`;
    flare.style.width = '10px';
    flare.style.height = '10px';
    flare.style.borderRadius = '50%';
    flare.style.transform = 'translate(-50%, -50%)';
    flare.style.pointerEvents = 'none';
    flare.style.zIndex = '999999';
    flare.style.boxShadow = nextTheme === 'dark' 
      ? '0 0 100px 80px rgba(6, 179, 237, 0.6), 0 0 200px 150px rgba(6, 179, 237, 0.3)'
      : '0 0 100px 80px rgba(234, 101, 35, 0.6), 0 0 200px 150px rgba(234, 101, 35, 0.3)';
    flare.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-out';
    document.body.appendChild(flare);

    requestAnimationFrame(() => {
      flare.style.transform = `translate(-50%, -50%) scale(${endRadius / 5})`;
      flare.style.opacity = '0.8';
    });

    if (typeof document !== 'undefined' && 'startViewTransition' in (document as any)) {
      const transition = (document as any).startViewTransition(() => {
        setTheme(nextTheme);
        localStorage.setItem('hylos-theme', nextTheme);
        if (nextTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });

      transition.ready.then(() => {
        const clipPath = [
          `circle(0px at ${clientX}px ${clientY}px)`,
          `circle(${endRadius}px at ${clientX}px ${clientY}px)`,
        ];

        document.documentElement.animate(
          {
            clipPath: clipPath,
          },
          {
            duration: 600,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    } else {
      setTheme(nextTheme);
      localStorage.setItem('hylos-theme', nextTheme);
      if (nextTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    setTimeout(() => {
      flare.style.opacity = '0';
      setIsRippling(false);
      setTimeout(() => flare.remove(), 500);
    }, 450);
  };

  return (
    <ThemeContext.Provider value={{ theme, isRippling, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
