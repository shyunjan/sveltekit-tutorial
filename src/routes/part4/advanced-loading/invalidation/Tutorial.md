------
# **Invalidation**
When the user navigates from one page to another, SvelteKit calls your `load` functions, but only if it thinks something has changed.

In this example, navigating between timezones causes the `load` function in <code data-file="src/routes/part4/advanced-loading/invalidation/[...timezone]/+page.ts">src/routes/part4/advanced-loading/invalidation/[...timezone]/+page.ts</code> to re-run because `params.timezone` is invalid. But the `load` function in <code data-file="./+layout.ts">src/routes/part4/advanced-loading/invalidation/+layout.ts</code> does _not_ re-run, because as far as SvelteKit is concerned it wasn't invalidated by the navigation.

We can fix that by manually invalidating it using the [invalidate(...)](https://kit.svelte.dev/docs/modules#$app-navigation-invalidate) function, which takes a URL and re-runs any `load` functions that depend on it. Because the `load` function in <code data-file="./+layout.ts">src/routes/part4/advanced-loading/invalidation/+layout.ts</code> calls `fetch('/api/now')`, it depends on `/api/now`.

In <code data-file="./[...timezone]/+page.svelte">src/routes/part4/advanced-loading/invalidation/[...timezone]/+page.svelte</code>, add an `onMount` callback that calls `invalidate('/api/now')` once a second:
```svelte title="src/routes/part4/advanced-loading/invalidation/[...timezone]/+page.svelte" {2-3,7-15} /a: 1/
<script>
  import { onMount } from 'svelte';
  import { invalidate } from '$app/navigation';

  export let data;

  onMount(() => {
    const interval = setInterval(() => {
      invalidate('/part4/advanced-loading/invalidation/api/now');
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  });
</script>

<h1>
  {new Intl.DateTimeFormat([], {
    timeStyle: 'full',
    timeZone: data.timezone
  }).format(new Date(data.now))}
</h1>
```
> You can also pass a function to `invalidate`, in case you want to invalidate based on a pattern and not specific URLs

[Next: Custom dependencies](/part4/advanced-loading/custom-dependencies)
