------
# **Using parent data**
As we saw in the introduction to [layout data](/part3/loading-data/layout), `+page.svelte` and `+layout.svelte` components have access to everything returned from their parent `load` functions.

Occasionally it's useful for the `load` functions themselves to access data from their parents. This can be done with `await parent()`.

To show how it works, we'll sum two numbers that come from different `load` functions. First, return some data from <code data-file="src/routes/part4/advanced-loading/using-parent-data/+layout.server.ts">src/routes/part4/advanced-loading/using-parent-data/+layout.server.ts</code>:
```js title="src/routes/part4/advanced-loading/using-parent-data/+layout.server.ts" /a: 1/
export async function load() {
  return { a: 1 };
}
```
Then, get that data in <code data-file="./sum/+layout.ts">src/routes/part4/advanced-loading/using-parent-data/sum/+layout.ts</code>:
```js title="src/routes/part4/advanced-loading/using-parent-data/sum/+layout.ts" /{ parent }/ /const { a } = await parent();/ /b: a + 1/
export async function load({ parent }) {
  const { a } = await parent();
  return { b: a + 1 };
}
```
> Notice that a [universal](/part4/advanced-loading/universal-load-functions) `load` function can get data from a parent _server_ `load` function. The reverse is not true — a server load function can only get parent data from another server load function.

Finally, in src/routes/sum/+page.js, get parent data from both load functions:
```js title="src/routes/part4/advanced-loading/using-parent-data/sum/+page.ts" /{ parent }/ /const { a, b } = await parent();/ /c: a + b/
export async function load({ parent }) {
  const { a, b } = await parent();
  return { c: a + b };
}
```
> Take care not to introduce waterfalls when using `await parent()`. If you can `fetch` other data that is not dependent on parent data, do that first.

[Next: Invalidation](/part4/advanced-loading/invalidation)
