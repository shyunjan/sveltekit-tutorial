------
# **The class directive**
Like any other attribute, you can specify classes with a JavaScript attribute. Here, we could add a `flipped` class to the card:
```svelte title="src/routes/part2/actions/use-directive/+page.svelte" /{flipped ? 'flipped' : ''}/
<button 
  class="card {flipped ? 'flipped' : ''}"
  on:click={() => flipped = !flipped}
>
```
This works as expected — if you click on the card now, it'll flip.

We can make it nicer though. Adding or removing a class based on some condition is such a common pattern in UI development that Svelte includes a special directive to simplify it:
```svelte title="src/routes/part2/actions/use-directive/+page.svelte" /class:flipped={flipped}/
<button 
  class="card"
  class:flipped={flipped}
  on:click={() => flipped = !flipped}
>
```
This directive means 'add the `flipped` class whenever `flipped` is truthy'.

------
# **Shorthand class directive**
Often, the name of the class will be the same as the name of the value it depends on. In those cases we can use a shorthand form:
```svelte title="src/routes/part2/actions/use-directive/+page.svelte" /class:flipped/
<button 
  class="card"
  class:flipped
  on:click={() => flipped = !flipped}
>
```

[Next: The style directive](/part2/classes&styles/style-directive)
