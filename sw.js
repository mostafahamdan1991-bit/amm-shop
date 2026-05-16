const CACHE_NAME = 'amm-group-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/images/amm-group-logo.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
