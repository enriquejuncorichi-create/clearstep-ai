<script lang="ts">
  import { page } from '$app/state';
  import { reveal } from '$lib/actions/reveal';
  import SEO from '$lib/components/SEO.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import BookingEmbed from '$lib/components/BookingEmbed.svelte';
  import { buildCrumbs, crumbsToSchemaItems } from '$lib/utils/breadcrumbs';
  import { breadcrumbSchema, professionalServiceSchema } from '$lib/schema';

  let { form } = $props();

  let crumbs = $derived(buildCrumbs(page.url.pathname));
  let jsonLd = $derived([
    breadcrumbSchema(crumbsToSchemaItems(crumbs)),
    professionalServiceSchema(),
  ]);
</script>

<SEO
  title="Contact — Clearstep AI"
  description="Get in touch with Clearstep AI. Book a discovery call or send us a message."
  {jsonLd}
/>

<Hero
  title="Let's start with a conversation"
  subtitle="No pitch. No pressure. Just a chat about where AI could help."
  size="short"
  accentPosition="right"
/>

<Breadcrumbs {crumbs} />

<!-- Info strip -->
<div class="bg-brand-warm-100 py-3">
  <p class="max-w-7xl mx-auto px-6 text-sm text-brand-text-muted text-center">
    We typically respond within one working day.
  </p>
</div>

<!-- Form + Booking -->
<section class="py-24">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div use:reveal>
        <h2 class="text-3xl md:text-4xl font-display font-bold tracking-tight text-brand-deep mb-6">Send us a message</h2>
        <ContactForm {form} />
      </div>
      <div use:reveal={{ delay: 200 }}>
        <BookingEmbed />
      </div>
    </div>
  </div>
</section>

<!-- Location strip -->
<section class="bg-brand-warm-50 py-12">
  <div class="max-w-7xl mx-auto px-6 text-center" use:reveal>
    <p class="text-brand-text-muted">Based on the south coast, working with businesses across the UK.</p>
  </div>
</section>
