------
# **invalidateAll**
Finally, there's the nuclear option — `invalidateAll()`. This will indiscriminately re-run all `load` functions for the current page, regardless of what they depend on.

Update <code data-file="src/routes/part4/advanced-loading/invalidateAll/[...timezone]/+page.svelte">src/routes/part4/advanced-loading/invalidateAll/[...timezone]/+page.svelte</code>:
```svelte title="src/routes/part4/advanced-loading/invalidateAll/[...timezone]/+page.svelte" /invalidateAll();/ /invalidateAll/
<script>
  import { onMount } from 'svelte';
  import { invalidateAll } from '$app/navigation';

  export let data;

  onMount(() => {
    const interval = setInterval(() => {
      invalidateAll();
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  });
</script>
```

The `depends` call in <code data-file="./+layout.ts">src/routes/part4/advanced-loading/invalidateAll/+layout.ts</code> is no longer necessary:
```js title="src/routes/part4/advanced-loading/invalidateAll/+layout.ts" /depends('data:now');/#del /{ depends }/#del
export async function load({ depends }) {
  depends('data:now');

  return {
    now: Date.now()
  };
}
```
> `invalidate(() => true)` and `invalidateAll` are _not_ the same. `invalidateAll` also re-runs `load` functions without any `url` dependencies, which `invalidate(() => true)` does not.

[Next: Environment variables](/part4/environment-variables/$env-static-private)
