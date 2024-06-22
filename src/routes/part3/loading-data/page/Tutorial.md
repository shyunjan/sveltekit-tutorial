------
# **Route parameters**
To create routes with dynamic parameters, use square brackets around a valid variable name. For example, a file like <code data-file="src/routes/part3/routing/parameters/[slug]/+page.svelte">src/routes/part3/routing/parameters/[slug]/+page.svelte</code> will create a route that matches `/part3/routing/parameters/one`, `/part3/routing/parameters/two`, `/part3/routing/parameters/three` and so on.

We can now navigate from the `/part3/routing/parameters` page to individual blog posts. In the next chapter, we'll see how to load their content.

> Multiple route parameters can appear _within_ one URL segment, as long as they are separated by at least one static character: `foo/[bar]x[baz]` is a valid route where `[bar]` and `[baz]` are dynamic parameters.

------
# **Page data**
At its core, SvelteKit's job boils down to three things:
1. **Routing** — figure out which route matches an incoming request
2. **Loading** — get the data needed by the route
3. **Rendering** — generate some HTML (on the server) or update the DOM (in the browser)

We've seen how routing and rendering work. Let's talk about the middle part — loading.

Every page of your app can declare a `load` function in a `+page.server.js` file alongside the `+page.svelte` file. As the file name suggests, this module only ever runs on the server, including for client-side navigations. Let's add a <code data-file="src/routes/part3/routing/parameters/[slug]/+page.svelte">src/routes/blog/+page.server.js file so that we can replace the hard-coded links in src/routes/blog/+page.svelte with actual blog post data:



------
# **Layout data**

