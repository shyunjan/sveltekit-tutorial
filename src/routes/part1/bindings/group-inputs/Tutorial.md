------
# **Group inputs**
If you have multiple `type="radio"` or `type="checkbox"` inputs relating to the same value, you can use `bind:group` along with the `value` attribute. Radio inputs in the same group are mutually exclusive; checkbox inputs in the same group form an array of selected values.
```svelte title="src/routes/part1/bindings/group-inputs/+page.svelte" /bind:group={scoops}/ /bind:group={flavours}/
<input 
  type="radio" 
  name="scoops" 
  value={number} 
  bind:group={scoops} 
/>
...
<input 
  type="checkbox" 
  name="flavours" 
  value={flavour} 
  bind:group={flavours} 
/>
```
