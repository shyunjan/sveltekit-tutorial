------
# **Page data**
At its core, SvelteKit's job boils down to three things:
1. **Routing** — figure out which route matches an incoming request
2. **Loading** — get the data needed by the route
3. **Rendering** — generate some HTML (on the server) or update the DOM (in the browser)

We've seen how routing and rendering work. Let's talk about the middle part — loading.

Every page of your app can declare a `load` function in a `+page.server.js` file alongside the `+page.svelte` file. As the file name suggests, this module only ever runs on the server, including for client-side navigations. Let's add a <code data-file="src/routes/part3/loading-data/page/blog/+page.server.ts">src/routes/part3/loading-data/page/blog/+page.server.ts</code> file so that we can replace the hard-coded links in <code data-file="./blog/+page.svelte">src/routes/part3/loading-data/page/blog/+page.svelte</code> with actual blog post data:
```javascript title="src/routes/part3/loading-data/page/blog/+page.server.ts"
import { posts } from './data';

export function load() {
  return {
    summaries: posts.map((post) => ({
      slug: post.slug,
      title: post.title
    }))
  };
}
```
> For the sake of the tutorial, we're importing data from <code data-file="./blog/data.js">src/routes/part3/loading-data/page/blog/data.js</code>. In a real app, you'd be more likely to load the data from a database or a CMS, but for now we'll do it like this.

We can access this data in <code data-file="./blog/+page.svelte">src/routes/part3/loading-data/page/blog/+page.svelte</code> via the `data` prop:
```svelte title="src/routes/part3/loading-data/page/blog/+page.svelte" "<script>" /  export let data;/ "</script>" {8-10}#del /{#each data.summaries as { slug, title }}/ "{/each}" {12}
<script>
  export let data;
</script>

<h1>Blog</h1>

<ul>
  <li><a href="/part3/routing/parameters/blog/one">one</a></li>
  <li><a href="/part3/routing/parameters/blog/two">two</a></li>
  <li><a href="/part3/routing/parameters/blog/three">three</a></li>
  {#each data.summaries as { slug, title }}
    <li><a href="/part3/loading-data/page/blog/{slug}">{title}</a></li>
  {/each}
</ul>
```
Now, let's do the same for the post page:
```javascript title="src/routes/part3/loading-data/page/blog/[slug]/+page.server.ts"
import { posts } from '../data';

export function load({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  return { post };
}
```
```svelte title="src/routes/part3/loading-data/page/blog/[slug]/+page.svelte" "<script>" /  export let data;/ "</script>" {5}#del "<h1>{ data.post?.title }</h1>" "<div>{@html data.post?.content}</div>"
<script>
  export let data;
</script>

<h1>blog post</h1>
<h1>{ data.post?.title }</h1>
<div>{@html data.post?.content}</div>
```
There's one last detail we need to take care of — the user might visit an invalid pathname like `/blog/nope`, in which case we'd like to respond with a 404 page:
```js title="src/routes/part3/loading-data/page/blog/[slug]/+page.server.ts" "import { error } from '@sveltejs/kit';" /if (!post) throw error(404);/
import { error } from '@sveltejs/kit';
import { posts } from '../data';

export function load({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) throw error(404);

  return { post };
}
```
We'll learn more about error handling in later chapters.

[Next: Layout data](/part3/loading-data/layout)
