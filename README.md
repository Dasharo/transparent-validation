# About this service

DTV System (Dasharo Transparent Validation) was designed to automatically
generate various charts and reports based on submitted regression tests data.
There are several entities that can be defined:

## Service structure

### Frontend (Dashboard) [two sections]

- RTR Table - Regression Tests Results are represented as a table,
- RTR Charts - Regression Tests Results are represented as a chart,

> Each sections have a simple wizard for structuring direct link to API for a
specified table/chart with additional parameters (such as `format` [output],
`title`, `width` etc).

### Backend (API) [4 internal & 1 external endpoints]

#### Internal endpoints:

- `/clients`
- `/platforms`
- `/tests`
- `/results`

#### External endpoint:

```
/<API-KEY>/<PLATFORM>/<FW-TYPE>/<VERSIONS>/<REPORT/CHART>?<OPTIONAL_PARAMETERS>
```

#### <OPTIONAL_PARAMETERS>

/chart

* `?format=<[HTML, IMAGE, RAW]>` - generate a chart in the selected form
  - `?format=html` - iframe with the chart in the form of *html canvas*
  - `?format=image` - PNG with the chart (can be embedded as *img*)
  - `?format=raw` - *html canvas* with graph (used for iframe)
* `?debug=true` - returns information loaded from a database as JSON (should be
  used without the *format* parameter)
* `?width=<NUM>` - width in pixels (affects *html* and *image*)
* `?height=<NUM>` - same as above
* `?test="<TEST_SIGNATURE>"` - retrieves information from the database regarding
  the results for the selected version. Example: `?test="FCD1.0"`

/report

* `?format=<[HTML, PLAIN, RAW]>` - generate table in the selected form
  - `?format=html` - iframe with table in *html* form
  - `?format=plain` - preview the table source in the form of text
  - `?format=raw` - generated table (used for iframes)
* `?debug=true` - returns information loaded from the database as JSON (use
  without the parameter *format*)
* `?width=<NUM>` - width in pixels (affects *html*)
* `?height=<NUM>` - same as above
* `?test="<TEST_SIGNATURE>"` - retrieves information from the database regarding
  the results for the selected version. Example: `?test="FCD1.0"`

## Database Objects

* **Client** - this object the Client's details like `name`, `apiKey`, and
  `secretKey`.
* **Platform** - one Client can have many Platform, but a single Platform can
  only belong to one Client. This model contains fields like `name`,
  `firmwareType`, `latestVersion`, and `Client` (OID).
* **Test** - one Platform can have many Tests, but a single Test can only belong
  to one Platform. This model contains fields like `signature`, `type`, and
  `platform` (OID).
* **Result** - one Test can have many Results (with different `version` string,
  but a single Result can only belong to one Test. This model are made of fields
  like `version`, `status`, `issueUrl`, and `test` (OID).

> Instructions on how to connect directly to a deployed DB are contained within
[connecting-db-compass-gui.md](docs/connecting-db-compass-gui.md) document.

> Additionally, there's an instruction on how to get all necessary OID's
(*ObjectID* used as PK in MongoDB) called
[adding-tests-results-using-api.md](docs/adding-tests-results-using-api.md).

## Deploy locally

### Using `docker-compose`

> REGUIREMENTS: `docker`, `docker-compose`, `DB with data`/`sample data`.

1. Clone service's repository.
2. In `/` copy `.env_sample` file and name it `.env`. Next replace every `<...>`
   with adequate data.
	* Do the same to `/frontend/.env_sample`.
    * If no DB instance is available, go to `/deploy/database`, run
      `docker-compose up`, and modify `/.env` accordingly to credentials
      contained within `/deploy/database/docker-compose.yml` file (this DB will
      be empty by default!).
3. Go to `/deploy/app/` and execute command `docker-compose up`. In about a
   minute service should be deployed.

### For development purpose

> REQUIREMENTS: `npm`/`npx`, `node.js`, `MongoDB` instance with data.

1. Clone service's repository.
2. In `/` copy `.env_sample` file and name it `.env`. Next replace every `<...>`
   with adequate data.
	* Do the same to `/frontend/.env_sample`.
3. In `/` directory execute `npm i` or `npx i`, and then `node server`.
4. In `/frontend/` directory execute `npm i` or `npx i`, and then `npm run
   start`.

## Additional resources

1. **End User Documentation** - [DashboardDocumentation.md](docs/DashboardDocumentation.md)
2. **Fetch API Documentation** - [FetchApiDocumentation.md](docs/FetchApiDocumentation.md)
3. **Changelog** - [CHANGELOG.md](CHANGELOG.md)
