<script lang="ts">
  import { onMount } from 'svelte';

  let y = 0;
  let body: HTMLElement;

  function bindBody(node: HTMLElement) {
    body = node;
    body.style.height = '400vw';
    body.style.background = 'url(/deepsea.webp)';
    body.style.backgroundSize = 'cover';
  }

  onMount(() => {
    return () => {
      if (body) {
        body.style.height = '100%';
        body.style.background = '';
      }
    };
  });

  import Tutorial from './Tutorial.md';
</script>

<!-- <svelte:body />는 다음 장에 나온다 -->
<svelte:body use:bindBody />

<svelte:window bind:scrollY={y} />

<span>depth: {y}px</span>

<div class="tutorial fixed top-[50%] opacity-80">
  <Tutorial />
</div>

<style>
  /* 아래 global CSS를 사용하면 32라인의 <svelte:body />와 여기에 연결된 bindBody(), onMount()를 사용하지 않아도 되지만 대신에 다른 모든 페이지에 영향을 준다 */
  /* :global(body) {
    height: 400vw;
    background: url(./deepsea.webp);
    background-size: cover;
  } */

  span {
    position: fixed;
    font-size: 2em;
    color: white;
    font-variant: tabular-nums;
  }
</style>
