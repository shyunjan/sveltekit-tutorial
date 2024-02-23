<script>
  import { onMount } from 'svelte';
  import { paint } from './gradient.js';

  onMount(() => {
    const canvas = document.querySelector('canvas');
    const context = canvas?.getContext('2d');

    let frame = requestAnimationFrame(function loop(t) {
      frame = requestAnimationFrame(loop);
      paint(context, t);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<div class="tutorial">
  <p class="note">
    <span>NOTE</span>
    In a <a href="https://learn.svelte.dev/tutorial/bind-this" target="_blank">later exercise</a>, 
		we'll learn how to get an element reference without using document.querySelector.
  </p>
</div>
<canvas width={32} height={32} />

<style>
  canvas {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #666;
    mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
    mask-size: 60vmin;
    -webkit-mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
    -webkit-mask-size: 60vmin;
  }
</style>
