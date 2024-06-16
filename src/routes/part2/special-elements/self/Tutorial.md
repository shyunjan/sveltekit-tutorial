------
# **&amp;lt;svelte:self&amp;gt;**
Svelte provides a variety of built-in elements. The first, `<svelte:self>`, allows a component to contain itself recursively.

It's useful for things like this folder tree view, where folders can contain _other_ folders. In <code data-file="src/routes/part2/special-elements/self/Folder.svelte">Folder.svelte</code> we want to be able to do this...
```svelte title="src/routes/part2/special-elements/self/Folder.svelte"
{#if file.files}
  <Folder {...file}/>
{:else}
  <File {...file}/>
{/if}
```
...but that's impossible, because a module can't import itself. Instead, we use `<svelte:self>`:
```svelte title="src/routes/part2/special-elements/self/Folder.svelte" "<svelte:self {...file} />"
{#if file.files}
  <svelte:self {...file} />
{:else}
  <File {...file} />
{/if}
```

[Next: &amp;lt;svelte:component&amp;gt;](/part2/special-elements/component)