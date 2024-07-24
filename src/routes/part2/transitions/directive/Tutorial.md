------
# **The transition directive**
We can make more appealing user interfaces by gracefully transitioning elements into and out of the DOM. Svelte makes this very easy with the `transition` directive.

First, import the `fade` function from `svelte/transition`...then add it to the `<p>` element:
```svelte title="src/routes/part2/transitions/directive/+page.svelte" "import { fade } from 'svelte/transition';" /transition:fade/
<script>
  import { fade } from 'svelte/transition';
  let visible = true;
</script>
...
<p transition:fade>Fades in and out</p>
```
[Next: Adding parameters](/part2/transitions/adding-parameters)
