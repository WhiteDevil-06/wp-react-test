/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        hylos: {
          surface: 'var(--color-surface)',
          'surface-dim': 'var(--color-surface-dim)',
          'surface-bright': 'var(--color-surface-bright)',
          'surface-lowest': 'var(--color-surface-lowest)',
          'surface-low': 'var(--color-surface-low)',
          container: 'var(--color-surface-container)',
          'container-high': 'var(--color-surface-container-high)',
          'container-highest': 'var(--color-surface-container-highest)',
          'on-surface': 'var(--color-on-surface)',
          'on-surface-variant': 'var(--color-on-surface-variant)',
          outline: 'var(--color-outline)',
          'outline-variant': 'var(--color-outline-variant)',
          cyan: '#06b3ed',
          'cyan-dark': 'var(--color-primary-dark)',
          orange: '#EA6523',
          'orange-warm': '#EC8C21',
          'near-black': '#0B0F14',
          'off-white': '#F7F9FA',
        }
      },
      fontFamily: {
        display: ['var(--font-hanken)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      borderRadius: {
        'subtle': '4px',
      },
      maxWidth: {
        'site': '1440px',
      },
      boxShadow: {
        'subtle-border': 'inset 0 0 0 1px rgba(189, 200, 208, 0.4)',
        'accent-glow': '0 0 30px -5px rgba(6, 179, 237, 0.25)',
        'orange-glow': '0 0 30px -5px rgba(234, 101, 35, 0.25)',
      },
      animation: {
        'orbit-slow': 'spin 30s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
