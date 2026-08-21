/*
  CITY GUIDES
  Version: 0.5.0
  Build: 2026-08-21 10:30 UTC
*/
const CACHE="cityguides-v0.5.0";
const SHELL=["./","./index.html","./cities.json","./version.json","./manifest.webmanifest","./icon-192.png","./icon-512.png"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith("cityguides-")&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("message",e=>{if(e.data?.type==="SKIP_WAITING")self.skipWaiting();});
self.addEventListener("fetch",e=>{
 const u=new URL(e.request.url); if(u.origin!==location.origin)return;
 if(e.request.method!=="GET")return;
 // Network-first: releases and city data should never be trapped behind an old cache.
 e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return r;}).catch(()=>caches.match(e.request)));
});
