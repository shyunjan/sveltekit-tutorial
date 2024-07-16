------
# **Universal load functions**
In the [previous section on loading](/part3/loading-data/page) we loaded data from the server using `+page.server.js` and `+layout.server.js` files. This is very convenient if you need to do things like getting data directly from a database, or reading cookies.

Sometimes it doesn't make sense to load data from the server when doing a client-side navigation. For example:
- You're loading data from an external API
- You want to use in-memory data if it's available
- You want to delay navigation until an image has been preloaded, to avoid pop-in
- You need to return something from `load` that can't be serialized (SvelteKit uses [devalue](https://github.com/Rich-Harris/devalue) to turn server data into JSON), such as a component or a store

In this exercise, we're dealing with the latter case. The server `load` functions in <code data-file="src/routes/part4/advanced-loading/universal-load-functions/red/+page.server.ts">src/routes/part4/advanced-loading/universal-load-functions/red/+page.server.js</code>, <code data-file="./green/+page.server.ts">src/routes/part4/advanced-loading/universal-load-functions/green/+page.server.js</code> and <code data-file="./blue/+page.server.ts">src/routes/part4/advanced-loading/universal-load-functions/blue/+page.server.js</code> return a `component` constructor, which can't be serialized like data. If you navigate to `/red`, `/green` or `/blue`, you'll see a 'Data returned from `load` ... is not serializable' error in the terminal.

To turn the server `load` functions into universal `load` functions, rename each `+page.server.js` file to `+page.js`. Now, the functions will run on the server during server-side rendering, but will also run in the browser when the app hydrates or the user performs a client-side navigation.

We can now use the `component` returned from these `load` functions like any other value, including in <code data-file="./+layout.svelte">src/routes/part4/advanced-loading/universal-load-functions/+layout.svelte</code>:
```svelte title="src/routes/part4/advanced-loading/universal-load-functions/+layout.svelte" {10} "  {#if $page.data.component}" "  {/if}"
<nav class:has-color={!!$page.data.color} 
     style:background={$page.data.color ?? 'hsl(var(--fg-1))'}
>
  <a href="/part4/advanced-loading/universal-load-functions">home</a>
  <a href="/part4/advanced-loading/universal-load-functions/red">red</a>
  <a href="/part4/advanced-loading/universal-load-functions/green">green</a>
  <a href="/part4/advanced-loading/universal-load-functions/blue">blue</a>

  {#if $page.data.component}
    <svelte:component this={$page.data.component} />
  {/if}
</nav>
```
Read the [documentation](https://kit.svelte.dev/docs/load#universal-vs-server) to learn more about the distinction between server `load` functions and universal `load` functions, and when to use which.

[Next: Using both load functions](/part4/advanced-loading/using-both-load-functions)
