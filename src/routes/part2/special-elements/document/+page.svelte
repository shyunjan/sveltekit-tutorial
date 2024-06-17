<script lang="ts">
  let selection: string | undefined = '';

  const handleSelectionChange = (e: Event) => (selection = document.getSelection()?.toString());

  import Tutorial from './Tutorial.md';
</script>

<svelte:document on:selectionchange={handleSelectionChange} />

<h1>Select this text to fire events</h1>
<p>Selection: {selection}</p>

<div class="tutorial">
  <Tutorial />
</div>
