'use client';

import React, { useEffect } from 'react';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Unhandled App Router Error:', error);
  }, [error]);

  return (
    <GlobalShell>
      <section className="py-24 text-center">
        <Container>
          <span className="text-technical text-hylos-orange">System Error Boundary</span>
          <h1 className="text-3xl md:text-4xl font-bold font-display text-hylos-on-surface mt-4 mb-6">
            Something Went Wrong
          </h1>
          <p className="text-hylos-on-surface-variant font-sans text-base max-w-md mx-auto mb-8 font-light">
            An internal application error occurred. Click below to re-render the view.
          </p>
          <Button variant="primary" size="md" onClick={() => reset()}>
            Try Again
          </Button>
        </Container>
      </section>
    </GlobalShell>
  );
}
