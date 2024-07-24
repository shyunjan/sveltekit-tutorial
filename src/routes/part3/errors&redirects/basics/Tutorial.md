------
# **Basics**
There are two types of errors in SvelteKit — _expected_ errors and _unexpected_ errors.

An expected error is one that was created with the [error](https://kit.svelte.dev/docs/modules#sveltejs-kit-error) helper from `@sveltejs/kit`, as in <code data-file="src/routes/part3/errors&redirects/basics/expected/+page.server.ts">src/routes/part3/errors&redirects/basics/expected/+page.server.ts</code>:
```js title="src/routes/part3/errors&redirects/basics/expected/+page.server.ts"
import { error } from '@sveltejs/kit';

export function load() {
  throw error(420, 'Enhance your calm');
}
```
Any other error — such as the one in <code data-file="./unexpected/+page.server.ts">src/routes/part3/errors&redirects/basics/unexpected/+page.server.ts</code> — is treated as unexpected:
```js title="src/routes/part3/errors&redirects/basics/unexpected/+page.server.ts"
export function load() {
  throw new Error('Kaboom!');
}
```
When you throw an expected error, you're telling SvelteKit 'don't worry, I know what I'm doing here'. An unexpected error, by contrast, is assumed to be a bug in your app. When an unexpected error is thrown, its message and stack trace will be logged to the console.
> In a later chapter we'll learn about how to add custom error handling using the `handleError` hook.

If you click the links in this app, you'll notice an important difference: the expected error message is shown to the user, whereas the unexpected error message is redacted and replaced with a generic 'Internal Error' message and a 500 status code. That's because error messages can contain sensitive data.

------
# **Error pages**
When something goes wrong inside a `load` function, SvelteKit renders an error page.

The default error page is somewhat bland. We can customize it by creating a <code data-file="./+error.svelte">src/routes/part3/errors&redirects/basics/+error.svelte</code> component:
```svelte title="src/routes/part3/errors&redirects/basics/+error.svelte"
<script>
  import { page } from '$app/stores';
  import { emojis } from '$lib/emojis.js';
</script>

<h1>{$page.status} {$page.error?.message}</h1>
<span style="font-size: 10em;">
  {emojis[$page.status] ?? emojis[500]}
</span>
```
Notice that the `+error.svelte` component is rendered inside the root `+layout.svelte`. We can create more granular `+error.svelte` boundaries:
```svelte title="src/routes/part3/errors&redirects/basics/expected/+error.svelte"
<h1>this error was expected</h1>
```
This component will be rendered for `/part3/errors&redirects/basics/expected`, while the root <code data-file="./+error.svelte">src/routes/part3/errors&redirects/basics/+error.svelte</code> page will be rendered for any other errors that occur.
> 이 프로젝트에서는 다른 튜토리얼 챕터에서 발생할 수 있는 에러에 대비해서 루트 에러 페이지 - <code data-file="src/routes/+error.svelte">src/routes/+error.svelte</code>도 만들어 두었다.

[Next: Fallback errors](/part3/errors&redirects/fallback-errors)
