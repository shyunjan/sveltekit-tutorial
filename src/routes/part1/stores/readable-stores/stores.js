import { readable, derived } from 'svelte/store';

export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  }
});

const start = new Date();

export const elapsed = derived(
	time,
	($time) => Math.round(($time.valueOf() - start.valueOf()) / 1000)
);
/** 
 * NOTE
 * It's possible to derive a store from multiple input stores, and to explicitly set a value 
 * instead of returning it (which is useful for deriving values asynchronously). Consult the 
 * API reference(https://svelte.dev/docs/svelte-store#derived) for more information.
 */