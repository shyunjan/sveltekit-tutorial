import type { RequestEvent } from '@sveltejs/kit'

export async function handle({ event, resolve }: { event: RequestEvent, resolve: Function }) {
  switch(event.url.pathname) {
    case '/part4/hooks/handle/ping': return new Response('pong');
    case '/part4/hooks/handle':
      return await resolve(event, {
        transformPageChunk: ({ html }: { html: string }) => html.replace('<body', '<body style="color: hotpink"')
      });
      default: return await resolve(event, {
        transformPageChunk: ({ html }: { html: string }) => html.replace('<body style="color: hotpink"', '<body')
    });
  }
}