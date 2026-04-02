// ---------------------------------------------------------------------------
// Case studies data — real-world project stories for the case studies page
// and individual case study detail pages.
// ---------------------------------------------------------------------------

export interface CaseStudyResult {
  metric: string;
  value: string;
  description: string;
}

export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  role: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  sector: string;
  services: string[];
  challenge: string;
  solution: string;
  results: CaseStudyResult[];
  testimonial?: CaseStudyTestimonial;
  duration: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'luxury-manufacturer-ai-transformation',
    title: 'AI-Driven Transformation for a Heritage Manufacturer',
    client: 'UK Luxury Manufacturer',
    sector: 'manufacturing',
    services: ['bespoke-ai', 'systems-integration'],
    challenge:
      'A heritage manufacturer with 27+ years of history was drowning in manual processes. Data lived in spreadsheets, ERPs, and people\'s heads. Decision-making was slow and reactive, leaving the business unable to respond quickly to shifting demand or operational issues.',
    solution:
      'Built bespoke AI solutions integrated with Business Central, Microsoft 365, and shop floor systems. Automated reporting, demand forecasting, and production scheduling — replacing gut-feel decisions with real-time, data-driven intelligence across the entire operation.',
    results: [
      {
        metric: 'Manual reporting time',
        value: '60%',
        description: 'Reduction in time spent on manual reporting and data compilation.',
      },
      {
        metric: 'Annual efficiency savings',
        value: '\u00a3150K+',
        description: 'Quantified savings from automated workflows and smarter scheduling.',
      },
      {
        metric: 'Operational visibility',
        value: 'Real-time',
        description: 'Real-time visibility across production, inventory, and sales operations.',
      },
    ],
    testimonial: {
      quote:
        'This wasn\'t just a technology project — it fundamentally changed how we run the business. For the first time, we\'re making decisions based on what\'s actually happening, not what we think is happening.',
      author: 'Managing Director',
      role: 'UK Luxury Manufacturer',
    },
    duration: '12 months (phased)',
  },
  {
    slug: 'food-producer-quality-automation',
    title: 'Automated Quality Documentation for a Food Producer',
    client: 'South Coast Food Producer',
    sector: 'food-production',
    services: ['bespoke-ai', 'team-training'],
    challenge:
      'HACCP documentation was entirely manual. Quality checks were paper-based, audits were stressful, and compliance data took days to compile. The team spent more time on paperwork than on the production floor.',
    solution:
      'Automated quality documentation with AI-assisted data capture, replacing paper-based systems with a digital-first workflow. Trained the team to manage the system themselves, ensuring long-term independence and confidence during audits.',
    results: [
      {
        metric: 'Audit prep time',
        value: '80%',
        description: 'Reduction in time spent preparing for compliance audits.',
      },
      {
        metric: 'Compliance findings',
        value: 'Zero',
        description: 'Zero compliance findings in the first audit after implementation.',
      },
      {
        metric: 'Team self-sufficiency',
        value: '6 weeks',
        description: 'Team fully self-sufficient within 6 weeks of handover.',
      },
    ],
    testimonial: {
      quote:
        'Audits used to keep me up at night. Now the data is there, it\'s accurate, and my team can pull reports in minutes. It\'s completely changed how we approach compliance.',
      author: 'Quality Manager',
      role: 'South Coast Food Producer',
    },
    duration: '8 weeks',
  },
  {
    slug: 'distribution-inventory-optimisation',
    title: 'AI-Powered Inventory Optimisation for a Distribution Company',
    client: 'Regional Distribution Company',
    sector: 'distribution',
    services: ['systems-integration', 'ongoing-support'],
    challenge:
      'Inventory decisions were based on gut feel. Stockouts and overstocking were costing money, and the team had no real-time visibility into what was actually moving. Forecasting was essentially guesswork.',
    solution:
      'Integrated their ERP with an AI-driven demand forecasting system. Built real-time dashboards accessible to warehouse and sales teams, giving everyone the same picture of stock levels, demand trends, and reorder triggers.',
    results: [
      {
        metric: 'Stockouts',
        value: '35%',
        description: 'Reduction in stockout incidents through predictive demand planning.',
      },
      {
        metric: 'Carrying costs',
        value: '20%',
        description: 'Decrease in inventory carrying costs from smarter stock management.',
      },
      {
        metric: 'Return on investment',
        value: '4 months',
        description: 'Full ROI achieved within 4 months of go-live.',
      },
    ],
    testimonial: {
      quote:
        'We went from guessing what to order to knowing. The dashboards alone were worth the investment — our warehouse team and sales team are finally looking at the same numbers.',
      author: 'Operations Director',
      role: 'Regional Distribution Company',
    },
    duration: '10 weeks',
  },
];

/** Look up a case study by its URL slug. Returns `undefined` if not found. */
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
