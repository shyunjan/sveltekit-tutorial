------
# **beforeUpdate and afterUpdate**

------
# **onMount**
Every component has a _lifecycle_ that starts when it is created, and ends when it is destroyed. There are a handful of functions that allow you to run code at key moments during that lifecycle. The one you'll use most frequently is `onMount`, which runs after the component is first rendered to the DOM.

In this exercise, we have a `<canvas>` that we'd like to animate, using the `paint` function in <code data-file="src/routes/part1/lifecycle/onMount/gradient.js">gradient.js</code>. Begin by importing the `onMount` function from `svelte`. Then, add a callback that runs when the component mounts:
```svelte title="src/routes/part1/lifecycle/onMount/+page.svelte" {2, 5-13}
<script>
  import { onMount } from 'svelte';
  import { paint } from './gradient.js';

  onMount(() => {
    const canvas = document.querySelector('canvas');
    const context = canvas?.getContext('2d');

    requestAnimationFrame(function loop(t) {
      requestAnimationFrame(loop);
      paint(context, t);
    });
  });  
</script>
```
> In a [later exercise](https://learn.svelte.dev/tutorial/bind-this), we'll learn how to get an element reference without using `document.querySelector`.

So far so good — you should see gently undulating colours in the shape of the Svelte logo. But there's one problem — the loop will continue even after the component has been destroyed. To fix that, we need to return a cleanup function from `onMount`:
```svelte title="src/routes/part1/lifecycle/onMount/+page.svelte" /let/ /frame = / /return () => {/ /cancelAnimationFrame(frame);/ /};/
<script>
  import { onMount } from 'svelte';
  import { paint } from './gradient.js';

  onMount(() => {
    const canvas = document.querySelector('canvas');
    const context = canvas?.getContext('2d');

    let frame = requestAnimationFrame(function loop(t) {
      frame = requestAnimationFrame(loop);
      paint(context, t);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>
```

[Next: beforeUpdate and afterUpdate](/part1/lifecycle/beforeUpdate-afterUpdate)
