// Create the cache when the service worker installs
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

// Request middleware: checks the cache before fetching resources
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request.url) || fetch(event.request.url)
  )
})
