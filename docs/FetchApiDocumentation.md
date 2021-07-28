# Fetch Api Documentation

## API Endpoint base URL

Api endpoint base url is always the same for all users and looks like follows:

    https://api.dasharo.com/api/v1

# API Endpoints internal use

## Authentication

Currently in v1 all requests to the API must contain API key credentials.
For authorization, we send an API key as described below.

### Request url

    /clients?apikey=<API-KEY>

### HTTP Method allowed

    GET

Sending GET request to this url, returns array with specified client object.

### Example Response

    [
    {
        "_id": "5fc8e8dee38f2a5c71c6f2ef",
        "apiKey": "dasharo",
        "secretKey": "89##d",
        "name": "Dasharo",
        "nameSlug": "dasharo",
        "enabled": true,
        "description": "",
        "added": "2020-12-08T12:09:36.052Z",
        "id": "5fc8e8dee38f2a5c71c6f2ef"
    }
    ]

 <hr />

## Clients

Clients management.

### Request url

    /clients

### HTTP Method allowed

    GET / POST

Sending GET request to this url, returns array collection of clients.
POST method will add a new client.

### Example Response

    [
    {
        "_id": "5fc8e8dee38f2a5c71c6f2ef",
        "apiKey": "dasharo",
        "secretKey": "89##d",
        "name": "Dasharo",
        "nameSlug": "dasharo",
        "enabled": true,
        "description": "",
        "added": "2020-12-08T12:09:36.052Z",
        "id": "5fc8e8dee38f2a5c71c6f2ef"
    }
    ]

### Request url

    /clients/<ID>

### HTTP Method allowed

    GET / PATCH / DELETE

Allows to manage client details. Return client object.

### Example Response

    {
        "_id": "5fc8e8dee38f2a5c71c6f2ef",
        "apiKey": "dasharo",
        "secretKey": "89##d",
        "name": "Dasharo",
        "nameSlug": "dasharo",
        "enabled": true,
        "description": "",
        "added": "2020-12-08T12:09:36.052Z",
        "id": "5fc8e8dee38f2a5c71c6f2ef"
    }

### Request url

    /clients/<ID>/platforms

### HTTP Method allowed

    GET

Return client object with assigned platforms.

### Example Response

    {
    "_id": "5fc8e8dee38f2a5c71c6f2ef",
    "apiKey": "dasharo",
    "secretKey": "89##d",
    "name": "Dasharo",
    "nameSlug": "dasharo",
    "enabled": true,
    "description": "",
    "added": "2020-12-08T12:09:36.052Z",
    "platforms": [
        {
            "_id": "5fd0a1b77097a4a0dbf4aca4",
            "name": "Firewall",
            "nameSlug": "firewall",
            "firmwareType": "Stable",
            "firmwareTypeSlug": "stable",
            "description": "",
            "client": "5fc8e8dee38f2a5c71c6f2ef",
            "id": "5fd0a1b77097a4a0dbf4aca4"
        },
        {
            "_id": "5fc8e9b3e38f2a5c71c6f2f0",
            "name": "APU1",
            "nameSlug": "apu1",
            "firmwareType": "legacy",
            "firmwareTypeSlug": "legacy",
            "latestVersion": "v0.0.2.5",
            "description": "",
            "client": "5fc8e8dee38f2a5c71c6f2ef",
            "id": "5fc8e9b3e38f2a5c71c6f2f0"
        }
    ],
    "id": "5fc8e8dee38f2a5c71c6f2ef"
    }

 <hr />

## Platforms

Platforms management

### Request url

    /platforms

### HTTP Method allowed

    GET / POST

Sending GET request to this url, returns array collection of platforms.
POST method will add a new platform.

### Example Response

    [
    {
        "_id": "5fc8e9b3e38f2a5c71c6f2f0",
        "name": "APU1",
        "nameSlug": "apu1",
        "firmwareType": "legacy",
        "firmwareTypeSlug": "legacy",
        "latestVersion": "v0.0.2.5",
        "description": "",
        "client": "5fc8e8dee38f2a5c71c6f2ef",
        "id": "5fc8e9b3e38f2a5c71c6f2f0"
    },
    {
        "_id": "5fd0a1b77097a4a0dbf4aca4",
        "name": "Firewall",
        "nameSlug": "firewall",
        "firmwareType": "Stable",
        "firmwareTypeSlug": "stable",
        "description": "",
        "client": "5fc8e8dee38f2a5c71c6f2ef",
        "id": "5fd0a1b77097a4a0dbf4aca4"
    }
    ]

### Request url

    /platforms/<ID>

### HTTP Method allowed

    GET / PATCH / DELETE

Allows to manage platform details. Return platform object.

