<script>
  // import { onDestroy } from 'svelte';
  import { count } from './stores.js';
  import Incrementer from './Incrementer.svelte';
  import Decrementer from './Decrementer.svelte';
  import Resetter from './Resetter.svelte';

  // let count_value: number;
  // const unsubscribe = count.subscribe((value) => {
  //   count_value = value;
  // });

  // onDestroy(unsubscribe); // unsubscribe하지 않으면 memory leak이 발생한다

  import Tutorial from './Tutorial.md';
</script>

<!-- <h1>The count is {count_value}</h1> -->
<h1>The count is {$count}</h1>
<!-- $접두사를 store 앞에 붙이면 subscribe와 unsubscribe가 동시에 수행된다. 그래서 2, 8-13, 18 라인이 필요 없어진다.-->

<Incrementer />
<Decrementer />
<Resetter />

<div class="tutorial">
  <Tutorial />
</div>
