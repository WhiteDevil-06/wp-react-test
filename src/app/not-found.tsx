import React from 'react';
import Link from 'next/link';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <GlobalShell>
      <section className="py-24 text-center">
        <Container>
          <span className="text-technical text-hylos-cyan-dark">404 — Page Not Found</span>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-hylos-on-surface mt-4 mb-6">
            Requested Resource Does Not Exist
          </h1>
          <p className="text-hylos-on-surface-variant font-sans text-base max-w-md mx-auto mb-8 font-light">
            The page or route you are looking for has moved or is under construction.
          </p>
          <Link href="/">
            <Button variant="primary" size="md">
              Return To Homepage
            </Button>
          </Link>
        </Container>
      </section>
    </GlobalShell>
  );
}
