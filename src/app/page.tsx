'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import WpValidationPanel from '@/components/WpValidationPanel';
import Footer from '@/components/Footer';

export default function Home() {
  const [refreshCount, setRefreshCount] = useState(0);

  const handleDataChange = () => {
    setRefreshCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-nexora-bg text-nexora-text selection:bg-nexora-cyan selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <ServicesSection refreshCount={refreshCount} />
        <CaseStudiesSection refreshCount={refreshCount} />
      </main>
      <Footer />

      {/* Interactive WordPress Content Validation Controller Panel */}
      <WpValidationPanel onDataChange={handleDataChange} />
    </div>
  );
}
