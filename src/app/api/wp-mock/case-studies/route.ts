import { NextResponse } from 'next/server';

let mockCaseStudies = [
  {
    id: 101,
    slug: 'project-alpha',
    title: { rendered: 'Project Alpha' },
    content: { rendered: 'Engineered a real-time graph neural network (GNN) model with sub-15ms inference latency.' },
    excerpt: { rendered: 'Autonomous fraud detection system processing 10M+ daily transactions.' },
    client: 'FinTech Global',
    problem: 'Legacy rule-based financial systems were missing synthetic identity fraud.',
    solution: 'Engineered a real-time graph neural network (GNN) model.',
    result: '99.4% fraud detection accuracy and $14M saved in prevented fraud losses in Q1.',
    hero_image_url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    tags: ['Graph Neural Networks', 'FinTech', 'Real-time Analytics'],
  },
  {
    id: 102,
    slug: 'project-nova',
    title: { rendered: 'Project Nova' },
    content: { rendered: 'Deployed custom transformer models to predict molecular affinity and toxicity in parallel.' },
    excerpt: { rendered: 'Generative AI protein folding engine accelerating drug discovery pipelines.' },
    client: 'BioHealth Dynamics',
    problem: 'Target identification required 18+ months per candidate.',
    solution: 'Deployed custom transformer models to predict molecular affinity.',
    result: 'Reduced early-stage candidate drug discovery timeline from 18 months to 4 weeks.',
    hero_image_url: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    tags: ['Biotech', 'Generative AI', 'Transformers'],
  },
  {
    id: 103,
    slug: 'project-orbit',
    title: { rendered: 'Project Orbit' },
    content: { rendered: 'Integrated IoT telemetry streams with computer vision thermal imaging and LSTM anomaly predictors.' },
    excerpt: { rendered: 'Predictive fleet maintenance and global supply chain route optimization.' },
    client: 'AeroSpace Logistics',
    problem: 'Unscheduled aircraft downtime caused $45M in yearly operational delays.',
    solution: 'Integrated IoT telemetry streams with computer vision thermal imaging.',
    result: 'Zero unscheduled groundings across 12 months of deployment.',
    hero_image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    tags: ['IoT Intelligence', 'Supply Chain', 'Computer Vision'],
  },
];

export async function GET() {
  return NextResponse.json(mockCaseStudies, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store, max-age=0',
    },
  });
}
