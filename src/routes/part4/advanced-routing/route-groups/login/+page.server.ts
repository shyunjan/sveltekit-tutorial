import { redirect } from '@sveltejs/kit';

export const actions = {
  default: ({ cookies, url }) => {
    cookies.set('logged_in', 'true', { path: '/part4/advanced-routing/route-groups' });
    throw redirect(303, url.searchParams.get('redirectTo') ?? '/part4/advanced-routing/route-groups');
  }
};
