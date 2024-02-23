<script lang="ts">
	import Canvas from './Canvas.svelte';
	import { trapFocus } from './action.js';
	// import { handleKeydown } from './handleKeydown.js';

	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'white', 'black'];
	let selected = colors[0];
	let size = 10;

	let canvas: Canvas;
	let showMenu = true;

	function setColorsFocus(node: HTMLElement | null) {
		if (!node) return;
		console.debug(`node.className = ${node.className}`);
		const elements = Array.from(node.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));
		elements.at(0)!.focus();
	}
</script>

<div class="container">
	<Canvas bind:this={canvas} color={selected} size={size} />

	{#if showMenu}
		<div
			class="modal-background"
			on:click|self={() => showMenu = false}
			on:keydown={(e) => {
				if (e.key === 'Escape') showMenu = false;
			}}
		>
			<div class="menu" use:trapFocus>
			<!-- 아래처럼 일반 이벤트로 처리하면 showMenu가 false가 되어 <div class="menu">가 unmount되면 포커스를 잃어버리게 되고, 다시 mount되면 처음 한번은 마우스로 포커스를 넣어줘야 한다 -->	
			<!-- <div class="menu" on:keydown={handleKeydown}> --> 
				<div class="colors">
					{#each colors as color}
						<button
							class="color"
							aria-label={color}
							aria-current={selected === color}
							style="--color: {color}"
							on:click={() => {
								selected = color;
							}}
						/>
					{/each}
				</div>

				<label>
					small
					<input type="range" bind:value={size} min="1" max="50" />
					large
				</label>
			</div>
		</div>
	{/if}

	<div class="controls">
		<button class="show-menu" on:click={() => showMenu = !showMenu}>
			{showMenu ? 'close' : 'menu'}
		</button>
		<button on:click={() => {canvas.clear(); setColorsFocus(document.querySelector('.colors'));}}>clear</button>
	</div>
</div>

<style>
	.container {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
	}

	.controls {
		position: absolute;
		left: 0;
		top: 0;
		padding: 1em;
	}

	.show-menu {
		width: 5em;
	}

	.modal-background {
		position: fixed;
		display: flex;
		justify-content: center;
		align-items: center;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(20px);
	}

	.menu {
		position: relative;
		background: var(--bg-2);
		width: calc(100% - 2em);
		max-width: 28em;
		padding: 1em 1em 0.5em 1em;
		border-radius: 1em;
		box-sizing: border-box;
		user-select: none;
	}

	.colors {
		display: grid;
		align-items: center;
		grid-template-columns: repeat(9, 1fr);
		grid-gap: 0.5em;
	}

	.color {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: none;
		filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
		transition: all 0.1s;
	}

	.color[aria-current="true"] {
		transform: translate(1px, 1px);
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
	}

	.menu label {
		display: flex;
		width: 100%;
		margin: 1em 0 0 0;
	}

	.menu input {
		flex: 1;
	}
</style>