<script lang="ts">
	import Outer from './Outer.svelte';

	function handleMessage(event: CustomEvent<{ text: string }>) {
		alert(event.detail.text);
	}
</script>

<Outer on:message={handleMessage} />
<!--
  NOTE
  You can also try changing the event name to something else. For instance, change 
  dispatch('message', {...}) to dispatch('greet', {...}) in Inner.svelte and change 
  the attribute name from on:message to on:greet in App.svelte.
-->
