<script>
  import { createTodoStore } from './todos.js';
  import TodoList from './TodoList.svelte';

  const todos = createTodoStore([
    { done: false, description: 'write some docs' },
    { done: false, description: 'start writing blog post' },
    { done: true, description: 'buy some milk' },
    { done: false, description: 'mow the lawn' },
    { done: false, description: 'feed the turtle' },
    { done: false, description: 'fix some bugs' }
  ]);
</script>

<div class="board">
  <input
    placeholder="what needs to be done?"
    on:keydown={(e) => {
      if (e.key !== 'Enter') return;

      todos.add(e.currentTarget.value);
      e.currentTarget.value = '';
    }}
  />

  <div class="todo">
    <h2>todo</h2>
    <TodoList store={todos} done={false} />
  </div>

  <div class="done">
    <h2>done</h2>
    <TodoList store={todos} done={true} />
  </div>

  <div class="mt-16 mb-8 relative" style="grid-column: 1/3;">
    <p class="note">
      <span>NOTE</span>
      <code>duration</code> can also be a <code>d =&gt; milliseconds function</code>, where <code>d</code> is
      the number of pixels the element has to travel. Note that all the transitions and animations are being
      applied with CSS, rather than JavaScript, meaning they won't block (or be blocked by) the main thread.
    </p>
  </div>
</div>

<style>
  .board {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1em;
    max-width: 36em;
    margin: 0 auto;
  }

  .board > input {
    font-size: 1.4em;
    grid-column: 1/3;
    padding: 0.5em;
    margin: 0 0 1rem 0;
  }

  h2 {
    font-size: 2em;
    font-weight: 200;
  }
</style>
