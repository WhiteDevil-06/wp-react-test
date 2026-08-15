'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, RefreshCw } from 'lucide-react';
import { CaseStudy } from '@/lib/wordpress/types';
import { fetchCaseStudies } from '@/lib/wordpress/caseStudies';
import CaseStudyCard from './CaseStudyCard';

interface CaseStudiesSectionProps {
  refreshCount?: number;
}

export default function CaseStudiesSection({ refreshCount = 0 }: CaseStudiesSectionProps) {
  const [studies, setStudies] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchCaseStudies();
      setStudies(data);
    } catch (err) {
      console.error('Error fetching case studies:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData, refreshCount]);

  return (
    <section id="case-studies" className="py-24 relative bg-[#080c14] border-t border-white/5">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-nexora-violet/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nexora-violet/10 border border-nexora-violet/20 text-nexora-violet text-xs font-mono mb-4">
              <Terminal className="w-3.5 h-3.5" />
              <span>DEPLOYED PRODUCTION SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
              FEATURED CASE STUDIES
            </h2>
            <p className="mt-3 text-nexora-muted text-base max-w-2xl font-light">
              Real-world engineering deployments sourced directly from WordPress custom post types.
            </p>
          </div>

          <button
            onClick={loadData}
            disabled={loading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-xs font-mono text-nexora-muted hover:text-white hover:border-nexora-violet/40 transition-all duration-200 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-nexora-violet' : ''}`} />
            <span>Re-sync Studies ({studies.length})</span>
          </button>
        </div>

        {/* Loading Skeletons */}
        {loading && (
          <div className="space-y-8">
            {[1, 2].map((i) => (
              <div key={i} className="glass-card rounded-3xl h-96 animate-pulse p-8" />
            ))}
          </div>
        )}

        {/* Case Studies List */}
        {!loading && (
          <div className="space-y-12">
            {studies.map((study, index) => (
              <CaseStudyCard key={study.id || index} study={study} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
