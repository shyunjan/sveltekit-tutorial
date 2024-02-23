<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
  /**
   * NOTE
   * createEventDispatcher must be called when the component is first instantiated — you can't do 
   * it later inside e.g. a setTimeout callback. This links dispatch to the component instance.
   */
	
	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}
</script>

<button on:click={sayHello}>
	Click to say hello
</button>
