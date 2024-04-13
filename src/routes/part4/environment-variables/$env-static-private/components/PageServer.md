Environment variables — like API keys and database credentials — can be added to a `.env` file, and they will be made available to your application.

>You can also use `.env.local` or `.env.[mode]` files — see the [Vite documentation](https://vitejs.dev/guide/env-and-mode.html#env-files) for more information. Make sure you add any files containing sensitive information to your .gitignore file!
>
>Environment variables in `process.env` are also available via `$env/static/private`.

In this exercise, we want to allow the user to enter the website if they know the correct passphrase, using an environment variable.

First, in <code data-file="/.env">.env</code>, add a new environment variable:

```bash title=".env" /"open sesame"/
PASSPHRASE="open sesame";
```

Open <code data-file="/src/routes/part4/environment-variables/$env-static-private/+page.server.ts">src/routes/part4/environment-variables/$env-static-private/+page.server.ts</code>. Import `PASSPHRASE` from `$env/static/private` and use it inside the [form action](https://learn.svelte.dev/tutorial/the-form-element):

```js title="src/routes/part4/environment-variables/$env-static-private/+page.server.ts" {2} "PASSPHRASE"
import { redirect, fail } from '@sveltejs/kit';
import { PASSPHRASE } from '$env/static/private';

export function load({ cookies }) {
  if (cookies.get('allowed')) {
    throw redirect(307, '/welcome');
  }
}

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();

    if (data.get('passphrase') === PASSPHRASE) {
      cookies.set('allowed', 'true', {
        path: '/'
      });

      throw redirect(303, '/welcome');
    }

    return fail(403, {
      incorrect: true
    });
  }
};
```
