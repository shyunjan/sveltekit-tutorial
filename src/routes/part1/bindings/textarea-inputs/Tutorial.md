------
# **Textarea inputs**
The `<textarea>` element behaves similarly to a text input in Svelte — use `bind:value`:
```svelte title="src/routes/part1/bindings/textarea-inputs/+page.svelte" /bind:value=/
<textarea bind:value={value}></textarea>
```
In cases like these, where the names match, we can also use a shorthand form:
```svelte title="src/routes/part1/bindings/textarea-inputs/+page.svelte" /bind:value/
<textarea bind:value></textarea>
```
This applies to all bindings, not just textareas.
