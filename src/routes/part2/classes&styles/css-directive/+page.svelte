<script>
  let flipped = false;

  import Tutorial from './Tutorial.md';
</script>

<div class="container">
  Flip the card
  <button class="card" class:flipped on:click={() => (flipped = !flipped)}>
    <!-- class:flipped 라인은 class:flipped={flipped} 와 같다. -->
    <div class="front">
      <span class="symbol">♠</span>
    </div>
    <div class="back">
      <div class="pattern"></div>
    </div>
  </button>
</div>

<div class="tutorial">
  <Tutorial />
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    gap: 1em;
    height: 100%;
    align-items: center;
    justify-content: center;
    perspective: 100vh;
  }

  .card {
    position: relative;
    aspect-ratio: 2.5 / 3.5;
    font-size: min(1vh, 0.25rem);
    height: 80em;
    background: hsl(var(--fg-2));
    border-radius: 2em;
    transform: rotateY(180deg);
    transition: transform 0.4s;
    transform-style: preserve-3d;
    padding: 0;
    user-select: none;
    cursor: pointer;
  }

  .card.flipped {
    transform: rotateY(0);
  }

  .front,
  .back {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    backface-visibility: hidden;
    border-radius: 2em;
    border: 1px solid hsl(var(--fg-2));
    box-sizing: border-box;
    padding: 2em;
  }

  .front {
    background:
      url(/image/svelte-logo.svg) no-repeat 5em 5em,
      url(/image/svelte-logo.svg) no-repeat calc(100% - 5em) calc(100% - 5em);
    background-size:
      8em 8em,
      8em 8em;
  }

  .back {
    transform: rotateY(180deg);
  }

  .symbol {
    font-size: 30em;
    color: hsl(var(--fg-1));
  }

  .pattern {
    width: 100%;
    height: 100%;
    background-color: hsl(var(--bg-2));
    /* pattern from https://projects.verou.me/css3patterns/#marrakesh */
    background-image: radial-gradient(hsl(var(--bg-3)) 0.9em, transparent 1em),
      repeating-radial-gradient(
        hsl(var(--bg-3)) 0,
        hsl(var(--bg-3)) 0.4em,
        transparent 0.5em,
        transparent 2em,
        hsl(var(--bg-3)) 2.1em,
        hsl(var(--bg-3)) 2.5em,
        transparent 2.6em,
        transparent 5em
      );
    background-size:
      3em 3em,
      9em 9em;
    background-position: 0 0;
    border-radius: 1em;
  }
</style>
