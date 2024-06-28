------
# **The &amp;lt;form&amp;gt; element**
In the chapter on [loading data](https://learn.svelte.dev/tutorial/page-data), we saw how to get data from the server to the browser. Sometimes you need to send data in the opposite direction, and that's where `&lt;form&gt;` — the web platform's way of submitting data — comes in.

Let's build a todo app. We've already got an in-memory database set up in <code data-file="src/lib/server/database.js">src/lib/server/database.js</code>, and our `load` function in <code data-file="src/routes/part3/forms/form-element/+page.server.ts">src/routes/part3/forms/form-element/+page.server.ts</code> uses the [cookies](https://kit.svelte.dev/docs/load#cookies) API so that we can have a per-user todo list, but we need to add a `&lt;form&gt;` to create new todos:
```svelte title="src/routes/part3/forms/form-element/+page.svelte" /<form method="POST">/ "</form>" {4-10}
<h1>todos</h1>

<form method="POST">
  <label>
    add a todo:
    <input 
      name="description" 
      autocomplete="off"
    />
  </label>
</form>

<ul class="todos">
```
If we type something into the `&lt;input&gt;` and hit Enter, the browser makes a POST request (because of the `method="POST"` attribute) to the current page. But that results in an error, because we haven't created a server-side _action_ to handle the POST request. Let's do that now:
```js title="src/routes/part3/forms/form-element/+page.server.ts" /export const actions = {/ /};/ {8-11}
import * as db from '$lib/server/database.js';

export function load({ cookies }) {
  // ...
}

export const actions = {
  default: async ({ cookies, request }) => {
    const data = await request.formData();
    db.createTodo(cookies.get('userid'), data.get('description'));
  }
};
```
The `request` is a standard [Request](https://developer.mozilla.org/en-US/docs/Web/API/Request) object; `await request.formData()` returns a [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) instance.

When we hit Enter, the database is updated and the page reloads with the new data.

Notice that we haven't had to write any `fetch` code or anything like that — data updates automatically. And because we're using a `&lt;form&gt;` element, this app would work even if JavaScript was disabled or unavailable.

------
# **Named form actions**
A page that only has a single action is, in practice, quite rare. Most of the time you'll need to have multiple actions on a page. In this app, creating a todo isn't enough — we'd like to delete them once they're complete.

Begin by replacing our `default` action with named `create` and `delete` actions:
```js title="src/routes/part3/forms/form-element/+page.server.ts" /create: / /},/ /  delete: async ({ cookies, request }) => {/ /  } / {8-9}
export const actions = {
  create: async ({ cookies, request }) => {
    const data = await request.formData();
    db.createTodo(cookies.get('userid'), data.get('description'));
  },

  delete: async ({ cookies, request }) => {
    const data = await request.formData();
    db.deleteTodo(cookies.get('userid'), data.get('id'));
  } 
};
```
> Default actions cannot coexist with named actions.

The `&lt;form&gt;` element has an optional `action` attribute, which is similar to an `&lt;a&gt;` element's `href` attribute. Update the existing form so that it points to the new `create` action:
```svelte title="src/routes/part3/forms/form-element/+page.svelte" /action="?/ /create"/
<form method="POST" action="?/create">
  <label>
    add a todo:
    <input 
      name="description" 
      autocomplete="off" 
    />
  </label>
</form>
```
> The `action` attribute can be any URL — if the action was defined on another page, you might have something like `/todos?/create`. Since the action is on _this_ page, we can omit the pathname altogether, hence the leading `?` character.

Next, we want to create a form for each todo, complete with a hidden `&lt;input&gt;` that uniquely identifies it:
```svelte title="src/routes/part3/forms/form-element/+page.svelte" {4-8}
<ul class="todos">
  {#each data.todos as todo (todo.id)}
    <li>
      <form method="POST" action="?/delete">
        <input type="hidden" name="id" value={todo.id} />
        <span>{todo.description}</span>
        <button aria-label="Mark as Complete"></button>
      </form>
    </li>
  {/each}
</ul>
```

------
# **Validation**

