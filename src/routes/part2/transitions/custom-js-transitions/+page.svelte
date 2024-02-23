<script lang="ts">
  let visible = false;

  function typewriter(node: HTMLElement, { speed = 1 } = { speed: 1 }) {
    const valid = node.childNodes.length === 1 && node.childNodes[0].nodeType === Node.TEXT_NODE;
    if (!valid) {
      throw new Error(`This transition only works on elements with a single text node child`);
    }

    const text = node.textContent ?? '';
    const duration = text.length / (speed * 0.01);
    // console.debug(`text = ${text}`);
    
    return {
      duration,
      tick: (t: number) => {
        // console.debug(`tick(): text = ${text}`);
        const i = Math.trunc(text.length * t);
        node.textContent = text.slice(0, i);
      }
    };
  }
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <p transition:typewriter>The quick brown fox jumps over the lazy dog</p>
{/if}
