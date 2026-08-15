'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Plus, Edit3, RotateCcw, ChevronUp, ChevronDown, CheckCircle2, Terminal } from 'lucide-react';

interface WpValidationPanelProps {
  onDataChange: () => void;
}

export default function WpValidationPanel({ onDataChange }: WpValidationPanelProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [lastActionStatus, setLastActionStatus] = useState<string | null>(null);

  const executeWpAction = async (payload: Record<string, any>, label: string) => {
    setLoading(true);
    setLastActionStatus(`Sending WordPress REST API request...`);
    try {
      const res = await fetch('/api/wp-mock/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        setLastActionStatus(`✓ ${label} successful. Next.js re-synced!`);
        onDataChange();
      } else {
        setLastActionStatus(`❌ Failed: ${data.message || 'Error'}`);
      }
    } catch (err) {
      console.error('WP Validation Action Error:', err);
      setLastActionStatus(`❌ API Network Error`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full font-mono">
      {/* Panel Box */}
      <div className="glass-card rounded-2xl border border-nexora-cyan/30 shadow-2xl shadow-nexora-cyan/10 overflow-hidden bg-[#090d16]/95 backdrop-blur-xl">
        {/* Header Bar */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-5 py-3.5 bg-gradient-to-r from-nexora-cyan/20 via-nexora-violet/10 to-transparent border-b border-white/10 flex items-center justify-between text-white text-xs font-semibold hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-nexora-cyan animate-pulse" />
            <span className="tracking-wider">WORDPRESS POC TESTER</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            {isOpen ? <ChevronDown className="w-4 h-4 text-nexora-muted" /> : <ChevronUp className="w-4 h-4 text-nexora-muted" />}
          </div>
        </button>

        {/* Collapsible Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="p-5 space-y-4"
            >
              <div className="text-[11px] text-nexora-muted leading-relaxed font-sans font-light">
                Perform the <strong className="text-white font-mono">Critical POC Test</strong>: Modify WordPress data below to observe Next.js dynamically update the UI <span className="text-nexora-cyan">without editing code</span>!
              </div>

              {/* Action Buttons */}
              <div className="space-y-2">
                {/* Add 4th Service */}
                <button
                  onClick={() =>
                    executeWpAction(
                      {
                        action: 'add',
                        title: 'Web Development',
                        short_description: 'Ultra high-performance headless Next.js web applications and AI platforms.',
                        icon_name: 'Code',
                        category: 'Engineering',
                      },
                      'Added 4th Service ("Web Development")'
                    )
                  }
                  disabled={loading}
                  className="w-full px-4 py-2.5 rounded-xl bg-nexora-cyan/10 border border-nexora-cyan/30 text-nexora-cyan text-xs hover:bg-nexora-cyan hover:text-black font-semibold transition-all duration-200 flex items-center justify-between disabled:opacity-50 group"
                >
                  <span className="flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Add 4th Service ("Web Development")
                  </span>
                  <span className="text-[10px] opacity-70 group-hover:opacity-100">3 → 4 Cards</span>
                </button>

                {/* Modify Title */}
                <button
                  onClick={() =>
                    executeWpAction(
                      {
                        action: 'modify_title',
                        id: 1,
                        title: 'AI Engineering & Automation',
                      },
                      'Modified Service #1 Title'
                    )
                  }
                  disabled={loading}
                  className="w-full px-4 py-2.5 rounded-xl bg-nexora-violet/10 border border-nexora-violet/30 text-nexora-violet text-xs hover:bg-nexora-violet hover:text-white font-semibold transition-all duration-200 flex items-center justify-between disabled:opacity-50 group"
                >
                  <span className="flex items-center gap-2">
                    <Edit3 className="w-4 h-4" /> Update Title ("AI Eng. & Automation")
                  </span>
                  <span className="text-[10px] opacity-70 group-hover:opacity-100">Edit Title</span>
                </button>

                {/* Reset WP Content */}
                <button
                  onClick={() => executeWpAction({ action: 'reset' }, 'Reset WP Data')}
                  disabled={loading}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-nexora-muted text-xs hover:text-white hover:border-white/20 font-medium transition-all duration-200 flex items-center justify-between disabled:opacity-50"
                >
                  <span className="flex items-center gap-2">
                    <RotateCcw className="w-4 h-4" /> Reset Initial WP Content
                  </span>
                  <span className="text-[10px]">3 Cards</span>
                </button>
              </div>

              {/* Status Output Box */}
              {lastActionStatus && (
                <div className="p-3 rounded-lg bg-black/60 border border-white/10 text-[10px] text-emerald-400 font-mono flex items-start gap-2">
                  <Terminal className="w-3.5 h-3.5 shrink-0 mt-0.5 text-nexora-cyan" />
                  <span className="leading-normal">{lastActionStatus}</span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
