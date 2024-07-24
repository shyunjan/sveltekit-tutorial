<script>
  import { name, greeting } from './stores.js';

  import Tutorial from './Tutorial.md';
</script>

<h1>{$greeting}</h1>
<input bind:value={$name} />

<button on:click={() => ($name += '!')}> Add exclamation mark! </button>

<div class="tutorial">
  <Tutorial />
</div>
