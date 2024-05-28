<script lang="ts">
  import Inner from './Inner.svelte';
  import Outer from './Outer.svelte';

  function handleMessage(event: CustomEvent<{ text: string }>) {
    alert(event.detail.text);
  }

  import Tutorial from './Tutorial.md';
</script>

Inner: <Inner on:message={handleMessage} />
Outer: <Outer on:message={handleMessage} />

<div class="tutorial">
  <Tutorial />
</div>
