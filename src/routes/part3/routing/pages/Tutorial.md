------
# **Pages**
SvelteKit uses filesystem-based routing, which means that the _routes_ of your app — in other words, what the app should do when a user navigates to a particular URL — are defined by the directories in your codebase.

Every `+page.svelte` file inside `src/routes` creates a page in your app. In this app we currently have one page — <code data-file="src/routes/part3/routing/pages/+page.svelte">src/routes/part3/routing/pages/+page.svelte</code>, which maps to `/part3/routing/pages`. If we navigate to `/part3/routing/pages/about`, we'll see a 404 Not Found error.

Let's fix that. Add a second page, <code data-file="src/routes/part3/routing/pages/+page.svelte">src/routes/about/+page.svelte</code>, copy the contents of src/routes/+page.svelte, and update it:
```svelte title="src/routes/part3/routing/pages/+page.svelte" /About/ / about/
<nav>
  <a href="/part3/routing/pages">home</a>
  <a href="/part3/routing/pages/about">about</a>
</nav>

<h1>About</h1>
<p>this is the about page.</p>
```
We can now navigate between `/part3/routing/pages` and `/part3/routing/pages/about`.
> Unlike traditional multi-page apps, navigating to `/about` and back updates the contents of the current page, like a single-page app. This gives us the best of both worlds — fast server-rendered startup, then instant navigation. (This behaviour can be [configured](https://kit.svelte.dev/docs/page-options).)

[Next: Layouts](/part3/routing/layouts)
