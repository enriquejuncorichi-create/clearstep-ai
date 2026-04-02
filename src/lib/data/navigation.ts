// ---------------------------------------------------------------------------
// Navigation data — single source of truth for Nav, MobileMenu, and Footer
// ---------------------------------------------------------------------------

export interface NavLink {
  href: string;
  label: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  children: NavLink[];
}

export type NavItem = NavLink | NavGroup;

/** Type-guard to distinguish a dropdown group from a plain link. */
export function isNavGroup(item: NavItem): item is NavGroup {
  return 'children' in item;
}

// ---------------------------------------------------------------------------
// Main navigation (header)
// ---------------------------------------------------------------------------

export const mainNav: NavItem[] = [
  { href: '/about', label: 'About' },
  {
    label: 'Services',
    children: [
      {
        href: '/services/bespoke-ai',
        label: 'Bespoke AI Solutions',
        description: 'Custom-built AI tailored to your workflows.',
      },
      {
        href: '/services/systems-integration',
        label: 'Systems Integration',
        description: 'Seamless connections with your existing systems.',
      },
      {
        href: '/services/team-training',
        label: 'Team Training & Handover',
        description: 'Your team learns to manage it independently.',
      },
      {
        href: '/services/ongoing-support',
        label: 'Ongoing Support',
        description: 'Flexible support on your terms.',
      },
    ],
  },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

// ---------------------------------------------------------------------------
// Footer navigation
// ---------------------------------------------------------------------------

export interface FooterNav {
  services: NavLink[];
  company: NavLink[];
  legal: NavLink[];
}

export const footerNav: FooterNav = {
  services: [
    { href: '/services/bespoke-ai', label: 'Bespoke AI Solutions' },
    { href: '/services/systems-integration', label: 'Systems Integration' },
    { href: '/services/team-training', label: 'Team Training & Handover' },
    { href: '/services/ongoing-support', label: 'Ongoing Support' },
  ],
  company: [
    { href: '/about', label: 'About' },
    { href: '/how-we-work', label: 'How We Work' },
    { href: '/faq', label: 'FAQ' },
  ],
  legal: [
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms' },
  ],
};
