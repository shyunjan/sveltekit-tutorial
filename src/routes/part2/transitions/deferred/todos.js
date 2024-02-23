import { writable } from 'svelte/store';

/**
 * @param {{ done: boolean; description: string; }[]} initial
 */
export function createTodoStore(initial) {
  let uid = 1;

  const todos = initial.map(({ done, description }) => {
    return {
      id: uid++,
      done,
      description
    };
  });

  const { subscribe, update } = writable(todos);

  return {
    subscribe,
    add: (/** @type string */ description) => {
      const todo = {
        id: uid++,
        done: false,
        description
      };

      update($todos => [...$todos, todo])
    },
    remove: (/** @type {{ id: number; done: boolean; description: string; }} */ todo) => {
      update($todos => $todos.filter((t) => t !== todo));
    },
    mark: (/** @type {{ id: number; done: boolean; description: string; }} */ todo, /** @type boolean */ done) => {
      update($todos => [
        ...$todos.filter((t) => t !== todo),
        { ...todo, done }
      ]);
    }
  };
}
