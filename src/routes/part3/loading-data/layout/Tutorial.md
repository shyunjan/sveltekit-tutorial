------
# **Layout data**
Just as `+layout.svelte` files create UI for every child route, `+layout.server.js` files load data for every child route.

Suppose we'd like to add a 'more posts' sidebar to our blog post page. We _could_ return `summaries` from the `load` function in <code data-file="src/routes/part3/loading-data/layout/blog/[slug]/+page.server.ts">src/routes/part3/loading-data/layout/blog/[slug]/+page.server.ts</code>, like we do in <code data-file="./blog/+page.server.ts">src/routes/part3/loading-data/layout/blog/+page.server.ts</code>, but that would be repetitive.

Instead, let's rename <code data-file="./blog/+page.server.ts">src/routes/part3/loading-data/layout/blog/+page.server.ts</code> to <code data-file="./blog/+page.server.ts">src/routes/part3/loading-data/layout/blog/+layout.server.ts</code>. Notice that the `/blog` route continues to work — `data.summaries` is still available to the page.

Now, add a sidebar in the layout for the post page:
```svelte title="src/routes/part3/loading-data/layout/blog/[slug]/+layout.svelte" "  <aside>" "  </aside>" {11-18}
<script>
  export let data;
</script>

<div class="layout">
  <main>
    <slot></slot>
  </main>

  <aside>
    <h2>More posts</h2>
    <ul>
      {#each data.summaries as { slug, title }}
        <li>
          <a href="/part3/loading-data/layout/blog/{slug}">{title}</a>
        </li>
      {/each}
    </ul>
  </aside>
</div>

<style>
  @media (min-width: 640px) {
    .layout {
      display: grid;
      gap: 2em;
      grid-template-columns: 1fr 16em;
    }
  }
</style>
```
The layout (and any page below it) inherits `data.summaries` from the parent `+layout.server.js`.

When we navigate from one post to another, we only need to load the data for the post itself — the layout data is still valid. See the documentation on [invalidation](https://kit.svelte.dev/docs/load#rerunning-load-functions) to learn more.

[Next: Headers and cookies](/part3/headers&cookies/setting-headers)
