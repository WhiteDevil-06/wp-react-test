'use client';

import React, { useState } from 'react';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { Button } from '@/components/ui/Button';
import { Search, Activity, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TrackPage() {
  const [referenceId, setReferenceId] = useState('');
  const [statusResult, setStatusResult] = useState<any>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!referenceId.trim()) return;

    setIsSearching(true);
    setError('');
    setStatusResult(null);

    try {
      const res = await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ referenceId: referenceId.trim() })
      });
      const data = await res.json();

      if (data.success) {
        setStatusResult(data.data);
      } else {
        setError(data.error || 'Unable to track this reference ID.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <GlobalShell>
      <section className="pt-32 pb-24 px-4 max-w-site mx-auto min-h-[70vh] flex flex-col items-center relative">
        
        <div className="absolute top-24 left-4 md:left-8">
          <Link href="/contact" className="inline-flex items-center gap-2 text-hylos-on-surface-variant hover:text-hylos-cyan-dark transition-colors font-sans text-sm p-2 -ml-2 rounded-subtle hover:bg-hylos-surface-low">
            <ArrowLeft className="w-4 h-4" /> Go Back
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-hylos-on-surface mb-4">
            Track Enquiry
          </h1>
          <p className="font-sans text-hylos-on-surface-variant max-w-md mx-auto">
            Enter your secure Reference ID below to check the current status of your strategy session request.
          </p>
        </div>

        <div className="w-full max-w-lg">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-8">
            <input 
              type="text" 
              value={referenceId}
              onChange={(e) => setReferenceId(e.target.value)}
              placeholder="e.g. HY-A1B2C3D4"
              className="flex-grow bg-hylos-surface-low border border-hylos-outline-variant/50 rounded-subtle px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hylos-cyan font-mono uppercase"
            />
            <Button type="submit" variant="action" disabled={isSearching || !referenceId.trim()} icon={<Search className="w-4 h-4" />}>
              {isSearching ? 'Tracking...' : 'Track'}
            </Button>
          </form>

          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 rounded-subtle text-center text-sm font-sans">
              {error}
            </div>
          )}

          {statusResult && (
            <div className="glass-card p-8 rounded-subtle border-hylos-cyan/30 shadow-accent-glow flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-300">
              <Activity className="w-8 h-8 text-hylos-cyan-dark mb-4" />
              <span className="text-technical text-hylos-on-surface-variant mb-2">Current Status</span>
              <h2 className="font-display font-bold text-3xl text-hylos-cyan-dark mb-2">
                {statusResult.status}
              </h2>
              {statusResult.timestamp && (
                <p className="text-xs text-hylos-on-surface-variant font-mono">
                  Last Updated: {new Date(statusResult.timestamp).toLocaleString()}
                </p>
              )}
            </div>
          )}
        </div>

      </section>
    </GlobalShell>
  );
}
