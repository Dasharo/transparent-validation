function generateReportHtml(data, options, reqUrl) {
  // console.log("generateReportHtml(data, options)", data, options); // DEBUG

  const style = `<style>
  * {
    margin: 0;
    padding: 0;
    border: 0;
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
  }
  
  body {
    font-family: "Oswald", sans-serif;
    height: 100vh;
  }
  
  .dashboard__data-view {
    padding: 30px 50px;
    width: calc(100% - 300px);
    margin-left: 300px;
  }
  
  .dashboard__data-view-header {
    display: flex;
    color: #808080;
    line-height: 160%;
  }
  
  .dashboard__data-view-box-data {
    display: flex;
    align-items: center;
    margin-top: 15px;
  }
  
  .dashboard__data-view-box-data .num {
    width: 120px;
    color: #fff;
    margin-left: 10px;
    background: #29363b;
    padding: 10px 0;
    text-align: center;
    margin: 0 0 0 auto;
  }
  
  .dashboard__data-view-box-data .pass {
    background: #38d430;
  }
  
  .dashboard__data-view-box-data .fail {
    background: #ea495f;
  }
  
  .dashboard__data-view-box-data .notsupported {
    background: #fcbe15;
  }
  
  .dashboard__data-view-box-data-summary {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
  }
  
  .dashboard__data-view-box-data-summary-item {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  
  .dashboard__data-view-box-data-summary-item span {
    margin-left: 15px;
  }
  
  .dashboard__data-view-table-container {
    background: rgb(240, 240, 240);
    margin: 20px 30px 30px 30px;
    display: flex;
  }
  
  .dashboard__data-view-table-one,
  .dashboard__data-view-table-two {
    overflow: scroll;
  }
  
  .dashboard__data-view-table-one {
    margin-right: 10px;
  }

  .dashboard__data-view-table-one-desc {
    min-width: 545px;
    margin-right: 10px;
  }
  
  .dashboard__data-view-table-two {
  }
  
  .dashboard__data-view-table-header {
    display: flex;
  }
  
  .dashboard__data-view-table-header-item-one,
  .dashboard__data-view-table-header-item-two {
    color: #fff;
    padding: 10px 20px;
    font-weight: 500;
    margin-right: 5px;
    height: 55px;
  }
  
  .dashboard__data-view-table-header-item-one {
    background: #38d430;
  }

  .dashboard__data-view-table-header-item-one:nth-of-type(1) {
    min-width: 70px;
  }
  
  .dashboard__data-view-table-header-item-one:nth-of-type(2) {
    min-width: 120px;
  }
  
  .dashboard__data-view-table-header-item-one:nth-of-type(3) {
    min-width: 350px;
  }
  
  .dashboard__data-view-table-header-item-two {
    min-width: 200px;
    background: #29363b;
  }
  
  .dashboard__data-view-table-content {
    display: flex;
    margin: 10px 0 20px 0;
  }
  
  .dashboard__data-view-table-content-wrapper {
  }
  
  .dashboard__data-view-table-content-item-no,
  .dashboard__data-view-table-content-item-one,
  .dashboard__data-view-table-content-item-two {
    color: #fff;
    background: #808080;
    padding: 10px 20px;
    font-weight: 500;
    margin: 5px 5px 0 0;
    height: 55px;
  }
  
  .dashboard__data-view-table-content-item-no {
    max-width: 70px;
    min-width: 70px;
  }

  .dashboard__data-view-table-content-item-one {
    max-width: 120px;
    min-width: 120px;
  }
  
  .dashboard__data-view-table-content-item-two {
    max-width: 350px;
    min-width: 350px;
  }

  .no-desc {
    font-style: italic;
    color: #c4c4c4;
  }
  
  .dashboard__data-view-table-content-item-version-one {
    position: relative;
    color: #fff;
    min-width: 200px;
    padding: 10px 20px;
    font-weight: 500;
    margin: 5px 5px 0 0;
    height: 55px;
  }
  
  .pass {
    background: #38d430;
  }
  
  .fail {
    background: #ea495f;
  }
  
  .notsupported {
    background: #fcbe15;
  }
 
  .comment-icon {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 25px;
  }

  </style>`;

  const commentIcon =
    "data:image/png;base64,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";

  let testSignatures = [];
  let testDesc = [];
  let versions = [];
  let versionsResults = [];

  data.tests.map((t, i) => {
    testSignatures.push(`
    <div class="dashboard__data-view-table-content-item-one">
            ${t.signature}
          </div>`);

    testDesc.push(`<div class="dashboard__data-view-table-content-item-two">
    ${
      t.description.length > 0
        ? t.description.length > 65
          ? `<span title="${t.description}" class="">${t.description.slice(
              0,
              64
            )}...</span>`
          : t.description
        : '<span class="no-desc">No description.</span>'
    }
  </div>`);

    if (data.versions.length === 0) {
      versions.push(`<div class="dashboard__data-view-table-header-item-two">
      ${data.version}
    </div>`);
      versionsResults.push({
        version: data.version,
        results: [
          `<div
    class="dashboard__data-view-table-content-item-version-one notsupported">
    <span>NOT TESTED</span>
  </div>`,
        ],
      });
    }
    data.versions.map((v) => {
      const thisVersionHtml = `<div class="dashboard__data-view-table-header-item-two">
      ${v.version}
    </div>`;
      if (!versions.includes(thisVersionHtml)) {
        versions.push(`<div class="dashboard__data-view-table-header-item-two">
      ${v.version}
    </div>`);
      }

      let thisResult;

      const testIndex = v.testResults.findIndex(
        (ti) => ti.signature === t.signature
      );
      const versionsResultsIndex = versionsResults.findIndex(
        (vr) => vr.version === v.version
      );
      if (testIndex !== -1) {
        thisResult = `<div class="dashboard__data-view-table-content-item-version-one ${
          v.testResults[testIndex].status.toLowerCase() === "not tested" ||
          v.testResults[testIndex].status.toLowerCase() === "not supported"
            ? "notsupported"
            : v.testResults[testIndex].status.toLowerCase()
        }"
      >
        <span>${v.testResults[testIndex].status}</span>
        ${
          v.testResults[testIndex].description
            ? `<img class="comment-icon" title="${v.testResults[testIndex].description}" alt="comment" src="${commentIcon}" >`
            : ""
        }
      </div>`;
      } else {
        thisResult = `<div
        class="dashboard__data-view-table-content-item-version-one notsupported">
        <span>NOT TESTED</span>
      </div>`;
      }
      if (versionsResultsIndex !== -1) {
        versionsResults[versionsResultsIndex].results.push(thisResult);
      } else {
        versionsResults.push({
          version: v.version,
          results: [thisResult],
        });
      }
    });
  });

  // console.log("data", data); // DEBUG
  // console.log("testDesc", testDesc); // DEBUG
  // console.log("versions", versions); // DEBUG
  // console.log("versionsResults", versionsResults); // DEBUG

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
    ${style}
    </head>
  <body>
    <div class="dashboard__data-view-table-container">
        <div class="dashboard__data-view-table-one${
          testDesc.length > 0 ? "-desc" : ""
        }">
          <div class="dashboard__data-view-table-header">
          <div class="dashboard__data-view-table-header-item-one">
              No.
            </div>
            <div class="dashboard__data-view-table-header-item-one">
              Test ID
            </div>
            ${
              testDesc.length > 0
                ? `<div class="dashboard__data-view-table-header-item-one">
              Description
            </div>`
                : ""
            }
          </div>
          <div class="dashboard__data-view-table-content">
          <div class="dashboard__data-view-table-content-wrapper">
          ${testSignatures
            .map((t, i) => {
              return `<div class="dashboard__data-view-table-content-item-no">${
                i + 1
              }</div>`;
            })
            .join("")}
          </div>
            <div class="dashboard__data-view-table-content-wrapper">
              ${testSignatures.join("")}
            </div>
           ${
             testDesc.length > 0
               ? `
               <div class="dashboard__data-view-table-content-wrapper">
                 ${testDesc.join("")}
               </div>`
               : ""
           }
          </div>
        </div>
        <div class="dashboard__data-view-table-two">
          <div class="dashboard__data-view-table-header">
           ${versions.join("")}
           </div>
           <div class="dashboard__data-view-table-content">
           
        ${versionsResults
          .map((vr) => {
            let thisHtml = `
          <div class="dashboard__data-view-table-content-wrapper">
              ${vr.results.join("")}
              </div>
        `;
            return thisHtml;
          })
          .join("")}

    </div></div>
  </body>
</html>
    `;
}
module.exports = generateReportHtml;
