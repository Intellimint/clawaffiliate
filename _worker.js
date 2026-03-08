export default {
  async fetch(request, env, ctx) {
    try {
      return await env.ASSETS.fetch(request);
    } catch (e) {
      return new Response("Asset not found: " + e.message, { status: 404 });
    }
  }
};
