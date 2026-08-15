import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEXORA AI | We Build Intelligence That Moves',
  description: 'Next-generation AI engineering, AI SEO, performance marketing, and digital transformation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-nexora-bg text-nexora-text antialiased min-h-screen selection:bg-nexora-cyan selection:text-black">
        {children}
      </body>
    </html>
  );
}
