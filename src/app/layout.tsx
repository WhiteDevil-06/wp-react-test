import type { Metadata, Viewport } from 'next';
import { Hanken_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#006689',
};

export const metadata: Metadata = {
  title: 'Hylos — B2B Marketing, Founder Authority & AI Search Growth',
  description: 'Hylos helps B2B technology leaders turn expertise into visibility, authority, trust, and demand through founder positioning and AI search optimization.',
  keywords: ['B2B Marketing', 'LinkedIn Founder Branding', 'AI SEO', 'Demand Generation', 'Executive Positioning'],
  authors: [{ name: 'Hylos Team' }],
  metadataBase: new URL('https://hylos.co'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hankenGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-hylos-surface text-hylos-on-surface antialiased min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
