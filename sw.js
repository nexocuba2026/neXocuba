const CACHE_NAME = 'nexo-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './estilos/estilos.css',
  './scripts/script.js',
  './imagenes/logo.png',
  './imagenes/logo-192.png',
  './imagenes/logo-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});