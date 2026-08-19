import React from 'react';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import { HylosLogo } from '../ui/HylosLogo';
import { Container } from '../ui/Container';
import { HYLOS_FOUNDER_INFO } from '@/lib/content/servicesData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-hylos-container-low border-t border-hylos-outline-variant pt-16 pb-12 mt-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-hylos-outline-variant/60">
          {/* Brand Narrative Column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <HylosLogo height={38} width={170} />
            <p className="text-hylos-on-surface-variant text-sm leading-relaxed max-w-md font-sans font-light">
              Hylos helps B2B technology leaders turn expertise into visibility, authority, trust, and demand through founder personal branding, corporate LinkedIn strategy, and AI search optimization.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-hylos-cyan animate-pulse" />
              <span className="text-technical text-[11px] text-hylos-on-surface-variant">
                B2B Executive Growth Partner • Founder {HYLOS_FOUNDER_INFO.name}
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="md:col-span-3 flex flex-col gap-4">
            <h4 className="text-technical font-bold text-hylos-on-surface">Solutions</h4>
            <ul className="flex flex-col gap-3 font-sans text-xs text-hylos-on-surface-variant">
              <li>
                <Link href="/services/linkedin-founder-branding" className="hover:text-hylos-cyan-dark transition-colors">
                  Founder Personal Branding
                </Link>
              </li>
              <li>
                <Link href="/services/linkedin-company-branding" className="hover:text-hylos-cyan-dark transition-colors">
                  LinkedIn Company Branding
                </Link>
              </li>
              <li>
                <Link href="/services/ai-seo-intent" className="hover:text-hylos-cyan-dark transition-colors">
                  AI Search & Intent SEO
                </Link>
              </li>
              <li>
                <Link href="/services/b2b-performance-marketing" className="hover:text-hylos-cyan-dark transition-colors">
                  Performance Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/content-creative" className="hover:text-hylos-cyan-dark transition-colors">
                  Content & Creative
                </Link>
              </li>
              <li>
                <Link href="/services/digital-technology" className="hover:text-hylos-cyan-dark transition-colors">
                  Digital Technology Capabilities
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Navigation Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-technical font-bold text-hylos-on-surface">Navigation</h4>
            <ul className="flex flex-col gap-3 font-sans text-xs text-hylos-on-surface-variant">
              <li>
                <Link href="/" className="hover:text-hylos-cyan-dark transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link href="/work" className="hover:text-hylos-cyan-dark transition-colors">
                  Work / Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-hylos-cyan-dark transition-colors">
                  Insights & Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-hylos-cyan-dark transition-colors">
                  About Hylos & Founder
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-hylos-cyan-dark transition-colors">
                  Book Strategy Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Inquiry Column */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <h4 className="text-technical font-bold text-hylos-on-surface">Direct Contact</h4>
            <div className="flex flex-col gap-3 font-sans text-xs text-hylos-on-surface-variant">
              <a href="mailto:growth@hylos.co" className="hover:text-hylos-cyan-dark transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4 text-hylos-cyan-dark shrink-0" />
                <span>growth@hylos.co</span>
              </a>
              <div className="flex items-start gap-2 pt-1 text-hylos-on-surface-variant/80">
                <MapPin className="w-4 h-4 text-hylos-cyan-dark shrink-0 mt-0.5" />
                <span>Enterprise B2B Executive Office</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-hylos-on-surface-variant">
          <p>© {new Date().getFullYear()} Hylos B2B Marketing & Growth. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>WCAG 2.1 AA Compliant</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
