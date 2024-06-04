------
# **Adding parameters**
Transition functions can accept parameters. Replace the `fade` transition with `fly`...and apply it to the `<p>` along with some options:
```svelte title="src/routes/part2/transitions/adding-parameters/+page.svelte" /fly/ /={{ y: 200, duration: 2000 }}/ /Flies/
<script>
  import { fly } from 'svelte/transition';
  let visible = true;
</script>
...
<p transition:fly={{ y: 200, duration: 2000 }}>
  Flies in and out
</p>
```
Note that the transition is _reversible_ — if you toggle the checkbox while the transition is ongoing, it transitions from the current point, rather than the beginning or the end.

[Next: In and out](/part2/transitions/in-and-out)

------
# **Transition events**
