<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import Hero from '$lib/components/Hero.svelte';
  import BrandBars from '$lib/components/BrandBars.svelte';
  import StepSection from '$lib/components/StepSection.svelte';
  import Button from '$lib/components/Button.svelte';
  import ValueProp from '$lib/components/ValueProp.svelte';

  const trustBadges = [
    { title: '100% Bespoke', description: 'Designed around your processes.' },
    { title: '100% Transparent', description: 'All code shared. Full documentation.' },
    { title: '100% Integrated', description: 'Works with your existing systems.' },
    { title: '100% Secure', description: 'GDPR compliance from day one.' },
  ];
</script>

<svelte:head>
  <title>How We Work — Clearstep AI</title>
  <meta name="description" content="Three steps to owning your AI: we build it, we teach it, you own it. No lock-in, no dependency." />
</svelte:head>

<Hero title="Three steps to owning your AI" size="short">
  <div class="mt-8">
    <BrandBars size="xl" variant="dark" animate />
  </div>
</Hero>

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

<section class="py-20">
  <div class="max-w-5xl mx-auto px-6 text-center">
    <h2 use:reveal class="text-3xl font-bold text-brand-deep mb-4">
      By the end, you don't need us. That's the point.
    </h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
      {#each trustBadges as { title, description }, i}
        <div use:reveal={{ delay: i * 100 }}>
          <ValueProp {title} {description} />
        </div>
      {/each}
    </div>
    <div class="mt-12" use:reveal={{ delay: 400 }}>
      <Button href="/contact" variant="slate">Start with a Conversation</Button>
    </div>
  </div>
</section>
