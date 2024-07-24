<script>
  export let data;
  import Tutorial from './Tutorial.md';
</script>

<svelte:component this={data.component} message={data.message} />

<div class="tutorial">
  <Tutorial />
</div>