### Example Response

    {
    "_id": "5fc8e9b3e38f2a5c71c6f2f0",
    "name": "APU1",
    "nameSlug": "apu1",
    "firmwareType": "legacy",
    "firmwareTypeSlug": "legacy",
    "latestVersion": "v0.0.2.5",
    "description": "",
    "client": {
        "_id": "5fc8e8dee38f2a5c71c6f2ef",
        "apiKey": "dasharo",
        "secretKey": "89##d",
        "name": "Dasharo",
        "nameSlug": "dasharo",
        "enabled": true,
        "description": "",
        "added": "2020-12-08T12:09:36.052Z",
        "id": "5fc8e8dee38f2a5c71c6f2ef"
    },
    "id": "5fc8e9b3e38f2a5c71c6f2f0"
    }

### Request url

    /platforms/<ID>/tests

### HTTP Method allowed

    GET

Return platform object with assigned tests.

### Example Response

    {
    "_id": "5fc8e9b3e38f2a5c71c6f2f0",
    "name": "APU1",
    "nameSlug": "apu1",
    "firmwareType": "legacy",
    "firmwareTypeSlug": "legacy",
    "latestVersion": "v0.0.2.5",
    "description": "",
    "client": "5fc8e8dee38f2a5c71c6f2ef",
    "tests": [
        {
            "_id": "5fca2fb1a87d57036f9107c9",
            "type": "",
            "signature": "FCO1.1",
            "description": "This is a description for a test.",
            "added": "2020-12-09T12:09:36.052Z",
            "platform": "5fc8e9b3e38f2a5c71c6f2f0",
            "id": "5fca2fb1a87d57036f9107c9"
        },
        {
            "_id": "5fd0ca827097a4a0dbf4aca6",
            "type": "",
            "signature": "FCD1.0",
            "description": "",
            "added": "2020-12-09T12:09:36.052Z",
            "platform": "5fc8e9b3e38f2a5c71c6f2f0",
            "id": "5fd0ca827097a4a0dbf4aca6"
        },
    ],
    "id": "5fc8e9b3e38f2a5c71c6f2f0"}

 <hr />

## Tests

Test management

### Request url

    /tests

### HTTP Method allowed

    GET / POST

Sending GET request to this url, returns array collection of tests.
POST method will add a new test.

### Example Response

    [
    {
        "_id": "5fca2fb1a87d57036f9107c9",
        "type": "",
        "signature": "FCO1.1",
        "description": "This is a description for a test.",
        "added": "2020-12-09T12:09:36.052Z",
        "platform": "5fc8e9b3e38f2a5c71c6f2f0",
        "id": "5fca2fb1a87d57036f9107c9"
    },
    {
        "_id": "5fd0ca827097a4a0dbf4aca6",
        "type": "",
        "signature": "FCD1.0",
        "description": "",
        "added": "2020-12-09T12:09:36.052Z",
        "platform": "5fc8e9b3e38f2a5c71c6f2f0",
        "id": "5fd0ca827097a4a0dbf4aca6"
    },
    ]

### Request url

    /tests/<ID>

### HTTP Method allowed

    GET / PATCH / DELETE

Allows to manage test details. Return test object.

### Example Response

    {
    "_id": "5fca2fb1a87d57036f9107c9",
    "type": "",
    "signature": "FCO1.1",
    "description": "This is a description for a test.",
    "added": "2020-12-09T12:09:36.052Z",
    "platform": {
        "_id": "5fc8e9b3e38f2a5c71c6f2f0",
        "name": "APU1",
        "nameSlug": "apu1",
        "firmwareType": "legacy",
        "firmwareTypeSlug": "legacy",
        "latestVersion": "v0.0.2.5",
        "description": "",
        "client": "5fc8e8dee38f2a5c71c6f2ef",
        "id": "5fc8e9b3e38f2a5c71c6f2f0"
    },
    "id": "5fca2fb1a87d57036f9107c9"
    }

### Request url

    /tests/<ID>/results

### HTTP Method allowed

    GET

Return test object with assigned results.

### Example Response

    {
    "_id": "5fca2fb1a87d57036f9107c9",
    "type": "",
    "signature": "FCO1.1",
    "description": "This is a description for a test.",
    "added": "2020-12-09T12:09:36.052Z",
    "platform": "5fc8e9b3e38f2a5c71c6f2f0",
    "results": [
        {
            "_id": "5fca3005a87d57036f9107ca",
            "version": "v0.0.1",
            "status": "PASS",
            "description": "",
            "issueUrl": "",
            "added": "2020-12-09T12:09:36.052Z",
            "test": "5fca2fb1a87d57036f9107c9"
        },
        {
            "_id": "5fca315ba87d57036f9107cb",
            "version": "v0.0.2",
            "status": "FAIL",
            "description": "",
            "issueUrl": "",
            "added": "2020-12-09T12:10:18.052Z",
            "test": "5fca2fb1a87d57036f9107c9"
        },
    ],
    "id": "5fca2fb1a87d57036f9107c9"
    }

### Request url

    /tests/<ID>/results/?version="<VERSION>"

### HTTP Method allowed

    GET

Return test object with specified result.

