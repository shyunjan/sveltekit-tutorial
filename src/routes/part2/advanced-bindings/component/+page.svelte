<script lang="ts">
  import Keypad from './Keypad.svelte';

  let pin: string;
  $: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';

  function handleSubmit() {
    alert(`submitted ${pin}`);
  }
</script>

<h1 style="opacity: {pin ? 1 : 0.4}">
  {view}
</h1>

<Keypad bind:val={pin} on:submit={handleSubmit} />

<div class="mt-16 mb-8 relative">
  <p class="note">
    <span>NOTE</span>
    Use component bindings sparingly. It can be difficult to track the flow of data around your application if you have too many of them, especially if there is no 'single source of truth'.
  </p>
</div>