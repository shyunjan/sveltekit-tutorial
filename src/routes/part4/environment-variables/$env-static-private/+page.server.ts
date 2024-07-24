import { redirect, fail } from '@sveltejs/kit';
import { PASSPHRASE } from '$env/static/private';
// import 'prismjs/components/prism-core';
// import loadLanguages from 'prismjs/components/';

// export const ssr = false;

export async function load({ cookies }) {
  // console.debug('calling load({ cookies }) { ... }');
  // loadLanguages(['bash']);
  if (cookies.get('allowed')) {
    throw redirect(307, '/part4/environment-variables/$env-static-private/welcome');
  }

  // const md = import.meta.glob(`/src/routes/part4/environment-variables/env-static-private/components/Env.md`, { eager: true });
  // console.debug(`md = ${JSON.stringify(md)}`);
  // return { contents: md.default };
}

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();

    if (data.get('passphrase') === PASSPHRASE) {
      cookies.set('allowed', 'true', {
        path: '/part4/environment-variables'
      });

      throw redirect(303, '/part4/environment-variables/$env-static-private/welcome');
    }

    return fail(403, {
      incorrect: true
    });
  }
};
