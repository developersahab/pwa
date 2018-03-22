self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('ds-pwa-a2hs').then(function(cache) {
     return cache.addAll([
       '/pwa/addtohomescreen/',
       '/pwa/addtohomescreen/index.html',
       '/pwa/addtohomescreen/service-worker.js',
       '/pwa/addtohomescreen/icons/favicon.ico',
       '/pwa/addtohomescreen/icons/icon-36x36.png',
       '/pwa/addtohomescreen/icons/icon-48x48.png',
       '/pwa/addtohomescreen/icons/icon-72x72.png'
       '/pwa/addtohomescreen/icons/icon-96x96.png'
       '/pwa/addtohomescreen/icons/icon-144x144.png'
       '/pwa/addtohomescreen/icons/icon-192x192.png'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
