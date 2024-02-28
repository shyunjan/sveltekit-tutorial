import { redirect } from '@sveltejs/kit';

export function load() {
  throw redirect(307, '/part3/errors&redirects/redirects/to');
}