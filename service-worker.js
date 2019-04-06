self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('network-status-v1')
      .then(cache => cache.addAll(['/', '/app.js']))
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(async function() {
    const cachedResponse = await caches.match(event.request.url)
      .then(response => response)

    return cachedResponse || fetch(event.request.url)
  }())
})
