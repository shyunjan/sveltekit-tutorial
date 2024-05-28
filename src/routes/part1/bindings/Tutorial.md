------
# **Text Inputs**
As a general rule, data flow in Svelte is _top down_ — a parent component can set props on a child component, and a component can set attributes on an element, but not the other way around.

Sometimes it's useful to break that rule. Take the case of the `<input>` element in this component — we could add an `on:input` event handler that sets the value of `name` to `event.target.value`, but it's a bit... boilerplatey. It gets even worse with other form elements, as we'll see.

Instead, we can use the `bind:value` directive:
```svelte title="src/routes/part1/bindings/+page.svelte" /bind:/
<input bind:value={name} />
```
This means that not only will changes to the value of `name` update the input value, but changes to the input value will update `name`.

------
# **Numeric inputs**
In the DOM, everything is a string. That's unhelpful when you're dealing with numeric inputs — `type="number"` and `type="range"` — as it means you have to remember to coerce `input.value` before using it.

With `bind:value`, Svelte takes care of it for you:
```svelte title="src/routes/part1/bindings/+page.svelte" /bind:/
<label>
  <input type="number" bind:value={a} min="0" max="10" />
  <input type="range" bind:value={a} min="0" max="10" />
</label>

<label>
  <input type="number" bind:value={b} min="0" max="10" />
  <input type="range" bind:value={b} min="0" max="10" />
</label>
```
...
------
# **Checkbox inputs**
Checkboxes are used for toggling between states. Instead of binding to `input.value`, we bind to `input.checked`:
```svelte title="src/routes/part1/bindings/+page.svelte" /bind:/
<input type="checkbox" bind:checked={yes} />
```
...
------
# **Select bindings**
We can also use `bind:value` with `<select>` elements:
```svelte title="src/routes/part1/bindings/+page.svelte" /bind:/
<select 
  bind:value={selected} 
  on:change={() => answer = ''}
>
```
Note that the `<option>` values are objects rather than strings. Svelte doesn't mind.
> Because we haven't set an initial value of `selected`, the binding will set it to the default value (the first in the list) automatically. Be careful though — until the binding is initialised, `selected` remains undefined, so we can't blindly reference e.g. `selected.id` in the template.