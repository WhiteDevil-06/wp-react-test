import { wpFetch } from './api';
import { CaseStudy, WpCaseStudyRaw } from './types';

export const FALLBACK_CASE_STUDIES: CaseStudy[] = [
  {
    id: 101,
    title: 'Project Alpha',
    slug: 'project-alpha',
    client: 'FinTech Global',
    shortDescription: 'Autonomous fraud detection system processing 10M+ daily transactions.',
    problem: 'Legacy rule-based financial systems were missing sophisticated multi-vector synthetic identity fraud.',
    solution: 'Engineered a real-time graph neural network (GNN) model with sub-15ms inference latency.',
    result: '99.4% fraud detection accuracy and $14M saved in prevented fraud losses in Q1.',
    heroImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Graph Neural Networks', 'FinTech', 'Real-time Analytics'],
  },
  {
    id: 102,
    title: 'Project Nova',
    slug: 'project-nova',
    client: 'BioHealth Dynamics',
    shortDescription: 'Generative AI protein folding engine accelerating drug discovery pipelines.',
    problem: 'Target identification and molecular binding simulation required 18+ months per candidate.',
    solution: 'Deployed custom transformer models to predict molecular affinity and toxicity in parallel.',
    result: 'Reduced early-stage candidate drug discovery timeline from 18 months to 4 weeks.',
    heroImage: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    tags: ['Biotech', 'Generative AI', 'Transformers'],
  },
  {
    id: 103,
    title: 'Project Orbit',
    slug: 'project-orbit',
    client: 'AeroSpace Logistics',
    shortDescription: 'Predictive fleet maintenance and global supply chain route optimization.',
    problem: 'Unscheduled aircraft downtime caused $45M in yearly operational delays across 40 airports.',
    solution: 'Integrated IoT telemetry streams with computer vision thermal imaging and LSTM anomaly predictors.',
    result: 'Zero unscheduled groundings across 12 months of deployment.',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    tags: ['IoT Intelligence', 'Supply Chain', 'Computer Vision'],
  },
];

function mapWpCaseStudyToDomain(raw: WpCaseStudyRaw): CaseStudy {
  const titleStr = typeof raw.title === 'string' ? raw.title : raw.title?.rendered || 'Untitled Project';
  const contentStr = typeof raw.content === 'string' ? raw.content : raw.content?.rendered || '';
  const excerptStr = typeof raw.excerpt === 'string' ? raw.excerpt : raw.excerpt?.rendered || '';

  return {
    id: raw.id,
    title: titleStr,
    slug: raw.slug || titleStr.toLowerCase().replace(/\s+/g, '-'),
    client: raw.client || 'Enterprise Client',
    shortDescription: excerptStr.replace(/<[^>]*>?/gm, '') || 'High-impact AI digital transformation case study.',
    problem: raw.problem || 'Complex technical challenge requiring intelligent architecture.',
    solution: raw.solution || contentStr.replace(/<[^>]*>?/gm, '') || 'Custom AI engineering and cloud platform delivery.',
    result: raw.result || 'Measurable performance improvements and revenue expansion.',
    heroImage: raw.hero_image_url || 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    tags: raw.tags || ['AI', 'Engineering', 'Growth'],
  };
}

export async function fetchCaseStudies(): Promise<CaseStudy[]> {
  const rawStudies = await wpFetch<WpCaseStudyRaw[]>('/case-studies', { cache: 'no-store' });

  if (!rawStudies || !Array.isArray(rawStudies) || rawStudies.length === 0) {
    console.warn('[WordPress API] Returning fallback case studies data');
    return FALLBACK_CASE_STUDIES;
  }

  return rawStudies.map(mapWpCaseStudyToDomain);
}

export async function fetchCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const studies = await fetchCaseStudies();
  return studies.find((cs) => cs.slug === slug) || null;
}
