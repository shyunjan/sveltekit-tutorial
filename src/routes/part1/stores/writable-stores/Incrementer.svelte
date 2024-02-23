<script>
  import { count } from './stores.js';

  function increment() {
    count.update(n => ++n);
  }
</script>

<button on:click={increment}>
	+
</button>
