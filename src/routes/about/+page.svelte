<script lang="ts">
  import { page } from '$app/state';
  import { reveal } from '$lib/actions/reveal';
  import SEO from '$lib/components/SEO.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import InlineCTA from '$lib/components/InlineCTA.svelte';
  import { buildCrumbs, crumbsToSchemaItems } from '$lib/utils/breadcrumbs';
  import { breadcrumbSchema } from '$lib/schema';

  let crumbs = $derived(buildCrumbs(page.url.pathname));
  let jsonLd = $derived([breadcrumbSchema(crumbsToSchemaItems(crumbs))]);

  const values = [
    { title: 'No lock-in', description: 'Every line of code we write is yours. When the project ends, you own everything — no ongoing licence, no dependency.' },
    { title: 'Plain English', description: 'We explain what we are building and why, in language your whole team can follow. No jargon for the sake of it.' },
    { title: 'Your data stays yours', description: 'GDPR compliance and data security are built in from day one. Your data never leaves your control.' },
    { title: 'We measure in outcomes', description: 'Hours saved. Errors reduced. Decisions made faster. We track what matters to your business, not vanity metrics.' },
  ];
</script>

<SEO
  title="About — Clearstep AI"
  description="Founded by a CEO and the technical specialist who drove a major AI turnaround. Clearstep AI brings boardroom and codebase expertise to UK SMEs."
  {jsonLd}
/>

<Hero
  title="Built from experience, not theory"
  subtitle="Two founders. One from the boardroom, one from the codebase."
  size="short"
  accentPosition="left"
/>

<Breadcrumbs {crumbs} />

<!-- Origin story -->
<section class="py-24">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div use:reveal>
      <p class="text-sm font-semibold tracking-wider uppercase text-brand-mid mb-2">Our Story</p>
      <h2 class="text-4xl md:text-5xl font-display font-bold tracking-tight text-brand-deep mb-6">Why Clearstep exists</h2>
      <div class="space-y-4 text-brand-text-muted leading-relaxed">
        <p>Clearstep was born from a simple observation: the businesses that need AI most — UK manufacturers, food producers, service companies — are the ones least served by the industry.</p>
        <p>One of our founders led a major AI-driven turnaround as CEO, watching firsthand how the right automation could transform a business. The other built those solutions from the ground up — the integrations, the training, the handover.</p>
        <p>Together, we bridge the gap between strategy and implementation. We speak the language of the boardroom and the codebase with equal fluency.</p>
      </div>
    </div>
    <div use:reveal={{ delay: 200 }} class="bg-brand-warm-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
      <p class="text-brand-deep/30 font-medium">Founders photo</p>
    </div>
  </div>
</section>

<!-- Founder cards -->
<section class="bg-brand-wash py-24">
  <div class="max-w-5xl mx-auto px-6">
    <h2 use:reveal class="text-4xl md:text-5xl font-display font-bold tracking-tight text-brand-deep text-center mb-14">The team</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each [
        { name: '[Name TBC]', role: 'Co-Founder & CEO', bio: 'Led a major AI-driven business turnaround. Understands what it takes to get buy-in, manage change, and deliver results at board level.', accent: 'border-brand-deep', quote: '"AI should make your business more yours, not less."' },
        { name: '[Name TBC]', role: 'Co-Founder & CTO', bio: 'The technical specialist who built the solutions. Deep expertise in integration, automation, and making complex systems work together.', accent: 'border-brand-mid', quote: '"The best system is one your team can run without us."' },
      ] as founder, i (founder.name)}
        <div use:reveal={{ delay: i * 150 }} class="bg-brand-warm-50 rounded-2xl p-8 border-l-4 shadow-[0_2px_20px_rgba(0,0,0,0.06)] {founder.accent} {i === 1 ? 'md:mt-12' : ''}">
          <h3 class="text-xl font-bold text-brand-deep">{founder.name}</h3>
          <p class="text-sm text-brand-mid font-medium mb-4">{founder.role}</p>
          <p class="text-brand-text-muted leading-relaxed mb-4">{founder.bio}</p>
          <p class="font-display italic text-brand-deep/60 text-sm">{founder.quote}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Values -->
<section class="py-24">
  <div class="max-w-5xl mx-auto px-6">
    <h2 use:reveal class="text-4xl md:text-5xl font-display font-bold tracking-tight text-brand-deep text-center mb-14">What we stand for</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each values as { title, description }, i (title)}
        <div use:reveal={{ delay: i * 100 }} class="border-l-4 border-brand-pale pl-6">
          <h3 class="text-lg font-semibold text-brand-deep mb-2">{title}</h3>
          <p class="text-brand-text-muted leading-relaxed">{description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<InlineCTA heading="Want to know more?" primaryHref="/contact" primaryLabel="Get in Touch" variant="wash" />
