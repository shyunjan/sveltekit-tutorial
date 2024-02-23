<script>
  let y = 0;
</script>

<svelte:window bind:scrollY={y} />

<span>depth: {y}px</span>

<div class="tutorial" style="display: inline; position: fixed; top: 75%; color: coral;">
  <p>The list of properties you can bind to is as follows:</p>
  <ul>
    <li><code>innerWidth</code></li>
    <li><code>innerHeight</code></li>
    <li><code>outerWidth</code></li>
    <li><code>outerHeight</code></li>
    <li><code>scrollX</code></li>
    <li><code>scrollY</code></li>
    <li><code>online</code> - an alias for <code>window.navigator.onLine</code></li>
  </ul>
  <p>All except <code>scrollX</code> and <code>scrollY</code> are readonly.</p>
</div>

<style>
  :global(body) {
    height: 400vw;
    background: url(./deepsea.webp);
    background-size: cover;
  }

  span {
    position: fixed;
    font-size: 2em;
    color: white;
    font-variant: tabular-nums;
  }
</style>
