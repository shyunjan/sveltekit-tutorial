<script lang="ts">
  import Keypad from './Keypad.svelte';

  let pin: string;
  $: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';

  function handleSubmit() {
    alert(`submitted ${pin}`);
  }

  import Tutorial from './Tutorial.md';
</script>

<h1 style="opacity: {pin ? 1 : 0.4}">
  {view}
</h1>

<Keypad bind:value={pin} on:submit={handleSubmit} />

<div class="tutorial absolute top-[75%]">
  <Tutorial />
</div>
