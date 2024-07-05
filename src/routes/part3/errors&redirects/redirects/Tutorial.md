------
# **Redirects**
We can also use the `throw` mechanism to redirect from one page to another.

Create a new `load` function in <code data-file="src/routes/part3/errors&redirects/redirects/from/+page.server.ts">src/routes/part3/errors&redirects/redirects/from/+page.server.ts</code>:
```js title="src/routes/part3/errors&redirects/redirects/from/+page.server.ts"
import { redirect } from '@sveltejs/kit';

export function load() {
  throw redirect(307, '/part3/errors&redirects/redirects/to');
}
```
Navigating to `/from` will now take us straight to /`to`.

You can `throw redirect(...)` inside `load` functions, form `actions`, API routes and the `handle` hook, which we'll discuss in a later chapter.

The most common status codes you'll use:
- `303` — for form actions, following a successful submission
- `307` — for temporary redirects
- `308` — for permanent redirects

[Next: Advanced SvelteKit](/part4/hooks/handle)
