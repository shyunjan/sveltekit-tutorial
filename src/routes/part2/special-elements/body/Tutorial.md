------
# **&amp;lt;svelte:body&amp;gt;**
Similar to `<svelte:window>`, the `<svelte:body>` element allows you to listen for events that fire on `document.body`. This is useful with the `mouseenter` and `mouseleave` events, which don't fire on `window`.

Add these `mouseenter` and `mouseleave` handlers to the `<svelte:body>` tag...
```svelte title="src/routes/part2/special-elements/body/+page.svelte" /on:mouseenter={() => (hereKitty = true)}/ /on:mouseleave={() => (hereKitty = false)}/
<svelte:body
  on:mouseenter={() => (hereKitty = true)}
  on:mouseleave={() => (hereKitty = false)}
/>
```
...and hover over the `<body>`.

[Next: &amp;lt;svelte:document&amp;gt;](/part2/special-elements/document)
