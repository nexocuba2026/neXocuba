const CACHE_NAME = 'nexo-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './offline.html',         // Página offline
  './estilos/estilos.css',
  './scripts/script.js',
  './imagenes/logo1.png',
  './imagenes/logo-192.png',
  './imagenes/logo-512.png'
];

// Instalación: cachear archivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Activación: limpiar cache antiguo si es necesario
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      );
    })
  );
});

// Interceptar fetch: responder desde cache, fallback offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => caches.match('./offline.html'))
  );
});