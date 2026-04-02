import { getCaseStudyBySlug } from '$lib/data/case-studies';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    error(404, 'Case study not found');
  }

  return { caseStudy };
};
