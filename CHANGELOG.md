# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- [API] Full CI/CD process was added.
- [API] OS font _Inter_ was added for chart's `image` format generation
  purposes.

### Changed

- [API] Replacing hard-coded CORS whitelist with an `.env` variable.

### Fixed

- [API] Fixed problem with no labels being displayed when requesting chart's `image` format.

## [0.9.1] - 2021-01-20

### Fixed

- [API] Fixed `connection successful` message showing even when connection
  attempt to database fails.

## [0.9.0] - 2021-01-19

### Added

- [API] Added support for descriptions in `report` view.

## [0.8.1] - 2021-01-18

### Added

- [DASHBOARD] Suport for version range was added to `settings` module, link
  generation module, and RTR `chart` sections.

### Fixed

- [API] Fixed problems with step size for chart rendering when requesting
  `image` format.

## [0.8.0] - 2021-01-17

### Added

- [DASHBOARD] Added first draft for version range support.

## [0.7.0] - 2021-01-15

### Added

- Added support for enviroment variables with separate `.env` files for
  Dashboard and API.
- [DASHBOARD] Added `No.` column for table in `RTR` section.
- [API] Added `No.` column for `report` view.

### Changed

- [API] If the test description in `report` view is too long, it will be
  shortened, and a tooltip will appear if mouse pointer hovers over it.
- [API] Optimized regex used for parsing parameters.

## [0.6.1] - 2021-01-14

### Fixed

- [API] Fixed improper granulation values for a charts Y-axis.

## [0.6.0] - 2021-01-13

### Added

- [DASHBOARD] Added link generation module with support for live preview.

## [0.5.4] - 2021-01-11

### Changed

- [DASHBOARD] Updated `RTR` section rendering logic.

## [0.5.3] - 2021-01-08

### Added

- [API] Added whitelist support for CORS policy.

## [0.5.2] - 2021-01-07

### Added

- [API] Added `docs` directory with API Fetch documentation.

### Changed

- [DASHBOARD] Changed URL syntax for displaying charts.
- [DASHBOARD] Updated render methods of the `chart` section.
- [DASHBOARD] Added hover effects for results in `RTR` section.

## [0.5.1] - 2021-01-06

### Changed

- [DASHBOARD] Value `all` is now set by default for `test` and `value` select
  fields.

## [0.5.0] - 2021-01-05

### Added

- [API] Added `test` parameter that allows to fetch results for a specific
  test.
- [API] Added proper CORS policy handling logic.

### Changed

- [DASHBOARD] Field `test` now clears when selecting other platform.
- [API] Changed ID of a iframe for a more specific one.
- [API] Test signature used as a value of `test` parameter must now be
  set in double quotes.
- [DASHBOARD]

### Fixed

- [API] Fixed error when requesting `html` format while `test` parameter value
  was set to NULL.
- [API] Fixed error with data parsing for a specific version.
- [API] Fixed `title` parameter `chart` while `format` is set to `image'.
- [API] Fixes for `report` view to ensure proper table rendering.

### Removed

- [API] Removed redundand component associated with rendering of `report` view.

## [0.4.2] - 2021-01-04

### Added

- [DASHBOARD] Added modal with a test with it's description and issue link.
- [DASHBOARD] Added proper support of different result statuses in `RTR'
  component.

### Fixed

- [DASHBOARD] Multiple fixes and optimizations for `RTR` component.

## [0.4.1] - 2021-01-03

### Added

- [DASHBOARD] Added option for selecting all tests in `settings` module.

### Changed

- [DASHBOARD] Rebuilded `settings` module for better compatibility.

## [0.4.0] - 2020-12-30

### Added

- [DASHBOARD] Added support for `latest` version tag.
- [API] Added draft support for multi-version data fetching.
- [API] Added `<VER1>-to-<VER2>` and `all` version tags.

### Changed

- [DASHBOARD] - Updated `settings` module to add tag support.

## [0.3.5] - 2020-12-29

### Changed

- [DASHBOARD] Updated CSS.
- [DASHBOARD] Updates for dashboard's logic and rendering of results table in
  `RTR` section.

## [0.3.4] - 2020-12-28

### Added

- [DASHBOARD] Added api-key input to `settings` module.
- [DASHBOARD] `RTR` tab can now render results table with comments.
- [API] Added support for version range for `chart` view.

### Fixed

- [API] Fixing `debug` flag.

## [0.3.3] - 2020-12-21

### Added

- [API] Added a parameter for fetching client based on api-key.
- [API] Added `report` view for a public endpoint with `html` and `raw` format
  support.

### Changed

- [API] Changed `html` format to `raw` for `chart` view.

## [0.3.2] - 2020-12-18

### Added

- [API] Added a way to fetch for platforms for a specific clients, tests for a
  specific platform, and so on.
- [API] Added support for a `image`, `html`, and `canvas` formats for public
  endpoint.

### Changed

- Updates for a `settings` module.

## [0.3.1] - 2020-12-17

### Added

- [DASHBOARD] Added `setting` sidebar for selecting query parameters.
- [API] `image` format for a `chart` view of a public API.

## [0.3.0] - 202-12-16

### Added

- [DASHBOARD] First draft of a dashboard.
- [API] It is now possible to display debug data based on public endpoint's
  structure.

### Changed

- [API] Multiple changes to a API's structure and logic.

## [0.2.1] - 2020-12-09

### Added

- [API] Added `latest` tag to public endpoint, and a `debug=true` parameter.

## [0.2.0] - 2020-12-04

### Added

- [API] Added first draft and a debug logic for a public endpoint.

## [0.1.0] - 2020-12-01

### Added

- [API] Basic Node.js server with Express & models and routes to collections.
