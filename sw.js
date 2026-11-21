// Playa Huaraz: permite instalar el sistema como app. No guarda nada en caché:
// todo se pide siempre a internet, así nunca queda una versión vieja.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { if (e.request.mode === 'navigate') e.respondWith(fetch(e.request)); });
