------
# **Progressive enhancement**
바로 이전 tutorial 과정([The &amp;lt;form&amp;gt; element, Named form actions, Validation](/part3/forms/form-element))과 이번 장(**progressive_enhancement**)을 따로 분리한 이유는 이번 장부터는 `&lt;form&gt;`을 통한 Location 이동이 일어나지 않기 때문이다. 즉, 바로 이전 tutorial까지는 TODO를 생성하거나 삭제하면 `&lt;form&gt;`의 해당 `action`(`?/create` 혹은 `?/delete`) url로 이동이 일어나면서 브라우저의 `History`가 쌓인다. 그러나 이번 장부터는 현재 페이지의 업데이트만 일어나기 때문에 Location 이동이 없다. 자세한 설명은 바로 아래에서 시작된다.

Because we're using `&lt;form&gt;`, our app works even if the user doesn't have JavaScript ([which happens more often than you probably think](https://kryogenix.org/code/browser/everyonehasjs.html)). That's great, because it means our app is resilient.

Most of the time, users _do_ have JavaScript. In those cases, we can _progressively enhance_ the experience, the same way SvelteKit progressively enhances `&lt;a&gt;` elements by using client-side routing.

Import the `enhance` function from `$app/forms`...
```svelte title="src/routes/part3/forms/progressive-enhancement/+page.svelte" "import { enhance } from '$app/forms';"
<script>
  import { enhance } from '$app/forms';

  export let data;
  export let form;
</script>
```
...and add the `use:enhance` directive to the `&lt;form&gt;` elements:
```svelte title="src/routes/part3/forms/progressive-enhancement/+page.svelte" /use:enhance/
<form method="POST" action="?/create" use:enhance>
```
```svelte title="src/routes/part3/forms/progressive-enhancement/+page.svelte" /use:enhance/
<form method="POST" action="?/delete" use:enhance>
```
And that's all it takes! Now, when JavaScript is enabled, `use:enhance` will emulate the browser-native behaviour except for the full-page reloads. It will:
- update the `form` prop
- invalidate all data on a successful response, causing `load` functions to re-run
- navigate to the new page on a redirect response
- render the nearest error page if an error occurs
Now that we're updating the page rather than reloading it, we can get fancy with things like transitions:
```svelte title="src/routes/part3/forms/progressive-enhancement/+page.svelte" "import { fly, slide } from 'svelte/transition';" /in:fly={{ y: 20 }} out:slide/
<script>
  import { enhance } from '$app/forms';
  import { fly, slide } from 'svelte/transition';

  export let data;
  export let form;
</script>
...
      <li in:fly={{ y: 20 }} out:slide>...</li>
```
.
------
# **Customizing use:enhance**
With `use:enhance`, we can go further than just emulating the browser's native behaviour. By providing a callback, we can add things like **pending states** and **optimistic UI**. Let's simulate a slow network by adding an artificial delay to our two actions:
```js title="src/routes/part3/forms/progressive-enhancement/+page.server.ts" /await new Promise(fulfil => setTimeout(fulfil, 1000));/
export const actions = {
  create: async ({ cookies, request }) => {
    await new Promise(fulfil => setTimeout(fulfil, 1000));
    ...
  },

  delete: async ({ cookies, request }) => {
    await new Promise(fulfil => setTimeout(fulfil, 1000));
    ...
  }
} 
```
When we create or delete items, it now takes a full second before the UI updates, leaving the user wondering if they messed up somehow. To solve that, add some local state...
```svelte title="src/routes/part3/forms/progressive-enhancement/+page.svelte" /let creating = false;/ /let deleting = [];/
<script>
  import { enhance } from '$app/forms';
  import { fly, slide } from 'svelte/transition';

  export let data;
  export let form;

  let creating = false;
  let deleting = [];
</script>
```
...and toggle `creating` inside the first `use:enhance`:
```svelte title="src/routes/part3/forms/progressive-enhancement/+page.svelte" {5-10} /use:enhance={() => {/ /  }}/ /disabled={creating}/
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
      disabled={creating}
      name="description"
      value={form?.description ?? ''}
      autocomplete="off"
      required
    />
  </label>
</form>
```
We can then show a message while we're saving data:
```svelte title="src/routes/part3/forms/progressive-enhancement/+page.svelte" {5} /{#if creating}/ "{/if}"
<ul class="todos">
  <!-- ... -->
</ul>
{#if creating}
  <span class="saving">saving...</span>
{/if}
```
In the case of deletions, we don't really need to wait for the server to validate anything — we can just update the UI immediately:
```svelte title="src/routes/part3/forms/progressive-enhancement/+page.svelte" {8-12} /data.todos.filter((todo) => !deleting.includes(todo.id))/ /use:enhance={() => {/ /        }}/
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
```
> `use:enhance` is very customizable — you can `cancel()` submissions, handle redirects, control whether the form is reset, and so on. [See the docs](https://kit.svelte.dev/docs/modules#$app-forms-enhance) for full details.

[Next: API routes](/part3/api-routes/get-handlers)
