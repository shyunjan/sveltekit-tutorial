------
# **Dom Events**
As we've briefly seen already, you can listen to any DOM event on an element (such as click or [pointermove](https://developer.mozilla.org/en-US/docs/Web/API/Element/pointermove_event)) with the `on:` directive:
```svelte title="src/routes/part1/events/+page.svelte" /on:pointermove={handleMove}/
<div on:pointermove={handleMove}>
  The pointer is at {m.x} x {m.y}
</div>
```
...
------
# **Inline handlers**
You can also declare event handlers inline:
```svelte title="src/routes/part1/events/+page.svelte" /{(e) => {/ /m = { x: e.clientX, y: e.clientY };/ /}}/
<script>
  let m = { x: 0, y: 0 };
</script>

<div on:pointermove={(e) => {
  m = { x: e.clientX, y: e.clientY };
}}>
  The pointer is at {m.x} x {m.y}
</div> 
```
> In some frameworks you may see recommendations to avoid inline event handlers for performance reasons, particularly inside loops. That advice doesn't apply to Svelte — the compiler will always do the right thing, whichever form you choose.

[Next: Event modifiers](http://localhost:5173/part1/events/modifiers)