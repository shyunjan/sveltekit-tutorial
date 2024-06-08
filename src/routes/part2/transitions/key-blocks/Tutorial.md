------
# **Key blocks**
Key blocks destroy and recreate their contents when the value of an expression changes. This is useful if you want an element to play its transition whenever a value changes instead of only when the element enters or leaves the DOM.

Here, for example, we'd like to play the `typewriter` transition from <code data-file="src/routes/part2/transitions/key-blocks/transition.js">transition.js</code> whenever the loading message, i.e. `i` changes. Wrap the `<p>` element in a key block:
```svelte title="src/routes/part2/transitions/key-blocks/+page.svelte" /{#key i}/ "{/key}"
{#key i}
  <p in:typewriter={{ speed: 10 }}>
    {messages[i] || ''}
  </p>
{/key}
```

[Next: Deferred transitions](/part2/transitions/deferred)