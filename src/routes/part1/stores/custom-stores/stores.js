import { writable } from 'svelte/store';

function createCount() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    increment: () => update((n) => ++n),
    decrement: () => update((n) => --n),
    reset: () => set(0)
  };
}

export const count = createCount();
