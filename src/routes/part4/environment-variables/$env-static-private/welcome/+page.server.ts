import { redirect, error } from '@sveltejs/kit';

export async function load({ cookies }) {
  if (!cookies.get('allowed')) {
    throw error(403, 'Forbidden' as unknown as App.Error);
  }
}

export const actions = {
  default: ({ cookies }) => {
    cookies.delete('allowed', { path: '/part4/environment-variables' });
    throw redirect(303, '/part4/environment-variables/$env-static-private');
  }
};
