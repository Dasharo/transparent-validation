# RTR Dashboard documentation

## About application

This application allows to manage data from regression test results. 
It displays them in the form of a table or graph. Based on what user can generate
 a link to an API that user can embed in his newsletter or blog post.

## Tech stack

Technologies that were used in this project:

* JavaScript
* React & Redux
* MongoDB 
* Node.js
* Express
* Chart.js

## Dashboard

Dashboard consists of elements like the Settings Panel on the sidebar, 
Dashboard Home, RTR and Charts tab on the top bar. 

## Settings Panel

Side panel consist of:
* Client API Key section - contains input for an API key - an easy way to use 
Dashboard and manage data 
Without providing it, user will not be able to use the rest of the form.
* Display settings - where user can select:
  * Platform,
  * Firmware Type,
  * Test - user can specify one or choose all,
  * Version - user can specify one or choose all,
It is also possible to define the scope of the version selection type: single or 
range, by selecting the appropriate input.
The "latest version" tag indicates the most recent version in which the test 
was recently performed.

After selecting all parameters and confirming with the "Load" button, the user 
should select one of the tabs (Dashboard Home, RTR, Charts) to see the results.

## Dashboard Home tab

On the Dashboard main tab there are the most important information based on 
the users current settings, e.g number of pass/fail tests, platform details with 
date of last test.
If the user wants to change the search parameters, he can fill in the settings 
panel again and click "Load".

## RTR tab

The RTR tab display patricual date about Tests based on users chose on the table, 
like Test ID, Description, and Test Status. 
To view detailed data about the test, click on its status. A window will appear 
with the name of the version and test
and test result description if added. 
To close the window, press the cross in the upper right corner.
If the test has an additional comment, an icon with a notepad will be visible 
in the description field. To see the details, click the icon.

## Charts tab

The Charts tab displays the date with the number of tests based on the users 
selection. 
If more than one version is selected, the chart will display several columns 
with version names at the bottom.
The green color shows the number of passed tests and the red - number of 
negative tests. To see the exact number of tests and the name of the version, 
hover mouse over the column.

## Link generator panel

On the "Table" and "Charts" subpages there is a panel with an automatically 
generated link. Underneath it is the "Format" box with the default format "raw". 
To change it, expand the select list and choose from: image, html, raw. 
Optionally, user can also specify the height, width, title and insert a specific 
test. The data in the link changes automatically. 
The default dimensions are 400px (height) x 600px (width). To see the preview, 
click "Load Preview", and to delete the previously entered data click "Clear". 
To use the  generated link just copy it.

## API Authentication

To access the data in the application, just enter the received API key.

## API Endpoint base URL

Api endpoint base url is always the same for all users and looks like follows:

    https://api.dasharo.com/api/v1

## How to use API 

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
