<script>
  import { fade } from 'svelte/transition';
  let visible = true;

  import Tutorial from './Tutorial.md';
</script>

<label>
  <input type="checkbox" bind:checked={visible} />
  visible
</label>

{#if visible}
  <p transition:fade>Fades in and out</p>
{/if}

<div class="tutorial absolute top-[25%]">
  <Tutorial />
</div>
