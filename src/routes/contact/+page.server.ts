import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const name = data.get('name')?.toString().trim() ?? '';
		const email = data.get('email')?.toString().trim() ?? '';
		const company = data.get('company')?.toString().trim() ?? '';
		const companySize = data.get('companySize')?.toString() ?? '';
		const message = data.get('message')?.toString().trim() ?? '';

		const errors: Record<string, string> = {};

		if (!name) errors.name = 'Please enter your name.';
		if (!email) errors.email = 'Please enter your email address.';
		else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
			errors.email = 'Please enter a valid email address.';
		if (!message) errors.message = 'Please enter a message.';

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, values: { name, email, company, companySize, message } });
		}

		// TODO: Replace with Resend / SendGrid / email API call
		console.log('Contact form submission:', { name, email, company, companySize, message });

		return { success: true };
	}
};
