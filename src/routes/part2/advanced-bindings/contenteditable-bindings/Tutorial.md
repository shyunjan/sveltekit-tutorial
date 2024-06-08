------
# **Contenteditable bindings**
Elements with a `contenteditable` attribute support `textContent` and `innerHTML` bindings:
```svelte title="src/routes/part2/advanced-bindings/contenteditable-bindings/+page.svelte" "bind:innerHTML={html}"
<div bind:innerHTML={html} contenteditable></div>
```

[Next: Each block bindings](/part2/advanced-bindings/each-block)