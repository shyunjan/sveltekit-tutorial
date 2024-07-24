<script>
  import { getRandomNumber } from '$lib';

  let p = getRandomNumber(); // the p is promise

  function handleClick() {
    p = getRandomNumber();
  }

  import Tutorial from './Tutorial.md';
</script>

<button on:click={handleClick}> generate random number </button>

{#await p}
  <p>...waiting</p>
{:then n}
  <p>The number is {n}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}

<!-- waiting 문구나 에러처리가 필요없다면 위의 await 블록을 아래와 같이 바꿀 수 있다 -->
<!-- 
  {#await p then n}
    <p>The number is {n}</p>
  {/await} 
-->

<div class="tutorial">
  <Tutorial />
</div>
