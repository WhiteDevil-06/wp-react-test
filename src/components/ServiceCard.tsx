'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Search, TrendingUp, Code, Zap, Sparkles, ArrowUpRight } from 'lucide-react';
import { Service } from '@/lib/wordpress/types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Search,
  TrendingUp,
  Code,
  Zap,
  Sparkles,
};

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = ICON_MAP[service.iconName] || Zap;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Accent Glow on Hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-nexora-cyan/10 rounded-full blur-2xl group-hover:bg-nexora-cyan/20 transition-all duration-500 pointer-events-none" />

      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-nexora-cyan/10 border border-nexora-cyan/20 flex items-center justify-center text-nexora-cyan group-hover:scale-110 group-hover:bg-nexora-cyan group-hover:text-black transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-wider text-nexora-muted">
              {service.category}
            </span>
            <span className="text-[11px] font-mono text-nexora-cyan/60 font-semibold">
              #0{index + 1}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white group-hover:text-nexora-cyan transition-colors duration-300 mb-3 font-sans">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-nexora-muted text-sm leading-relaxed mb-6 font-light">
          {service.shortDescription}
        </p>
      </div>

      {/* Footer / CTA */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-xs text-nexora-muted group-hover:text-white transition-colors duration-200">
        <span className="text-[11px] uppercase tracking-wider">WordPress REST Post #{service.id}</span>
        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-nexora-cyan group-hover:text-black transition-all duration-300">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}
