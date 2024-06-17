------
# **&amp;lt;svelte:document&amp;gt;**
The `<svelte:document>` element allows you to listen for events that fire on `document`. This is useful with events like `selectionchange`, which doesn't fire on `window`.

Add the `selectionchange` handler to the `<svelte:document>` tag:
```svelte title="src/routes/part2/special-elements/document/+page.svelte" /on:selectionchange={handleSelectionChange}/
<svelte:document on:selectionchange={handleSelectionChange} />
```
> Avoid `mouseenter` and `mouseleave` handlers on this element, as these events are not fired on `document` in all browsers. Use `<svelte:body>` instead.

[Next: &amp;lt;svelte:head&amp;gt;](/part2/special-elements/head)
