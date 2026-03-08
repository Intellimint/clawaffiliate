// Cloudflare Pages Module Worker — correctly proxies all requests to static assets
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
