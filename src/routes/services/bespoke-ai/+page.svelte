<script lang="ts">
  import { page } from '$app/state';
  import { reveal } from '$lib/actions/reveal';
  import SEO from '$lib/components/SEO.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import InlineCTA from '$lib/components/InlineCTA.svelte';
  import { getServiceBySlug } from '$lib/data/services';
  import { buildCrumbs, crumbsToSchemaItems } from '$lib/utils/breadcrumbs';
  import { breadcrumbSchema } from '$lib/schema';
  import { Check } from 'lucide-svelte';

  const service = getServiceBySlug('bespoke-ai')!;
  let crumbs = $derived(buildCrumbs(page.url.pathname));
</script>

<SEO
  title="{service.title} — Clearstep AI"
  description={service.description}
  jsonLd={[breadcrumbSchema(crumbsToSchemaItems(crumbs))]}
/>

<Hero title={service.title} subtitle={service.description} size="short" accentPosition="left" />
<Breadcrumbs {crumbs} />

<!-- Challenge section -->
<section class="py-24">
  <div class="max-w-4xl mx-auto px-6">
    <p class="text-sm font-semibold tracking-wider uppercase text-brand-mid mb-2" use:reveal>The challenge</p>
    <h2 class="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-deep mb-6" use:reveal>Why businesses need this</h2>
    <p class="text-lg text-brand-text-muted leading-relaxed" use:reveal={{ delay: 100 }}>{service.challenge}</p>
  </div>
</section>

<!-- Deliverables section -->
<section class="bg-brand-wash py-24">
  <div class="max-w-4xl mx-auto px-6">
    <h2 class="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-deep mb-10" use:reveal>What we deliver</h2>
    <ul class="space-y-4">
      {#each service.deliverables as item, i (item)}
        <li class="flex items-start gap-3" use:reveal={{ delay: i * 80 }}>
          <Check size={20} strokeWidth={2} class="text-brand-mid mt-0.5 shrink-0" />
          <span class="text-brand-text leading-relaxed">{item}</span>
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- Process section -->
<section class="py-24">
  <div class="max-w-4xl mx-auto px-6">
    <h2 class="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-deep mb-10" use:reveal>How it works</h2>
    <div class="space-y-8">
      {#each service.process as step, i (step)}
        <div class="flex gap-6 items-start" use:reveal={{ delay: i * 100 }}>
          <div class="w-10 h-10 rounded-full border-2 border-brand-mid flex items-center justify-center shrink-0">
            <span class="text-sm font-display font-bold text-brand-mid">{i + 1}</span>
          </div>
          <p class="text-brand-text-muted leading-relaxed pt-2">{step}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Ideal for section -->
<section class="bg-brand-warm-50 py-16">
  <div class="max-w-4xl mx-auto px-6 text-center" use:reveal>
    <p class="text-sm font-semibold tracking-wider uppercase text-brand-mid mb-2">Ideal for</p>
    <p class="text-lg text-brand-text leading-relaxed">{service.ideal_for}</p>
  </div>
</section>

<!-- CTA -->
<InlineCTA
  heading="Ready to explore {service.title.toLowerCase()}?"
  description="Let's talk about how this could work for your business."
  primaryHref="/contact"
  primaryLabel="Book a Discovery Call"
  primaryVariant="slate"
  secondaryHref="/services"
  secondaryLabel="View all services"
  variant="dark"
/>
