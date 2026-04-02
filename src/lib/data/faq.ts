// ---------------------------------------------------------------------------
// FAQ data — questions, answers, and categories for the FAQ page.
// ---------------------------------------------------------------------------

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

/** Category display order. */
export const faqCategories: string[] = [
  'Getting Started',
  'Pricing',
  'Technical',
  'Working With Us',
];

export const faqs: FAQ[] = [
  // ── Getting Started ─────────────────────────────────────────────────
  {
    category: 'Getting Started',
    question: 'What does a discovery call involve?',
    answer:
      'It\'s a relaxed, 30-minute conversation where we learn about your business, your pain points, and what you\'ve already tried. There\'s no hard sell — we\'ll be honest about whether AI is the right fit and, if so, where the biggest wins are.',
  },
  {
    category: 'Getting Started',
    question: 'How long does a typical project take?',
    answer:
      'Most projects run between 6 and 12 weeks from kickoff to handover. Larger, phased engagements can extend beyond that, but we always break work into deliverable blocks so you see value early.',
  },
  {
    category: 'Getting Started',
    question: 'What size business do you work with?',
    answer:
      'We work primarily with UK SMEs — typically 20 to 500 employees. Our sweet spot is businesses large enough to have real operational complexity but small enough that off-the-shelf enterprise tools feel like overkill.',
  },
  {
    category: 'Getting Started',
    question: 'Do we need technical staff on our side?',
    answer:
      'Not at all. We design our solutions so that non-technical team members can use and manage them day to day. During handover, we train whoever will be looking after the system — whether that\'s your operations manager or your IT team.',
  },

  // ── Pricing ─────────────────────────────────────────────────────────
  {
    category: 'Pricing',
    question: 'How much does a typical project cost?',
    answer:
      'Most projects fall between \u00a35k and \u00a350k per project block, depending on scope and complexity. We\'ll give you a clear, fixed quote after the discovery phase so there are no surprises.',
  },
  {
    category: 'Pricing',
    question: 'Do you offer fixed-price engagements?',
    answer:
      'Yes. After the initial discovery and scoping phase, we provide a fixed price for each deliverable block. You know exactly what you\'re paying before we start building.',
  },
  {
    category: 'Pricing',
    question: 'Are there ongoing costs after the project is delivered?',
    answer:
      'Only if you choose our optional ongoing support package. Once we hand over, you own everything — the code, the documentation, the lot. There are no licence fees or mandatory maintenance contracts.',
  },
  {
    category: 'Pricing',
    question: 'What does the discovery phase cost?',
    answer:
      'The initial discovery call is free. If we proceed to a more detailed scoping and audit phase, we\'ll agree a small fixed fee upfront. That work often pays for itself by uncovering quick wins.',
  },

  // ── Technical ───────────────────────────────────────────────────────
  {
    category: 'Technical',
    question: 'What systems can you integrate with?',
    answer:
      'We have deep experience with Microsoft Business Central, Microsoft 365, Shopify, and most modern CRM and ERP platforms. If your system has an API, we can almost certainly connect to it.',
  },
  {
    category: 'Technical',
    question: 'Will we own the code?',
    answer:
      'Absolutely. Every line of code, every model, every piece of documentation we produce is yours. We don\'t hold anything back or lock you into proprietary platforms.',
  },
  {
    category: 'Technical',
    question: 'What about data security and GDPR?',
    answer:
      'Data protection is embedded from day one, not bolted on afterwards. We follow UK GDPR requirements, implement encryption at rest and in transit, and ensure your data never leaves environments you control.',
  },
  {
    category: 'Technical',
    question: 'What technologies do you typically use?',
    answer:
      'We choose the best tools for the job rather than forcing a single stack. That said, we lean towards TypeScript, Python, and the Microsoft ecosystem — chosen for reliability, maintainability, and the skills your team can realistically learn.',
  },

  // ── Working With Us ─────────────────────────────────────────────────
  {
    category: 'Working With Us',
    question: 'What happens after handover?',
    answer:
      'Your team takes the reins. We provide a supported transition period where you can come back to us with questions. After that, you\'re fully independent — though we\'re always available if you need us.',
  },
  {
    category: 'Working With Us',
    question: 'Can we hire you for ongoing support?',
    answer:
      'Yes, and it\'s entirely optional. We offer flexible support arrangements — retainer, pay-as-you-go, or quarterly reviews — with no lock-in. You choose what suits your business.',
  },
  {
    category: 'Working With Us',
    question: 'How do you handle change requests during a project?',
    answer:
      'Small adjustments are part of the process — we expect requirements to evolve as you see the solution take shape. For larger scope changes, we\'ll discuss the impact on timeline and cost before proceeding, so you\'re always in control.',
  },
  {
    category: 'Working With Us',
    question: 'How do you communicate during a project?',
    answer:
      'We keep things simple and transparent. You\'ll get regular progress updates, a shared project board, and direct access to the people doing the work — no account managers or middlemen.',
  },
];
