<script>
  import { onMount } from 'svelte';

  let seconds = 0;

  onMount(() => {
    const interval = setInterval(() => {
      seconds += 1;
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  import Tutorial from './Tutorial.md';
</script>

<nav data-sveltekit-reload class="relative mb-6 flex gap-6 rounded bg-stone-100 p-6">
  <a href="/part4/link-options/reloading">Reloading the page &gt; home</a>
  <a href="/part4/link-options/reloading/test_for_reloading">reloading test</a>
</nav>

<slot />

<p>the page has been open for {seconds} seconds</p>

<div class="tutorial">
  <Tutorial />
</div>
