------
# **Global transitions**
Ordinarily, transitions will only play on elements when their direct containing block is added or destroyed. In the example here, toggling the visibility of the entire list does not apply transitions to individual list elements.

Instead, we'd like transitions to not only play when individual items are added and removed with the slider but also when we toggle the checkbox.

We can achieve this with a _global_ transition, which plays when _any_ block containing the transitions is added or removed:
```svelte title="src/routes/part2/transitions/global/+page.svelte" /|global/
<div transition:slide|global>
  {item}
</div>
```
> In Svelte 3, transitions were global by default and you had to use the `|local` modifier to make them local.

[Next: Key blocks](/part2/transitions/key-blocks)
