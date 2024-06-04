<script>
  import { fade, fly } from 'svelte/transition';
  let visible = true;

  import Tutorial from './Tutorial.md';
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <p in:fly={{ y: 200, duration: 2000 }} out:fade>Flies in, fades out</p>
{/if}

<div class="tutorial absolute top-[25%]">
  <Tutorial />
</div>
