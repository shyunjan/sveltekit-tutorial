------
# **Writable stores**
Not all application state belongs inside your application's component hierarchy. Sometimes, you'll have values that need to be accessed by multiple unrelated components, or by a regular JavaScript module.

In Svelte, we do this with _stores_. A store is simply an object with a `subscribe` method that allows interested parties to be notified whenever the store value changes. In <code data-file="src/routes/part1/stores/writable-stores/+page.svelte">App.svelte</code>, `count` is a store, and we're setting `count_value` in the `count.subscribe` callback.

Open <code data-file="./stores.js">stores.js</code> to see the definition of `count`. It's a _writable_ store, which means it has `set` and `update` methods in addition to `subscribe`.

Now, in <code data-file="./Incrementer.svelte">Incrementer.svelte</code>, wire up the `+` button:
```js title="src/routes/part1/stores/writable-stores/Incrementer.svelte" /count.update(n => ++n);/
function increment() {
  count.update(n => ++n);
}
```
Clicking the `+` button should now update the count. Do the inverse for <code data-file="./Decrementer.svelte">Decrementer.svelte</code>.

Finally, in <code data-file="./Resetter.svelte">Resetter.svelte</code>, implement `reset`:
```js title="src/routes/part1/stores/writable-stores/Resetter.svelte" /count.set(0);/
function reset() {
  count.set(0);
}
```
...
------
# **Auto-subscriptions**
The app in the previous example works, but there's a subtle bug — the store is subscribed to, but never unsubscribed. If the component was instantiated and destroyed many times, this would result in a _memory leak_.

Start by declaring `unsubscribe` in <code data-file="src/routes/part1/stores/writable-stores/+page.svelte">App.svelte</code>:
```js title="src/routes/part1/stores/writable-stores/+page.svelte" /const unsubscribe = /
const unsubscribe = count.subscribe((value) => {
  count_value = value;
});
```
> Calling a `subscribe` method returns an `unsubscribe` function.

You now declared `unsubscribe`, but it still needs to be called, for example through the `onDestroy` lifecycle hook:
```svelte title="src/routes/part1/stores/writable-stores/+page.svelte" /import { onDestroy } from 'svelte';/ /onDestroy(unsubscribe);/
<script>
  import { onDestroy } from 'svelte';
  import { count } from './stores.js';
  import Incrementer from './Incrementer.svelte';
  import Decrementer from './Decrementer.svelte';
  import Resetter from './Resetter.svelte';

  let count_value;
  
  const unsubscribe = count.subscribe((value) => {
    count_value = value;
  });

  onDestroy(unsubscribe);
</script>

<h1>The count is {count_value}</h1>
```
It starts to get a bit boilerplatey though, especially if your component subscribes to multiple stores. Instead, Svelte has a trick up its sleeve — you can reference a store value by prefixing the store name with `$`:
```svelte title="src/routes/part1/stores/writable-stores/+page.svelte" {2,8,14, 10-12}#red /$count/
<script>
  import { onDestroy } from 'svelte';
  import { count } from './stores.js';
  import Incrementer from './Incrementer.svelte';
  import Decrementer from './Decrementer.svelte';
  import Resetter from './Resetter.svelte';

  let count_value;
  
  const unsubscribe = count.subscribe((value) => {
    count_value = value;
  });

  onDestroy(unsubscribe);
</script>

<h1>The count is {$count}</h1>
```
> Auto-subscription only works with store variables that are declared (or imported) at the top-level scope of a component.

You're not limited to using `$count` inside the markup, either — you can use it anywhere in the `<script>` as well, such as in event handlers or reactive declarations.

> Any name beginning with `$` is assumed to refer to a store value. It's effectively a reserved character — Svelte will prevent you from declaring your own variables with a `$` prefix.

[Next: Readable stores](/part1/stores/readable-stores)