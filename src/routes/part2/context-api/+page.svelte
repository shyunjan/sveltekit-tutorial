<script lang="ts">
  import Canvas from './Canvas.svelte';
  import Square from './Square.svelte';

  // we use a seeded random number generator to get consistent jitter
  let seed = 1;

  function random() {
    seed *= 16807;
    seed %= 2147483647;
    return (seed - 1) / 2147483646;
  }

  function jitter(amount: number) {
    return amount * (random() - 0.5);
  }
</script>

<div class="mt-16 mb-8 relative">
  Like <a href="https://learn.svelte.dev/tutorial/onmount" target="_blank">lifecycle functions</a>,
  <code>setContext</code> and <code>getContext</code> must be called during component initialisation. 
  (The context key (<code >'canvas'</code > in this case) can be anything you like, including 
  non-strings, which is useful for controlling who can access the context.) Your context object can 
  include anything, including stores. This allows you to pass values that change over time to child 
  components.
</div>
<div class="container">
  <Canvas width={800} height={1200}>
    {#each Array(12) as _, c}
      {#each Array(22) as _, r}
        <Square
          x={180 + c * 40 + jitter(r * 2)}
          y={180 + r * 40 + jitter(r * 2)}
          size={40}
          rotate={jitter(r * 0.05)}
        />
      {/each}
    {/each}
  </Canvas>
</div>

<style>
  .container {
    height: 100%;
    aspect-ratio: 2 / 3;
    margin: 0 auto;
    background: rgb(224, 219, 213);
    filter: drop-shadow(0.5em 0.5em 1em rgba(0, 0, 0, 0.1));
  }
</style>
