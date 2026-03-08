// Cloudflare Pages: serve all requests as static assets
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  return fetch(request)
}
