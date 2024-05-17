------
# **Reactivity**
At the heart of Svelte is a powerful system of _reactivity_ for keeping the DOM in sync with your application state — for example, in response to an event:  
```svelte title="src/routes/part1/reactivity/+page.svelte" "++count" "on:click={increment}"
<script>
  ...
  function increment() {
    ++count;
  }
</script>
...
<button on:click={increment}>
  Clicked {count}
  {count <= 1 ? 'time' : 'times'}
</button>
```
Svelte 'instruments' this assignment with some code that tells it the DOM will need to be updated.  
  
------
# **Declarations**
Svelte automatically updates the DOM when your component's state changes. Often, some parts of a component's state need to be computed from _other parts_, and recomputed whenever they change.  
For these, we have _reactive declarations_. They look like this:
```svelte title="src/routes/part1/reactivity/+page.svelte" {3,10}
<script>
  let count = 0;
  $: doubled = count * 2;
  ...
</script>
...
<button>
  ...
</button>
<p>{count} doubled is {doubled}</p>
```
If a reactive statement consists entirely of an assignment to an undeclared variable, Svelte will inject a `let` declaration on your behalf.
> Don't worry if this looks a little alien. It's [valid](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label) (if unconventional) JavaScript, which Svelte interprets to mean 're-run this code whenever any of the referenced values change'. Once you get used to it, there's no going back.  

> Note that reactive declarations and statements will run after other script code and before component markup is rendered.  
  
------
# **Statements**
We're not limited to declaring reactive _values_ — we can also run arbitrary _statements_ reactively. For example, we can log the value of `count` whenever it changes:  
You can easily group statements together with a block:  
```svelte title="src/routes/part1/reactivity/+page.svelte" {4-7}
<script>
  let count = 0;
  ...
  $: {
    console.log(`the count is ${count}`);
    console.log(`this will also be logged whenever count changes`);
  }
  ...
</script>
```
You can even put the `$:` in front of things like `if` blocks:
```svelte title="src/routes/part1/reactivity/+page.svelte" "if (count >= 10)"
  $: if (count >= 10) {
    alert('count is dangerously high!');
    count = 0;
  }
```
...
------
# **Updating arrays and objects**
