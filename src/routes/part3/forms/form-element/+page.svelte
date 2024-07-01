<script>
  export let data;
  export let form;

  import Tutorial from './Tutorial.md';
</script>

{#if form?.error}
  <p class="error">{form.error}</p>
{:else if form?.success}
  <p class="success">saved user id: {form.id}</p>
{/if}

<div class="centered">
  <h1 class="mb-6">todos</h1>
  <form method="POST" action="?/create">
    <label>
      add a todo:
      <input name="description" value={form?.description ?? ''} autocomplete="off" required />
    </label>
  </form>
  <ul class="todos my-6 block">
    {#each data.todos as todo (todo.id)}
      <li>
        <form method="POST" action="?/delete" class="flex-row">
          <input type="hidden" name="id" value={todo.id} />
          <span>{todo.description}</span>
          <button aria-label="Mark as Complete" />
        </form>
      </li>
    {/each}
  </ul>
</div>

<div class="tutorial">
  <Tutorial />
</div>

<style>
  .centered {
    max-width: 20em;
    margin: 0 auto;
  }

  label {
    width: 100%;
  }

  input {
    flex: 1;
  }

  span {
    flex: 1;
  }

  button {
    border: none;
    background: url(/icons/remove.svg) no-repeat 50% 50%;
    background-size: 1rem 1rem;
    cursor: pointer;
    height: 100%;
    aspect-ratio: 1;
    opacity: 0.5;
    transition: opacity 0.2s;
  }

  button:hover {
    opacity: 1;
  }
</style>
