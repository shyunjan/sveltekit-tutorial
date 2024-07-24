<script>
  let count = 0;

  function increment() {
    count = count < 11 ? ++count : 0;
  }

  import Tutorial from './Tutorial.md';
</script>

<button on:click={increment}>
  Clicked {count}
  {count < 2 ? 'time' : 'times'}
</button>

{#if count > 10}
  <p>{count} is greater than 10</p>
{:else if count > 4}
  <p>{count} is between 5 and 10</p>
{:else}
  <p>{count} is less than 5</p>
{/if}

<div class="tutorial">
  <Tutorial />
</div>
