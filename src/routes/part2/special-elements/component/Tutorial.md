------
# **&amp;lt;svelte:component&amp;gt;**
A component can change its type altogether with `<svelte:component>`. In this exercise, we want to show <code data-file="src/routes/part2/special-elements/component/RedThing.svelte">RedThing.svelte</code> if the `color` is `red`, <code data-file="src/routes/part2/special-elements/component/GreenThing.svelte">GreenThing.svelte</code> if it's `green`, and so on.
```svelte title="src/routes/part2/special-elements/component/+page.svelte"
{#if selected.color === 'red'}
  <RedThing/>
{:else if selected.color === 'green'}
  <GreenThing/>
{:else if selected.color === 'blue'}
  <BlueThing/>
{/if}
```
...but it's a little cumbersome. Instead, we can create a single dynamic component:
```svelte title="src/routes/part2/special-elements/component/+page.svelte" "<svelte:component this={selected.component} />"
<select bind:value={selected}>
  {#each options as option}
    <option value={option}>{option.color}</option>
  {/each}
</select>

<svelte:component this={selected.component} />
```
The `this` value can be any component constructor, or a falsy value — if it's falsy, no component is rendered.

[Next: &amp;lt;svelte:element&amp;gt;](/part2/special-elements/element)