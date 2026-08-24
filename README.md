# CityGuides v0.6.1

Mobile four-page adaptive walking guide for La Rochelle and Lewes.

## v0.6.1
- Clear coloured map pins for all guide sites.
- Map automatically invalidates its size and fits the visible route/sites when the Map page opens.
- Each navigation button has its own muted colour and the corresponding page uses a related pale tint.
- Compact one-line page banner; Map and Detail show the current city in the banner.
- Map enlarged; city name and redundant map heading removed from the map panel.
- Compact expandable map-marker legend; explanations moved to Help.
- Previous / Next moved above Re-plan / Auto-follow.
- Detail page audio controls reorganised: Play, Pause and Stop together; compact speed control and Follow audio together below.
- Playback speed uses 0.1x increments from 0.5x to 2.0x; changes apply to the next spoken section.
- Audio play/pause/stop state is explicitly tracked so Play resumes only after Pause and starts a fresh reading after Stop or changing site.

## Upload
Replace only `index.html`, `version.json`, `sw.js` and `README.md` in the existing repository. Keep the existing `data/`, `status/`, icons, manifest and `reset.html`.
