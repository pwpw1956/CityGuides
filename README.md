# CityGuides v0.7.8

Mobile four-page adaptive walking guide for La Rochelle and Lewes.

## v0.7.8
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


## v0.7.8 change
- Preserves the v0.6.1 application structure, Leaflet/Valhalla pedestrian routing, GPS, four-page layout and audio controls.
- Adds visited-stop tracking: selected stops become grey on the map after being visited; the progress bar is based on visited selected stops; the Map list marks visited stops in grey.
- Next marks the stop just left as visited rather than incorrectly marking the destination as visited.
- Auto-follow marks a selected stop visited when GPS places the user inside its configured zone.
- Only selected (blue) stops count toward Stop X of Y.


## v0.7.8 stabilisation
- Preserves the existing v0.7.0/v0.6.1 application and route-planning logic.
- Replaces fragile CSS site pins with inline-SVG Leaflet pins.
- Adds direction arrows over the existing Valhalla pedestrian route.
- Makes the Home/Map/Detail/Help colours more clearly distinguishable while keeping them muted.
- Retains the selected navigation-button border.
- Standardises Help headings and all Help explanatory text with a larger, consistent, readable treatment.


## v0.7.8 runtime stabilisation
- Correct initialisation order: state resets before marker status calculation.
- All usable site pins render before GPS exists.
- Marker collection uses Leaflet FeatureGroup for valid bounds.
- Returning to Map preserves the user's zoom.
- Existing route-selection/planner logic is retained.
- Route arrows have corrected compass orientation.
- Routing failure clears stale route graphics and reports the failure visibly.


## v0.7.8 mapping-integrity release
- Audits all 15 Lewes fixed-site coordinates against named/geotagged references.
- Selected route pins are numbered; non-selected pins remain unnumbered.
- The site currently shown on Detail gets a yellow outline without losing its semantic pin colour.
- I AM HERE remains the route origin; the planner still selects/orders from that live position.
- Re-plan reports whether it changed the plan or found no change necessary.
- Home background is slightly deeper.
- Help text is updated to match current behaviour and includes the full pin key and audio-control note.
- Detail gives more space to text and uses slightly shallower audio controls.
- Route-selection intelligence itself is intentionally NOT redesigned here.


## v0.7.8 route-planning release
- Adds routeType point/area/linear and separate pedestrian approach/traverse data.
- Moves Lewes station routing/marker to the public Station Road approach instead of the internal railway-station node.
- Forces linear sights such as Keere Street and Cliffe High Street through ordered traversal points.
- Uses Valhalla's pedestrian time-distance matrix for selection/order when available; falls back to the previous estimator if matrix service is unavailable.
- Adds a mild reversal/backtracking penalty to route ordering.
- Keeps I AM HERE as the route origin.
- Removes the Detail 'Guide' badge and increases useful Detail text space.


## v0.7.8 route-quality release
- Adds explicit Finish tour modes: Central area (default), No fixed end, Return to Sight 1.
- Keeps GET ME HOME separate from normal tour-ending logic.
- Uses network look-ahead to reward useful connector sights and stronger reversal/backtracking penalties.
- Applies the same pedestrian costing preferences to matrix and route requests.
- Strongly favours mapped footways/sidewalks; penalises mapped steps, private access and driveways.
- Auto-replan is OFF by default and no longer runs on a timer.
- If enabled, automatic re-planning is considered only after a visit and only for a material overrun (>=15 min or >=15% remaining time).
- Manual map pan/zoom is preserved; Show whole route explicitly restores the full route view.
- I AM HERE still defines the route origin. Initial route fitting is deliberate once; later replans do not steal the user's zoom.


## v0.7.8 planner integrity correction
- Fixes the v0.7.5 candidate-removal bug that could select the same sight repeatedly.
- Candidate removal now uses the stable matrix/candidate index rather than JavaScript object identity.
- Adds hard unique-site invariants to network planning, fallback planning, plan acceptance and rendering.
- A duplicate plan now throws an explicit planner-integrity error instead of being displayed.
- Retains v0.7.5 route-quality, end-of-tour, map-zoom and Auto-replan changes.


## v0.7.8 route-order refinement
- After the detailed pedestrian route is returned, selected sights are rechecked against the route geometry and renumbered in first-encounter order.
- At most two encounter-order correction passes are allowed, preventing reroute loops.
- Keere Street carries a downhill preferred traversal direction, used unless reaching that end would add more than 250 m of approach.
- Anti-backtracking optimisation is bounded: a less repetitive order may add at most 5 walking minutes over the locally fastest order found.
- Central/Return-to-Sight-1 endings now display an explicit finish flag; No fixed end displays none.
- v0.7.6 unique-stop integrity guards remain in place.


## v0.7.8 — 2026-08-28 18:04 UTC
- Fixes planner availability: red/closed sights are not eligible for selection.
- For linear sights, route encounter numbering uses the meaningful route anchor/midpoint instead of the first edge of the street.
- Removes the competing Leaflet tooltip so each pin has one consistent information/action popup.
- Adds synchronized Add/Remove selection on map pins and the complete candidate list below the map.
- Explicit user inclusions/exclusions survive Re-plan; explicit inclusions may exceed the original time target by user choice.
- Manual selection changes are applied immediately to colours/numbers/list; one Re-plan then optimises the route.
- Replaces unreliable browser speechSynthesis.pause()/resume() with a token-safe Pause/Resume state machine; Resume restarts the current paragraph.
- Enlarges the useful Detail content area and slightly reduces audio-control height.
- Darkens/refines the Home page treatment without removing controls.
- Finish marker is now a red-and-white chequered flag.
- Selection/cluster/point/area/linear logic remains data-driven and city-agnostic for future guides.
