<script lang="ts">
  import { fade } from 'svelte/transition';
  import { elasticOut } from 'svelte/easing';

  let visible = true;

  function spin(node: HTMLElement, { duration }: { duration: number }) {
    return {
      duration,
      css: (t: number) => {
        const eased = elasticOut(t);
        return `
          transform: scale(${eased}) rotate(${eased * 1080}deg);
          color: hsl(
            ${Math.trunc(t * 360)},
            ${Math.min(100, 1000 * (1 - t))}%,
            ${Math.min(50, 500 * (1 - t))}%
          );`;
      }
    };
  }

  import Tutorial from './Tutorial.md';
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <div class="centered" in:spin={{ duration: 8000 }} out:fade>
    <!-- 아래처럼 out: 시에도 spin이 적용 가능하다 -->
    <!-- <div class="centered" in:spin={{ duration: 8000 }} out:spin={{ duration: 2000 }}> -->
    <span>transitions!</span>
  </div>
{/if}

<div class="tutorial absolute top-[75%]">
  <Tutorial />
</div>

<style>
  .centered {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  span {
    position: absolute;
    transform: translate(-50%, -50%);
    font-size: 4em;
  }
</style>
