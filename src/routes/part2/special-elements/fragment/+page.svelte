<script lang="ts">
  import Board from './Board.svelte';
  import { getWinningLine } from './utils.js';

  let squares = Array(9).fill('');
  let next = 'x';

  $: winningLine = getWinningLine(squares);

  import Tutorial from './Tutorial.md';
</script>

<div class="container">
  <Board size={3}>
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

    <div slot="controls">
      <button
        on:click={() => {
          squares = Array(9).fill('');
          next = 'x';
        }}
      >
        Reset
      </button>
    </div>
  </Board>
</div>

<div class="tutorial">
  <Tutorial />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    justify-content: center;
    height: 40vh;
    margin: 0 auto;
  }

  .square,
  .square:disabled {
    background: white;
    border-radius: 0;
    color: #222;
    opacity: 1;
    font-size: 2em;
    padding: 0;
  }

  .winning {
    font-weight: bold;
  }

  .container:has(.winning) .square:not(.winning) {
    color: #ccc;
  }
</style>
