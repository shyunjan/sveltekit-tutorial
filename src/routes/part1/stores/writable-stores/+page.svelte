<script lang="ts">
  import { count } from './stores.js';
  // import { onDestroy } from 'svelte';
  import Incrementer from './Incrementer.svelte';
  import Decrementer from './Decrementer.svelte';
  import Resetter from './Resetter.svelte';

  // let count_value: number;
  // let unsubscribe = count.subscribe((value) => {
  //   /** 
  //    * NOTE 
  //    * Calling a subscribe method returns an unsubscribe function.
  //    * unsubscribe하지 않으면 memory leak이 발생한다 
  //    */
  //   count_value = value;
  // });

  // onDestroy(unsubscribe);
</script>

<!-- <h1>The count is {count_value}</h1> -->
<h1>The count is {$count}</h1> 
<!-- $접두사를 store 앞에 붙이면 subscribe와 unsubscribe가 동시에 수행된다. 그래서 3, 8-18, 21라인이 필요 없어진다.-->
<!-- 
  NOTE
  Auto-subscription only works with store variables that are declared (or imported) at 
  the top-level scope of a component.
-->
<!-- 
  NOTE
  Any name beginning with $ is assumed to refer to a store value. It's effectively a reserved 
  character — Svelte will prevent you from declaring your own variables with a $ prefix..
-->

<Incrementer />
<Decrementer />
<Resetter />
