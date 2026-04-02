<script lang="ts">
  import { reveal } from '$lib/actions/reveal';
  import Hero from '$lib/components/Hero.svelte';
  import ServiceCard from '$lib/components/ServiceCard.svelte';
  import Button from '$lib/components/Button.svelte';

  const services = [
    {
      title: 'Bespoke AI Solutions',
      description: 'Custom-built AI designed around your specific workflows, data, and goals. No templates, no one-size-fits-all.',
      deliverables: ['Process audit and opportunity mapping', 'Custom model development and training', 'End-to-end solution built around your systems', 'Full documentation and source code handover'],
    },
    {
      title: 'Systems Integration',
      description: 'Seamless connections between your AI solutions and existing business systems — ERP, CRM, accounting, and operational platforms.',
      deliverables: ['API development and data pipeline design', 'Business Central, Microsoft 365, and CRM integration', 'Automated data flows between systems', 'Real-time dashboards and reporting'],
    },
    {
      title: 'Team Training & Handover',
      description: 'Comprehensive knowledge transfer so your team can manage, modify, and extend solutions independently.',
      deliverables: ['Hands-on training workshops for your team', 'Complete technical documentation', 'Video walkthroughs of key processes', 'Ongoing Q&A support during transition'],
    },
    {
      title: 'Ongoing Support',
      description: 'We stay available on your terms. No lock-in contracts — just flexible support when you need it.',
      deliverables: ['Priority access to our technical team', 'System health monitoring and alerts', 'Quarterly reviews and optimisation', 'Ad-hoc development for new requirements'],
    },
  ];

  const sectors = [
    { name: 'High-End Food Production', challenge: 'Complex compliance, batch traceability, and seasonal demand forecasting.', response: 'AI-driven quality control, automated HACCP documentation, and predictive demand planning.' },
    { name: 'Premium Manufacturing', challenge: 'Production scheduling, waste reduction, and multi-system coordination.', response: 'Intelligent scheduling, real-time production monitoring, and automated reporting across ERP and shop floor systems.' },
    { name: 'Distribution', challenge: 'Route optimisation, inventory management, and customer demand patterns.', response: 'Predictive stock management, automated order processing, and smart logistics planning.' },
    { name: 'Professional Services', challenge: 'Resource allocation, client reporting, and knowledge management.', response: 'Automated time tracking and billing, intelligent document processing, and client insight dashboards.' },
  ];
</script>

<svelte:head>
  <title>Services — Clearstep AI</title>
  <meta name="description" content="Bespoke AI solutions, systems integration, team training, and ongoing support for UK SMEs." />
</svelte:head>

<Hero title="AI that fits your business, not the other way around" subtitle="Practical solutions built around how you actually work." size="short" />

<section class="py-20">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each services as service, i}
        <div use:reveal={{ delay: i * 100 }}>
          <ServiceCard {...service} />
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="bg-brand-wash py-20">
  <div class="max-w-7xl mx-auto px-6">
    <h2 use:reveal class="text-3xl font-bold text-brand-deep text-center mb-12">Who we work with</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      {#each sectors as { name, challenge, response }, i}
        <div use:reveal={{ delay: i * 100 }} class="bg-white rounded-xl p-6">
          <h3 class="text-lg font-bold text-brand-deep mb-3">{name}</h3>
          <p class="text-sm text-gray-500 mb-2"><strong class="text-gray-700">Challenge:</strong> {challenge}</p>
          <p class="text-sm text-gray-500"><strong class="text-brand-mid">How AI helps:</strong> {response}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="bg-brand-deep py-20">
  <div class="max-w-3xl mx-auto px-6 text-center" use:reveal>
    <h2 class="text-3xl font-bold text-white mb-4">Not sure where to start?</h2>
    <p class="text-white/70 mb-8">Most of our clients weren't sure either. That's what the discovery call is for.</p>
    <Button href="/contact" variant="slate">Book a Discovery Call</Button>
  </div>
</section>
