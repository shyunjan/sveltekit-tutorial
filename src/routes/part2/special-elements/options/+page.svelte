<script lang="ts">
  import Todo from './Todo.svelte';

  let todos = [
    { id: 1, done: true, text: 'wash the car' },
    { id: 2, done: false, text: 'take the dog for a walk' },
    { id: 3, done: false, text: 'mow the lawn' }
  ];

  function toggle(toggled: { id: number; done: boolean; text: String; }) {
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
  <p class="note">
    <span>NOTE</span>
    You can shorten <code>&lt;svelte:options immutable=&#123true&#125</code> /&gt; to <code>&lt;svelte:options immutable/&gt;</code> if you prefer.
  </p>
  <p>Now, when you toggle todos by clicking on them, only the updated component flashes.</p>
  <p>The options that can be set here are:</p>
  <ul>
    <li><code>immutable={true}</code> — you never use mutable data, so the compiler can do simple referential equality checks to determine if values have changed</li>
    <li><code>immutable={false}</code> — the default. Svelte will be more conservative about whether or not mutable objects have changed</li>
    <li><code>accessors={true}</code> — adds getters and setters for the component's props</li>
    <li><code>accessors={false}</code> — the default</li>
    <li><code>namespace="..."</code> — the namespace where this component will be used, most commonly <code>"svg"</code></li>
    <li><code>customElement="..."</code> — the name to use when compiling this component as a custom element</li>
  </ul>
  <p>Consult the <a href="https://svelte.dev/docs" target="_blank">API reference</a> for more information on these options.</p>
</div>

<style>
  .centered {
    max-width: 20em;
    margin: 0 auto;
  }
</style>
