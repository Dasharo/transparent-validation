import { useState, useEffect } from "react";
import { ContentViewHeader, AccessMessage, LinkGenerator } from "components";
import { RtrModal } from "components/Rtr";
import {
  RtrContainer,
  RtrTestsTableWrapper,
  RtrResultsTableWrapper,
  RtrTableHeader,
  RtrTableHeaderSpan,
  RtrTestsTableData,
  RtrTableRow,
  RtrTableRowSpan,
  RtrResultsTableData,
  RtrTableColumnList,
  RtrTableColumnListItem,
  RtrTableColumnListItemSpan,
  RtrTableColumnListItemImg,
} from "./Rtr.css";
import resultDescriptionIcon from "assets/images/comment-white.png";

const Rtr = ({ client, displaySettings }) => {
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [currentModalContent, setCurrentModalContent] = useState("");
  const toggle = () => setOpen(!open);

  const matchResultsToTests = (arr1, arr2) => {
    displaySettings.test.forEach((item, index) => {
      let results = [];
      arr2.forEach((el) =>
        results.push({
          _id: index,
          version: el.version,
          status: "NOT TESTED",
          description: "",
          test: item._id,
          signature: item.signature,
          testDescription: item.description,
        })
      );
      arr1.push({
        test: item.signature,
        results: results,
      });
    });
  };

  const matchResultsToTest = (arr1, arr2) => {
    arr2.map((item) =>
      item.test === displaySettings.test._id
        ? arr1.push({
            ...item,
            signature: displaySettings.test.signature,
            testDescription: displaySettings.test.description,
          })
        : arr1.push({
            _id: item._id,
            version: item.version,
            status: "NOT TESTED",
            signature: displaySettings.test.signature,
            testDescription: displaySettings.test.description,
          })
    );
  };

  const matchResultToTests = (arr1, arr2) => {
    displaySettings.test.forEach((item) => {
      displaySettings.results.forEach((result) => {
        if (
          result.test === item._id &&
          result.version === displaySettings.version.version
        ) {
          arr1.push(result);
        }
      });
    });
    displaySettings.test.forEach((item, index) => {
      arr1[index]
        ? arr2.push({
            ...arr1[index],
            signature: item.signature,
            testDescription: item.description,
          })
        : arr2.push({
            _id: item._id,
            version: displaySettings.version.version,
            status: "NOT TESTED",
            signature: item.signature,
            testDescription: item.description,
          });
    });
  };

  const setResultsToTests = (arr1, arr2) => {
    const arr3 = [];
    let arr4 = [];

    for (let i = 0; i < arr1.length; i++) {
      for (let propertyArray1 in arr1[i]) {
        if (propertyArray1 === "results") {
          for (let propertyInsideArray1 in arr1[i][propertyArray1]) {
            for (let j = 0; j < arr2.length; j++) {
              for (let propertyArray2 in arr2[j]) {
                if (
                  arr1[i][propertyArray1][propertyInsideArray1]["version"] ===
                    arr2[j][propertyArray2]["version"] &&
                  arr1[i]["test"] === arr2[j][propertyArray2]["signature"]
                ) {
                  arr1[i][propertyArray1][propertyInsideArray1] =
                    arr2[j][propertyArray2];
                }
              }
            }
          }
        }
      }
    }

    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1[i]["results"].length; j++) {
        arr4.push(arr1[i]["results"][j]);
      }
      arr3.push(arr4);
      arr4 = [];
    }
    return arr3;
  };

  const getResult = () => {
    let displayResults = [];
    const matchedResultsToTests = [];
    if (displaySettings.versionSelectionType === "single") {
      if (
        Array.isArray(displaySettings.test) &&
        Array.isArray(displaySettings.version)
      ) {
        matchResultsToTests(
          matchedResultsToTests,
          displaySettings.versionsName
        );
        const newMatchedResultsToTests = setResultsToTests(
          matchedResultsToTests,
          displaySettings.version
        );
        displayResults = newMatchedResultsToTests;
      } else if (
        !Array.isArray(displaySettings.test) &&
        Array.isArray(displaySettings.version)
      ) {
        matchResultsToTest(matchedResultsToTests, displaySettings.version);
        displayResults.push(matchedResultsToTests);
      } else if (
        Array.isArray(displaySettings.test) &&
        !Array.isArray(displaySettings.version)
      ) {
        const testMatchToResults = [];
        matchResultToTests(matchedResultsToTests, testMatchToResults);
        displayResults.push(testMatchToResults);
      }
    } else {
      if (Array.isArray(displaySettings.test)) {
        matchResultsToTests(matchedResultsToTests, displaySettings.range);
        const newMatchedResultsToTests = setResultsToTests(
          matchedResultsToTests,
          displaySettings.version
        );
        displayResults = newMatchedResultsToTests;
      } else {
        matchResultsToTest(matchedResultsToTests, displaySettings.range);
        displayResults.push(matchedResultsToTests);
      }
    }
    setResults(displayResults);
  };

  useEffect(() => {
    if (
      Array.isArray(displaySettings.version) ||
      Array.isArray(displaySettings.test)
    ) {
      getResult();
    }
  }, [displaySettings]);

  return (
    <>
      <RtrModal
        open={open}
        toggle={toggle}
        currentModalContent={currentModalContent}
      />
      <ContentViewHeader title={"Regression Test Results"} />
      {client ? (
        Object.keys(displaySettings).length !== 0 ? (
          <>
            <RtrContainer>
              <RtrTestsTableWrapper>
                <RtrTableHeader>
                  <RtrTableHeaderSpan className="tests-header">
                    No.
                  </RtrTableHeaderSpan>
                  <RtrTableHeaderSpan className="tests-header">
                    Test ID
                  </RtrTableHeaderSpan>
                  <RtrTableHeaderSpan className="tests-header">
                    Description
                  </RtrTableHeaderSpan>
                </RtrTableHeader>

                <RtrTestsTableData>
                  {displaySettings && Array.isArray(displaySettings.test) ? (
                    displaySettings.test.map((item, index) => (
                      <RtrTableRow key={item._id}>
                        <RtrTableRowSpan className="tests-number">
                          {index + 1}
                        </RtrTableRowSpan>
                        <RtrTableRowSpan className="tests-signature">
                          {item.signature}
                        </RtrTableRowSpan>
                        <RtrTableRowSpan className="tests-description">
                          {item.description
                            ? item.description
                            : "There is no description for this test"}
                        </RtrTableRowSpan>
                      </RtrTableRow>
                    ))
                  ) : (
                    <RtrTableRow>
                      <RtrTableRowSpan className="tests-number">
                        1
                      </RtrTableRowSpan>
                      <RtrTableRowSpan className="tests-signature">
                        {displaySettings.test.signature}
                      </RtrTableRowSpan>
                      <RtrTableRowSpan className="tests-description">
                        {displaySettings.test.description
                          ? displaySettings.test.description
                          : "There is no description for this test"}
                      </RtrTableRowSpan>
                    </RtrTableRow>
                  )}
                </RtrTestsTableData>
              </RtrTestsTableWrapper>
              <RtrResultsTableWrapper>
                <RtrTableHeader>
                  {displaySettings &&
                  Array.isArray(displaySettings.version) &&
                  displaySettings.versionSelectionType === "single" ? (
                    displaySettings.versionsName.map((item) => (
                      <RtrTableHeaderSpan
                        key={item._id}
                        className="results-header"
                      >
                        {item.version}
                      </RtrTableHeaderSpan>
                    ))
                  ) : displaySettings &&
                    Array.isArray(displaySettings.version) &&
                    displaySettings.versionSelectionType === "range" ? (
                    displaySettings.range.map((item) => (
                      <RtrTableHeaderSpan
                        key={item._id}
                        className="results-header"
                      >
                        {item.version}
                      </RtrTableHeaderSpan>
                    ))
                  ) : displaySettings.version ? (
                    <RtrTableHeaderSpan className="results-header">
                      {displaySettings.version.version}
                    </RtrTableHeaderSpan>
                  ) : (
                    <RtrTableHeaderSpan className="results-header">
                      no data
                    </RtrTableHeaderSpan>
                  )}
                </RtrTableHeader>
                <RtrResultsTableData>
                  {displaySettings && Array.isArray(displaySettings.version) ? (
                    results.map((item, index) => (
                      <RtrTableColumnList key={index}>
                        {item.map((item, index) => (
                          <RtrTableColumnListItem
                            key={index}
                            className={`${
                              item.status.toUpperCase() === "PASS"
                                ? "pass"
                                : item.status.toUpperCase() === "FAIL"
                                ? "fail"
                                : item.status.toUpperCase() ===
                                    "NOT SUPPORTED" || "NOT TESTED"
                                ? "not-tested"
                                : null
                            }`}
                            onKeyPress={() => {
                              toggle(!open);
                              setCurrentModalContent(item);
                            }}
                            onClick={() => {
                              toggle(!open);
                              setCurrentModalContent(item);
                            }}
                          >
                            <RtrTableColumnListItemSpan>
                              {item.status}
                            </RtrTableColumnListItemSpan>
                            {item.description ? (
                              <RtrTableColumnListItemImg
                                src={resultDescriptionIcon}
                                alt="result description icon"
                              />
                            ) : null}
                          </RtrTableColumnListItem>
                        ))}
                      </RtrTableColumnList>
                    ))
                  ) : displaySettings &&
                    !Array.isArray(displaySettings.version) &&
                    results.length > 0 ? (
                    results.map((item, index) => (
                      <RtrTableColumnList
                        key={index}
                        className={`${
                          Array.isArray(displaySettings.test)
                            ? "one-version"
                            : null
                        }`}
                      >
                        {item.map((item, index) => (
                          <RtrTableColumnListItem
                            key={index}
                            className={`${
                              item.status.toUpperCase() === "PASS"
                                ? "pass"
                                : item.status.toUpperCase() === "FAIL"
                                ? "fail"
                                : item.status.toUpperCase() ===
                                    "NOT SUPPORTED" || "NOT TESTED"
                                ? "not-tested"
                                : null
                            }`}
                            onKeyPress={() => {
                              toggle(!open);
                              setCurrentModalContent(item);
                            }}
                            onClick={() => {
                              toggle(!open);
                              setCurrentModalContent(item);
                            }}
                          >
                            <RtrTableColumnListItemSpan>
                              {item.status}
                            </RtrTableColumnListItemSpan>
                            {item.description ? (
                              <RtrTableColumnListItemImg
                                src={resultDescriptionIcon}
                                alt="result description icon"
                              />
                            ) : null}
                          </RtrTableColumnListItem>
                        ))}
                      </RtrTableColumnList>
                    ))
                  ) : (
                    <RtrTableColumnList>
                      <RtrTableColumnListItem
                        className={`${
                          displaySettings.version.status.toUpperCase() ===
                          "PASS"
                            ? "pass"
                            : displaySettings.version.status.toUpperCase() ===
                              "FAIL"
                            ? "fail"
                            : displaySettings.version.status.toUpperCase() ===
                                "NOT SUPPORTED" || "NOT TESTED"
                            ? "not-tested"
                            : null
                        }`}
                        onKeyPress={() => {
                          toggle(!open);
                          setCurrentModalContent(displaySettings.version);
                        }}
                        onClick={() => {
                          toggle(!open);
                          setCurrentModalContent(displaySettings.version);
                        }}
                      >
                        <RtrTableColumnListItemSpan>
                          {displaySettings.version.status}
                        </RtrTableColumnListItemSpan>
                        {displaySettings.version.description ? (
                          <RtrTableColumnListItemImg
                            src={resultDescriptionIcon}
                            alt="result description icon"
                          />
                        ) : null}
                      </RtrTableColumnListItem>
                    </RtrTableColumnList>
                  )}
                </RtrResultsTableData>
              </RtrResultsTableWrapper>
            </RtrContainer>
            <LinkGenerator
              displaySettings={displaySettings}
              title={"Format:"}
              items={[
                { id: 1, title: "html" },
                { id: 2, title: "plain" },
                { id: 3, title: "raw" },
              ]}
              elementType={"report"}
            />
          </>
        ) : (
          <AccessMessage
            message={"To display the data, set the display settings"}
          />
        )
      ) : (
        <>
          <AccessMessage message={"Access denied, please enter API Key"} />
        </>
      )}
    </>
  );
};

export default Rtr;
