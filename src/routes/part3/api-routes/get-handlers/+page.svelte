<script>
  /** @type {number} */
  let number;

  async function roll() {
    const response = await fetch('/part3/api-routes/get-handlers/roll');
    number = await response.json();
  }
</script>

<button on:click={roll}>Roll the dice</button>

{#if number !== undefined}
  <p>You rolled a {number}</p>
{/if}
