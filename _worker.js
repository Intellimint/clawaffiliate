export default {
  async fetch(request, env, ctx) {
    try {
      if (env.ASSETS) {
        return await env.ASSETS.fetch(request);
      }
      return new Response('Site loading...', { status: 200, headers: { 'content-type': 'text/plain' } });
    } catch (e) {
      return new Response('Error: ' + e.message, { status: 500, headers: { 'content-type': 'text/plain' } });
    }
  }
};
