<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import { countUp } from '$lib/actions/countUp';
  import BrandBars from '$lib/components/BrandBars.svelte';
  import Button from '$lib/components/Button.svelte';
  import Hero from '$lib/components/Hero.svelte';
  import InlineCTA from '$lib/components/InlineCTA.svelte';
  import SEO from '$lib/components/SEO.svelte';
  import ValueProp from '$lib/components/ValueProp.svelte';
  import { organizationSchema } from '$lib/schema';
  import { services } from '$lib/data/services';
  import { Fingerprint, Eye, Puzzle, Shield } from 'lucide-svelte';

  const valueProps = [
    { title: '100% Bespoke', description: 'Every solution is designed around your specific processes, systems, and goals.', icon: Fingerprint },
    { title: '100% Transparent', description: 'All code is shared. We train your team to manage, modify, and extend solutions independently.', icon: Eye },
    { title: '100% Integrated', description: 'Solutions connect with your existing ERP, CRM, accounting, and operational systems.', icon: Puzzle },
    { title: '100% Secure', description: 'Data protection, GDPR compliance, and company data security are embedded from day one.', icon: Shield },
  ];

  const steps = [
    { number: 1, label: 'We Build It', description: 'Bespoke AI solutions designed around how you actually work.', borderColour: 'border-brand-pale' },
    { number: 2, label: 'We Teach It', description: 'Your team trained to manage, modify, and extend it independently.', borderColour: 'border-brand-mid' },
    { number: 3, label: 'You Own It', description: 'All code is yours. All documentation is yours. No lock-in.', borderColour: 'border-white' },
  ];

  const stats = [
    { target: 27, suffix: '+', label: 'years combined experience' },
    { target: 100, suffix: '%', label: 'client code ownership' },
    { target: 0, suffix: '', label: 'lock-in contracts' },
  ];

  /** Style presets for the 2x2 asymmetric service cards */
  const cardStyles = [
    'bg-brand-navy text-white',
    'bg-white shadow-[var(--shadow-card)]',
    'bg-white shadow-[var(--shadow-card)]',
    'bg-transparent border border-brand-warm-200',
  ];

  const accentColours = ['bg-brand-deep', 'bg-brand-mid', 'bg-brand-pale', 'bg-brand-slate'];
</script>

<SEO
  title="Clearstep AI — Bespoke AI Solutions for UK SMEs"
  description="Bespoke AI solutions designed for UK SMEs in manufacturing, food production, and distribution. We build it. We teach it. You own it."
  jsonLd={organizationSchema()}
/>

<!-- Section 1: Hero -->
<Hero variant="video" videoSrc="/video/hero-bg.mp4" posterSrc="/video/hero-poster.webp" size="full">
  <div class="flex flex-col items-center gap-6 pt-6">
    <BrandBars size="xl" variant="dark" animate />
    <h1 class="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white">
      clearstep <span class="text-brand-mid">ai</span>
    </h1>
    <p class="text-lg md:text-xl font-medium text-white/60 tracking-wide">
      We build it. We teach it. You own it.
    </p>
    <div class="flex flex-wrap gap-4 mt-4">
      <Button href="/how-we-work" variant="primary">See How We Work</Button>
      <Button href="/contact" variant="outline-light">Book a Discovery Call</Button>
    </div>
  </div>
</Hero>

<!-- Section 2: Value Props Strip -->
<section class="bg-brand-wash py-20">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each valueProps as { title, description, icon }, i}
        <div use:reveal={{ delay: i * 100 }}>
          <ValueProp {title} {description} {icon} />
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Section 3: What We Do -->
<section class="bg-brand-warm-50 py-24">
  <div class="max-w-7xl mx-auto px-6">
    <h2
      use:reveal
      class="text-4xl md:text-5xl font-display font-bold tracking-tight text-brand-deep text-center mb-14"
    >
      What we do
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each services as service, i}
        <a
          href="/services/{service.slug}"
          use:reveal={{ delay: i * 100 }}
          class="group rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 {cardStyles[i]}"
        >
          <div class="{accentColours[i]} h-[3px] w-12 rounded-full mb-5"></div>
          <h3 class="text-lg font-bold mb-2 {i === 0 ? 'text-white' : 'text-brand-deep'}">
            {service.title}
          </h3>
          <p class="text-sm leading-relaxed mb-4 {i === 0 ? 'text-white/70' : 'text-brand-text-muted'}">
            {service.description}
          </p>
          <span class="text-sm font-medium transition-colors {i === 0
            ? 'text-brand-mid group-hover:text-brand-pale'
            : 'text-brand-mid group-hover:text-brand-deep'}">
            Learn more &rarr;
          </span>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Section 4: Three Steps Journey -->
<section class="bg-brand-navy py-24">
  <div class="max-w-5xl mx-auto px-6">
    <h2
      use:reveal
      class="text-4xl md:text-5xl font-display font-bold tracking-tight text-white text-center mb-16"
    >
      Three steps to owning your AI
    </h2>

    <div class="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
      <!-- Connecting dashed line (desktop only) -->
      <div
        class="hidden md:block absolute top-8 left-[calc(16.67%+24px)] right-[calc(16.67%+24px)] border-t-2 border-dashed border-white/20"
        aria-hidden="true"
      ></div>

      {#each steps as step, i}
        <div use:reveal={{ delay: i * 150 }} class="flex flex-col items-center text-center relative">
          <div
            class="w-16 h-16 rounded-full border-2 {step.borderColour} flex items-center justify-center mb-4 bg-brand-navy relative z-10"
          >
            <span class="font-display font-bold text-2xl text-white">{step.number}</span>
          </div>
          <h3 class="text-xl font-bold text-white mb-2">{step.label}</h3>
          <p class="text-white/70 leading-relaxed max-w-xs">{step.description}</p>
        </div>
      {/each}
    </div>

    <div class="text-center mt-12" use:reveal={{ delay: 450 }}>
      <a
        href="/how-we-work"
        class="text-brand-mid font-medium hover:text-white transition-colors"
      >
        See the full process &rarr;
      </a>
    </div>
  </div>
</section>

<!-- Section 5: Built from Real Results -->
<section class="bg-brand-wash py-24">
  <div class="max-w-6xl mx-auto px-6">
    <h2
      use:reveal
      class="text-4xl md:text-5xl font-display font-bold tracking-tight text-brand-deep text-center mb-14"
    >
      Built from real results
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
      <!-- Left: pull-quote -->
      <div use:reveal={{ delay: 100 }}>
        <blockquote class="font-display italic text-2xl text-brand-deep leading-relaxed">
          &ldquo;Founded by a CEO who led a major AI-driven business turnaround and the technical
          specialist who built those solutions.&rdquo;
        </blockquote>
      </div>

      <!-- Right: stat blocks -->
      <div class="flex flex-col gap-8" use:reveal={{ delay: 200 }}>
        {#each stats as stat}
          <div>
            <p class="text-4xl font-display font-bold text-brand-slate" use:countUp={{ target: stat.target, suffix: stat.suffix }}>
              0
            </p>
            <p class="text-sm text-brand-text-muted mt-1">{stat.label}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<!-- Section 6: Final CTA -->
<InlineCTA
  heading="Ready to take the first step?"
  primaryHref="/contact"
  primaryLabel="Book a Discovery Call"
  primaryVariant="slate"
  secondaryHref="/case-studies"
  secondaryLabel="See our case studies"
  variant="light"
/>
