# La Rochelle Self-Guided Tour — prototype

This is a browser-based Progressive Web App (PWA). It is deliberately not a native Android/iPhone app: the same files work on Samsung, iPhone, iPad and desktop browsers.

## What it does
- 10 GPS zones covering a mostly level historic-centre walk.
- Approx. 125–145 minutes and about 3 km at a leisurely pace.
- Map with a route line and numbered stops.
- Photographs linked from Wikimedia Commons.
- Text-to-speech audio using the phone's built-in browser speech engine.
- Automatic selection based on a zone radius, plus manual Next/Previous controls.
- Tour content lives in `tour.json`, so another city can be made by replacing the data file.

## Important
A PWA must be served from HTTPS for reliable geolocation and installation. Opening `index.html` directly from a phone's Files app is not sufficient.

### Easiest free deployment
1. Create a free GitHub repository.
2. Upload all files in this folder.
3. Enable GitHub Pages for the repository.
4. Open the resulting HTTPS address on each phone.
5. On iPhone use Safari -> Share -> Add to Home Screen.
6. On Samsung/Chrome use the browser's Install/Add to Home screen option.

## Map
The prototype uses OpenStreetMap tiles via Leaflet. Keep visible attribution. Do not add an offline map download/prefetch function to the public OSM tile server; use a provider that explicitly permits offline maps if offline operation is required.

## Generalising to another city
Create a new `tour.json` with:
- city, estimatedMinutes, walkingKm
- route: an array of [latitude, longitude] pairs
- stops: id, title, lat, lng, radius, minutes, image, credit, text, tip

Suggested zone design:
- large square/plaza: 50–90 m
- broad waterfront: 60–100 m
- single building: 20–35 m
- GPS-unfriendly streets: 30–50 m

Use 10–14 stops for a 2–2.5 hour tour. Aim for 120–180 seconds of speech per stop; reserve 240–300 seconds for exceptional sites.

## Future improvements
- Pre-generated MP3 audio for consistent voices and true offline use.
- Bundled/licensed images rather than remote image URLs.
- Optional offline map provider with explicit offline rights.
- Route alternatives and accessibility tags.
- "Nearby stops" panel and arrival chime.
- A content validation script that checks every stop's sources, licence and word count.
