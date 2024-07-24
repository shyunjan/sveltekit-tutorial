<script lang="ts">
  import { count } from './stores.js';

  import Tutorial from './Tutorial.md';
</script>

<h1>The count is {$count}</h1>

<button on:click={count.increment}>+</button>
<button on:click={count.decrement}>-</button>
<button on:click={count.reset}>reset</button>

<div class="tutorial">
  <Tutorial />
</div>
