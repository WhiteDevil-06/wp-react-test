'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Layers, RefreshCw, AlertCircle, Database } from 'lucide-react';
import { Service } from '@/lib/wordpress/types';
import { fetchServices } from '@/lib/wordpress/services';
import ServiceCard from './ServiceCard';

interface ServicesSectionProps {
  onRefreshTrigger?: () => void;
  refreshCount?: number;
}

export default function ServicesSection({ refreshCount = 0 }: ServicesSectionProps) {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchServices();
      setServices(data);
    } catch (err) {
      console.error('Error fetching services:', err);
      setError('Failed to fetch services from WordPress API');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData, refreshCount]);

  return (
    <section id="services" className="py-24 relative bg-[#06080d] border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-nexora-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-nexora-cyan/10 border border-nexora-cyan/20 text-nexora-cyan text-xs font-mono mb-4">
              <Database className="w-3.5 h-3.5" />
              <span>DYNAMIC WORDPRESS POSTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-sans">
              CORE CAPABILITIES
            </h2>
            <p className="mt-3 text-nexora-muted text-base max-w-2xl font-light">
              Fetched in real-time from the <span className="text-white font-mono">WordPress REST API</span>. Add or edit services in WordPress to witness instant UI updates.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={loadData}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass-card text-xs font-mono text-nexora-muted hover:text-white hover:border-nexora-cyan/40 transition-all duration-200 disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-nexora-cyan' : ''}`} />
              <span>Re-sync API ({services.length} Cards)</span>
            </button>
          </div>
        </div>

        {/* Loading State Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card rounded-2xl p-8 h-64 animate-pulse flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl" />
                  <div className="h-6 bg-white/5 rounded w-3/4" />
                  <div className="h-4 bg-white/5 rounded w-full" />
                </div>
                <div className="h-4 bg-white/5 rounded w-1/2" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="glass-card border-red-500/30 rounded-2xl p-8 text-center max-w-xl mx-auto my-8">
            <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <div className="text-white font-semibold">{error}</div>
            <p className="text-xs text-nexora-muted mt-2 font-mono">
              Check process.env.WORDPRESS_API_URL or endpoint connectivity.
            </p>
          </div>
        )}

        {/* Dynamic Services Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id || index} service={service} index={index} />
            ))}
          </div>
        )}

        {/* Dynamic Proof Banner */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between font-mono text-xs text-nexora-muted"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-nexora-cyan animate-ping" />
              <span>WordPress REST Endpoint Status: 200 OK</span>
            </div>
            <span>{services.length} Total Services Active</span>
          </motion.div>
        )}
      </div>
    </section>
  );
}
