<script lang="ts">
  import { page } from '$app/state';
  import { reveal } from '$lib/actions/reveal';
  import SEO from '$lib/components/SEO.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import FAQItem from '$lib/components/FAQItem.svelte';
  import InlineCTA from '$lib/components/InlineCTA.svelte';
  import { buildCrumbs, crumbsToSchemaItems } from '$lib/utils/breadcrumbs';
  import { breadcrumbSchema, faqSchema } from '$lib/schema';
  import { faqs, faqCategories } from '$lib/data/faq';

  let crumbs = $derived(buildCrumbs(page.url.pathname));
  let jsonLd = $derived([
    breadcrumbSchema(crumbsToSchemaItems(crumbs)),
    faqSchema(faqs.map((f) => ({ question: f.question, answer: f.answer }))),
  ]);
</script>

<SEO
  title="FAQ — Clearstep AI"
  description="Everything you need to know about working with us. Common questions about getting started, pricing, technical details, and how we work."
  {jsonLd}
/>

<Hero
  title="Frequently asked questions"
  subtitle="Everything you need to know about working with us."
  size="short"
/>

<Breadcrumbs {crumbs} />

<section class="py-24">
  <div class="max-w-3xl mx-auto px-6">
    {#each faqCategories as category, ci (category)}
      <div use:reveal={{ delay: ci * 100 }}>
        <h2
          class="text-sm font-semibold tracking-wider uppercase text-brand-mid mb-4 {ci === 0 ? '' : 'mt-12'}"
        >
          {category}
        </h2>
        {#each faqs.filter((f) => f.category === category) as faq (faq.question)}
          <FAQItem question={faq.question} answer={faq.answer} />
        {/each}
      </div>
    {/each}
  </div>
</section>

<InlineCTA
  heading="Still have questions?"
  description="We're happy to chat. No obligation."
  primaryHref="/contact"
  primaryLabel="Get in Touch"
  variant="wash"
/>
