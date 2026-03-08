export default {
  async fetch(request, env) {
    // Pass all requests to the static asset handler
    return env.ASSETS.fetch(request);
  }
};
