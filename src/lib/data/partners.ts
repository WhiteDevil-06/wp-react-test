export interface Partner {
  id: string;
  name: string;
  logoUrl?: string; // Optional for now, fallback to name
}

export const partners: Partner[] = [
  { id: 'p1', name: 'Partner One' },
  { id: 'p2', name: 'Partner Two' },
  { id: 'p3', name: 'Partner Three' },
  { id: 'p4', name: 'Partner Four' },
  { id: 'p5', name: 'Partner Five' },
  { id: 'p6', name: 'Partner Six' },
];
