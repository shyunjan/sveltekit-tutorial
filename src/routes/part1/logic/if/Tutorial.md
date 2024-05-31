------
# **If blocks**
To conditionally render some markup, we wrap it in an `if` block. Let's add some text that appears when `count` is greater than `10`:
```svelte title="src/routes/part1/logic/if/+page.svelte" {6-8}
<button on:click={increment}>
  Clicked {count}
  {count < 2 ? 'time' : 'times'}
</button>

{#if count > 10}
  <p>{count} is greater than 10</p>
{/if}
```
Try it — update the component, and click on the button.

------
# **Else blocks**
Just like in JavaScript, an `if` block can have an `else` block:
```svelte title="src/routes/part1/logic/if/+page.svelte" {3,4}
{#if count > 10}
  <p>{count} is greater than 10</p>
{:else}
  <p>{count} is between 0 and 10</p>
{/if}
```
> A `#` character always indicates a _block opening_ tag. A `/` character always indicates a _block closing_ tag. A `:` character, as in `{:else}`, indicates a _block continuation_ tag. Don't worry — you've already learned almost all the syntax Svelte adds to HTML.

------
# **Else-if blocks**
Multiple conditions can be 'chained' together with `else if`:
```svelte title="src/routes/part1/logic/if/+page.svelte" {3,4}
{#if count > 10}
  <p>{count} is greater than 10</p>
{:else if count > 4}
  <p>{count} is between 5 and 10</p>
{:else}
  <p>{count} is less than 5</p>
{/if}
```

[Next: Each blocks](/part1/logic/each)