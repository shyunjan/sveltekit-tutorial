<script lang="ts">
  import { send, receive } from './transition.js';
  import { flip } from 'svelte/animate';
  import type { Writable } from 'svelte/store';
  type TodoType = { id: number; done: boolean; description: string };

  export let store: Pick<Writable<TodoType[]>, 'subscribe'> & {
    add: (description: string) => void;
  } & {
    mark: (todo: TodoType, done: boolean) => void;
  } & { remove: (todo: TodoType) => void };
  export let done: boolean;
</script>

<ul class="todos">
  {#each $store.filter((todo) => todo.done === done) as todo (todo.id)}
    <li
      class:done
      in:receive={{ key: todo.id }}
      out:send={{ key: todo.id }}
      animate:flip={{ duration: 200 }}
    >
      <label>
        <input
          type="checkbox"
          checked={todo.done}
          on:change={(e) => store.mark(todo, e.currentTarget.checked)}
        />

        <span>{todo.description}</span>

        <button on:click={() => store.remove(todo)} aria-label="Remove" />
      </label>
    </li>
  {/each}
</ul>

<style>
  li {
    display: flex;
    line-height: 24px;
  }
  
  label {
    width: 100%;
    height: 100%;
    display: flex;
  }

  span {
    flex: 1;
  }

  button {
    background-image: url(/icons/remove.svg);
    border: none;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 1rem 1rem;
    cursor: pointer;
    width: 3em;
    height: 3em;
    margin: -0.5em -0.5em -0.5em 0;
    aspect-ratio: 1;
    opacity: 0.5;
    transition: opacity 0.2s;
  }
</style>
