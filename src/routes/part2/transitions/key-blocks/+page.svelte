<script>
  import { onMount } from 'svelte';
  import { typewriter } from './transition.js';
  import { messages } from './loading-messages.js';

  let i = -1;

  onMount(() => {
    const interval = setInterval(() => {
      i += 1;
      i %= messages.length;
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  });

  import Tutorial from './Tutorial.md';
</script>

<h1>loading...</h1>

{#key i}
  <p in:typewriter={{ speed: 10 }}>
    {messages[i] || ''}
  </p>
{/key}

<div class="tutorial absolute top-[20%]">
  <Tutorial />
</div>
