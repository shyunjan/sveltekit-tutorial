// import type { Handle } from '@sveltejs/kit';
// type HandleParams = Parameters<Handle>[0];

// export async function handle({ event, resolve }: HandleParams): Promise<Response> {
export async function handle({ event, resolve }) {
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

export async function handleFetch({event, request, fetch}) {
  const url = new URL(request.url);
  if (url.pathname === '/part4/hooks/handleFetch/api') {
    return await fetch('/part4/hooks/handleFetch/api-b');
  }
}