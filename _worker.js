// This file intentionally left as a passthrough.
// Cloudflare Pages will handle static asset serving natively.
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
