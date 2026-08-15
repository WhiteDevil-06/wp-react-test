'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Database, Code2, Layers, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-grid-pattern">
      {/* Background Radial Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-nexora-cyan/20 via-nexora-violet/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Top Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-nexora-cyan/30 text-nexora-cyan text-xs font-mono mb-8"
        >
          <Sparkles className="w-4 h-4 animate-spin-slow text-nexora-cyan" />
          <span>NEXORA AI × HEADLESS WORDPRESS POC</span>
          <span className="w-1.5 h-1.5 rounded-full bg-nexora-cyan animate-ping" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08] font-sans"
        >
          WE BUILD <br className="hidden sm:inline" />
          <span className="text-gradient-cyan">INTELLIGENCE</span> THAT MOVES.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-lg sm:text-xl text-nexora-muted max-w-3xl mx-auto font-light leading-relaxed"
        >
          Enterprise AI engineering, algorithmic SEO dominance, and high-frequency growth systems. 
          Engineered with <span className="text-white font-medium">Next.js App Router</span> and dynamic content management driven by <span className="text-nexora-cyan font-medium">WordPress REST API</span>.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-nexora-cyan to-blue-600 text-white font-mono text-sm font-semibold shadow-xl shadow-nexora-cyan/20 hover:shadow-nexora-cyan/40 hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 group"
          >
            <span>Explore Capabilities</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#architecture"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-card text-nexora-text font-mono text-sm font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <Database className="w-4 h-4 text-nexora-violet" />
            <span>Verify Data Flow</span>
          </a>
        </motion.div>

        {/* Tech Stack Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left font-mono text-xs text-nexora-muted"
        >
          <div className="glass-card p-3.5 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-nexora-cyan shrink-0" />
            <div>
              <div className="text-white font-semibold">Decoupled Architecture</div>
              <div className="text-[10px] text-nexora-muted">Next.js owns UI</div>
            </div>
          </div>

          <div className="glass-card p-3.5 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-nexora-violet shrink-0" />
            <div>
              <div className="text-white font-semibold">WordPress REST CMS</div>
              <div className="text-[10px] text-nexora-muted">WordPress owns Content</div>
            </div>
          </div>

          <div className="glass-card p-3.5 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="text-white font-semibold">Zero-Code Content Sync</div>
              <div className="text-[10px] text-nexora-muted">Dynamic JSON Fetch</div>
            </div>
          </div>

          <div className="glass-card p-3.5 rounded-lg flex items-center gap-3">
            <CheckCircle2 className="w-4 h-4 text-nexora-cyan shrink-0" />
            <div>
              <div className="text-white font-semibold">Framer Motion</div>
              <div className="text-[10px] text-nexora-muted">60fps Transitions</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
