<script lang="ts">
	let m = { x: 0, y: 0 };

	function handleMove(event: MouseEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<div on:pointermove={handleMove}>
	The pointer is at {m.x} x {m.y}
</div>
<!-- 아래와 같이 inline form으로 만들 수도 있다 -->
<!-- 
<div on:pointermove={(e) => {
  m.x = e.clientX;
  m.y = e.clientY;
}}>
  The pointer is at {m.x} x {m.y}
</div> -->
<!-- 
  NOTE
  In some frameworks you may see recommendations to avoid inline event handlers for performance 
  reasons, particularly inside loops. That advice doesn't apply to Svelte — the compiler will 
  always do the right thing, whichever form you choose.
-->

<style>
	div {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		padding: 1rem;
	}
</style>
