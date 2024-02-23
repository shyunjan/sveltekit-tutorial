<script>
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  /**
   * NOTE
   * The svelte/easing module contains the Penner easing equations
   * (https://web.archive.org/web/20190805215728/http://robertpenner.com/easing/), 
   * or you can supply your own p => t function where p and t are both values between 0 and 1.
   */

  const progress = tweened(0, {
    duration: 400,
    easing: cubicOut
  });
</script>

<progress value={$progress} />

<button on:click={() => progress.set(0)}>
  0%
</button>

<button on:click={() => progress.set(0.25)}>
  25%
</button>

<button on:click={() => progress.set(0.5)}>
  50%
</button>

<button on:click={() => progress.set(0.75)}>
  75%
</button>

<button on:click={() => progress.set(1)}>
  100%
</button>

<h4>The full set of options available to tweened:</h4>
<ul>
  <li><code>delay</code> — milliseconds before the tween starts</li>
  <li><code>duration</code> — either the duration of the tween in milliseconds, or a <code>(from, to) => milliseconds</code> function allowing you to (e.g.) specify longer tweens for larger changes in value</li>
  <li><code>easing</code> — a <code>p => t</code> function</li>
  <li><code>interpolate</code> — a custom <code>(from, to) => t => value</code> function for interpolating between arbitrary values. By default, Svelte will interpolate between numbers, dates, and identically-shaped arrays and objects (as long as they only contain numbers and dates or other valid arrays and objects). If you want to interpolate (for example) colour strings or transformation matrices, supply a custom interpolator</li>
</ul>
<h4>You can also pass these options to <code>progress.set</code> and <code>progress.update</code> as a second argument, in which case they will override the defaults. The <code>set</code> and <code>update</code> methods both return a promise that resolves when the tween completes.</h4>

<style>
  progress {
    display: block;
    width: 100%;
  }
</style>
