<script>
  import { fly } from 'svelte/transition';
  let visible = true;
  let status = 'waiting...';

  import Tutorial from './Tutorial.md';
</script>

<p>status: {status}</p>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <p
    transition:fly={{ x: 100, y: 200, duration: 2000 }}
    on:introstart={() => (status = 'intro started')}
    on:outrostart={() => (status = 'outro started')}
    on:introend={() => (status = 'intro ended')}
    on:outroend={() => (status = 'outro ended')}
  >
    Flies in and out
  </p>
{/if}

<div class="tutorial absolute top-[25%]">
  <Tutorial />
</div>
