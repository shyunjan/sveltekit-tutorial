------
# **In and out**
Instead of the `transition` directive, an element can have an `in` or an `out` directive, or both together. Import `fade` alongside `fly`...then replace the `transition` directive with separate `in` and `out` directives:
```svelte title="src/routes/part2/transitions/in-and-out/+page.svelte" /fade,/ /in:/ /out:fade/ /fades out/
<script>
  import { fade, fly } from 'svelte/transition';
  ...
</script>
...
<p in:fly={{ y: 200, duration: 2000 }} out:fade>
  Flies in, fades out
</p>
```
In this case, the transitions are _not_ reversed.

[Next: Custom CSS transitions](/part2/transitions/custom-css-transitions)
