------
# **Adding parameters**
Like transitions and animations, an action can take an argument, which the action function will be called with alongside the element it belongs to.

In this exercise, we want to add a tooltip to the `<button>` using the [Tippy.js](https://atomiks.github.io/tippyjs/) library. The action is already wired up with `use:tooltip`, but if you hover over the button (or focus it with the keyboard) the tooltip contains no content.

First, the action needs to accept some options and pass them to Tippy:
```js title="src/routes/part2/actions/adding-parameters/+page.svelte" /options/
function tooltip(node, options) {
  const tooltip = tippy(node, options);

  return {
    destroy() {
      tooltip.destroy();
    }
  };
}
```
Then, we need to pass some options into the action:
```svelte title="src/routes/part2/actions/adding-parameters/+page.svelte" /={{ content, theme: 'material' }}/
<button use:tooltip={{ content, theme: 'material' }}>
  Hover me
</button>
```
The tooltip now works — almost. If we change the text in the `<input>`, the tooltip will not reflect the new content. We can fix that by adding an `update` method to the returned object.
```js title="src/routes/part2/actions/adding-parameters/+page.svelte" {6} /update(options) {/ /},/
function tooltip(node, options) {
  const tooltip = tippy(node, options);

  return {
    update(options) {
      tooltip.setProps(options);
    },
    destroy() {
      tooltip.destroy();
    }
  };
}
```

[Next: Advanced bindings](/part2/advanced-bindings/contenteditable-bindings)