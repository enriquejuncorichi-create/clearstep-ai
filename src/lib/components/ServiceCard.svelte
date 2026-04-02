<script lang="ts">
  let { title, description, deliverables }: {
    title: string;
    description: string;
    deliverables: string[];
  } = $props();
</script>

<div class="bg-white rounded-xl p-8 border border-gray-100">
  <div class="h-1 w-12 bg-brand-slate rounded-full mb-6"></div>
  <h3 class="text-xl font-bold text-brand-deep mb-3">{title}</h3>
  <p class="text-gray-600 leading-relaxed mb-4">{description}</p>
  <ul class="space-y-2">
    {#each deliverables as item}
      <li class="flex items-start gap-2 text-sm text-gray-600">
        <span class="text-brand-mid mt-0.5">&#x2713;</span>
        {item}
      </li>
    {/each}
  </ul>
</div>
