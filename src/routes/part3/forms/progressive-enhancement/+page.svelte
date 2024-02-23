<script>
  import { enhance } from '$app/forms';
  import { fly, slide } from 'svelte/transition';

  export let data;
  export let form;

  let creating = false;
  /**
   * @type {string[]}
   */
  let deleting = [];
</script>

{#if form?.error}
  <p class="error">{form.error}</p>
{:else if form?.success}
  <p class="success">saved user id: {form.id}</p>
{/if}

<form
  method="POST"
  action="?/create"
  use:enhance={() => {
    creating = true;
    return async ({ update }) => {
      await update();
      creating = false;
    };
  }}
>
  <label>
    add a todo:
    <input
      name="description"
      autocomplete="off"
      required
      disabled={creating}
      value={form?.description ?? ''}
    />
  </label>
</form>
<br />
<div class="centered">
  <h1>todos</h1>
  <ul class="todos">
    {#each data.todos.filter((todo) => !deleting.includes(todo.id)) as todo (todo.id)}
      <li in:fly={{ y: 20 }} out:slide>
        <form
          method="POST"
          action="?/delete"
          use:enhance={() => {
            deleting = [...deleting, todo.id];
            return async ({ update }) => {
              await update();
              deleting = deleting.filter((id) => id !== todo.id);
            };
          }}
        >
          <input type="hidden" name="id" value={todo.id} />
          <span>{todo.description}</span>
          <button aria-label="Mark as Complete" />
        </form>
      </li>
    {/each}
  </ul>
  {#if creating}
    <span class="saving">saving...</span>
  {/if}
</div>

<div class="tutorial">
  <p class="note">
    바로 이전 tutorial 과정(The &lt;form&gt; element, Named form actions, Validation)과 이번
    장(progressive_enhancement)을 따로 분리한 이유는 이번 장부터는 form 태그를 통한 페이지 이동이
    일어나지 않기 때문이다.<br/>
    즉, 바로 이전 tutorial까지는 TODO를 생성하거나 삭제하면 form 태그의 해당 action(?/create 혹은 ?/delete)
    페이지로 이동이 일어나면서 브라우저의 History가 쌓인다. 그러나 이번 장부터는 현재 페이지의
    업데이트만 일어나기 때문에 페이지 이동이 없다. 자세한 내용은 해당
    <a href="https://learn.svelte.dev/tutorial/progressive-enhancement">tutorial</a>을 읽어보자.
  </p>
  <p class="note">
    <span>NOTE</span>
    <code>use:enhance</code> is very customizable — you can <code>cancel()</code> submissions,
    handle redirects, control whether the form is reset, and so on.
    <a href="https://kit.svelte.dev/docs/modules#$app-forms-enhance" target="_blank">See the docs
    </a> for full details.
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

  .saving {
    opacity: 0.5;
  }
</style>
