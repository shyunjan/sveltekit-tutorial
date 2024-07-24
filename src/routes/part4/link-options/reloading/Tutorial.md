------
# **Reloading the page**
Ordinarily, SvelteKit will navigate between pages without refreshing the page. In this exercise, if we navigate between `/` and `/about`, the timer keeps on ticking.

In rare cases, you might want to disable this behaviour. You can do so by adding the `data-sveltekit-reload` attribute on an individual link, or any element that contains links:
```svelte title="src/routes/part4/link-options/reloading/+layout.svelte" /data-sveltekit-reload/
<nav data-sveltekit-reload>
  <a href="/part4/link-options/reloading">home</a>
  <a href="/part4/link-options/reloading/test_for_reloading">reloading test</a>
</nav>
```
For more information on available link options and their values, consult the [link options documentation](https://kit.svelte.dev/docs/link-options).

[Next: Advanced routing](/part4/advanced-routing/optional-parameters)
