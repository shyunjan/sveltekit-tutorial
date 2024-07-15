------
# **Route groups**
As we saw in the [routing introduction](/part3/routing/layouts), layouts are a way to share UI and data loading logic between different routes.

Sometimes it's useful to use layouts without affecting the route — for example, you might need your `/app` and `/account` routes to be behind authentication, while your `/about` page is open to the world. We can do this with a _route group_, which is a directory in parentheses.

Create an `(authed)` group by renaming `account` to `(authed)/account` then renaming `app` to `(authed)/app`.

Now we can control access to these routes by creating <code data-file="src/routes/part4/advanced-routing/route-groups/(authed)/+layout.server.ts">src/routes/part4/advanced-routing/route-groups/(authed)/+layout.server.ts</code>:
```js title="src/routes/part4/advanced-routing/route-groups/(authed)/+layout.server.ts"
import { redirect } from '@sveltejs/kit'

export function load({ cookies, url }) {
  if (!cookies.get('logged_in')) {
    throw redirect(303, `/part4/advanced-routing/route-groups/login?redirectTo=${url.pathname}`);
  }
}
```
If you try to visit these pages, you'll be redirected to the `/login` route, which has a form action in <code data-file="./login/+page.server.ts">src/routes/part4/advanced-routing/route-groups/login/+page.server.ts</code> that sets the `logged_in` cookie.

We can also add some UI to these two routes by adding a <code data-file="./(authed)/+layout.svelte">src/routes/part4/advanced-routing/route-groups/(authed)/+layout.svelte</code> file:
```svelte title="src/routes/part4/advanced-routing/route-groups/(authed)/+layout.svelte"
<slot></slot>

<form method="POST" action="/part4/advanced-routing/route-groups/logout">
  <button>log out</button>
</form>
```

[Next: Breaking out of layouts](/part4/advanced-routing/breaking-out-of-layouts)
