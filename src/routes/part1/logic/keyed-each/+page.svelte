<script lang="ts">
  import Thing from './Thing.svelte';

  let things = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'carrot' },
    { id: 4, name: 'doughnut' },
    { id: 5, name: 'egg' }
  ];

  function handleClick() {
    things = things.slice(1);
  }

  import Tutorial from './Tutorial.md';
</script>

<button on:click={handleClick}> Remove first thing </button>

{#each things as thing (thing.id)}
  <Thing name={thing.name} />
{/each}

<div class="tutorial">
  <Tutorial />
</div>
