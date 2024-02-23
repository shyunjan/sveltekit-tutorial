<script lang="ts">
  import { afterUpdate } from 'svelte';
  import flash from './flash.js';

  export let todo: { id: number; done: boolean; text: String; };

  let element: HTMLElement;

  afterUpdate(() => {
    flash(element);
  });
</script>

<svelte:options immutable={true} />

<!-- the text will flash red whenever
     the `todo` object changes -->
<li bind:this={element}>
  <label>
    <input type="checkbox" checked={todo.done} on:change />
    {todo.text}
  </label>
</li>
