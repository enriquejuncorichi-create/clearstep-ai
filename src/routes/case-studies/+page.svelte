<script lang="ts">
  import { page } from '$app/state';
  import { reveal } from '$lib/actions/reveal';
  import SEO from '$lib/components/SEO.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import CaseStudyCard from '$lib/components/CaseStudyCard.svelte';
  import InlineCTA from '$lib/components/InlineCTA.svelte';
  import { buildCrumbs, crumbsToSchemaItems } from '$lib/utils/breadcrumbs';
  import { breadcrumbSchema } from '$lib/schema';
  import { caseStudies } from '$lib/data/case-studies';

  let crumbs = $derived(buildCrumbs(page.url.pathname));
  let jsonLd = $derived([breadcrumbSchema(crumbsToSchemaItems(crumbs))]);
</script>

<SEO
  title="Case Studies — Clearstep AI"
  description="See how we've helped UK businesses transform with AI. Real results from real projects — measurable savings, faster decisions, and teams that own their technology."
  {jsonLd}
/>

<Hero
  title="Real results for real businesses"
  subtitle="See how we've helped UK businesses transform with AI."
  size="short"
/>

<Breadcrumbs {crumbs} />

<section class="py-24">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each caseStudies as study, i (study.slug)}
        <div use:reveal={{ delay: i * 150 }}>
          <CaseStudyCard
            slug={study.slug}
            title={study.title}
            client={study.client}
            sector={study.sector}
            results={study.results}
            duration={study.duration}
          />
        </div>
      {/each}
    </div>
  </div>
</section>

<InlineCTA
  heading="Ready to write your own success story?"
  primaryHref="/contact"
  primaryLabel="Book a Discovery Call"
  variant="dark"
/>
