<script>
  export let data;
  import Tutorial from './Tutorial.md';
</script>

<div class="centered">
  <h1>todos</h1>

  <label>
    add a todo:
    <input
      type="text"
      autocomplete="off"
      on:keydown={async (e) => {
        if (e.key !== 'Enter') return;

        const input = e.currentTarget;
        const description = input.value;

        const response = await fetch('/part3/api-routes/post-handlers/todo', {
          method: 'POST',
          body: JSON.stringify({ description }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const { id } = await response.json();
        data.todos = [...data.todos, { id, description, done: false }];

        input.value = '';
      }}
    />
  </label>

  <ul class="todos">
    {#each data.todos as todo (todo.id)}
      <li>
        <label>
          <input
            type="checkbox"
            checked={todo.done}
            on:change={async (e) => {
              const done = e.currentTarget.checked;

              await fetch(`/part3/api-routes/post-handlers/todo/${todo.id}`, {
                method: 'PUT',
                body: JSON.stringify({ done }),
                headers: {
                  'Content-Type': 'application/json'
                }
              });
            }}
          />
          <span>{todo.description}</span>
          <button
            aria-label="Mark as complete"
            on:click={async (e) => {
              await fetch(`/part3/api-routes/post-handlers/todo/${todo.id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              data.todos = data.todos.filter((t) => t.id !== todo.id);
            }}
          />
        </label>
      </li>
    {/each}
  </ul>
</div>

<div class="tutorial absolute top-[30%]">
  <Tutorial />
</div>

<style>
  .centered {
    max-width: 20em;
    margin: 0 auto;
  }

  label {
    display: flex;
    width: 100%;
  }

  input[type='text'] {
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
