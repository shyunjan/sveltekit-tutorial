<script lang="ts">
  import File from './File.svelte';
  type fileType = { name: string; files?: fileType[] };

  export let expanded = false;
  export let name: string;
  export let files: fileType[];

  function toggle() {
    expanded = !expanded;
  }
</script>

<button class:expanded on:click={toggle}>{name}</button>

{#if expanded}
  <ul class="menu">
    {#each files as file}
      <li>
        {#if file.files}
          <svelte:self {...file} />
        {:else}
          <File {...file} />
        {/if}
      </li>
    {/each}
  </ul>
{/if}

<style>
  button {
    padding: 0 0 0 1.5em;
    background: url(/icons/folder.svg) 0 0.1em no-repeat;
    background-size: 1em 1em;
    color: hsl(var(--bg-2));
    font-weight: bold;
    cursor: pointer;
    border: none;
    margin: 0;
  }

  .expanded {
    background-image: url(/icons/folder-open.svg);
  }

  .menu {
    padding: 0.2em 0 0 0.5em;
    margin: 0 0 0 0.5em;
    list-style: none;
    border-left: 1px solid rgba(128, 128, 128, 0.4);
    display: block;
  }

  .menu li {
    padding: 0.2em 0;
  }
</style>
