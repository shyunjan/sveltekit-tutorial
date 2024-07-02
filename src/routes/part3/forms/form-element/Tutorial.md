------
# **The &amp;lt;form&amp;gt; element**
In the chapter on [loading data](/part3/loading-data/page), we saw how to get data from the server to the browser. Sometimes you need to send data in the opposite direction, and that's where `&lt;form&gt;` — the web platform's way of submitting data — comes in.

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
.
------
# **Validation**
The first line of defense is the browser's [built-in form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#using_built-in_form_validation), which makes it easy to, for example, mark an `&lt;input&gt;` as required:
```svelte title="src/routes/part3/forms/form-element/+page.svelte" /required/
<form method="POST" action="?/create">
  <label>
    add a todo:
    <input 
      name="description" 
      autocomplete="off" 
      required
    />
  </label>
</form>
```
Try hitting Enter while the `&lt;input&gt;` is empty.

This kind of validation is helpful, but insufficient. Some validation rules (e.g. uniqueness) can't be expressed using `&lt;input&gt;` attributes, and in any case, if the user is an elite hacker they might simply delete the attributes using the browser's devtools. To guard against these sorts of shenanigans, you should always use server-side validation.

In <code data-file="src/lib/server/database.js">src/lib/server/database.js</code>, validate that the description exists and is unique:
```js title="src/lib/server/database.js" {3,9} /  if (description === '') {/ /  } / /  if (todos.find(todo => todo.description === description)) {/ 
export function createTodo(userid, description) {
  if (description === '') {
    throw new Error('todo must have a description');
  } 

  const todos = db.get(userid);

  if (todos.find(todo => todo.description === description)) {
    throw new Error('todos must be unique');
  } 

  const id = crypto.randomUUID();
  todos.push({
    id,
    description,
    done: false
  });

  return { id };
}
```
Try submitting a duplicate todo. Yikes! SvelteKit takes us to an unfriendly-looking error page. On the server, we see a 'todos must be unique' error, but SvelteKit hides unexpected error messages from users because they often contain sensitive data.

It would be much better to stay on the same page and provide an indication of what went wrong so that the user can fix it. To do this, we can use the `fail` function to return data from the action along with an appropriate HTTP status code:
```js title="src/routes/part3/forms/form-element/+page.server.ts" {1,13-16} /    try {/ /    } catch (error) {/ /    } /
import { fail } from '@sveltejs/kit';
import * as db from '$lib/server/database.js';

export function load({ cookies }) { ... }

export const actions = {
  create: async ({ cookies, request }) => {
    const data = await request.formData();

    try {
      db.createTodo(cookies.get('userid'), data.get('description'));
    } catch (error) {
      return fail(422, {
        description: data.get('description'),
        error: error.message
      });
    } 
  }
```
In <code data-file="src/routes/part3/forms/form-element/+page.svelte">src/routes/part3/forms/form-element/+page.svelte</code>, we can access the returned value via the `&lt;form&gt;` prop, which is only ever populated after a form submission:
```svelte title="src/routes/part3/forms/form-element/+page.svelte" {10} /export let form;/ /{#if form?.error}/ "  {/if}" /value={form?.description ?? ''}/
<script>
  export let data;
  export let form;
</script>

<div class="centered">
  <h1>todos</h1>

  {#if form?.error}
    <p class="error">{form.error}</p>
  {/if}

  <form method="POST" action="?/create">
    <label>
      add a todo:
      <input 
        name="description" 
        value={form?.description ?? ''}
        autocomplete="off" 
        required 
      />
    </label>
  </form>
```
> You can also return data from an action _without_ wrapping it in `fail` — for example to show a 'success!' message when data was saved — and it will be available via the `&lt;form&gt;` prop.

[Next: Progressive enhancement](/part3/forms/progressive-enhancement)
