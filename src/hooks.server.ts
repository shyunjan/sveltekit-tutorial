import type { Handle } from '@sveltejs/kit';

type HandleParams = Parameters<Handle>[0];

export async function handle({ event, resolve }: HandleParams): Promise<Response> {
  event.locals.answer = 42; // See src\app.d.ts
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