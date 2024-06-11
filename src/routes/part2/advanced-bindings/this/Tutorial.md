------
# **This**
In a [previous exercise](https://learn.svelte.dev/tutorial/onmount), we learned how to use the `onMount` lifecycle function to paint to a canvas.

But the example is buggy — it's using `document.querySelector('canvas')`, which will always return the first `<canvas>` found on the page, which might not be the one belonging to our component.

Instead, we can use the readonly `this` binding to get a reference to the element:
```svelte title="src/routes/part2/advanced-bindings/this/+page.svelte" {6}#del /let canvas;/ /bind:this={canvas}/
<script>
  ...
  let canvas;

  onMount(() => {
    const canvas = document.querySelector('canvas');
    const context = canvas.getContext('2d');

    let frame = requestAnimationFrame(function loop(t) {
      frame = requestAnimationFrame(loop);
      paint(context, t);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<canvas 
  bind:this={canvas}
  width={32}
  height={32}
></canvas>
```
Note that the value of `canvas` will be undefined until the component has mounted.

[Next: Component bindings](/part2/advanced-bindings/component)