import React from 'react';
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import { HylosLogo } from '../ui/HylosLogo';
import { Container } from '../ui/Container';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-hylos-container-low border-t border-hylos-outline-variant pt-12 pb-8 mt-24">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-8 border-b border-hylos-outline-variant/60">
          
          <div className="flex flex-col gap-4 max-w-sm">
            <HylosLogo height={32} width={140} />
            <p className="text-hylos-on-surface-variant text-sm font-sans font-light">
              Premium B2B marketing, positioning founders and companies as absolute authorities in their niche.
            </p>
          </div>

          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap gap-6 font-mono text-xs uppercase tracking-wider text-hylos-on-surface-variant">
              <li>
                <Link href="/" className="hover:text-hylos-cyan-dark transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-hylos-cyan-dark transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-hylos-cyan-dark transition-colors">About</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-hylos-cyan-dark transition-colors">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[11px] text-hylos-on-surface-variant">
          <p>© {new Date().getFullYear()} Hylos B2B Marketing & Growth. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="mailto:placeholder@hylos.co" className="hover:text-hylos-cyan-dark transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3" /> placeholder@hylos.co
            </a>
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" /> [HQ Location Placeholder]
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
