<script lang="ts">
  import { page } from '$app/state';
  import { reveal } from '$lib/actions/reveal';
  import SEO from '$lib/components/SEO.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import StepSection from '$lib/components/StepSection.svelte';
  import TrustBadge from '$lib/components/TrustBadge.svelte';
  import InlineCTA from '$lib/components/InlineCTA.svelte';
  import { Fingerprint, Eye, Puzzle, Shield } from 'lucide-svelte';
  import { buildCrumbs, crumbsToSchemaItems } from '$lib/utils/breadcrumbs';
  import { breadcrumbSchema } from '$lib/schema';

  let crumbs = $derived(buildCrumbs(page.url.pathname));
  let jsonLd = $derived([breadcrumbSchema(crumbsToSchemaItems(crumbs))]);

  const trustBadges = [
    { title: '100% Bespoke', description: 'Designed around your processes.', icon: Fingerprint },
    { title: '100% Transparent', description: 'All code shared. Full documentation.', icon: Eye },
    { title: '100% Integrated', description: 'Works with your existing systems.', icon: Puzzle },
    { title: '100% Secure', description: 'GDPR compliance from day one.', icon: Shield },
  ];
</script>

<SEO
  title="How We Work — Clearstep AI"
  description="Three steps to owning your AI: we build it, we teach it, you own it. No lock-in, no dependency."
  {jsonLd}
/>

<Hero title="Three steps to owning your AI" size="short" />

<Breadcrumbs {crumbs} />

<StepSection step={0} accentColour="#B5D4F4" title="We Build It">
  <p>Every engagement starts with understanding how your business actually works — not how a textbook says it should. We map your processes, identify where AI adds genuine value, and build a solution around your specific systems and goals.</p>
  <p>No templates. No off-the-shelf platforms. Every solution is designed from scratch, integrated with the tools your team already uses — Business Central, Microsoft 365, your CRM, your production systems.</p>
</StepSection>

<StepSection step={1} accentColour="#378ADD" title="We Teach It">
  <p>Knowledge transfer isn't an afterthought — it's built into every project. Your team gets hands-on training, complete documentation, and video walkthroughs so they can manage, modify, and extend the solution independently.</p>
  <p>We don't just hand over a manual and leave. We work alongside your team until they are confident, answering questions and adapting training to different skill levels.</p>
</StepSection>

<StepSection step={2} accentColour="#185FA5" title="You Own It">
  <p>All code is yours. All documentation is yours. When the project ends, you become fully self-sufficient — no ongoing licence fees, no dependency on us, no lock-in of any kind.</p>
  <p>If you want ongoing support, we're here. But you'll never <em>need</em> us. That's the point.</p>
</StepSection>

<!-- Trust section -->
<section class="py-28">
  <div class="max-w-5xl mx-auto px-6 text-center">
    <h2 use:reveal class="text-4xl md:text-5xl font-display font-bold tracking-tight text-brand-deep mb-4">
      By the end, you don't need us. That's the point.
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      {#each trustBadges as { title, description, icon }, i (title)}
        <div use:reveal={{ delay: i * 100 }}>
          <TrustBadge {title} {description} {icon} />
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<InlineCTA
  heading="Start with a conversation"
  primaryHref="/contact"
  primaryLabel="Book a Discovery Call"
  primaryVariant="slate"
  variant="light"
/>
