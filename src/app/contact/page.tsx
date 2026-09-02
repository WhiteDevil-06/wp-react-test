'use client';

import React, { useState, useEffect } from 'react';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { Button } from '@/components/ui/Button';
import { services } from '@/lib/data/services';
import Link from 'next/link';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [referenceId, setReferenceId] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  // To handle pre-selecting from URL param ?service=slug
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceSlug = params.get('service');
    if (serviceSlug) {
      const found = services.find(s => s.slug === serviceSlug);
      if (found) {
        setSelectedServices([found.id]);
      }
    }
  }, []);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('idle');

    try {
      const formData = new FormData(e.currentTarget);
      const payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        message: formData.get('message'),
        services: selectedServices,
        turnstileToken: 'placeholder-token', // Will be replaced by actual turnstile component later
      };

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (data.success) {
        setReferenceId(data.referenceId);
        setSubmissionStatus('success');
      } else {
        alert(data.error || 'Failed to submit enquiry.');
        setSubmissionStatus('error');
      }
    } catch (error) {
      alert('Network error. Please try again.');
      setSubmissionStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <GlobalShell>
      <section className="pt-32 pb-24 px-4 max-w-site mx-auto min-h-screen flex flex-col md:flex-row gap-16">
        
        {/* Left Side: Context */}
        <div className="w-full md:w-1/3">
          <h1 className="font-display font-extrabold text-4xl md:text-5xl text-hylos-on-surface mb-6">
            Let's build your <span className="text-hylos-cyan-dark">authority</span>.
          </h1>
          <p className="font-sans text-hylos-on-surface-variant text-lg mb-8 leading-relaxed">
            [Placeholder] Submit your details to request a strategy session. We'll review your current positioning and discuss how we can engineer your growth.
          </p>
          <div className="p-6 bg-hylos-surface-low border border-hylos-outline-variant/30 rounded-subtle">
            <h3 className="font-technical font-bold text-hylos-on-surface mb-2 text-sm uppercase tracking-wider">What happens next?</h3>
            <ol className="text-sm font-sans text-hylos-on-surface-variant space-y-3 list-decimal pl-4 mt-4">
              <li>You'll receive a secure Reference ID to track your enquiry.</li>
              <li>Our strategy team will review your digital footprint.</li>
              <li>We'll reach out within 24 hours to schedule a session.</li>
            </ol>
          </div>
        </div>

        {/* Right Side: Form UI */}
        <div className="w-full md:w-2/3 max-w-2xl">
          {submissionStatus === 'success' ? (
            <div className="glass-card p-12 rounded-subtle border border-emerald-500/30 text-center">
              <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h2 className="font-display font-bold text-3xl text-hylos-on-surface mb-4">Enquiry submitted successfully.</h2>
              <p className="font-sans text-hylos-on-surface-variant mb-6">Thank you for reaching out. Please save your Reference ID for future tracking.</p>
              <div className="bg-hylos-surface p-4 rounded border border-hylos-outline-variant/50 inline-block mb-8">
                <span className="text-technical text-xs text-hylos-on-surface-variant block mb-1">Reference ID</span>
                <span className="font-mono font-bold text-xl text-hylos-cyan-dark select-all">{referenceId}</span>
              </div>
              <div>
                <Link href="/track">
                  <Button variant="secondary" size="lg">
                    Track Status Now
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-hylos-on-surface">Full Name *</label>
                  <input required id="name" name="name" type="text" className="w-full bg-hylos-surface-low border border-hylos-outline-variant/50 rounded-subtle px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hylos-cyan transition-shadow" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-hylos-on-surface">Work Email *</label>
                  <input required id="email" name="email" type="email" className="w-full bg-hylos-surface-low border border-hylos-outline-variant/50 rounded-subtle px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hylos-cyan transition-shadow" placeholder="jane@company.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-bold text-hylos-on-surface">Company Name *</label>
                <input required id="company" name="company" type="text" className="w-full bg-hylos-surface-low border border-hylos-outline-variant/50 rounded-subtle px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hylos-cyan transition-shadow" placeholder="Acme Corp" />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-hylos-on-surface block">Interested Services</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map(service => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className={`text-left px-4 py-3 rounded-subtle border text-sm transition-all focus:outline-none ${
                        selectedServices.includes(service.id)
                          ? 'border-hylos-cyan bg-hylos-cyan/10 text-hylos-cyan-dark font-medium'
                          : 'border-hylos-outline-variant/50 text-hylos-on-surface-variant hover:border-hylos-outline'
                      }`}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-hylos-on-surface">Additional Message / Requirement *</label>
                <textarea required id="message" name="message" rows={4} className="w-full bg-hylos-surface-low border border-hylos-outline-variant/50 rounded-subtle px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hylos-cyan transition-shadow" placeholder="Tell us about your current challenges..."></textarea>
              </div>

              <div className="p-4 bg-hylos-surface-low border border-hylos-outline-variant/30 rounded-subtle flex items-center justify-center min-h-[80px]">
                <span className="text-technical text-hylos-on-surface-variant">[ Cloudflare Turnstile Placeholder ]</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" variant="action" size="lg" className="flex-1 justify-center" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </Button>
                <Link href="/track" className="flex-1">
                  <Button type="button" variant="secondary" size="lg" className="w-full justify-center">
                    Track your request
                  </Button>
                </Link>
              </div>
            </form>
          )}
        </div>
      </section>
    </GlobalShell>
  );
}
