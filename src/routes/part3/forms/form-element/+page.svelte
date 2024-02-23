<script>
  export let data;
  export let form;
</script>

{#if form?.error}
  <p class="error">{form.error}</p>
{:else if form?.success}
  <p class="success">saved user id: {form.id}</p>
{/if}

<form method="POST" action="?/create">
  <label>
    add a todo:
    <input name="description" autocomplete="off" required value={form?.description ?? ''} />
  </label>
</form>
<br />
<div class="centered">
  <h1>todos</h1>
  <ul class="todos">
    {#each data.todos as todo (todo.id)}
      <li>
        <form method="POST" action="?/delete">
          <input type="hidden" name="id" value={todo.id} />
          <span>{todo.description}</span>
          <button aria-label="Mark as Complete" />
        </form>
      </li>
    {/each}
  </ul>
</div>

<div class="tutorial">
  <p class="note">
    <span>NOTE</span>
    Default actions cannot coexist with named actions.
  </p>
  <p class="note">
    <span>NOTE</span>
    The <code>action</code> attribute can be any URL — if the action was defined on another page,
    you might have something like <code>/todos?/create</code>. Since the action is on this page, we
    can omit the pathname altogether, hence the leading <code>?</code> character.
  </p>
  <p class="note">
    <span>NOTE</span>
    You can also return data from an action without wrapping it in <code>fail</code> — for example
    to show a 'success!' message when data was saved — and it will be available via the 
    <code>form</code> prop.
  </p>
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
