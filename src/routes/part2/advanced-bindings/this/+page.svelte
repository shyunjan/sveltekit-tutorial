<script lang="ts">
  import { onMount } from 'svelte';
  import { paint } from './gradient.js';

  let canvas: HTMLCanvasElement;

  onMount(() => {
    // const canvas = document.querySelector('canvas')!;
    const context = canvas.getContext('2d');

    let frame = requestAnimationFrame(function loop(t) {
      frame = requestAnimationFrame(loop);
      paint(context, t);
    });

    return () => {
      cancelAnimationFrame(frame);
    };
  });

  import Tutorial from './Tutorial.md';
</script>

<!-- <canvas width={32} height={32} /> -->
<canvas bind:this={canvas} width={32} height={32} />

<div class="tutorial absolute top-[75%]">
  <Tutorial />
</div>

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
