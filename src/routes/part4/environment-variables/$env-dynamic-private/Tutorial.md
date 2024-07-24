------
# **$env/dynamic/private**
If you need to read the values of environment variables when the app runs, as opposed to when the app is built, you can use `$env/dynamic/private` instead of `$env/static/private`:
```js title="src/routes/part4/environment-variables/$env-dynamic-private/+page.server.ts" / env / "/dynamic" /env./
import { redirect, fail } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export function load({ cookies }) {
  if (cookies.get('allowed')) {
    throw redirect(307, '/part4/environment-variables/$env-dynamic-private/welcome');
  }
}

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();

    if (data.get('passphrase') === env.PASSPHRASE) {
      cookies.set('allowed', 'true', {
        path: '/part4/environment-variables'
      });

      throw redirect(303, '/part4/environment-variables/$env-dynamic-private/welcome');
    }

    return fail(403, {
      incorrect: true
    });
  }
};
```

[Next: $env/static/public](/part4/environment-variables/$env-static-public)
