<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from './Button.svelte';
	import { CircleCheck } from 'lucide-svelte';

	let { form }: { form: any } = $props();

	let submitting = $state(false);

	const companySizes = ['1–10', '11–50', '51–200', '200+'];
</script>

{#if form?.success}
	<div class="text-center py-12" role="status">
		<div class="flex justify-center mb-4">
			<CircleCheck size={48} strokeWidth={1.5} class="text-brand-slate" />
		</div>
		<h3 class="text-2xl font-display font-bold text-brand-deep mb-2">Message sent</h3>
		<p class="text-brand-text-muted">We'll be in touch within one working day.</p>
		<p class="text-sm font-medium text-brand-text-muted/65 mt-4">We build it. We teach it. You own it.</p>
	</div>
{:else}
	<form
		method="POST"
		use:enhance={() => {
			submitting = true;
			return async ({ update }) => {
				submitting = false;
				await update();
			};
		}}
		class="space-y-5"
	>
		<div>
			<label for="name" class="block text-sm font-medium text-brand-text mb-1">Name</label>
			<input
				id="name"
				name="name"
				type="text"
				disabled={submitting}
				value={form?.values?.name ?? ''}
				class="w-full px-4 py-3 border border-brand-warm-200 rounded-lg text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent transition-colors disabled:opacity-50"
			/>
			{#if form?.errors?.name}<p class="text-red-500 text-xs mt-1" role="alert">{form.errors.name}</p>{/if}
		</div>

		<div>
			<label for="email" class="block text-sm font-medium text-brand-text mb-1">Email</label>
			<input
				id="email"
				name="email"
				type="email"
				disabled={submitting}
				value={form?.values?.email ?? ''}
				class="w-full px-4 py-3 border border-brand-warm-200 rounded-lg text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent transition-colors disabled:opacity-50"
			/>
			{#if form?.errors?.email}<p class="text-red-500 text-xs mt-1" role="alert">{form.errors.email}</p>{/if}
		</div>

		<div>
			<label for="company" class="block text-sm font-medium text-brand-text mb-1">Company</label>
			<input
				id="company"
				name="company"
				type="text"
				disabled={submitting}
				value={form?.values?.company ?? ''}
				class="w-full px-4 py-3 border border-brand-warm-200 rounded-lg text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent transition-colors disabled:opacity-50"
			/>
		</div>

		<div>
			<label for="companySize" class="block text-sm font-medium text-brand-text mb-1"
				>Company size</label
			>
			<select
				id="companySize"
				name="companySize"
				disabled={submitting}
				class="w-full px-4 py-3 border border-brand-warm-200 rounded-lg text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent bg-white transition-colors disabled:opacity-50"
			>
				<option value="">Select...</option>
				{#each companySizes as size}
					<option value={size} selected={form?.values?.companySize === size}>{size} employees</option
					>
				{/each}
			</select>
		</div>

		<div>
			<label for="message" class="block text-sm font-medium text-brand-text mb-1">Message</label>
			<textarea
				id="message"
				name="message"
				rows="5"
				disabled={submitting}
				class="w-full px-4 py-3 border border-brand-warm-200 rounded-lg text-sm text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-mid focus:border-transparent resize-none transition-colors disabled:opacity-50"
			>{form?.values?.message ?? ''}</textarea>
			{#if form?.errors?.message}<p class="text-red-500 text-xs mt-1" role="alert">{form.errors.message}</p>{/if}
		</div>

		<Button variant="slate" type="submit" class={submitting ? 'opacity-70 pointer-events-none' : ''}>
			{submitting ? 'Sending...' : 'Send Message'}
		</Button>
	</form>
{/if}
