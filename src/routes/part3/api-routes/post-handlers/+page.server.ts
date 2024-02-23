import * as db from '$lib/server/database.js';

export type TODO = { id: string, description: string, done: boolean };

export function load({ cookies }) {
  let userid = cookies.get('userid');

  if (!userid) {
    userid = crypto.randomUUID();
    cookies.set('userid', userid, { path: '/part3/api-routes' });
  }

  return { todos: db.getTodos(userid) } as { todos: TODO[] };
}
