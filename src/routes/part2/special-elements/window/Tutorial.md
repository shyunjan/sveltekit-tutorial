------
# **&amp;lt;svelte:window&amp;gt;**
Just as you can add event listeners to any DOM element, you can add event listeners to the `window` object with `<svelte:window>`.

We've already got a `handleKeydown` function declared — now all we need to do is add a `keydown` listener:
```svelte title="src/routes/part2/special-elements/window/+page.svelte" /on:keydown={handleKeydown}/
<svelte:window on:keydown={handleKeydown} />
```
> As with DOM elements, you can add [event modifiers](https://learn.svelte.dev/tutorial/event-modifiers) like `preventDefault`.

[Next: &amp;lt;svelte:window&amp;gt; bindings](/part2/special-elements/window-bindings)
