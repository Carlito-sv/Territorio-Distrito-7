self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('morena-pwa').then(function(cache) {
      return cache.addAll([
        './',
        './mapa_maestro_PRO_v5_2_morena_oficial.html',
        './manifest.json',
        './logo_morena_192.png'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
