------
# **setContext and getContext**
The context API provides a mechanism for components to 'talk' to each other without passing around data and functions as props, or dispatching lots of events. It's an advanced feature, but a useful one. In this exercise, we're going to recreate [Schotter](https://collections.vam.ac.uk/item/O221321/schotter-print-nees-georg/) by George Nees — one of the pioneers of generative art — using the context API.

Inside <code data-file="src/routes/part2/context-api/Canvas.svelte">Canvas.svelte</code>, there's an `addItem` function that adds an item to the canvas. We can make it available to components inside `<Canvas>`, like `<Square>`, with `setContext`:
```svelte title="src/routes/part2/context-api/Canvas.svelte" /setContext,/ /setContext('canvas', { addItem });/
<script>
  import { setContext, afterUpdate, onMount, tick } from 'svelte';

  // ...

  onMount(() => {
    ctx = canvas.getContext('2d')!;
  });

  setContext('canvas', { addItem });

  function addItem(fn) { ... }

  function draw() { ... }
</script>
```
Inside child components, we can now get the context with, well, `getContext`:
```svelte title="src/routes/part2/context-api/Square.svelte" /import { getContext } from 'svelte';/ /getContext('canvas').addItem(draw);/
<script>
  import { getContext } from 'svelte';

  export let x: number;
  export let y: number;
  export let size: number;
  export let rotate: number;

  getContext('canvas').addItem(draw);

  function draw(ctx: CanvasRenderingContext2D) { ... }
</script>
```
So far, so... boring. Let's add some randomness to the grid:
```svelte title="src/routes/part2/context-api/+page.svelte" /+ jitter(r * 2)/ /rotate={jitter(r * 0.05)}/
<div class="container">
  <Canvas width={800} height={1200}>
    {#each Array(12) as _, c}
      {#each Array(22) as _, r}
        <Square
          x={180 + c * 40 + jitter(r * 2)}
          y={180 + r * 40 + jitter(r * 2)}
          size={40}
          rotate={jitter(r * 0.05)}
        />
      {/each}
    {/each}
  </Canvas>
</div>
```
Like [lifecycle functions](https://learn.svelte.dev/tutorial/onmount), `setContext` and `getContext` must be called during component initialisation. (The context key (`'canvas'` in this case) can be anything you like, including non-strings, which is useful for controlling who can access the context.)

Your context object can include anything, including stores. This allows you to pass values that change over time to child components:
```javascript
// in a parent component
import { setContext } from 'svelte';
import { writable } from 'svelte/store';

setContext('my-context', {
  count: writable(0)
});
```
---
```javascript
// in a child component
import { getContext } from 'svelte';

const { count } = getContext('my-context');

$: console.log({ count: $count });
```

[Next: Special elements](http://localhost:5173/part2/special-elements/self)
