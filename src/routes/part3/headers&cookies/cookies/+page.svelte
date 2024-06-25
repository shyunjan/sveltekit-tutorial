<script>
  export let data;
  import Tutorial from './Tutorial.md';
</script>

<h1>Hello {data.visited ? 'friend' : 'stranger'}!</h1>

<div class="tutorial">
  <Tutorial />
</div>
