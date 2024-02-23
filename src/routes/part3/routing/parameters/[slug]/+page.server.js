import { error } from '@sveltejs/kit';
import { posts } from '../data';

export function load({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) throw error(404);

  return { post };
}