<script>
	import Box from './Box.svelte';
</script>

<div class="boxes">
	<Box --color="red" />
	<Box --color="green" />
	<Box --color="blue" />
</div>
<div class="mt-16 mb-8 relative">
  This feature works by wrapping each component in a <code>&lt;div style="display: contents"&gt;</code>, where needed, and applying the custom properties to it.
</div>
