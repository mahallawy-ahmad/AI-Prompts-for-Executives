/**
 * Service Worker - كنز النيات v15
 * Network-first, no caching to avoid stale content issues
 */

// Clear ALL old caches on install
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// Take control of all clients immediately
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Always fetch from network - no caching
self.addEventListener('fetch', (e) => {
  // Let the browser handle it normally (no interception)
  return;
});
