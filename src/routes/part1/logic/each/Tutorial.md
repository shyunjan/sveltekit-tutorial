------
# **Each blocks**
Instead of laboriously copying, pasting and editing, we can get rid of all but the first button, then use an `each` block. And we need to use the `color` variable in place of `"red"`:
```svelte title="src/routes/part1/logic/each/+page.svelte" {2,9} /colors/ /{color}/ /color/
<div class="picker">
  {#each colors as color}
    <button
      aria-current={selected === color}
      aria-label={color}
      style="background: {color}"
      on:click={() => (selected = color)}
    ></button>
  {/each}
</div>
```
> The expression (`colors`, in this case) can be any array or array-like object (i.e. it has a `length` property). You can loop over generic iterables with `each [...iterable]`.

You can get the current _index_ as a second argument, like so:  
```svelte title="src/routes/part1/logic/each/+page.svelte" ", i" "{i + 1}"
<div class="picker">
  {#each colors as color, i}
    <button
      aria-current={selected === color}
      aria-label={color}
      style="background: {color}"
      on:click={() => (selected = color)}
      >{i + 1}
    </button>
  {/each}
</div>
```

[Next: Keyed each blocks](/part1/logic/keyed-each)