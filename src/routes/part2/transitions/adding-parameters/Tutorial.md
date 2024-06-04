------
# **Adding parameters**
Transition functions can accept parameters. Replace the `fade` transition with `fly`...and apply it to the `<p>` along with some options:
```svelte title="src/routes/part2/transitions/directive/+page.svelte" /fly/ /={{ y: 200, duration: 2000 }}/ /Flies/
<script>
  import { fly } from 'svelte/transition';
  let visible = true;
</script>
...
<p transition:fly={{ y: 200, duration: 2000 }}>
  Flies in and out
</p>
```
[Next: In and out](/part2/transitions/in-and-out)

------
# **Transition events**
