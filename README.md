# City Guides v0.3.0 — clean multi-city architecture

This release separates the application engine from city data. The catalogue is `cities.json`; city data live under `data/`; live status under `status/`.

## First-time recovery from the old v0.2.x service worker
If a phone still shows v0.2.1, open `reset.html` once. It unregisters old service workers, deletes old caches and local City Guides settings, then opens the current app.

## Current city
La Rochelle is the first catalogue entry. Add future cities by adding a city JSON file, a status JSON file, and one entry to `cities.json`.

## Release
Version 0.3.0 — build 2026-08-21 10:30 UTC.
