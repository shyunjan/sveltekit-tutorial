------
# **The $lib alias**
Because SvelteKit uses directory-based routing, it's easy to place modules and components alongside the routes that use them. A good rule of thumb is 'put code close to where it's used'. 

Sometimes, code is used in multiple places. When this happens, it's useful to have a place to put them that can be accessed by all routes without needing to prefix imports with `../../../../`. In SvelteKit, that place is the `src/lib` directory. Anything inside this directory can be accessed by any module in `src` via the `$lib` alias.

Both `+page.svelte` files in this exercise import <code data-file="src/lib/message.js">src/lib/message.js</code>. But if you navigate to `/part3/shared_modules/a/deeply/nested/route`, the app breaks, because we got the prefix wrong. Update it to use `$lib/message.js` instead:
```svelte title="src/routes/part3/shared_modules/a/deeply/nested/route/+page.svelte" "'$lib/message.js'"
<script>
  import { message } from '$lib/message.js';
</script>

<h1>a deeply nested route</h1>
<p>{message}</p>
```
Do the same for <code data-file="src/routes/part3/shared_modules/+page.svelte">src/routes/part3/shared_modules/+page.svelte</code>:
```svelte title="src/routes/part3/shared_modules/+page.svelte" "'$lib/message.js'"
<script>
  import { message } from '$lib/message.js';
</script>

<h1>home</h1>
<p>{message}</p>
```

[Next: Forms](http://localhost:5173/part3/forms/form-element)