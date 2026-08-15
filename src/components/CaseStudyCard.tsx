'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2, TrendingUp, Building2 } from 'lucide-react';
import { CaseStudy } from '@/lib/wordpress/types';

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

export default function CaseStudyCard({ study, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-nexora-violet/40 transition-all duration-500 flex flex-col lg:flex-row"
    >
      {/* Left Column - Image & Meta */}
      <div className="relative lg:w-5/12 min-h-[300px] lg:min-h-[420px] overflow-hidden">
        <img
          src={study.heroImage}
          alt={study.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-black/40 to-transparent lg:bg-gradient-to-r" />

        {/* Client Badge */}
        <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-mono text-xs">
          <Building2 className="w-3.5 h-3.5 text-nexora-violet" />
          <span>{study.client}</span>
        </div>

        {/* Result Badge */}
        <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-white">
          <div className="text-[10px] font-mono text-nexora-cyan uppercase tracking-wider mb-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Measured Impact
          </div>
          <div className="text-sm font-semibold text-white">{study.result}</div>
        </div>
      </div>

      {/* Right Column - Content */}
      <div className="lg:w-7/12 p-8 lg:p-10 flex flex-col justify-between">
        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {study.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-nexora-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-nexora-violet transition-colors duration-300 mb-4 font-sans">
            {study.title}
          </h3>

          {/* Short Description */}
          <p className="text-nexora-muted text-sm sm:text-base mb-6 font-light leading-relaxed">
            {study.shortDescription}
          </p>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pt-4 border-t border-white/5 text-xs font-mono">
            <div className="glass-card p-4 rounded-xl bg-white/[0.02]">
              <span className="text-nexora-cyan font-bold block mb-1 uppercase tracking-wider">The Challenge</span>
              <p className="text-nexora-muted font-sans font-light leading-snug">{study.problem}</p>
            </div>
            <div className="glass-card p-4 rounded-xl bg-white/[0.02]">
              <span className="text-nexora-violet font-bold block mb-1 uppercase tracking-wider">The Solution</span>
              <p className="text-nexora-muted font-sans font-light leading-snug">{study.solution}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5 font-mono text-xs text-nexora-muted">
          <span>WordPress Post ID: #{study.id}</span>
          <span className="inline-flex items-center gap-1.5 text-nexora-violet group-hover:translate-x-1 transition-transform font-semibold">
            <span>View Architecture</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
