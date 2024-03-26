<script lang="ts">
  let selection: string | undefined = '';

  const handleSelectionChange = (e: Event) => (selection = document.getSelection()?.toString());
</script>

<svelte:document on:selectionchange={handleSelectionChange} />

<h1>Select this text to fire events</h1>
<p>Selection: {selection}</p>

<div class="mt-16 mb-8 relative">
  <p class="note">
    <span>NOTE</span>
    Avoid <code>mouseenter</code> and <code>mouseleave</code> handlers on this element, as these events are not fired on <code>document</code> in all browsers. Use <code>&lt;svelte:body&gt;</code> instead.
  </p>
</div>