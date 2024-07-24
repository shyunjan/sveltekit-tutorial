------
# **Breaking out of layouts**
Ordinarily, a page inherits every layout above it, meaning that <code data-file="src/routes/part4/advanced-routing/breaking-out-of-layouts/a/b/c/+page.svelte">src/routes/part4/advanced-routing/breaking-out-of-layouts/a/b/c/+page.svelte</code> inherits four layouts:
- <code data-file="./+layout.svelte">src/routes/part4/advanced-routing/breaking-out-of-layouts/+layout.svelte</code>
- <code data-file="./a/+layout.svelte">src/routes/part4/advanced-routing/breaking-out-of-layouts/a/+layout.svelte</code>
- <code data-file="./a/b/+layout.svelte">src/routes/part4/advanced-routing/breaking-out-of-layouts/a/b/+layout.svelte</code>
- <code data-file="./a/b/c/+layout.svelte">src/routes/part4/advanced-routing/breaking-out-of-layouts/a/b/c/+layout.svelte</code>

Occasionally, it's useful to break out of the current layout hierarchy. We can do that by adding the `@` sign followed by the name of the parent segment to 'reset' to — for example `+page@b.svelte` would put `/a/b/c` inside <code data-file="src/routes/part4/advanced-routing/breaking-out-of-layouts/a/b/+layout.svelte">src/routes/part4/advanced-routing/breaking-out-of-layouts/a/b/+layout.svelte</code>, while `+page@a.svelte` would put it inside <code data-file="src/routes/part4/advanced-routing/breaking-out-of-layouts/a/+layout.svelte">src/routes/part4/advanced-routing/breaking-out-of-layouts/a/+layout.svelte</code>.

Let's reset it all the way to the root layout, by renaming it to `+page@.svelte`.

> The root layout applies to every page of your app, you cannot break out of it.

[Next: Advanced loading](/part4/advanced-loading/universal-load-functions)
