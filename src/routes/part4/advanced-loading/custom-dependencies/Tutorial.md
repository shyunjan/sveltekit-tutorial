------
# **Custom dependencies**
Calling `fetch(url)` inside a `load` function registers `url` as a dependency. Sometimes it's not appropriate to use `fetch`, in which case you can specify a dependency manually with the [depends(url)](https://kit.svelte.dev/docs/load#invalidation-manual-invalidation) function.

Since any string that begins with an `[a-z]+:` pattern is a valid URL, we can create custom invalidation keys like `data:now`.

Update <code data-file="src/routes/part4/advanced-loading/custom-dependencies/+layout.ts">src/routes/part4/advanced-loading/custom-dependencies/+layout.ts</code> to return a value directly rather than making a `fetch` call, and add the `depends`:
```js title="src/routes/part4/advanced-loading/custom-dependencies/+layout.ts" /depends('data:now');/ /Date.now()/ /depends/
export async function load({ depends }) {
  depends('data:now');

  return {
    now: Date.now()
  };
}
```
Now, update the `invalidate` call in <code data-file="./[...timezone]/+page.svelte">src/routes/part4/advanced-loading/custom-dependencies/[...timezone]/+page.svelte</code>:
```svelte title="src/routes/part4/advanced-loading/custom-dependencies/[...timezone]/+page.svelte" /data:now/
<script>
  import { onMount } from 'svelte';
  import { invalidate } from '$app/navigation';

  export let data;

  onMount(() => {
    const interval = setInterval(() => {
      invalidate('data:now');
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  });
</script>
```

[Next: invalidateAll](/part4/advanced-loading/invalidateAll)