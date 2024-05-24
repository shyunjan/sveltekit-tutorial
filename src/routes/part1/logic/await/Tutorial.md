------
# **Await blocks**
Most web applications have to deal with asynchronous data at some point. Svelte makes it easy to _await_ the value of [promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) directly in your markup:
```svelte title="src/routes/part1/logic/keyed-each/+page.svelte" /{#await p}/ /{:then n}/ /{:catch error}/ "{/await}"
{#await p}
  <p>...waiting</p>
{:then n}
  <p>The number is {n}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
```
> Only the most recent `promise` is considered, meaning you don't need to worry about race conditions.

If you know that your promise can't reject, you can omit the `catch` block. You can also omit the first block if you don't want to show anything until the promise resolves:
```svelte
{#await p then n}
  <p>The number is {n}</p>
{/await} 
```
