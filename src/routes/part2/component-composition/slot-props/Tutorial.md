------
# **Slot props**
Components can pass data _back_ to their slotted content via _slot props_. In this app, we have a list of named CSS colours. Typing into the `<input>` will filter the list.

Right now every row is showing `AliceBlue`, and as lovely a colour as it is, that's not what we want.

Open <code data-file="src/routes/part2/component-composition/slot-props/FilterableList.svelte">FilterableList.svelte</code>. The `<slot>` is being rendered for each filtered item in the list. Pass the data into the slot:
```svelte title="src/routes/part2/component-composition/slot-props/FilterableList.svelte" /{item}/
<div class="content">
  {#each data.filter(matches) as item}
    <slot {item}></slot>
  {/each}
</div>
```
(As in other contexts, `{item}` is shorthand for `item={item}`.)

Then, on the other side, expose the data to the slotted content with the `let:` directive:
```svelte title="src/routes/part2/component-composition/slot-props/+page.svelte" /let:item={row}/
<FilterableList 
  data={colors}
  field="name"
  let:item={row}
>
  ...
  <div class="row">
    <span class="color" style="background-color: {row.hex}" />
    <span class="name">{row.name}</span>
    <span class="hex">{row.hex}</span>
    <span class="rgb">{row.rgb}</span>
    <span class="hsl">{row.hsl}</span>
  </div>
</FilterableList>
```
Finally, get rid of the placeholder variable, which we no longer need:
```svelte title="src/routes/part2/component-composition/slot-props/+page.svelte" /let row = colors[0];/#del
<script>
  import FilterableList from './FilterableList.svelte';
  import { colors } from './colors.js';

  let row = colors[0];
</script>
```
> Named slots can also have props; use the `let` directive on an element with a `slot="..."` attribute, instead of on the component itself.

------
# **Checking for slot content**
n some cases, you may want to control parts of your component based on whether slotted content was passed in. For example, if we remove the `<header>` from <code data-file="src/routes/part2/component-composition/slot-props/+page.svelte">App.svelte</code>...
```svelte title="src/routes/part2/component-composition/slot-props/+page.svelte" {1-7}#del
<header slot="header" class="row">
  <span class="color" />
  <span class="name">name</span>
  <span class="hex">hex</span>
  <span class="rgb">rgb</span>
  <span class="hsl">hsl</span>
</header>

<div class="row">
  <span class="color" style="background-color: {row.hex}" />
  <span class="name">{row.name}</span>
  <span class="hex">{row.hex}</span>
  <span class="rgb">{row.rgb}</span>
  <span class="hsl">{row.hsl}</span>
</div>
```
...we're left with an ugly double border because <code data-file="./FilterableList.svelte">FilterableList.svelte</code> is still rendering the `<div class="header">`.

We can fix that by using the special `$$slots` variable in <code data-file="./FilterableList.svelte">FilterableList.svelte</code>:
```svelte title="src/routes/part2/component-composition/slot-props/FilterableList.svelte" /{#if $$slots.header}/ "{/if}"
{#if $$slots.header}
  <div class="header">
    <slot name="header" />
  </div>
{/if}
```

[Next: Context API](/part2/context-api)
