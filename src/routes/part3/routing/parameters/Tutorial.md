------
# **Route parameters**
To create routes with dynamic parameters, use square brackets around a valid variable name. For example, a file like <code data-file="src/routes/part3/routing/parameters/[slug]/+page.svelte">src/routes/part3/routing/parameters/[slug]/+page.svelte</code> will create a route that matches `/part3/routing/parameters/one`, `/part3/routing/parameters/two`, `/part3/routing/parameters/three` and so on.

We can now navigate from the `/part3/routing/parameters` page to individual blog posts. In the next chapter, we'll see how to load their content.

> Multiple route parameters can appear _within_ one URL segment, as long as they are separated by at least one static character: `foo/[bar]x[baz]` is a valid route where `[bar]` and `[baz]` are dynamic parameters.

------
# **Page data**

------
# **Layout data**

------
# **Layouts**
Different routes of your app will often share common UI. Instead of repeating it in each `+page.svelte` component, we can use a `+layout.svelte` component that applies to all routes in the same directory.

In this app we have two routes, <code data-file="src/routes/+page.svelte">src/routes/+page.svelte</code> and <code data-file="src/routes/part3/routing/about/+page.svelte">src/routes/part3/routing/about/+page.svelte</code>, that contain the same navigation UI. Let's create a new file, <code data-file="src/routes/+layout.svelte">src/routes/+layout.svelte</code>...
```bash /├ +layout.svelte/
src/routes/
├ about/
│ └ +page.svelte
├ +layout.svelte
└ +page.svelte
```
...and move the duplicated content from the `+page.svelte` files into the new `+layout.svelte` file. The `<slot></slot>` element is where the page content will be rendered:
```svelte title="src/routes/+layout.svelte"
<nav>
  <a href="/">home</a>
  <a href="/part3/routing/about">about</a>
</nav>

<slot></slot>
```
A `+layout.svelte` file applies to every child route, including the sibling `+page.svelte` (if it exists). You can nest layouts to arbitrary depth.

[Next: Route parameters](/part3/routing/parameters)
