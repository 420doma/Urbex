// Un Service Worker basilare che si installa e si attiva subito.
// Utile per rendere l'app installabile (PWA) senza creare cache persistenti.

self.addEventListener('install', (event) => {
    // Forza l'attivazione immediata del nuovo Service Worker
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    // Prende immediatamente il controllo della pagina
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Risponde normalmente alle richieste di rete senza salvare nulla in cache
    event.respondWith(fetch(event.request));
});
