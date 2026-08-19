import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { GlobalShell } from '@/components/layout/GlobalShell';
import { Container } from '@/components/ui/Container';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { HYLOS_ARTICLES } from '@/lib/content/servicesData';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/seo/schema';
import { ArrowLeft, ArrowUpRight, Clock, User } from 'lucide-react';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return HYLOS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = HYLOS_ARTICLES.find((a) => a.slug === params.slug);
  if (!article) return {};

  return {
    title: `${article.title} | Hylos Insights`,
    description: article.excerpt,
    alternates: {
      canonical: `https://hylos.co/insights/${article.slug}`,
    },
    openGraph: {
      title: `${article.title} | Hylos Insights`,
      description: article.excerpt,
      url: `https://hylos.co/insights/${article.slug}`,
      siteName: 'Hylos Executive Growth',
      type: 'article',
      images: [
        {
          url: 'https://hylos.co/hylos-logo.png',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = HYLOS_ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const articleSchema = getArticleSchema(
    article.title,
    article.excerpt,
    article.date,
    article.author
  );
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://hylos.co' },
    { name: 'Insights', url: 'https://hylos.co/insights' },
    { name: article.title, url: `https://hylos.co/insights/${article.slug}` },
  ]);

  return (
    <GlobalShell>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="py-16 bg-hylos-container-low border-b border-hylos-outline-variant/60">
        <Container>
          <div className="mb-6">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 font-mono text-xs text-hylos-on-surface-variant hover:text-hylos-cyan-dark"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Insights</span>
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Badge variant="cyan">{article.category}</Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-display text-hylos-on-surface mb-6 max-w-4xl leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 font-mono text-xs text-hylos-on-surface-variant">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-hylos-cyan" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-hylos-cyan" />
              <span>{article.readTime}</span>
            </div>
            <span>Published: {article.date}</span>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div className="prose max-w-none font-sans text-hylos-on-surface-variant text-base leading-relaxed space-y-6 font-light">
                <p className="text-lg text-hylos-on-surface font-medium border-l-4 border-hylos-cyan pl-4 py-1 italic">
                  {article.excerpt}
                </p>
                <div className="whitespace-pre-line text-sm space-y-4">
                  {article.content}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <Card variant="bordered" className="bg-hylos-surface-lowest p-8 flex flex-col gap-6 sticky top-28">
                <span className="text-technical text-hylos-cyan-dark block">Executive Strategy</span>
                <h3 className="text-lg font-bold font-display text-hylos-on-surface">
                  Need Help Executing This Strategy?
                </h3>
                <p className="text-xs font-sans text-hylos-on-surface-variant font-light">
                  Schedule a growth consultation with Gokul Raj and the Hylos executive team to evaluate your positioning.
                </p>
                <Link href="/contact">
                  <Button variant="action" size="md" className="w-full justify-center" icon={<ArrowUpRight className="w-4 h-4" />}>
                    Book Strategy Session
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </GlobalShell>
  );
}
