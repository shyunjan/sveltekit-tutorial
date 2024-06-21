------
# **Pages**
SvelteKit uses filesystem-based routing, which means that the _routes_ of your app — in other words, what the app should do when a user navigates to a particular URL — are defined by the directories in your codebase.

Every `+page.svelte` file inside `src/routes` creates a page in your app. In this app we currently have one page — <code data-file="src/routes/part3/routing/about/+page.svelte">src/routes/part3/routing/about/+page.svelte</code>, which maps to `/part3/routing/about`.
```svelte title="src/routes/part3/routing/about/+page.svelte" /About/ / about/
<nav>
  <a href="/">home</a>
  <a href="/part3/routing/about">about</a>
</nav>

<h1>About</h1>
<p>This is the about page.</p>
```
> Unlike traditional multi-page apps, navigating to `/about` and back updates the contents of the current page, like a single-page app. This gives us the best of both worlds — fast server-rendered startup, then instant navigation. (This behaviour can be [configured](https://kit.svelte.dev/docs/page-options).)

[Next: Layouts](/part3/routing/layouts)
