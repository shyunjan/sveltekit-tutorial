------
# **Select multiple**
A `<select>` element can have a `multiple` attribute, in which case it will populate an array rather than selecting a single value.
```svelte title="src/routes/part1/bindings/group-inputs/+page.svelte" {1,5} "<option>{flavour}</option>"
<select multiple bind:value={flavours}>
  {#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavour}
    <option>{flavour}</option>
  {/each}
</select>
```
Note that we're able to omit the `value` attribute on the `<option>`, since the value is identical to the element's contents.
> Press and hold the `control` key (or the `command` key on MacOS) to select multiple options.

[Next: Textarea inputs](/part1/bindings/textarea-inputs)