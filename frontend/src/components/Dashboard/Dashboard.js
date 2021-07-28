import { useState, useEffect } from "react";
import { ContentViewHeader } from "components";
import {
  DashboardTopBar,
  DashboardDataBox,
  CurrentSettingsData,
  PlatformStatsData,
  LastUpdateData,
} from "components/Dashboard";
import { AccessMessage } from "components";
import { DataViewContainer } from "./Dashboard.css";

const Dashboard = ({ client, displaySettings, tests, results }) => {
  const [clientTestTotal, setClientTestsTotal] = useState("");
  const [clientPassedTotal, setClientPassedTotal] = useState("");
  const [clientFailedTotal, setClientFailedTotal] = useState("");
  const [clientNotTestedTotal, setClientNotTestedTotal] = useState("");
  const [clientLastTest, setClientLastTest] = useState("");
  const [clientLastTestDate, setClientLastTestDate] = useState("");

  const setData = (condition, setType) => {
    let testsTotal;
    let resultsTotal;
    if (displaySettings.platform) {
      testsTotal = [...tests].filter(
        (item) => item.platform === displaySettings.platform._id
      );
      setClientTestsTotal(testsTotal.length);
      resultsTotal = [...results].filter(
        (item) =>
          testsTotal.some((el) => el._id === item.test) &&
          item.status === condition
      );
      setType(resultsTotal.length);
    }
  };

  const getLastTestDate = () => {
    if (
      displaySettings.platform &&
      displaySettings.platform.latestVersion &&
      tests
    ) {
      const resultsCopy = [...results].filter(
        (item) => item.version === displaySettings.platform.latestVersion
      );
      tests.forEach((item) => {
        if (item._id === resultsCopy[0].test) {
          resultsCopy[0].testSignature = item.signature;
          resultsCopy[0].testDescription = item.description;
        }
      });
      if (resultsCopy.length > 0) {
        const time = new Date(resultsCopy[0].added);
        const dd = String(time.getDate()).padStart(2, "0");
        const mm = String(time.getMonth() + 1).padStart(2, "0");
        const yyyy = time.getFullYear();
        setClientLastTest(resultsCopy);
        setClientLastTestDate(mm + "/" + dd + "/" + yyyy);
      } else {
        setClientLastTestDate("no data");
      }
    }
  };

  useEffect(() => {
    setClientLastTest("");
    setClientLastTestDate("");
    setData("PASS", setClientPassedTotal);
    setData("FAIL", setClientFailedTotal);
    setData("NOT TESTED", setClientNotTestedTotal);
    getLastTestDate();
  }, [displaySettings]);

  return (
    <>
      <ContentViewHeader title={"Dashboard main"} />
      {client ? (
        <>
          <DashboardTopBar name={client[0].name} />
          <DataViewContainer>
            <DashboardDataBox title={"Current settings"}>
              <CurrentSettingsData displaySettings={displaySettings} />
            </DashboardDataBox>
            <DashboardDataBox title={"Platform global stats"}>
              <PlatformStatsData
                clientTestTotal={clientTestTotal}
                clientPassedTotal={clientPassedTotal}
                clientFailedTotal={clientFailedTotal}
                clientNotTestedTotal={clientNotTestedTotal}
              />
            </DashboardDataBox>
            <DashboardDataBox title={"Platform last update"}>
              <LastUpdateData
                clientLastTest={clientLastTest}
                clientLastTestDate={clientLastTestDate}
              />
            </DashboardDataBox>
          </DataViewContainer>
        </>
      ) : (
        <>
          <AccessMessage message={"Access denied, please enter API Key"} />
        </>
      )}
    </>
  );
};

export default Dashboard;
