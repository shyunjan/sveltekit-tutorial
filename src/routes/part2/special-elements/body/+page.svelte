<script lang="ts">
  import { onMount } from 'svelte';
  import kitten from './kitten.png';

  let hereKitty = false;
  let body: HTMLElement;

  function bindBody(node: HTMLElement) {
    body = node;
    body.style.overflow = 'hidden';
  }

  onMount(() => {
    return () => {
      if (body) {
        body.style.overflow = 'auto';
      }
    };
  });
</script>

<svelte:body
  use:bindBody
  on:mouseenter={() => (hereKitty = true)}
  on:mouseleave={() => (hereKitty = false)}
/>

<!-- creative commons BY-NC http://www.pngall.com/kitten-png/download/7247 -->
<img class:curious={hereKitty} alt="Kitten wants to know what's going on" src={kitten} />

<style>
  img {
    position: absolute;
    left: 0;
    bottom: -60px;
    transform: translate(-80%, 0) rotate(-15deg);
    transform-origin: 100% 100%;
    transition: transform 0.4s;
  }

  .curious {
    transform: translate(-15%, 0) rotate(0deg);
  }

  :global(body) {
    overflow: hidden;
  }
</style>
