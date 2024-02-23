<script>
	import Box from './Box.svelte';
</script>

<div class="boxes">
	<Box --color="red" />
	<Box --color="green" />
	<Box --color="blue" />
</div>
<div class="tutorial">
  This feature works by wrapping each component in a <code>&lt;div style="display: contents"&gt;</code>, where needed, and applying the custom properties to it.
</div>
