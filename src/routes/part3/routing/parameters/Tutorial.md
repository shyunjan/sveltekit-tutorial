------
# **Route parameters**
To create routes with dynamic parameters, use square brackets around a valid variable name. For example, a file like <code data-file="src/routes/part3/routing/parameters/blog/[slug]/+page.svelte">src/routes/part3/routing/parameters/blog/[slug]/+page.svelte</code> will create a route that matches `/part3/routing/parameters/blog/one`, `/part3/routing/parameters/blog/two`, `/part3/routing/parameters/blog/three` and so on.

Let's create that file:
```svelte title="src/routes/part3/routing/parameters/blog/[slug]/+page.svelte"
<h1>blog.post</h1>
```

We can now navigate from the `/part3/routing/parameters` page to individual blog posts. In the next chapter, we'll see how to load their content.

> Multiple route parameters can appear _within_ one URL segment, as long as they are separated by at least one static character: `foo/[bar]x[baz]` is a valid route where `[bar]` and `[baz]` are dynamic parameters.

[Next: Loading data](/part3/loading-data/page)
