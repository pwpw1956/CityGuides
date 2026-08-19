/*
  CITY GUIDES — La Rochelle
  Version: 0.2.1
  Build: 2026-08-19 17:16 Europe/Amsterdam
*/
const CACHE='cityguides-lr-v0.2.1';
const SHELL=['./','./index.html','./tour.json','./status.json','./manifest.webmanifest','./icon-192.png','./icon-512.png','./version.json'];

self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('cityguides-lr-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

self.addEventListener('fetch',event=>{
  const url=new URL(event.request.url);
  if(url.origin!==location.origin)return;
  // Always get the HTML/version files fresh so a new release cannot be trapped
  // behind an old service-worker cache. Other local assets use cache-first.
  if(event.request.mode==='navigate' || /\/(index\.html|version\.json)$/.test(url.pathname)){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(response=>{
      const copy=response.clone();
      caches.open(CACHE).then(c=>c.put(event.request,copy));
      return response;
    }).catch(()=>caches.match(event.request)));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    const copy=response.clone();
    caches.open(CACHE).then(c=>c.put(event.request,copy));
    return response;
  })));
});
