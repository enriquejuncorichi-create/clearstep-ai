<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import BrandBars from '$lib/components/BrandBars.svelte';
  import Button from '$lib/components/Button.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import ValueProp from '$lib/components/ValueProp.svelte';

  const valueProps = [
    { title: '100% Bespoke', description: 'Every solution is designed around your specific processes, systems, and goals.' },
    { title: '100% Transparent', description: 'All code is shared. We train your team to manage, modify, and extend solutions independently.' },
    { title: '100% Integrated', description: 'Solutions connect with your existing ERP, CRM, accounting, and operational systems.' },
    { title: '100% Secure', description: 'Data protection, GDPR compliance, and company data security are embedded from day one.' },
  ];

  const services = [
    { title: 'Bespoke AI Solutions', description: 'Custom-built AI tailored to your workflows, not off-the-shelf templates.', accent: 'bg-brand-deep' },
    { title: 'Systems Integration', description: 'Seamless connections with your existing business systems and data sources.', accent: 'bg-brand-mid' },
    { title: 'Team Training & Handover', description: 'Your team learns to manage and extend the solution independently.', accent: 'bg-brand-pale' },
    { title: 'Ongoing Support', description: 'We stay available when you need us, on your terms.', accent: 'bg-brand-slate' },
  ];

  const steps = [
    { label: 'We Build It', description: 'Bespoke AI solutions designed around how you actually work.', colour: 'border-brand-pale text-brand-pale' },
    { label: 'We Teach It', description: 'Your team trained to manage, modify, and extend it independently.', colour: 'border-brand-mid text-brand-mid' },
    { label: 'You Own It', description: 'All code is yours. All documentation is yours. No lock-in.', colour: 'border-white text-white' },
  ];
</script>

<svelte:head>
  <title>Clearstep AI — We build it. We teach it. You own it.</title>
</svelte:head>

<Hero variant="video" videoSrc="/video/hero-bg.mp4" posterSrc="/video/hero-poster.webp" size="full">
  <div class="flex flex-col items-center gap-6 pt-4">
    <BrandBars size="xl" variant="dark" animate />
    <h1 class="text-5xl md:text-7xl font-medium text-white">
      clearstep <span class="text-brand-mid">ai</span>
    </h1>
    <p class="text-lg md:text-xl font-medium text-white/65">
      We build it. We teach it. You own it.
    </p>
    <div class="flex flex-wrap gap-4 mt-4">
      <Button href="/how-we-work" variant="primary">See How We Work</Button>
      <Button href="/contact" variant="outline-light">Book a Discovery Call</Button>
    </div>
  </div>
</Hero>

<section class="bg-brand-wash py-20">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each valueProps as { title, description }, i}
        <div use:reveal={{ delay: i * 100 }}>
          <ValueProp {title} {description} />
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="py-20">
  <div class="max-w-7xl mx-auto px-6">
    <h2 use:reveal class="text-3xl md:text-4xl font-bold text-brand-deep text-center mb-12">
      What we do
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each services as { title, description, accent }, i}
        <div
          use:reveal={{ delay: i * 100 }}
          class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div class="{accent} h-1 w-12 rounded-full mb-4"></div>
          <h3 class="text-lg font-bold text-brand-deep mb-2">{title}</h3>
          <p class="text-sm text-gray-600 leading-relaxed mb-4">{description}</p>
          <a href="/services" class="text-sm font-medium text-brand-mid hover:text-brand-deep transition-colors">
            Learn more &rarr;
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="bg-brand-deep py-20">
  <div class="max-w-7xl mx-auto px-6">
    <h2 use:reveal class="text-3xl md:text-4xl font-bold text-white text-center mb-12">
      Three steps to owning your AI
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each steps as { label, description, colour }, i}
        <div use:reveal={{ delay: i * 150 }} class="border-l-4 {colour} pl-6">
          <h3 class="text-xl font-bold text-white mb-2">{label}</h3>
          <p class="text-white/70 leading-relaxed">{description}</p>
        </div>
      {/each}
    </div>
    <div class="text-center mt-10" use:reveal={{ delay: 450 }}>
      <a href="/how-we-work" class="text-brand-mid font-medium hover:text-white transition-colors">
        See the full process &rarr;
      </a>
    </div>
  </div>
</section>

<section class="bg-brand-wash py-20">
  <div class="max-w-5xl mx-auto px-6 text-center">
    <h2 use:reveal class="text-3xl md:text-4xl font-bold text-brand-deep mb-6">
      Built from real results
    </h2>
    <p use:reveal={{ delay: 100 }} class="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
      Founded by a CEO who led a major AI-driven business turnaround and the technical specialist who built those solutions.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-8" use:reveal={{ delay: 200 }}>
      <div>
        <p class="text-4xl font-bold text-brand-deep">27+</p>
        <p class="text-sm text-gray-500 mt-1">years combined experience</p>
      </div>
      <div>
        <p class="text-4xl font-bold text-brand-deep">100%</p>
        <p class="text-sm text-gray-500 mt-1">client code ownership</p>
      </div>
      <div>
        <p class="text-4xl font-bold text-brand-deep">0</p>
        <p class="text-sm text-gray-500 mt-1">lock-in contracts</p>
      </div>
    </div>
  </div>
</section>

<section class="py-20">
  <div class="max-w-3xl mx-auto px-6 text-center" use:reveal>
    <h2 class="text-3xl md:text-4xl font-bold text-brand-deep mb-6">
      Ready to take the first step?
    </h2>
    <div class="flex flex-wrap justify-center gap-4">
      <Button href="/contact" variant="slate">Book a Discovery Call</Button>
      <Button href="/contact" variant="ghost">Get in Touch</Button>
    </div>
  </div>
</section>
