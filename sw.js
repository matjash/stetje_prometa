/* Štetje prometa – offline cache. Change VERSION on every update so phones fetch the new app. */
const VERSION = 'stetje-1.6';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png',
                './icon-maskable-512.png', './apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;   // weather API etc. → network
  if (e.request.mode === 'navigate') {
    // app page: try network (max 3 s) for updates, otherwise the cached copy → works without signal
    e.respondWith((async () => {
      const cache = await caches.open(VERSION);
      try {
        const net = await Promise.race([fetch(e.request), new Promise((_, rej) => setTimeout(() => rej('timeout'), 3000))]);
        if (net && net.ok) cache.put('./index.html', net.clone());
        return net;
      } catch (err) {
        return (await cache.match('./index.html')) || (await cache.match('./')) || Response.error();
      }
    })());
    return;
  }
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
