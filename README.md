# CityGuides v0.7.1

Mobile four-page adaptive walking guide for La Rochelle and Lewes.

## v0.7.1
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


## v0.7.1 change
- Preserves the v0.6.1 application structure, Leaflet/Valhalla pedestrian routing, GPS, four-page layout and audio controls.
- Adds visited-stop tracking: selected stops become grey on the map after being visited; the progress bar is based on visited selected stops; the Map list marks visited stops in grey.
- Next marks the stop just left as visited rather than incorrectly marking the destination as visited.
- Auto-follow marks a selected stop visited when GPS places the user inside its configured zone.
- Only selected (blue) stops count toward Stop X of Y.


## v0.7.1 stabilisation
- Preserves the existing v0.7.0/v0.6.1 application and route-planning logic.
- Replaces fragile CSS site pins with inline-SVG Leaflet pins.
- Adds direction arrows over the existing Valhalla pedestrian route.
- Makes the Home/Map/Detail/Help colours more clearly distinguishable while keeping them muted.
- Retains the selected navigation-button border.
- Standardises Help headings and all Help explanatory text with a larger, consistent, readable treatment.
