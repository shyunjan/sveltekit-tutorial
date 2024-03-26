<script lang="ts">
	let w: number;
	let h: number;
	let size = 42;
	let text = 'edit this text';
</script>

<label>
	<input type="range" bind:value={size} min="10" max="100" />
	font size ({size}px)
</label>

<div bind:clientWidth={w} bind:clientHeight={h}>
	<span style="font-size: {size}px" contenteditable>{text}</span>
	<span class="size">{w} x {h}px</span>
</div>
<br/>
<div class="mt-16 mb-8 relative">
	<p class="note">
		<span>NOTE</span>
		Elements are measured using a technique similar to <a href="http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/" target="_blank">this one</a>. There is some overhead involved, so it's not recommended to use this for large numbers of elements.<br/>
		<code>display: inline</code> elements cannot be measured with this approach; nor can elements that can't contain other elements (such as <code>&lt;canvas&gt;</code>). In these cases you will need to measure a wrapper element instead.
	</p>
</div>

<style>
	div {
		position: relative;
		display: inline-block;
		padding: 0.5rem;
		background: hsla(15, 100%, 50%, 0.1);
		border: 1px solid hsl(15, 100%, 50%);
	}

  div.tutorial {
    display: block;
    background: none;
    border: none;
  }

	.size {
		position: absolute;
		right: -1px;
		bottom: -1.4em;
		line-height: 1;
		background: hsl(15, 100%, 50%);
		color: white;
		padding: 0.2em 0.5em;
		white-space: pre;
	}
</style>
