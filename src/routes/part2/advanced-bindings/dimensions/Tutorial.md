------
# **Dimensions**
Every block-level element has `clientWidth`, `clientHeight`, `offsetWidth` and `offsetHeight` bindings:
```svelte title="src/routes/part2/advanced-bindings/dimensions/+page.svelte" /bind:clientWidth={w} bind:clientHeight={h}/
<div bind:clientWidth={w} bind:clientHeight={h}>
  <span style="font-size: {size}px" contenteditable>{text}</span>
  <span class="size">{w} x {h}px</span>
</div>
```
These bindings are readonly — changing the values of `w` and `h` won't have any effect on the element.

> Elements are measured using a technique similar to this one. There is some overhead involved, so it's not recommended to use this for large numbers of elements.
>
> `display: inline` elements cannot be measured with this approach; nor can elements that can't contain other elements (such as `<canvas>`). In these cases you will need to measure a wrapper element instead.

[Next: This](/part2/advanced-bindings/this)
