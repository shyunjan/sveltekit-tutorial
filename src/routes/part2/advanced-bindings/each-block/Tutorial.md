------
# **Each block bindings**
You can even bind to properties inside an `each` block.
```svelte title="src/routes/part2/advanced-bindings/contenteditable-bindings/+page.svelte" /bind:/
{#each todos as todo}
  <li class:done={todo.done}>
    <input 
      type="checkbox" 
      bind:checked={todo.done} />

    <input 
      type="text" 
      placeholder="What needs to be done?" 
      bind:value={todo.text} />
  </li>
{/each}
```
> Note that interacting with these `<input>` elements will mutate the array. If you prefer to work with immutable data, you should avoid these bindings and use event handlers instead.

[Next: Media elements](/part2/advanced-bindings/media-elements)