### Example Response

    {
    "_id": "5fca2fb1a87d57036f9107c9",
    "type": "",
    "signature": "FCO1.1",
    "description": "This is a description for a test.",
    "added": "2020-12-09T12:09:36.052Z",
    "platform": "5fc8e9b3e38f2a5c71c6f2f0",
    "results": [
        {
            "_id": "5fca315ba87d57036f9107cb",
            "version": "v0.0.2",
            "status": "FAIL",
            "description": "",
            "issueUrl": "",
            "added": "2020-12-09T12:10:18.052Z",
            "test": "5fca2fb1a87d57036f9107c9"
        }
    ],
    "id": "5fca2fb1a87d57036f9107c9"
    }

 <hr />

## Results

Results management

### Request url

    /results

### HTTP Method allowed

    GET / POST

Sending GET request to this url, returns array collection of results.
POST method will add a new result.

### Example Response

    [
    {
        "_id": "5fca3005a87d57036f9107ca",
        "version": "v0.0.1",
        "status": "PASS",
        "description": "",
        "issueUrl": "",
        "added": "2020-12-09T12:09:36.052Z",
        "test": "5fca2fb1a87d57036f9107c9"
    },
    {
        "_id": "5fca315ba87d57036f9107cb",
        "version": "v0.0.2",
        "status": "FAIL",
        "description": "",
        "issueUrl": "",
        "added": "2020-12-09T12:10:18.052Z",
        "test": "5fca2fb1a87d57036f9107c9"
    },
    ]

### Request url

    /results/<ID>

### HTTP Method allowed

    GET / PATCH / DELETE

Allows to manage result details. Return result object.

### Example Response

    {
    "_id": "5fca3005a87d57036f9107ca",
    "version": "v0.0.1",
    "status": "PASS",
    "description": "",
    "issueUrl": "",
    "added": "2020-12-09T12:09:36.052Z",
    "test": {
        "_id": "5fca2fb1a87d57036f9107c9",
        "type": "",
        "signature": "FCO1.1",
        "description": "This is a description for a test.",
        "added": "2020-12-09T12:09:36.052Z",
        "platform": "5fc8e9b3e38f2a5c71c6f2f0",
        "id": "5fca2fb1a87d57036f9107c9"
    }
    }

# API Endpoints external use

To get detailed data, use the following string in the API query.

The API provides the generation of reports and charts based on the given keys.

### Request url

    /<API-KEY>/<PLATFORM-SLUG>/<FW-TYPE>/<VERSION/TAG>/<VIEW-FORMAT>

### HTTP Method allowed

    GET

### Example chart

    /dasharo/apu1/legacy/latest/chart

### Example Response

    <div style="width:600px;height:400px;">
        <canvas id="chart-rtrs" width=600 height=400></canvas>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script>
        new Chart(document.getElementById("chart-rtrs"), {"type":"bar","data":{"labels":["PASS","FAIL","NOT TESTED"],"datasets":[{"label":"v0.0.2.5","backgroundColor":["#00B74A","#F93154","#FFA900"],"data":[1,0,4]}]},"options":{"legend":{"display":false},"title":{"display":false,"text":""},"scales":{"yAxes":[{"ticks":{"display":true,"min":0,"stepSize":1},"gridLines":{"zeroLineBorderDashOffset":0}}]}}});
    </script>

### Example report

    /dasharo/apu1/legacy/latest/report

### Example Response

    <iframe id="inlineFrameExample"
        frameborder="0"
        width="600"
        height="400"
        src="http://localhost:3000/dasharo/apu1/legacy/latest/report?format=raw&width=590&height=380">
    </iframe>

<hr/>

## Chart details

### Request url

    /chart?format=<[HTML, IMAGE, RAW]>

Generating the chart in the selected format.

### Request url

    /chart?format=html

Get iframe with a chart in html canvas format.

### Request url

    /chart?format=image

Get iframe with a chart in PNG format.

### Request url

    /chart?format=raw

Get html code used to embed in iframe.

### Request url

    /chart?debug=true

Get JSON format (use without the format parameter).

### Request url

    /chart?width=<NUM>

Set width in pixels (affects html and image).

### Request url

    /chart?height=<NUM>

Set height in pixels (affects html and image).

### Request url

    ?test="<TEST_SIGNATURE>"

Get information about the results from the database
for the selected version. Example: Test signature = "FCD1.0"

<hr/>

## Report details

### Request url

    /report?format=<[HTML, PLAIN, RAW]>

Generating table report as selected format.

### Request url

    /report?format=html

Get iframe with a table report in html canvas format.

### Request url

    /report?format=plain

Get preview of the table report source in the form of text.

### Request url

    /report?format=raw

Get html code used to embed in iframe.

### Request url

    /report?debug=true

Get JSON format (use without the format parameter).

### Request url

    /report?width=<NUM>

Set width in pixels (affects html and image).

### Request url

    /report?height=<NUM>

Set height in pixels (affects html and image).

### Request url

    /report?test="<TEST_SIGNATURE>"

Get information about the results from the database
for the selected version. Example: Test signature = "FCD1.0"
