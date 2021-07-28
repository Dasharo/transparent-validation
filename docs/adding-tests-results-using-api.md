# Adding tests results using API

> To add results of a regression tests the follow steps are required.

1. Using `apikey`, a GET request needs to be sent to
   `<API>/clients?apikey="<API_KEY>"` which will return an JSON object with
   `_id` parameter, eg `”5ffecc45d968132a1a057489”`.
2. Next step is to send another GET request using client's *OID* to
   `<API>/clients/<USER_OID>/platforms` (eg
   `/clients/5ffecc45d968132a1a057489/platforms`). It will provide this client's
   object with a `platforms` field containing an array of platforms, each with a
   `name` field and unique `_id`.
3. When adding results for new version of, for example, `XYZ` (with OID
   `600052ccb48b1c37ffa7119d`), a GET request needs to be made to determine
   *tests* connected with this platform. The request should look like
   `<API>/platforms/<PLATFORM_OID>/tests`, and it will return an `platform`
   object with `tests` array (analogically to what's in step 2). Every *test*
   has a `signature` field which should contain unique identificator for this
   test (eg `”FCO1.1”`) and an `_id` field.
4. Finally, when OID's for every test is known a POST request can be send to the
   `<API>/results` endpoint. It should look like below:

```JSON
    [
      {
        "version":"v4.12.0.4",
        "status":"PASS",
        "description":"",
        "issueUrl":"",
        "test":"5ffee782d968132a1a164a6e"
    },
    <another results>
    ]
```

- `version` - STRING, shouldn't contain spaces [REQ],
- `status` - STRING, one of follows: `PASS`, `FAIL`, `NOT TESTED`, 
`NOT SUPPORTED` [REQ],
- `description` - STRING, optional,
- `issueUrl` - STRING, with optional URL to issue or test report,
- `test` - STRING, with test's `_id` [REQ],
- `added` - STRING/DATE, in ISO format (optional, is added automatically) like
  `"2020-05-09T12:00:00.052Z"`,

Getting all necessary OID's (`_id` fields) can be simplified in next iterations
by caching them on a first run.
