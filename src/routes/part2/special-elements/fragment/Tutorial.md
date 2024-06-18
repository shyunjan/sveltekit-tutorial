-----
# **&amp;lt;svelte:fragment&amp;gt;**
The `<svelte:fragment>` element allows you to place content in a named slot without wrapping it in a container DOM element.

In this exercise, we're making a Tic-Tac-Toe game. To form a grid, the `<button>` elements in <code data-file="src/routes/part2/special-elements/fragment/+page.svelte">App.svelte</code> should be direct descendants of the `<div class="board">` element in <code data-file="./Board.svelte">Board.svelte</code>.

At the moment, it's horribly broken, because they're children of `<div slot="game">` instead. Let's fix it:
```svelte title="src/routes/part2/special-elements/fragment/+page.svelte" /svelte:fragment/
<svelte:fragment slot="game">
  {#each squares as square, i}
    <button
      class="square"
      class:winning={winningLine?.includes(i)}
      disabled={square}
      on:click={() => {
        squares[i] = next;
        next = next === 'x' ? 'o' : 'x';
      }}
    >
      {square}
    </button>
  {/each}
</svelte:fragment>
```

[Next: Module context](/part2/advanced-bindings/media-elements)
