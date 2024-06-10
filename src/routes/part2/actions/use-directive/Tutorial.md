------
# **The use directive**
Actions are essentially element-level lifecycle functions. They're useful for things like:
- interfacing with third-party libraries
- lazy-loaded images
- tooltips
- adding custom event handlers

In this app, you can scribble on the `<canvas>`, and change colours and brush size via the menu. But if you open the menu and cycle through the options with the Tab key, you'll soon find that the focus isn't _trapped_ inside the modal.

We can fix that with an action. Import `trapFocus` from <code data-file="src/routes/part2/actions/use-directive/action.js">actions.js</code>...then add it to the menu with the use: `directive`:
```svelte title="src/routes/part2/actions/use-directive/+page.svelte" "import { trapFocus } from './actions.js';" /use:trapFocus/
<script>
  import Canvas from './Canvas.svelte';
  import { trapFocus } from './actions.js';

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
  let selected = colors[0];
  let size = 10;

  let showMenu = true;
</script>
...
      <div class="menu" use:trapFocus>
        ...
      </div>
      ...
```
Let's take a look at the `trapFocus` function in <code data-file="src/routes/part2/actions/use-directive/action.js">actions.js</code>. An action function is called with a `node` — the `<div class="menu">` in our case — when the node is mounted to the DOM, and can return an action object with a `destroy` method.

First, we need to add an event listener that intercepts Tab key presses:
```js title="src/routes/part2/actions/use-directive/action.js" /node.addEventListener('keydown', handleKeydown);/
focusable()[0]?.focus();

node.addEventListener('keydown', handleKeydown);
```
Second, we need to do some cleanup when the node is unmounted — removing the event listener, and restoring focus to where it was before the element mounted:
```js title="src/routes/part2/actions/use-directive/action.js" {5-10}
focusable()[0]?.focus();

node.addEventListener('keydown', handleKeydown);

return {
  destroy() {
    node.removeEventListener('keydown', handleKeydown);
    previous?.focus();
  }
};
```
Now, when you open the menu, you can cycle through the options with the Tab key.

[Next: Adding parameters](/part2/actions/adding-parameters)

------
# **Binding to component instances**
Just as you can bind to DOM elements, you can bind to component instances themselves with `bind:this`.

This is useful in the rare cases that you need to interact with a component programmatically (rather than by providing it with updated props). It would be nice to add a button to clear the screen.

First, let's export a function from <code data-file="src/routes/part2/actions/use-directive/Canvas.svelte">Canvas.svelte</code>:
```js title="src/routes/part2/actions/use-directive/Canvas.svelte" {5} /export function clear() {/ /}/
export let color;
export let size;
...
export function clear() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}
```
Then, create a reference to the component instance. Finally, add a button that calls the `clear` function::
```svelte title="src/routes/part2/actions/use-directive/+page.svelte" {23} /let canvas;/ /bind:this={canvas}/ /    <button on:click={() => canvas.clear()}>/ "    </button> "
<script>
  import Canvas from './Canvas.svelte';
  import { trapFocus } from './actions.js';

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
  let selected = colors[0];
  let size = 10;

  let showMenu = true;
  let canvas;
  ...
</script>

<div class="container">
  <Canvas bind:this={canvas} color={selected} {size} />
  ...
  <div class="controls">
    <button class="show-menu" on:click={() => showMenu = !showMenu}>
      {showMenu ? 'close' : 'menu'}
    </button>

    <button on:click={() => canvas.clear()}>
      clear
    </button> 
  </div>  
```

[Next: Classes and styles](/part2/classes&styles/css-directive)
