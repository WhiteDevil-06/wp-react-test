'use client';

import React, { useState, useEffect } from 'react';
import { Cpu, Terminal, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06080d]/80 backdrop-blur-md border-b border-white/10 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-nexora-cyan via-nexora-violet to-blue-600 p-[1px] shadow-lg shadow-nexora-cyan/20">
              <div className="w-full h-full bg-nexora-bg rounded-[11px] flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
                <Cpu className="w-5 h-5 text-nexora-cyan group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-wider text-white font-mono flex items-center gap-1">
                NEXORA<span className="text-nexora-cyan">.AI</span>
              </span>
              <span className="text-[10px] tracking-widest text-nexora-muted uppercase -mt-1 font-mono">
                Intelligence Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-nexora-muted">
            <a href="#services" className="hover:text-nexora-cyan transition-colors duration-200">
              Capabilities
            </a>
            <a href="#case-studies" className="hover:text-nexora-cyan transition-colors duration-200">
              Case Studies
            </a>
            <a href="#architecture" className="hover:text-nexora-cyan transition-colors duration-200">
              Architecture
            </a>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              WP REST API Active
            </div>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#services"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-medium text-white bg-white/5 border border-white/10 hover:border-nexora-cyan/50 hover:bg-nexora-cyan/10 transition-all duration-300 group"
            >
              <span>Explore Engine</span>
              <ArrowRight className="w-4 h-4 text-nexora-cyan group-hover:translate-x-1 transition-transform duration-200" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-nexora-muted hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-nexora-surface/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 space-y-4 font-mono text-sm"
          >
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-nexora-text hover:text-nexora-cyan py-2"
            >
              Capabilities
            </a>
            <a
              href="#case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-nexora-text hover:text-nexora-cyan py-2"
            >
              Case Studies
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-nexora-text hover:text-nexora-cyan py-2"
            >
              Architecture
            </a>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-nexora-muted">WordPress REST Endpoint:</span>
              <span className="text-xs font-mono text-emerald-400">Connected</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
