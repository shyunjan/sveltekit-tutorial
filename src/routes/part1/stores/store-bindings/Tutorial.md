------
# **Store bindings**
If a store is writable — i.e. it has a `set` method — you can bind to its value, just as you can bind to local component state.

In this example we're exporting a writable store `name` and a derived store `greeting` from <code data-file="src/routes/part1/stores/store-bindings/stores.js">stores.js</code>. Update the `<input>` element in <code data-file="src/routes/part1/stores/store-bindings/+page.svelte">App.svelte</code>:
```svelte title="src/routes/part1/stores/store-bindings/+page.svelte" /bind:/
<input bind:value={$name} />
```
Changing the input value will now update `name` and all its dependents.

We can also assign directly to store values inside a component. Add an `on:click` event handler to update `name`:
```svelte title="src/routes/part1/stores/store-bindings/+page.svelte" /on:click={() => ($name += '!')}/
<button on:click={() => ($name += '!')}> 
  Add exclamation mark!
</button>
```
The `$name += '!'` assignment is equivalent to `name.set($name + '!')`.

[Next: Advanced Svelte](/part2/motion/tweens)
