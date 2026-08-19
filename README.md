# La Rochelle Self-Guided Tour — City Guides v0.2.1

Build: 19 August 2026.

This release adds explicit version/build identification, versioned local storage, and cache-safe service-worker updates so phones should not remain stuck on an older release.

# City Guides — La Rochelle adaptive tour v2

This is the second-stage prototype of a reusable city walking-guide PWA.

## New in v2

- User chooses available tour time.
- User presses **I AM HERE** anywhere and that location becomes Home.
- Planner selects a subset of a larger repertoire of sights.
- Planned time includes walking + listening.
- A return buffer can be reserved.
- GPS can automatically select a nearby section.
- The plan can be re-evaluated as the user moves and time passes.
- Proposed plan changes require user confirmation.
- **Hold to get me Home** is guarded against accidental taps.
- Pedestrian routes are requested from Valhalla rather than drawn as straight lines.
- Seasonal opening rules are stored locally.
- A separate `status.json` can carry live overrides.
- GitHub Actions can refresh strong temporary-closure signals from official La Rochelle pages daily.
- The application remains data-driven: another city can use the same engine with a different `tour.json`.

## Important prototype limitations

1. The Valhalla public server is a shared demo service and is subject to fair-use/rate limits. For a production version, use a suitable routing provider or a self-hosted routing service.
2. The live-status workflow deliberately detects only explicit temporary-closure wording. It does not attempt to scrape arbitrary opening hours; the normal seasonal rules remain in `tour.json`.
3. The current stop coordinates and descriptions are a second-stage prototype and should be field-checked before relying on the guide on a cruise day.
4. Map tiles are loaded from OpenStreetMap while online. A future production version should add an explicitly licensed offline map strategy.

## Deployment

For GitHub Pages, put these files at the repository root and publish the `main` branch root.

Website:
`https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`

The repository should be public for GitHub Free Pages.

## Routing

Valhalla is an open-source routing engine using OpenStreetMap data. The application uses pedestrian costing and stores the last successful route in memory during the session.

## Next production stage

- field-verify all coordinates
- replace prototype route planning with a road-network-aware selection algorithm using a matrix service
- improve opening-hours extraction and add special-date/event feeds
- add explicit "visit duration" separate from audio duration
- add a user-approved "skip/postpone" planner
- add offline-capable map data
- add a city selector and reusable tour package format
