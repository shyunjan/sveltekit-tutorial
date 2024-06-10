------
# **Slots**
Just like elements can have children...so can components. Before a component can accept children, though, it needs to know where to put them. We do this with the `<slot>` element. Put this inside <code data-file="src/routes/part2/component-composition/slots/Card.svelte">Card.svelte</code>:
```svelte title="src/routes/part2/component-composition/slots/Card.svelte" "<slot></slot>"
<div class="card">
  <slot></slot>
</div>
```
You can now put things on the card:
```svelte title="src/routes/part2/component-composition/slots/+page.svelte" "<span>Patrick BATEMAN</span>" "<span>Vice President</span>"
<Card>
  <span>Patrick BATEMAN</span>
  <span>Vice President</span>
</Card>
```

------
# **Named slots**

------
# **Slot fallbacks**

