------
# **&amp;lt;svelte:element&amp;gt;**
Similarly, we don't always know in advance what kind of DOM element to render. `<svelte:element>` comes in handy here. As with the [previous exercise](https://learn.svelte.dev/tutorial/svelte-component), we can replace a long sequence of `if` blocks with a single dynamic element:
```svelte title="src/routes/part2/special-elements/element/+page.svelte" {7-9}
<select bind:value={selected}>
  {#each options as option}
    <option value={option}>{option}</option>
  {/each}
</select>

<svelte:element this={selected}>
  I'm a <code>&lt;{selected}&gt;</code> element
</svelte:element>
```
The `this` value can be any string, or a falsy value — if it's falsy, no element is rendered.

[Next: &amp;lt;svelte:window&amp;gt;](/part2/special-elements/window)
