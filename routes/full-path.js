const express = require("express");
const router = express.Router();
const cors = require("cors");
const Client = require("../models/client");
const Platform = require("../models/platform");
const Test = require("../models/test");
const Result = require("../models/result");
const generateChartImage = require("../services/generate-chart-image");
const generateChartRaw = require("../services/generate-chart-raw");
const generateReportHtml = require("../services/generate-report-html");

//eg rtr.dasharo.com/api/v1/dasharo/firewall/stable/latest/report?format=html&width=600

router.get(
  "/:apiKey/:platform/:fwType/:version/:viewType",
  [cors(), getData],
  async (req, res) => {
    try {
      const { apiKey, platform, fwType, version, viewType } = req.params;

      console.log({
        apiKey: apiKey,
        platform: platform,
        fwType: fwType,
        version: version,
        viewType: viewType,
        queries: req.query,
      });

      // res.status(200).json(res.data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
);

async function getData(req, res, next) {
  const { apiKey, platform, fwType, version, viewType } = req.params;
  const reqUrl = req.protocol + "://" + req.get("host") + req.originalUrl;
  const no = { format: req.query.format === undefined };
  const betweenVersionsRegex = /[^$\s/]*(-to-)[^$\s/]*/g;
  let data = {};
  let image = null;
  let html = null;
  let raw = null;

  try {
    data.client = await Client.findOne({ apiKey: apiKey }, (err, client) =>
      client === null
        ? res.status(404).json({ error: `'${apiKey}' is not a valid api key.` })
        : client
    );
    if (data.client) {
      data.platform = await Platform.findOne({
        nameSlug: platform,
        firmwareTypeSlug: fwType,
        client: data.client._id,
      });
    }
    if (data.platform) {
      let testResults;
      let testFilter =
        req.query.test === undefined
          ? false
          : req.query.test.match(/(?<="|%22)(?:\\.|[^"\\])*(?="|%22)/g);

      const generateOutput = async (results, ver, type) => {
        if (viewType === "chart") {
          let tempData;
          if (type === "single") {
            tempData = {
              version: ver,
              pass: 0,
              fail: 0,
              notTested: 0,
            };
            // console.log("results", results); // DEBUG
            results.map((tr) => {
              if (tr.results && tr.results.length > 0) {
                tr.results.map((r) => {
                  r.status.toUpperCase() === "PASS"
                    ? (tempData.pass += 1)
                    : (tempData.fail += 1);
                });
              } else {
                tempData.notTested += 1;
              }
            });
          } else if (type === "multi") {
            tempData = {
              versions: version.split("-to-").join(" - "),
              data: [
                // {version:"v1.0.0",pass:0,fail:0}
              ],
            };
            results.map((r) => {
              let indexInArray = tempData.data.findIndex(
                (e) => e.version === r.version
              );
              if (indexInArray !== -1) {
                if (r.status.toUpperCase() === "PASS") {
                  tempData.data[indexInArray].pass += 1;
                } else if (r.status.toUpperCase() === "FAIL") {
                  tempData.data[indexInArray].fail += 1;
                }
              } else {
                tempData.data.push({
                  version: r.version,
                  pass: r.status.toUpperCase() === "PASS" ? 1 : 0,
                  fail: r.status.toUpperCase() === "FAIL" ? 1 : 0,
                });
              }
            });
            console.log("tempData", tempData);
          }
          // console.log("tempData", tempData); // DEBUG
          const options = {
            width: req.query.width ? req.query.width : "600",
            height: req.query.height ? req.query.height : "400",
            title: req.query.title ? req.query.title : false,
          };
          if (req.query.format === "image") {
            const imageRaw = await generateChartImage(tempData, options);
            image = imageRaw;
            if (!req.query.debug) {
              return res.status(200).type("png").send(image);
            }
          } else if (req.query.format === "html") {
            // html = generateChartHtml(tempData, options, reqUrl);
            html = `<iframe id="rtr-chart"
            frameborder="0" 
            width="${options.width}"
            height="${options.height}"
            src="${reqUrl.split("?")[0]}?format=raw&width=${
              options.width - 10
            }&height=${options.height - 20}${
              testFilter ? '&test="' + testFilter + '"' : ""
            }">
</iframe>`;
            res.set("Content-Type", "text/plain");
            if (!req.query.debug) {
              return res.status(200).send(`${html}`);
            }
          } else if (req.query.format === "raw" || no.format) {
            raw = generateChartRaw(tempData, options);
            // res.set("Content-Type", "text/plain");
            if (!req.query.debug) {
              return res.status(200).send(`${raw}`);
            }
          }
        } else if (viewType === "report") {
          let tempData = {
            version: ver,
            tests: [],
            versions: [],
          };
          // console.log("results", results); // DEBUG
          results.map((tr) => {
            if (
              !tempData.tests.includes({
                signature: tr.signature,
                description: tr.description,
              })
            ) {
              tempData.tests.push({
                signature: tr.signature,
                description: tr.description,
              });
            }

            tr.results.map((r) => {
              const findVersionIndex = tempData.versions.findIndex(
                (v) => v.version === r.version
              );
              if (findVersionIndex !== -1) {
                tempData.versions[findVersionIndex].testResults.push({
                  signature: tr.signature,
                  status: r.status,
                  description: r.description,
                  // r.status !== "NOT SUPPORTED" ? r.status : "NOT TESTED", // TODO: address "NOT TESTED" properly
                });
              } else {
                tempData.versions.push({
                  version: r.version,
                  testResults: [
                    {
                      signature: tr.signature,
                      status:
                        r.status !== "NOT SUPPORTED" ? r.status : "NOT TESTED", // TODO: address "NOT TESTED" properly
                    },
                  ],
                });
              }
            });
          });
          // console.log("tempData", tempData); // DEBUG
          const options = {
            width: req.query.width ? req.query.width : "600",
            height: req.query.height ? req.query.height : "400",
            title: req.query.title ? req.query.title : false,
          };
          if (req.query.format === "html" || no.format) {
            const htmlRaw = generateReportHtml(tempData, options);
            html = `<iframe id="rtr-report"
            frameborder="0" 
            width="${options.width}"
            height="${options.height}"
            src="${reqUrl.split("?")[0]}?format=raw&width=${
              options.width - 10
            }&height=${options.height - 20}${
              testFilter ? '&test="' + testFilter + '"' : ""
            }">
</iframe>`;
            res.set("Content-Type", "text/plain");
            if (!req.query.debug) {
              return res.status(200).send(html);
            }
          } else if (req.query.format === "raw") {
            const htmlRaw = generateReportHtml(tempData, options);
            html = htmlRaw;
            // res.set("Content-Type", "text/plain");
            if (!req.query.debug) {
              return res.status(200).send(html);
            }
          } else if (req.query.format === "plain") {
            const htmlRaw = generateReportHtml(tempData, options);
            html = htmlRaw;
            res.set("Content-Type", "text/plain");
            if (!req.query.debug) {
              return res.status(200).send(html);
            }
          }
        }
      };
      if (version === "latest") {
        let thisQuery = testFilter
          ? {
              platform: data.platform._id,
              signature: testFilter,
            }
          : {
              platform: data.platform._id,
            };
        testResults = await Test.find(thisQuery).populate({
          path: "results",
          match: { version: data.platform.latestVersion },
        });

        if (req.query.debug) {
          res.status(200).json(testResults);
        }
        generateOutput(testResults, data.platform.latestVersion, "single");
      } else if (betweenVersionsRegex.test(version) || version === "all") {
        let ver1, ver2;
        if (version !== "all") {
          [ver1, ver2] = version.split("-to-");
        }
        console.log(`ver1 = ${ver1}\nver2 = ${ver2}`);

        let thisQuery = testFilter
          ? {
              platform: data.platform._id,
              signature: testFilter,
            }
          : {
              platform: data.platform._id,
            };
        const platformTests = await Test.find(thisQuery).then((e) => e);
        console.log("platformTests", platformTests);

        const platformTestsIds = platformTests.map((pt) => {
          return pt._id;
        });
        // console.log("platformTestsIds", platformTestsIds); // DEBUG
        if (
          platformTestsIds.length === 0 ||
          typeof platformTestsIds !== "object"
        ) {
          res
            .status(404)
            .json({ error: `No tests found for selected platform.` });
        }
        let ver1Date = "2000-01-01T00:00:00.011Z";
        let ver2Date = new Date(Date.now()).toISOString();

        if (version !== "all") {
          ver1Date = await Result.findOne(
            { version: ver1, test: platformTestsIds },
            "added"
          ).then((e) => e.added);
          ver2Date = await Result.findOne(
            {
              version: ver2,
              test: platformTestsIds,
            },
            "added"
          ).then((e) => e.added);
        }

        console.log("ver1Date", ver1Date, "\n", "ver2Date", ver2Date);

        const thisResults = await Result.find({
          added: {
            $gte: ver1Date,
            $lte: ver2Date,
          },
          test: platformTestsIds,
        }).then((e) => e);

        if (viewType === "chart") {
          if (req.query.debug) {
            res.status(200).json(thisResults);
          }
          generateOutput(thisResults, version, "multi");
        } else if (viewType === "report") {
          let thisResultsRaw = JSON.parse(JSON.stringify(thisResults));
          let thisTestsResults = JSON.parse(JSON.stringify(platformTests));
          thisTestsResults.map((tr) => {
            tr.results = [];
            thisResultsRaw.map((r) => {
              if (r.test === tr._id) {
                tr.results.push(r);
              }
            });
          });

          if (req.query.debug) {
            res.status(200).json(thisTestsResults);
          }

          generateOutput(thisTestsResults, version, "multi");
        }
      } else if (version.length > 0) {
        let thisQuery = testFilter
          ? {
              platform: data.platform._id,
              signature: testFilter,
            }
          : {
              platform: data.platform._id,
            };
        testResults = await Test.find(thisQuery).populate({
          path: "results",
          match: { version: version },
        });
        if (req.query.debug) {
          res.status(200).json(testResults);
        }
        generateOutput(testResults, version, "single");
      }

      data.version = { version: version, tests: testResults };
    }

    data.view = viewType;
    data.queries = req.query;

    if (apiKey == null) {
      return res.status(404).json({ message: "Cannot find apiKey" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
  if (req.query.debug) {
    res.data = data;
  } else if (req.query.html) {
    res.data = html;
  } else if (req.query.image) {
    res.data = image;
  }
  next();
}

module.exports = router;
