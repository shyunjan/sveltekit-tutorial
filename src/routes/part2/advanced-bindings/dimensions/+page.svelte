<script lang="ts">
  let w: number;
  let h: number;
  let size = 42;
  let text = 'edit this text';

  import Tutorial from './Tutorial.md';
</script>

<label>
  <input type="range" bind:value={size} min="10" max="100" />
  font size ({size}px)
</label>

<div bind:clientWidth={w} bind:clientHeight={h} class="editor">
  <span style="font-size: {size}px" contenteditable>{text}</span>
  <span class="size">{w} x {h}px</span>
</div>

<div class="tutorial">
  <Tutorial />
</div>

<style>
  .editor {
    position: relative;
    display: inline-block;
    padding: 0.5rem;
    background: hsla(15, 100%, 50%, 0.1);
    border: 1px solid hsl(15, 100%, 50%);
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
