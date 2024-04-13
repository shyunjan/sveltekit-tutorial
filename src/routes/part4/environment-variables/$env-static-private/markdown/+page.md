<script>
</script>

---
현재 사용하지 않는 파일임.

title: Second Post of Markdown Blog
description: this is my second post
date: '2023-7-30'
categories:
  - sveltekit
  - svelte
  - second
published: true

## For Test of Svelte

```bash
PASSPHRASE="open sesame";
```

```js {1-3,4} /PASSPHRASE/
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

---