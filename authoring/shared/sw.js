// Offline support for the CLCOR practice tests.
// Bump VERSION whenever index.html or the question bank changes so installed apps pick up the update.
const VERSION = "collab-v1.1.0";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./icons/favicon-32.png",
  "./clcei/",
  "./clcei/index.html",
  "./clcei/manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(VERSION).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Page navigations: network first (fresh questions when online), fall back to cache offline.
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); return res; })
        .catch(() => caches.match(req).then((hit) => hit || caches.match(url.pathname.includes("/clcei/") ? "./clcei/index.html" : "./index.html")))
    );
    return;
  }

  // Same-origin assets and Google Fonts: cache first, then update in the background.
  if (url.origin === location.origin || url.hostname.endsWith("fonts.googleapis.com") || url.hostname.endsWith("fonts.gstatic.com")) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const network = fetch(req)
          .then((res) => { if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(VERSION).then((c) => c.put(req, copy)); } return res; })
          .catch(() => cached);
        return cached || network;
      })
    );
  }
});
