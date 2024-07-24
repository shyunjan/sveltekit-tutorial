------
# **Navigating**
The `navigating` store represents the current navigation. When a navigation starts — because of a link click, or a back/forward navigation, or a programmatic `goto` — the value of `navigating` will become an object with the following properties:
- `from` and `to` — objects with `params`, `route` and `url` properties
- `type` — the type of navigation, e.g. `link`, `popstate` or `goto`

> For complete type information visit the [Navigation](https://kit.svelte.dev/docs/types#public-types-navigation) documentation.

It can be used to show a loading indicator for long-running navigations. In this exercise, <code data-file="src/routes/part3/stores/page/+layout.server.ts">src/routes/part3/stores/page/+layout.server.ts</code> and <code data-file="./navigating/+layout.server.ts">src/routes/part3/stores/navigating/+layout.server.ts</code> both have an artificial delay. Inside <code data-file="./+layout.svelte">src/routes/part3/stores/+layout.svelte</code>, import the `navigating` store and add a message to the nav bar:
```svelte title="src/routes/part3/stores/+layout.svelte" {15} /, navigating/ "  {#if $navigating}" "  {/if}"
<script>
  import { page, navigating } from '$app/stores';
</script>

<nav>
  <a href="/part3/stores/page" aria-current={$page.url.pathname === '/part3/stores/page'}>page</a>
  <a href="/part3/stores/navigating" aria-current={$page.url.pathname === '/part3/stores/navigating'}>
    navigating
  </a>
  <a href="/part3/stores/updated" aria-current={$page.url.pathname === '/part3/stores/updated'}>
    updated
  </a>

  {#if $navigating}
    navigating to {$navigating.to.url.pathname}
  {/if}
</nav>

<slot></slot>
```

[Next: updated](/part3/stores/updated)
