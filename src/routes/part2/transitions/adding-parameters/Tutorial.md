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
It can be useful to know when transitions are beginning and ending. Svelte dispatches events that you can listen to like any other DOM event:
```svelte title="src/routes/part2/transitions/adding-parameters/+page.svelte" {3-6}
<p
  transition:fly={{ y: 200, duration: 2000 }}
  on:introstart={() => (status = 'intro started')}
  on:outrostart={() => (status = 'outro started')}
  on:introend={() => (status = 'intro ended')}
  on:outroend={() => (status = 'outro ended')}
>
  Flies in and out
</p>
```
[Next: Global transitions](/part2/transitions/global)
