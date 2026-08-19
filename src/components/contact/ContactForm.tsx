'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Send, AlertCircle, Copy, Check } from 'lucide-react';
import { HYLOS_SERVICES } from '@/lib/content/servicesData';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: HYLOS_SERVICES[0].slug,
    message: '',
    website_url_hp: '', // Honeypot spam shield
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedLeadId, setSubmittedLeadId] = useState('');
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setSubmittedLeadId(data.leadId || `lead_${Date.now()}`);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Submission failed. Please check inputs and try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error occurred. Please try again.');
    }
  };

  const handleCopyLeadId = () => {
    if (submittedLeadId) {
      navigator.clipboard.writeText(submittedLeadId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      service: HYLOS_SERVICES[0].slug,
      message: '',
      website_url_hp: '',
    });
    setStatus('idle');
    setSubmittedLeadId('');
  };

  return (
    <Card variant="bordered" className="bg-hylos-surface-lowest p-8 md:p-10 border-hylos-outline-variant">
      <AnimatePresence mode="wait">
        {status === 'success' ? (
          <motion.div
            key="success-view"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.4 }}
            className="text-center py-8 flex flex-col items-center gap-6"
          >
            <div className="w-16 h-16 rounded-full bg-hylos-cyan/10 flex items-center justify-center text-hylos-cyan border border-hylos-cyan/30">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-display text-hylos-on-surface">
                Strategy Session Request Received!
              </h2>
              <p className="text-hylos-on-surface-variant text-sm font-sans max-w-md mx-auto font-light leading-relaxed">
                Thank you for reaching out. A Hylos executive growth strategist will evaluate your positioning and respond within 24 business hours.
              </p>
            </div>

            {submittedLeadId && (
              <div className="p-4 rounded-subtle glass-panel border border-hylos-outline-variant/60 flex items-center justify-between gap-4 w-full max-w-md font-mono text-xs text-hylos-on-surface">
                <div className="text-left">
                  <span className="block text-[10px] text-hylos-on-surface-variant uppercase tracking-wider">Tracking Reference</span>
                  <span className="text-hylos-cyan font-bold">{submittedLeadId}</span>
                </div>
                <button
                  onClick={handleCopyLeadId}
                  className="p-2 text-hylos-on-surface-variant hover:text-hylos-cyan transition-colors focus:outline-none"
                  title="Copy Tracking ID"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            )}

            <Button variant="secondary" size="md" onClick={handleReset} className="mt-2">
              Submit Another Strategy Request
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Honeypot field (hidden from real users) */}
            <input
              type="text"
              name="website_url_hp"
              value={formData.website_url_hp}
              onChange={handleChange}
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {status === 'error' && (
              <div className="p-4 bg-hylos-orange/10 border border-hylos-orange/30 rounded-subtle flex items-center gap-3 text-xs text-hylos-orange font-sans">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-technical text-hylos-on-surface">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  className="px-4 py-3 bg-hylos-surface-low border border-hylos-outline-variant rounded-subtle font-sans text-xs text-hylos-on-surface focus:outline-none focus:ring-2 focus:ring-hylos-cyan focus:border-transparent transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-technical text-hylos-on-surface">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="alex@company.com"
                  className="px-4 py-3 bg-hylos-surface-low border border-hylos-outline-variant rounded-subtle font-sans text-xs text-hylos-on-surface focus:outline-none focus:ring-2 focus:ring-hylos-cyan focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-technical text-hylos-on-surface">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Apex Tech Systems"
                  className="px-4 py-3 bg-hylos-surface-low border border-hylos-outline-variant rounded-subtle font-sans text-xs text-hylos-on-surface focus:outline-none focus:ring-2 focus:ring-hylos-cyan focus:border-transparent transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="service" className="text-technical text-hylos-on-surface">
                  Area of Focus *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="px-4 py-3 bg-hylos-surface-low border border-hylos-outline-variant rounded-subtle font-sans text-xs text-hylos-on-surface focus:outline-none focus:ring-2 focus:ring-hylos-cyan focus:border-transparent transition-all"
                >
                  {HYLOS_SERVICES.map((s) => (
                    <option key={s.id} value={s.slug}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-technical text-hylos-on-surface">
                Brief Project Note / Goals *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your target buyers, current LinkedIn visibility, or growth milestones..."
                className="px-4 py-3 bg-hylos-surface-low border border-hylos-outline-variant rounded-subtle font-sans text-xs text-hylos-on-surface focus:outline-none focus:ring-2 focus:ring-hylos-cyan focus:border-transparent transition-all"
              />
            </div>

            <Button
              type="submit"
              variant="action"
              size="lg"
              disabled={status === 'submitting'}
              className="w-full justify-center mt-2"
              icon={<Send className="w-4 h-4" />}
            >
              {status === 'submitting' ? 'Submitting Request...' : 'Book Strategy Session'}
            </Button>
          </form>
        )}
      </AnimatePresence>
    </Card>
  );
};
