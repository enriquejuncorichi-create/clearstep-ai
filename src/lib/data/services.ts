// ---------------------------------------------------------------------------
// Services data — used on the services overview page, individual service
// pages, home page cards, and anywhere service metadata is needed.
// ---------------------------------------------------------------------------

export interface Service {
  slug: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
  accent: string;
  /** Expanded content for individual service pages */
  challenge: string;
  process: string[];
  ideal_for: string;
}

export const services: Service[] = [
  {
    slug: 'bespoke-ai',
    title: 'Bespoke AI Solutions',
    description:
      'Custom-built AI designed around your specific workflows, data, and goals. No templates, no one-size-fits-all.',
    deliverables: [
      'Process audit and opportunity mapping',
      'Custom model development and training',
      'End-to-end solution built around your systems',
      'Full documentation and source code handover',
    ],
    icon: 'brain',
    accent: 'bg-brand-deep',
    challenge:
      'Off-the-shelf AI tools promise the world but rarely fit how your business actually operates. They force you to change your processes to match the software, not the other way around. The result is shelfware, wasted budget, and a team that never trusts AI again.',
    process: [
      'We audit your existing processes, data, and pain points to identify the highest-impact opportunities.',
      'We design and build a bespoke solution tailored to your workflows, tested against real data.',
      'We iterate with your team until the solution works exactly as needed in production.',
      'We hand over all code, documentation, and training so you own it outright.',
    ],
    ideal_for:
      'Businesses with complex or unique workflows that off-the-shelf tools cannot address — particularly those with domain-specific data, multi-system environments, or compliance requirements.',
  },
  {
    slug: 'systems-integration',
    title: 'Systems Integration',
    description:
      'Seamless connections between your AI solutions and existing business systems — ERP, CRM, accounting, and operational platforms.',
    deliverables: [
      'API development and data pipeline design',
      'Business Central, Microsoft 365, and CRM integration',
      'Automated data flows between systems',
      'Real-time dashboards and reporting',
    ],
    icon: 'plug',
    accent: 'bg-brand-mid',
    challenge:
      'Most businesses run on a patchwork of systems that don\'t talk to each other. Data gets re-keyed, reports are stitched together manually, and no one has a single source of truth. AI can\'t deliver value if it\'s disconnected from the systems your team uses every day.',
    process: [
      'We map your existing systems and data flows to understand where the gaps and bottlenecks are.',
      'We design integration architecture that connects your systems through robust APIs and data pipelines.',
      'We build, test, and deploy the integrations with real-time monitoring and error handling.',
      'We create dashboards and automated reports so your team sees the value immediately.',
    ],
    ideal_for:
      'Businesses running multiple platforms — ERP, CRM, accounting, production systems — that need them working together seamlessly rather than in silos.',
  },
  {
    slug: 'team-training',
    title: 'Team Training & Handover',
    description:
      'Comprehensive knowledge transfer so your team can manage, modify, and extend solutions independently.',
    deliverables: [
      'Hands-on training workshops for your team',
      'Complete technical documentation',
      'Video walkthroughs of key processes',
      'Ongoing Q&A support during transition',
    ],
    icon: 'graduation-cap',
    accent: 'bg-brand-pale',
    challenge:
      'Too many AI projects create permanent dependency on the consultancy that built them. When they leave, the knowledge leaves with them. Your team is left with a black box they can\'t maintain, modify, or troubleshoot — and you\'re locked into expensive support contracts.',
    process: [
      'We run hands-on training workshops tailored to your team\'s technical level and day-to-day responsibilities.',
      'We provide complete documentation — technical guides, process walkthroughs, and troubleshooting playbooks.',
      'We create video walkthroughs of key processes so your team can revisit them at any time.',
      'We offer a supported transition period with Q&A access until your team is fully confident.',
    ],
    ideal_for:
      'Any business that wants genuine ownership of their AI solutions — teams who want to learn, adapt, and grow their capabilities without ongoing consultancy dependency.',
  },
  {
    slug: 'ongoing-support',
    title: 'Ongoing Support',
    description:
      'We stay available on your terms. No lock-in contracts — just flexible support when you need it.',
    deliverables: [
      'Priority access to our technical team',
      'System health monitoring and alerts',
      'Quarterly reviews and optimisation',
      'Ad-hoc development for new requirements',
    ],
    icon: 'life-buoy',
    accent: 'bg-brand-slate',
    challenge:
      'Even with the best training and documentation, there are times when you need expert support — a new integration, an unexpected edge case, or simply a second opinion on how to extend your system. The challenge is finding support that\'s flexible, not a lock-in contract.',
    process: [
      'We agree a flexible support arrangement that suits your needs — retainer, pay-as-you-go, or quarterly review.',
      'We monitor system health and flag issues proactively before they affect your operations.',
      'We conduct quarterly reviews to identify optimisation opportunities and new capabilities.',
    ],
    ideal_for:
      'Businesses that have completed a project with us and want the security of expert support without committing to rigid, expensive contracts.',
  },
];

/** Look up a service by its URL slug. Returns `undefined` if not found. */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
