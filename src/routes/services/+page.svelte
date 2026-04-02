<script lang="ts">
  import { page } from '$app/state';
  import { reveal } from '$lib/actions/reveal';
  import SEO from '$lib/components/SEO.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import InlineCTA from '$lib/components/InlineCTA.svelte';
  import { Check } from 'lucide-svelte';
  import { services } from '$lib/data/services';
  import { sectors } from '$lib/data/sectors';
  import { buildCrumbs, crumbsToSchemaItems } from '$lib/utils/breadcrumbs';
  import { breadcrumbSchema, serviceSchema } from '$lib/schema';

  let crumbs = $derived(buildCrumbs(page.url.pathname));

  const bespoke = services.find((s) => s.slug === 'bespoke-ai')!;
  const integration = services.find((s) => s.slug === 'systems-integration')!;
  const training = services.find((s) => s.slug === 'team-training')!;
  const support = services.find((s) => s.slug === 'ongoing-support')!;
</script>

<SEO
  title="Services — Clearstep AI"
  description="Bespoke AI solutions, systems integration, team training, and ongoing support for UK SMEs."
  jsonLd={[
    breadcrumbSchema(crumbsToSchemaItems(crumbs)),
    ...serviceSchema(services.map((s) => ({ name: s.title, description: s.description }))),
  ]}
/>

<Hero
  title="AI that fits your business, not the other way around"
  subtitle="Practical solutions built around how you actually work."
  size="short"
  accentPosition="right"
/>

<Breadcrumbs {crumbs} />

<!-- Services grid: alternating full / half-width rows -->
<section class="py-24">
  <div class="max-w-7xl mx-auto px-6 space-y-8">

    <!-- Row 1: Full-width — Bespoke AI Solutions -->
    <a
      href="/services/bespoke-ai"
      class="block bg-brand-warm-50 rounded-2xl p-8 lg:p-10 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300"
      use:reveal
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <div class="h-[3px] w-16 bg-brand-deep rounded-full mb-6"
            style="mask-image: linear-gradient(to right, black, transparent); -webkit-mask-image: linear-gradient(to right, black, transparent);"
          ></div>
          <h3 class="text-2xl font-sans font-semibold text-brand-deep mb-3">{bespoke.title}</h3>
          <p class="text-brand-text-muted leading-relaxed mb-4">{bespoke.description}</p>
          <span class="inline-flex items-center gap-1 text-sm font-medium text-brand-deep">
            Learn more &rarr;
          </span>
        </div>
        <ul class="space-y-3">
          {#each bespoke.deliverables as item (item)}
            <li class="flex items-start gap-2 text-sm text-brand-text">
              <Check size={16} strokeWidth={2} class="text-brand-mid mt-0.5 shrink-0" />
              {item}
            </li>
          {/each}
        </ul>
      </div>
    </a>

    <!-- Row 2: Two half-width cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div use:reveal={{ delay: 0 }} class="hover:-translate-y-1 transition-transform duration-300">
        <ServiceCard
          title={integration.title}
          description={integration.description}
          deliverables={integration.deliverables}
          href="/services/systems-integration"
          accent={integration.accent}
        />
      </div>
      <div use:reveal={{ delay: 100 }} class="hover:-translate-y-1 transition-transform duration-300">
        <ServiceCard
          title={training.title}
          description={training.description}
          deliverables={training.deliverables}
          href="/services/team-training"
          accent={training.accent}
        />
      </div>
    </div>

    <!-- Row 3: Full-width — Ongoing Support (lighter treatment) -->
    <a
      href="/services/ongoing-support"
      class="block bg-transparent border border-brand-warm-200 rounded-xl p-8 hover:-translate-y-1 hover:shadow-[var(--shadow-card)] transition-all duration-300"
      use:reveal
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <h3 class="text-2xl font-sans font-semibold text-brand-deep mb-3">{support.title}</h3>
          <p class="text-brand-text-muted leading-relaxed mb-4">{support.description}</p>
          <span class="inline-flex items-center gap-1 text-sm font-medium text-brand-deep">
            Learn more &rarr;
          </span>
        </div>
        <ul class="space-y-3">
          {#each support.deliverables as item (item)}
            <li class="flex items-start gap-2 text-sm text-brand-text">
              <Check size={16} strokeWidth={2} class="text-brand-mid mt-0.5 shrink-0" />
              {item}
            </li>
          {/each}
        </ul>
      </div>
    </a>

  </div>
</section>

<!-- Sectors -->
<section class="bg-brand-wash py-24">
  <div class="max-w-7xl mx-auto px-6">
    <h2 use:reveal class="text-4xl md:text-5xl font-display font-bold tracking-tight text-brand-deep text-center mb-14">Who we work with</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each sectors as { name, challenge, response }, i (name)}
        <div use:reveal={{ delay: i * 100 }} class="bg-brand-warm-50 rounded-2xl p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
          <h3 class="text-lg font-bold text-brand-deep mb-3">{name}</h3>
          <p class="text-sm text-brand-text-muted mb-2"><strong class="text-brand-text">Challenge:</strong> {challenge}</p>
          <p class="text-sm text-brand-text-muted"><strong class="text-brand-mid">How AI helps:</strong> {response}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CTA -->
<InlineCTA
  heading="Not sure where to start?"
  description="Most of our clients weren't sure either. That's what the discovery call is for."
  primaryHref="/contact"
  primaryLabel="Book a Discovery Call"
  primaryVariant="slate"
  variant="dark"
/>
