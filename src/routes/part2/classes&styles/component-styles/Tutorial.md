------
# **Component styles**
Often, you need to influence the styles inside a child component. Perhaps we want to make these boxes red, green and blue.

One way to do this is with the `:global` CSS modifier, which allows you to indiscriminately target elements inside other components:
```svelte title="src/routes/part2/classes&styles/component-styles/+page.svelte" 
<style>
  .boxes :global(.box:nth-child(1)) {
    background-color: red;
  }

  .boxes :global(.box:nth-child(2)) {
    background-color: green;
  }

  .boxes :global(.box:nth-child(3)) {
    background-color: blue;
  }
</style>
```
But there are lots of reasons _not_ to do that. For one thing, it's extremely verbose. For another, it's brittle — any changes to the implementation details of <code data-file="./Box.svelte">Box.svelte</code> could break the selector.

Most of all though, it's rude. Components should be able to decide for themselves which styles can be controlled from 'outside', in the same way they decide which variables are exposed as props. `:global` should be used as an escape hatch — a last resort.

Inside <code data-file="./Box.svelte">Box.svelte</code>, change `background-color` so that it is determined by a [CSS custom property](https://developer.mozilla.org/en-US/docs/Web/CSS/--*):
```svelte title="src/routes/part2/classes&styles/component-styles/Box.svelte" /var(--color, #ddd)/
<style>
  .box {
    width: 5em;
    height: 5em;
    border-radius: 0.5em;
    margin: 0 0 1em 0;
    background-color: var(--color, #ddd);
  }
</style>
```
Any parent element (such as `<div class="boxes">`) can set the value of `--color`, but we can also set it on individual components:
```svelte title="src/routes/part2/classes&styles/component-styles/+page.svelte" /--color="red"/ /--color="green"/ /--color="blue"/
<div class="boxes">
  <Box --color="red" />
  <Box --color="green" />
  <Box --color="blue" />
</div>
```
The values can be dynamic, like any other attribute.

This feature works by wrapping each component in a `<div style="display: contents">`, where needed, and applying the custom properties to it.

[Next: Component composition](/part2/component-composition/slots)
