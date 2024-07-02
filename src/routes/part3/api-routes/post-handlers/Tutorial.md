------
# **POST handlers**
You can also add handlers that mutate data, such as `POST`. In most cases, you should use [form actions](/part3/forms/form-element) instead — you'll end up writing less code, and it'll work without JavaScript, making it more resilient.

Inside the `keydown` event handler of the 'add a todo' `&lt;input&gt;`, let's post some data to the server:
```svelte title="src/routes/part3/api-routes/post-handlers/+page.svelte" {11-15} "    const response = await fetch('/part3/api-routes/post-handlers/todo', {" "    });"
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

    input.value = '';
  }}
/>
```
Here, we're posting some JSON to the `/todo` API route — using a `userid` from the user's cookies — and receiving the `id` of the newly created todo in response.

Create the `/todo` route by adding a <code data-file="src/routes/part3/api-routes/post-handlers/todo/+server.ts">src/routes/part3/api-routes/post-handlers/todo/+server.ts</code> file with a `POST` handler that calls `createTodo` in <code data-file="src/lib/server/database.js">src/lib/server/database.js</code>:
```js title="src/routes/part3/api-routes/post-handlers/todo/+server.ts"
import { json } from '@sveltejs/kit';
import * as database from '$lib/server/database.js';

export async function POST({ request, cookies }) {
  const { description } = await request.json();

  const userid = cookies.get('userid');
  const { id } = await database.createTodo(userid, description);

  return json({ id }, { status: 201 });
}
```
As with `load` functions and form actions, the `request` is a standard [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) object; `await request.json()` returns the data that we posted from the event handler.

We're returning a response with a [201 Created](https://http.dog/201) status and the `id` of the newly generated todo in our database. Back in the event handler, we can use this to update the page:
```svelte title="src/routes/part3/api-routes/post-handlers/+page.svelte" {19-22} /const { id } = await response.json();/ /    }];/
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

    data.todos = [...data.todos, { 
      id, 
      description
    }];

    input.value = '';
  }}
/>
```
> You should only mutate `data` in such a way that you'd get the same result by reloading the page.

------
# **Other handlers**
Similarly, we can add handlers for other HTTP verbs. Add a `/todo/[id]` route by creating a <code data-file="./todo/[id]/+server.ts">src/routes/part3/api-routes/post-handlers/todo/[id]/+server.ts</code> file with `PUT` and `DELETE` handlers for toggling and removing todos, using the `toggleTodo` and `deleteTodo` functions in <code data-file="src/lib/server/database.js">src/lib/server/database.js</code>:
```js title="src/routes/part3/api-routes/post-handlers/todo/[id]/+server.ts"
import * as database from '$lib/server/database';

export async function PUT({ params, request, cookies }) {
  const { done } = await request.json();
  const userid = cookies.get('userid');

  await database.toggleTodo(userid, params.id, done);
  return new Response(null, { status: 204 });
}

export async function DELETE({ params, cookies }) {
  const userid = cookies.get('userid');

  await database.deleteTodo(userid, params.id);
  return new Response(null, { status: 204 });
}
```
Since we don't need to return any actual data to the browser, we're returning an empty [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) with a [204 No Content](https://http.dog/204) status.

We can now interact with this endpoint inside our event handlers:
```svelte title="src/routes/part3/api-routes/post-handlers/+page.svelte" {8-14,21-25}
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
      });

      data.todos = data.todos.filter((t) => t.id !== todo.id);
    }}
  />
</label>
```

[Next: Stores](/part3/stores/page)
