import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database.js';

export type TODO = { id: string, description: string, done: boolean };

export function load({ cookies }) {
  let id = cookies.get('userid');

  if (!id) {
    id = crypto.randomUUID();
    cookies.set('userid', id, { path: '/part3/forms' });
  }

  return { todos: db.getTodos(id) } as { todos: TODO[] };
}

export const actions = {
  create: async ({ cookies, request }) => {
    await new Promise(fulfil => setTimeout(fulfil, 1000));
    const data = await request.formData();

    try {
      db.createTodo(cookies.get('userid') || '', data.get('description') as string);
    } catch (error: any) {
      return fail(422, {
        description: data.get('description') as string,
        error: error.message
      });
    }

    return { success: true, id: cookies.get('userid') };
  },

  delete: async ({ cookies, request }) => {
    await new Promise(fulfil => setTimeout(fulfil, 1000));
    const data = await request.formData();
    db.deleteTodo(cookies.get('userid') || '', data.get('id') as string);
  }
} 