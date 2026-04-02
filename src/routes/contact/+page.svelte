<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import Hero from '$lib/components/Hero.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import BookingEmbed from '$lib/components/BookingEmbed.svelte';

  let { form } = $props();
</script>

<svelte:head>
  <title>Contact — Clearstep AI</title>
  <meta name="description" content="Get in touch with Clearstep AI. Book a discovery call or send us a message." />
</svelte:head>

<Hero
  title="Let's start with a conversation"
  subtitle="No pitch. No pressure. Just a chat about where AI could help."
  size="short"
/>

<section class="py-20">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div use:reveal>
        <h2 class="text-2xl font-bold text-brand-deep mb-6">Send us a message</h2>
        <ContactForm {form} />
      </div>
      <div use:reveal={{ delay: 200 }}>
        <BookingEmbed />
      </div>
    </div>
  </div>
</section>

<section class="bg-brand-wash py-12">
  <div class="max-w-7xl mx-auto px-6 text-center" use:reveal>
    <p class="text-gray-600">Based on the south coast, working with businesses across the UK.</p>
  </div>
</section>
