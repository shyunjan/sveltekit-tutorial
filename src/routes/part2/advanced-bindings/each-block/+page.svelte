<script>
  let todos = [
    { done: false, text: 'finish Svelte tutorial' },
    { done: false, text: 'build an app' },
    { done: false, text: 'world domination' }
  ];

  function add() {
    todos = todos.concat({
      done: false,
      text: ''
    });
  }

  function clear() {
    todos = todos.filter((t) => !t.done);
  }

  $: remaining = todos.filter((t) => !t.done).length;
</script>

<div class="centered">
  <h1>todos</h1>

  <ul class="todos">
    {#each todos as todo}
      <li class:done={todo.done}>
        <input type="checkbox" bind:checked={todo.done} />

        <input type="text" placeholder="What needs to be done?" bind:value={todo.text} />
      </li>
    {/each}
  </ul>

  <p>{remaining} remaining</p>

  <button on:click={add}> Add new </button>

  <button on:click={clear}> Clear completed </button>

  <div class="tutorial">
    <p class="note">
      <span>NOTE</span>
      Note that interacting with these <code>&lt;input&gt;</code> elements will mutate the array. If you
      prefer to work with immutable data, you should avoid these bindings and use event handlers instead.
    </p>
  </div>
</div>

<style>
  .centered {
    max-width: 20em;
    margin: 0 auto;
  }

  .done {
    opacity: 0.4;
  }

  li {
    display: flex;
  }

  input[type='text'] {
    flex: 1;
    padding: 0.5em;
    margin: -0.2em 0;
    border: none;
  }
</style>
