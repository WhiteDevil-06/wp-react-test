export interface Testimonial {
  id: string;
  quote: string;
  person: string;
  designation: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    quote: "Placeholder testimonial quote. The actual impact of the Hylos approach on our B2B pipeline will go here.",
    person: "Jane Doe",
    designation: "Chief Marketing Officer",
    company: "Acme Corp"
  },
  {
    id: 't2',
    quote: "Another placeholder quote illustrating the strategic authority gained through their founder-led branding service.",
    person: "John Smith",
    designation: "CEO",
    company: "TechFlow Innovations"
  },
  {
    id: 't3',
    quote: "Placeholder feedback about the precision and conversion rates of the performance marketing campaigns.",
    person: "Alice Johnson",
    designation: "VP of Sales",
    company: "DataSync Solutions"
  }
];
