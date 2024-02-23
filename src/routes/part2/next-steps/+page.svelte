<script lang="ts">
  import { onMount } from 'svelte';

  let characters = ['🥳', '🎉', '✨'];

  let confetti = new Array(100)
    .fill(undefined)
    .map((_, i) => {
      return {
        character: characters[i % characters.length],
        x: Math.random() * 100,
        y: -20 - Math.random() * 100,
        r: 0.1 + Math.random() * 1
      };
    })
    .sort((a, b) => a.r - b.r);

  onMount(() => {
    // window.document.body.style.overflow = 'hidden';
    const nav = window.document.body.getElementsByTagName('nav')[0];
    nav.style.display = 'none';

    let frame: number;
    
    function loop() {
      frame = requestAnimationFrame(loop);
      
      confetti = confetti.map((emoji) => {
        emoji.y += 0.3 * emoji.r;
        if (emoji.y > 120) emoji.y = -20;
        return emoji;
      });
    }
    
    loop();
    
    return () => {
      cancelAnimationFrame(frame);
      nav.style.display = 'flex';
    }
  });
  
  function changeStyle(node: HTMLElement) {
    node.style.overflow = "hidden";
  }
</script>

<svelte:body use:changeStyle />

{#each confetti as c}
  <span style="left: {c.x}%; top: {c.y}%; transform: scale({c.r})">{c.character}</span>
{/each}

<style>
  /* :global(body) {
    overflow: hidden;
  } */

  span {
    position: absolute;
    font-size: 5vw;
    user-select: none;
  }
</style>
