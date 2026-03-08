// Pass-through worker - forwards all requests unchanged
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  }
};
