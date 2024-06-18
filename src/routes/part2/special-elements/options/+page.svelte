<script lang="ts">
  import Todo from './Todo.svelte';

  let todos = [
    { id: 1, done: true, text: 'wash the car' },
    { id: 2, done: false, text: 'take the dog for a walk' },
    { id: 3, done: false, text: 'mow the lawn' }
  ];

  function toggle(toggled: { id: number; done: boolean; text: String }) {
    todos = todos.map((todo) => {
      if (todo === toggled) {
        // return a new object
        return {
          id: todo.id,
          text: todo.text,
          done: !todo.done
        };
      }

      // return the same object
      return todo;
    });
  }

  import Tutorial from './Tutorial.md';
</script>

<div class="centered">
  <h1>todos</h1>

  <ul class="todos">
    {#each todos as todo (todo.id)}
      <Todo {todo} on:change={() => toggle(todo)} />
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
</style>
