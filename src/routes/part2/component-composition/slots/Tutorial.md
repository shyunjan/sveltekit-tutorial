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
.
------
# **Named slots**
The previous example contained a _default slot_, which renders the direct children of a component. Sometimes you will need more control over placement. In those cases, we can use _named slots_.

Inside <code data-file="src/routes/part2/component-composition/slots/+page.svelte">App.svelte</code>, we're rendering a `<Card>` component that contains `<span slot="telephone">` and others for `company` and `address`. Let's add the corresponding named slots in <code data-file="src/routes/part2/component-composition/slots/Card.svelte">Card.svelte</code>:
```svelte title="src/routes/part2/component-composition/slots/Card.svelte" {3-4,10} /<header>/ "</header>" /<footer>/ "</footer>"
<div class="card">
  <header>
    <slot name="telephone"></slot>
    <slot name="company"></slot>
  </header>

  <slot></slot>

  <footer>
    <slot name="address"></slot>
  </footer>
</div>
```
We need to add some styles to the `<small>` element in <code data-file="./+page.svelte">App.svelte</code> so that it occupies its own line. The contents of `<Card>` inherit styles from <code data-file="./Card.svelte">Card.svelte</code>, such as `font-family` (the lettering is something called ['Silian Rail'](https://www.youtube.com/watch?v=aZVkW9p-cCU)), but normal scoping rules apply — we need to add the styles to <code data-file="./+page.svelte">App.svelte</code> because that's where the element is:
```svelte title="src/routes/part2/component-composition/slots/+page.svelte" {10-12} /  small {/ /  } /
<style>
  main {
    display: grid;
    place-items: center;
    height: 100%;
    background: url(./wood.svg);
  }

  small {
    display: block;
    font-size: 0.6em;
    text-align: right;
  } 
</style>
```
Alternatively, we could use the `:global` modifier inside <code data-file="./Card.svelte">Card.svelte</code> to target all `small` elements inside `.card`:
```svelte title="src/routes/part2/component-composition/slots/Card.svelte" {5-7} /.card :global(small) {/ /  }/
<style>
  /* ... */

  .card :global(small) {
    display: block;
    font-size: 0.6em;
    text-align: right;
  }
</style>
```
.
------
# **Slot fallbacks**
A component can specify _fallbacks_ for any slots that are left empty, by putting content inside the `<slot>` element:
```svelte title="src/routes/part2/component-composition/slots/Card.svelte" "<i>(telephone)</i>" "<i>(company name)</i>" "<i>(name)</i>" "<i>(address)</i>"
<div class="card">
  <header>
    <slot name="telephone">
      <i>(telephone)</i>
    </slot>
    <slot name="company">
      <i>(company name)</i>
    </slot>
  </header>

  <slot>
    <i>(name)</i>
  </slot>

  <footer>
    <slot name="address">
      <i>(address)</i>
    </slot>
  </footer>
</div>
```

[Next: Slot props](/part2/component-composition/slot-props)
