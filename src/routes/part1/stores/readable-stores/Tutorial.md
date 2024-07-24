------
# **Readable stores**
Not all stores should be writable by whoever has a reference to them. For example, you might have a store representing the mouse position or the user's geolocation, and it doesn't make sense to be able to set those values from 'outside'. For those cases, we have _readable_ stores.

Open <code data-file="src/routes/part1/stores/readable-stores/stores.js">stores.js</code>. The first argument to `readable` is an initial value, which can be `null` or `undefined` if you don't have one yet. The second argument is a `start` function that takes a `set` callback and returns a `stop` function. The `start` function is called when the store gets its first subscriber; `stop` is called when the last subscriber unsubscribes.
```js title="src/routes/part1/stores/readable-stores/stores.js" /new Date()/ {2-4} /clearInterval(interval);/
export const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  }
});
```
...
------
# **Derived stores**
You can create a store whose value is based on the value of one or more other stores with `derived`. Building on our previous example, we can create a store that derives the time the page has been open:
```js title="src/routes/part1/stores/readable-stores/stores.js" "Math.round(($time - start) / 1000)"
export const elapsed = derived(
  time, 
  ($time) => Math.round(($time - start) / 1000)
);
```
> It's possible to derive a store from multiple input stores, and to explicitly `set` a value instead of returning it (which is useful for deriving values asynchronously). Consult the [API reference](https://svelte.dev/docs#run-time-svelte-store-derived) for more information.

[Next: Custom stores](/part1/stores/custom-stores)
