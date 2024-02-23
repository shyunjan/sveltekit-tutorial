// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const db = new Map();

/**
 * @param {string} userid
 */
export function getTodos(userid) {
  if (!db.get(userid)) {
    db.set(userid, [{
      id: crypto.randomUUID(),
      description: 'Learn SvelteKit',
      done: false
    }]);
  }

  return db.get(userid);
}

/**
 * @param {string} userid
 * @param {string} description
 */
export function createTodo(userid, description) {
  if (description?.trim() === '') throw new Error('todo must have a description');

  /** @type {{ id: string, description: string; done: boolean }[]} todos */
  const todos = db.get(userid);
	description = description?.trim();
  if (todos.find(todo => todo.description === description)) throw new Error('todos must be unique');

  const id = crypto.randomUUID();
  todos.push({
    id,
    description,
    done: false
  });

  return { id };
}

/**
 * @param {string} userid
 * @param {string} id
 * @param {boolean} done
 */
export function toggleTodo(userid, id, done) {
  /** @type {{ id: string, description: string; done: boolean }[]} todos */
  const todos = db.get(userid);
  const todo = todos.find(t => t.id === id);
  if (todo) todo.done = done;
}

/**
 * @param {string} userid
 * @param {string} id
*/
export function deleteTodo(userid, id) {
  /** @type {{ id: string, description: string; done: boolean }[]} todos */
  const todos = db.get(userid);
  const index = todos.findIndex(t => t.id === id);

  if (index !== -1) {
    todos.splice(index, 1);
  }
}
