------
# **Page**
As we learned [earlier](/part1/stores/writable-stores), Svelte stores are a place to put data that doesn't belong to an individual component.

SvelteKit makes three readonly stores available via the `$app/stores` module — `page`, `navigating` and `updated`. The one you'll use most often is [page](https://kit.svelte.dev/docs/types#public-types-page), which provides information about the current page:
- `url` — the [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL) of the current page
- `params` — the current page's [parameters](/part3/routing/parameters)
- `route` — an object with an `id` property representing the current route
- `status` — the HTTP status code of the current page
- `error` — the error object of the current page, if any (you'll learn more about error handling in [later exercises](/part3/errors&redirects/basics))
- `data` — the data for the current page, combining the return values of all `load` functions
- `form` — the data returned from a [form action](/part3/forms/form-element)

As with any other store, you can reference its value in a component by prefixing its name with the `$` symbol. For example, we can access the current pathname as `$page.url.pathname`:
```svelte title="src/routes/part3/stores/+layout.svelte" {2} "<script>" "</script>" "aria-current={$page.url.pathname === '/part3/stores/" /page'}/ /navigating'}/ /updated'}/
<script>
  import { page } from '$app/stores';
</script>

<nav>
  <a href="/part3/stores/page" aria-current={$page.url.pathname === '/part3/stores/page'}>page</a>
  <a href="/part3/stores/navigating" aria-current={$page.url.pathname === '/part3/stores/navigating'}>
    navigating
  </a>
  <a href="/part3/stores/updated" aria-current={$page.url.pathname === '/part3/stores/updated'}>
    updated
  </a>
</nav>

<slot></slot>
```

[Next: navigating](/part3/stores/navigating)
