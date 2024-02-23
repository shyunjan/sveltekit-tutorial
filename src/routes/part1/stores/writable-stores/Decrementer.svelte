<script>
  import { count } from './stores.js';

  function decrement() {
    count.update(n => --n);
  }
</script>

<button on:click={decrement}>
	-
</button>
