<script>
  /**
   * @type {string}
   */
  export let message;
</script>

<!-- svelte-ignore a11y-distracting-elements -->
<marquee>
  <h1>{message}</h1>
</marquee>

<style>
  marquee {
    font-family: 'Comic Sans MS';
    color: #e60073;
  }
</style>
