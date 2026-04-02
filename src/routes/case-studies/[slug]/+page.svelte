<script lang="ts">
  import { page } from '$app/state';
  import { reveal } from '$lib/actions/reveal';
  import SEO from '$lib/components/SEO.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import InlineCTA from '$lib/components/InlineCTA.svelte';
  import { buildCrumbs, crumbsToSchemaItems } from '$lib/utils/breadcrumbs';
  import { breadcrumbSchema } from '$lib/schema';

  let { data } = $props();
  let cs = $derived(data.caseStudy);

  /** Extract the first sentence of the challenge for use as the meta description. */
  let metaDescription = $derived(cs.challenge.split('. ')[0] + '.');

  /** Custom crumbs — map the slug segment to the case study title. */
  let crumbs = $derived(buildCrumbs(page.url.pathname, { [cs.slug]: cs.title }));
  let jsonLd = $derived([breadcrumbSchema(crumbsToSchemaItems(crumbs))]);
</script>

<SEO
  title="{cs.title} — Case Study — Clearstep AI"
  description={metaDescription}
  {jsonLd}
/>

<Hero title={cs.title} subtitle={cs.client} size="short" />

<Breadcrumbs {crumbs} />

<!-- Challenge -->
<section class="py-24">
  <div class="max-w-3xl mx-auto px-6" use:reveal>
    <p class="text-sm font-semibold tracking-wider uppercase text-brand-mid mb-2">The Challenge</p>
    <h2 class="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-deep mb-6">What they were facing</h2>
    <p class="text-brand-text-muted leading-relaxed text-lg">{cs.challenge}</p>
  </div>
</section>

<!-- Solution -->
<section class="bg-brand-wash py-24">
  <div class="max-w-3xl mx-auto px-6" use:reveal>
    <p class="text-sm font-semibold tracking-wider uppercase text-brand-mid mb-2">Our Approach</p>
    <h2 class="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-deep mb-6">How we solved it</h2>
    <p class="text-brand-text-muted leading-relaxed text-lg">{cs.solution}</p>
  </div>
</section>

<!-- Results -->
<section class="py-24">
  <div class="max-w-5xl mx-auto px-6">
    <h2 use:reveal class="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-deep text-center mb-14">The Results</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each cs.results as result, i (result.metric)}
        <div
          use:reveal={{ delay: i * 150 }}
          class="rounded-2xl bg-brand-warm-50 p-8 text-center shadow-[var(--shadow-card)]"
        >
          <p class="text-3xl font-display font-bold text-brand-slate">{result.value}</p>
          <p class="mt-1 text-sm font-semibold text-brand-deep">{result.metric}</p>
          <p class="mt-2 text-sm text-brand-text-muted">{result.description}</p>
        </div>
      {/each}
    </div>

    <!-- Duration badge -->
    <div use:reveal={{ delay: 100 }} class="mt-10 flex justify-center">
      <span class="inline-flex items-center rounded-full bg-brand-warm-100 px-5 py-2 text-sm font-medium text-brand-deep">
        Project duration: {cs.duration}
      </span>
    </div>
  </div>
</section>

<!-- Testimonial -->
{#if cs.testimonial}
  <section class="bg-brand-warm-50 py-24">
    <div class="max-w-3xl mx-auto px-6 text-center" use:reveal>
      <blockquote class="font-display italic text-xl leading-relaxed text-brand-deep">
        &ldquo;{cs.testimonial.quote}&rdquo;
      </blockquote>
      <p class="mt-6 text-sm font-semibold text-brand-deep">{cs.testimonial.author}</p>
      <p class="text-sm text-brand-text-muted">{cs.testimonial.role}</p>
    </div>
  </section>
{/if}

<InlineCTA
  heading="Ready to write your own success story?"
  primaryHref="/contact"
  primaryLabel="Book a Discovery Call"
  variant="dark"
/>
