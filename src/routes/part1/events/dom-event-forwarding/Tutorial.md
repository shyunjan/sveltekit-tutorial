------
# **DOM event forwarding**
Event forwarding works for DOM events too.

We want to get notified of clicks on our `<BigRedButton>` — to do that, we just need to forward `click` events on the `<button>` element in <code data-file="src/routes/part1/events/dom-event-forwarding/BigRedButton.svelte">BigRedButton.svelte</code>:
```svelte title="src/routes/part1/events/dom-event-forwarding/BigRedButton.svelte" /on:click/
<button on:click>
  Push
</button>
```

[Next: Bindings](/part1/bindings)