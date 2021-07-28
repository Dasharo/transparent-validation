const { CanvasRenderService } = require("chartjs-node-canvas");

async function generateChartImage(data, options) {
  console.log(`generateChartImage(data,options)`, data, options);
  //   data = [
  //     {
  //       version: "1.0.1",
  //       pass: 1,
  //       fail: 1,
  //       notTested: 1,
  //     },
  //   ];

  let dataTemp = {
    labels: [],
    datasets: [
      //   {
      //     label: "<version>",
      //     backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
      //     data: [2478,5267,734,784,433]
      //   }
    ],
  };
  let stepSize = 1;
  let passTotal = 0;
  let failTotal = 0;

  const titleBetweenQuotes = options.title
    ? options.title.match(/(?<=")(?:\\.|[^"\\])*(?=")/g)
    : "";

  const canvasRenderService = new CanvasRenderService(
    parseInt(options.width),
    parseInt(options.height)
  );
  canvasRenderService.registerFont("./resources/fonts/Inter-Light.ttf", {
    family: "Inter",
  });

  try {
    if (data.version) {
      dataTemp.labels = ["PASS", "FAIL", "NOT TESTED"];
      if (Array.isArray(data)) {
        data.map((d) => {
          dataTemp.datasets.push({
            label: d.version,
            backgroundColor: ["#00B74A", "#F93154", "#FFA900"],
            data: [d.pass, d.fail, d.notTested],
          });
          passTotal += d.pass * 2;
          failTotal += d.fail * 2;
        });
      } else {
        dataTemp.datasets.push({
          label: data.version,
          backgroundColor: ["#00B74A", "#F93154", "#FFA900"],
          data: [data.pass, data.fail, data.notTested],
        });
        passTotal += data.pass * 2;
        failTotal += data.fail * 2;
      }
    } else if (data.versions) {
      dataTemp.datasets = [
        {
          data: [],
          label: "PASS",
          backgroundColor: "#00B74A",
          fill: false,
        },
        {
          data: [],
          label: "FAIL",
          backgroundColor: "#F93154",
          fill: false,
        },
      ];
      data.data.map((d) => {
        dataTemp.labels.push(d.version);
        dataTemp.datasets[0].data.push(d.pass);
        dataTemp.datasets[1].data.push(d.fail);
        passTotal += d.pass;
        failTotal += d.fail;
      });
    }
    let passDividedByVersions = passTotal / dataTemp.datasets[0].data.length;
    let failDividedByVersions = failTotal / dataTemp.datasets[0].data.length;
    let higherResultsNumber =
      passDividedByVersions > failDividedByVersions
        ? passDividedByVersions
        : failDividedByVersions;
    console.log("passDividedByVersions", passDividedByVersions);
    console.log("failDividedByVersions", failDividedByVersions);
    // if (higherResultsNumber > 200) {
    //   stepSize = 50;
    // } else if (higherResultsNumber > 100) {
    //   stepSize = 20;
    // } else if (higherResultsNumber > 50) {
    //   stepSize = 10;
    // } else if (higherResultsNumber > 20) {
    //   stepSize = 5;
    // } else if (higherResultsNumber > 10) {
    //   stepSize = 2;
    // } else {
    //   stepSize = 1;
    // }
    stepSize =
      higherResultsNumber > 10 ? Math.round(higherResultsNumber / 10) : 1;
    console.log("stepSize", stepSize);
    // return dataTemp;
  } catch (error) {}
  let chart = {
    type: "bar",
    data: dataTemp,
    options: {
      legend: {
        display: data.versions ? true : false,
        labels: {
          fontFamily: "Inter",
        },
      },
      title: {
        fontFamily: "Inter",
        display: options.title ? true : false,
        text:
          options.title === "true"
            ? data.version || data.versions
            : titleBetweenQuotes === null
            ? '<place title between "">'
            : titleBetweenQuotes,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              display: true,
              min: 0,
              stepSize: stepSize,
            },
            gridLines: {
              zeroLineBorderDashOffset: 0,
            },
          },
        ],
      },
    },
  };

  return (async () => {
    const imageBuffer = await canvasRenderService.renderToBuffer(chart);
    return imageBuffer;
  })();
}

module.exports = generateChartImage;
