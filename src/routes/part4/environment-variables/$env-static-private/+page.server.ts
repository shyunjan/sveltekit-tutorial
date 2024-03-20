import { redirect, fail } from '@sveltejs/kit';
// import { PASSPHRASE } from '$env/static/private';

export function load({ cookies }) {
  if (cookies.get('allowed')) {
    throw redirect(307, '/part4/environment-variables/$env-static-private/welcome');
  }
}

export const actions = {
  default: async ({ request, cookies }) => {
    // const data = await request.formData();

    // if (data.get('passphrase') === PASSPHRASE) {
    //   cookies.set('allowed', 'true', {
    //     path: '/part4/environment-variables'
    //   });

    //   throw redirect(303, '/part4/environment-variables/$env-static-private/welcome');
    // }

    // return fail(403, {
    //   incorrect: true
    // });
  }
};
