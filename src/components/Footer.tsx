'use client';

import React from 'react';
import { Cpu, Github, ExternalLink, Database, Layers } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#040609] border-t border-white/10 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/5">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-nexora-cyan/10 border border-nexora-cyan/30 flex items-center justify-center text-nexora-cyan">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-wider text-white font-mono">
                NEXORA<span className="text-nexora-cyan">.AI</span>
              </span>
            </div>
            <p className="text-nexora-muted text-sm max-w-md font-light leading-relaxed">
              Fictional AI & Technology Agency built to prove technical feasibility of Decoupled Headless WordPress architecture with Next.js App Router.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-nexora-muted pt-2">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Next.js 14 App Router
              </span>
              <span>•</span>
              <span className="text-nexora-cyan">WordPress REST API</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-white font-semibold uppercase tracking-wider mb-4">Architecture</div>
            <ul className="space-y-2.5 text-nexora-muted">
              <li>
                <a href="#services" className="hover:text-nexora-cyan transition-colors">
                  Dynamic Services
                </a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-nexora-cyan transition-colors">
                  Case Studies API
                </a>
              </li>
              <li>
                <a href="/api/wp-mock/services" target="_blank" className="hover:text-nexora-cyan transition-colors flex items-center gap-1">
                  <span>Services REST API</span>
                  <ExternalLink className="w-3 h-3 text-nexora-cyan" />
                </a>
              </li>
              <li>
                <a href="/api/wp-mock/case-studies" target="_blank" className="hover:text-nexora-cyan transition-colors flex items-center gap-1">
                  <span>Case Studies REST API</span>
                  <ExternalLink className="w-3 h-3 text-nexora-cyan" />
                </a>
              </li>
            </ul>
          </div>

          {/* Tech Stack Spec */}
          <div className="space-y-3 font-mono text-xs">
            <div className="text-white font-semibold uppercase tracking-wider mb-4">Tech Stack</div>
            <ul className="space-y-2 text-nexora-muted">
              <li className="flex items-center justify-between">
                <span>Frontend:</span>
                <span className="text-white">Next.js 14</span>
              </li>
              <li className="flex items-center justify-between">
                <span>CMS Backend:</span>
                <span className="text-white">WordPress REST API</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Styling:</span>
                <span className="text-white">Tailwind CSS</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Animations:</span>
                <span className="text-white">Framer Motion</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between font-mono text-xs text-nexora-muted gap-4">
          <div>© {new Date().getFullYear()} NEXORA AI Technical POC. Next.js owns presentation; WordPress owns content.</div>
          <div className="text-[11px] text-nexora-muted/60">Built for feasibility analysis</div>
        </div>
      </div>
    </footer>
  );
}
