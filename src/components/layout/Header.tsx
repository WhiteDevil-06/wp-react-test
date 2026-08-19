'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { HylosLogo } from '../ui/HylosLogo';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { ThemeToggleSwitch } from '../ui/ThemeToggleSwitch';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Solutions', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-hylos-surface/90 backdrop-blur-md border-b border-hylos-outline-variant/60 shadow-sm py-3'
          : 'bg-hylos-surface/50 backdrop-blur-sm border-b border-hylos-outline-variant/30 py-5'
      }`}
    >
      {/* Screen Reader Skip to Content Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-hylos-cyan focus:text-hylos-near-black focus:font-mono focus:text-xs focus:rounded-subtle"
      >
        Skip to main content
      </a>

      <Container className="flex items-center justify-between">
        {/* Hylos Official Logo */}
        <HylosLogo height={36} width={160} />

        {/* Master Tree Navigation Bar Links */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs uppercase tracking-wider transition-colors duration-200 ${
                  isActive
                    ? 'text-hylos-cyan-dark font-semibold border-b-2 border-hylos-cyan pb-1'
                    : 'text-hylos-on-surface-variant hover:text-hylos-cyan-dark'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Action CTA & Radial Theme Toggle Switch */}
        <div className="hidden lg:flex items-center gap-5">
          <ThemeToggleSwitch />
          <Link href="/contact">
            <Button variant="action" size="md" icon={<ArrowUpRight className="w-4 h-4" />}>
              Book Strategy Session
            </Button>
          </Link>
        </div>

        {/* Mobile Actions & Menu Toggle */}
        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggleSwitch />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 text-hylos-on-surface hover:text-hylos-cyan-dark transition-colors focus:outline-none focus:ring-2 focus:ring-hylos-cyan rounded-subtle"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Editorial Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-hylos-surface border-b border-hylos-outline-variant p-6 shadow-2xl flex flex-col gap-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-mono text-sm uppercase tracking-wider py-2 transition-colors border-b border-hylos-outline-variant/30 ${
                    isActive
                      ? 'text-hylos-cyan-dark font-bold'
                      : 'text-hylos-on-surface-variant hover:text-hylos-on-surface'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Explicit Mobile Theme Control Row */}
          <div className="p-4 rounded-subtle glass-panel border border-hylos-outline-variant/40 flex items-center justify-between">
            <span className="text-technical text-hylos-on-surface font-mono">Theme Mode</span>
            <ThemeToggleSwitch />
          </div>

          <div className="pt-1 flex flex-col gap-3">
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="action" size="lg" className="w-full justify-between" icon={<ArrowUpRight className="w-4 h-4" />}>
                Book Strategy Session
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
