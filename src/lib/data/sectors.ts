// ---------------------------------------------------------------------------
// Sectors data — industries Clearstep AI typically works with.
// ---------------------------------------------------------------------------

export interface Sector {
  slug: string;
  name: string;
  icon: string;
  challenge: string;
  response: string;
}

export const sectors: Sector[] = [
  {
    slug: 'food-production',
    name: 'High-End Food Production',
    icon: 'utensils',
    challenge:
      'Complex compliance, batch traceability, and seasonal demand forecasting.',
    response:
      'AI-driven quality control, automated HACCP documentation, and predictive demand planning.',
  },
  {
    slug: 'manufacturing',
    name: 'Premium Manufacturing',
    icon: 'factory',
    challenge:
      'Production scheduling, waste reduction, and multi-system coordination.',
    response:
      'Intelligent scheduling, real-time production monitoring, and automated reporting across ERP and shop floor systems.',
  },
  {
    slug: 'distribution',
    name: 'Distribution',
    icon: 'truck',
    challenge:
      'Route optimisation, inventory management, and customer demand patterns.',
    response:
      'Predictive stock management, automated order processing, and smart logistics planning.',
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    icon: 'briefcase',
    challenge:
      'Resource allocation, client reporting, and knowledge management.',
    response:
      'Automated time tracking and billing, intelligent document processing, and client insight dashboards.',
  },
];
