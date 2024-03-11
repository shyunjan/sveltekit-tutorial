import { redirect } from '@sveltejs/kit';

export const actions = {
  default: ({ cookies }) => {
    cookies.delete('logged_in', { path: '/part4/advanced-routing/route-groups' });
    throw redirect(303, '/part4/advanced-routing/route-groups');
  }
};
