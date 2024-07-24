------
# **Using both load functions**
Occasionally, you might need to use a server load function and a universal load function together. For example, you might need to return data from the server, but also return a value that can't be serialized as server data.

In this example we want to return a different component from `load` depending on whether the data we got from <code data-file="src/routes/part4/advanced-loading/using-both-load-functions/+page.server.ts">src/routes/part4/advanced-loading/using-both-load-functions/+page.server.ts</code> is `cool` or not.

We can access server data in <code data-file="./+page.ts">src/routes/part4/advanced-loading/using-both-load-functions/+page.ts</code> via the `data` property:
```js title="src/routes/part4/advanced-loading/using-both-load-functions/+page.ts" /{ data }/ /data.cool/ /data.message/
export async function load({ data }) {
  const module = data.cool
    ? await import('./CoolComponent.svelte')
    : await import('./BoringComponent.svelte');

  return {
    component: module.default,
    message: data.message
  };
}
```
> Note that the data isn't merged — we must explicitly return `message` from the universal `load` function.

[Next: Using parent data](/part4/advanced-loading/using-parent-data)
