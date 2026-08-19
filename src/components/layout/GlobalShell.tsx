import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface GlobalShellProps {
  children: React.ReactNode;
}

export const GlobalShell: React.FC<GlobalShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-hylos-surface text-hylos-on-surface">
      <Header />
      <main className="flex-1 pt-24 md:pt-28" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};
