<script>
  import { slide } from 'svelte/transition';

  let showItems = true;
  let i = 5;
  let items = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
</script>

<label>
  <input type="checkbox" bind:checked={showItems} />
  show list
</label>

<label>
  <input type="range" bind:value={i} max="10" />
</label>

{#if showItems}
  {#each items.slice(0, i) as item}
    <div transition:slide|global>
      {item}
    </div>
  {/each}
{/if}
<br/>
<br/>
<div class="mt-16 mb-8 relative">
  <p class="note">
    <span>NOTE</span>
      In Svelte 3, transitions were global by default and you had to use the <code>|local</code> modifier to make them local.
  </p>
</div>

<style>
  div {
    padding: 0.5em 0;
    border-top: 1px solid #eee;
  }
</style>
