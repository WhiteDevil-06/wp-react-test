export interface FaqItem {
  id: string;
  statement: string;
  isFact: boolean; // true = Fact (Green), false = Myth (Red)
  explanation: string;
}

export const faqItems: FaqItem[] = [
  {
    id: 'f1',
    statement: "B2B buyers only care about features and pricing.",
    isFact: false,
    explanation: "B2B buyers are humans. They buy based on trust, authority, and perceived risk reduction, not just feature checklists."
  },
  {
    id: 'f2',
    statement: "Founder authority directly impacts sales velocity.",
    isFact: true,
    explanation: "When a founder is recognized as an industry authority, inbound opportunities increase and the sales cycle significantly shortens."
  },
  {
    id: 'f3',
    statement: "More content always equals more traffic.",
    isFact: false,
    explanation: "Volume without intent is useless. Strategic, high-quality content mapped to specific buyer intents drives actual revenue."
  },
  {
    id: 'f4',
    statement: "AI-SEO requires rethinking traditional search strategies.",
    isFact: true,
    explanation: "Modern search engines prioritize entity understanding and user intent over simple keyword density. Technical structure is paramount."
  },
  {
    id: 'f5',
    statement: "Corporate LinkedIn pages have higher engagement than personal profiles.",
    isFact: false,
    explanation: "People connect with people. Founder and employee profiles consistently outperform corporate pages in reach and engagement."
  }
];
