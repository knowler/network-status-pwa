self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('network-status-v1')
      .then(cache => cache.addAll([
        '/',
        '/app.css',
        '/app.js',
        '/app-icon.png',
        '/app-splash.png',
        '/favicon.png',
        '/manifest.json',
      ]))
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request.url) || fetch(event.request.url)
  )
})
