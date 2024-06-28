import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database.js';

export function load({ cookies }) {
  let id = cookies.get('userid');

  if (!id) {
    id = crypto.randomUUID();
    cookies.set('userid', id, { path: '/part3/forms' });
  }

  return {
    todos: db.getTodos(id)
  };
}

export const actions = {
  // default: async ({ cookies, request }) => {
  //   const data = await request.formData();
  //   db.createTodo(cookies.get('userid') || '', data.get('description') as string);
  // }
  // 아래 create: 함수와 동일하므로 주석처리한다

  create: async ({ cookies, request }) => {
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
    const data = await request.formData();
    db.deleteTodo(cookies.get('userid') || '', data.get('id') as string);
  }
};
