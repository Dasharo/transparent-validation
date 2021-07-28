import { useState, useEffect } from "react";
import {
  SettingsPanelContainer,
  SettingsPanelForm,
  FormButton,
  FormButtonImg,
  FormButtonTitle,
} from "./SettingsPanel.css";
import {
  SettingsPanelHeader,
  SettingsDropdown,
  VersionRangeSelection,
} from "components/SettingsPanel";
import { useDispatch } from "react-redux";
import { addDisplaySettings } from "data/actions/displaySettings.actions";
import settingsUserIcon from "assets/images/user.png";
import settingsDisplayIcon from "assets/images/settings.png";
import saveButtonIcon from "assets/images/save.png";
import ClientApiKey from "./ClientApiKey";

const SettingsPanel = ({ clients, client, platforms, tests, results }) => {
  const dispatch = useDispatch();
  const [clientPlatforms, setClientPlatforms] = useState([]);
  const [currentPlatform, setCurrentPlatform] = useState("");
  const [firmwareTypes, setFirmwareTypes] = useState([]);
  const [currentFirmwareType, setCurrentFirmwareType] = useState("");
  const [platformTests, setPlatformsTests] = useState([]);
  const [currentPlatformTests, setCurrentPlatformTests] = useState("");
  const [versions, setVersions] = useState([]);
  const [currentVersion, setCurrentVersion] = useState("");
  const [matchedResults, setMatchedResults] = useState([]);
  const [versionSelectionType, setVersionSelectionType] = useState("single");
  const [currentRange, setCurrentRange] = useState({ from: "", to: "" });
  const getProperPlatform = () => {
    if (client) {
      const clientPlatforms = platforms.filter(
        (item) => item.client === client[0]._id
      );
      setClientPlatforms(clientPlatforms);
    }
    setCurrentPlatform("");
  };

  const getProperFirmwareTypes = () => {
    let properFirmwareTypes = [];
    clientPlatforms.map((item) =>
      item.name === currentPlatform.name
        ? properFirmwareTypes.push({
            ...item,
            dropdownTitle: item.firmwareType,
          })
        : null
    );
    setFirmwareTypes(properFirmwareTypes);
    setPlatformsTests([]);
    setVersions([]);
    currentFirmwareType && setCurrentFirmwareType("");
    currentPlatformTests && setCurrentPlatformTests("");
    currentVersion && setCurrentVersion("");
  };

  const getProperTests = () => {
    let properTests = [];
    properTests.push({
      _id: "all",
      dropdownTitle: "All",
    });
    tests.map((item) =>
      item.platform === currentPlatform._id
        ? properTests.push({
            ...item,
            dropdownTitle: item.signature,
          })
        : null
    );
    setPlatformsTests(properTests);
    setCurrentPlatformTests(properTests);
  };

  const getProperVersion = () => {
    const properVersions = [];
    if (versionSelectionType === "single") {
      properVersions.push({
        _id: "all",
        dropdownTitle: "All",
        latest: false,
      });
    }
    const resultsCopy = [...results].sort(
      (a, b) => new Date(b.added) - new Date(a.added)
    );

    if (
      (Array.isArray(currentPlatformTests) && Array.isArray(currentVersion)) ||
      versionSelectionType === "range"
    ) {
      const newMatchedResults = [];
      resultsCopy.map((item) => {
        if (!properVersions.some((el) => el.dropdownTitle === item.version)) {
          properVersions.push({
            ...item,
            dropdownTitle: item.version,
            latest:
              item.version === currentPlatform.latestVersion ? true : false,
            signature: item.signature,
            testDescription: item.description,
          });
          newMatchedResults.push([]);
        }
      });

      const versionsRemoveSelectAll = [...properVersions];
      versionsRemoveSelectAll.shift();
      versionsRemoveSelectAll.forEach((version, index) => {
        const resultsCheckVersion = resultsCopy.filter(
          (item) =>
            item.version === version.version &&
            platformTests.some((test) => test._id === item.test)
        );
        const addSignatureTest = [...resultsCheckVersion].map(
          (item) =>
            item && {
              ...item,
              signature:
                item.version === version.version &&
                platformTests.filter((test) => test._id === item.test)[0]
                  .signature,
              testDescription:
                item.version === version.version &&
                platformTests.filter((test) => test._id === item.test)[0]
                  .description,
            }
        );
        newMatchedResults[index].push(...addSignatureTest);
      });
      setMatchedResults(newMatchedResults);
    } else {
      resultsCopy.map((item) =>
        item.test === currentPlatformTests._id
          ? properVersions.push({
              ...item,
              latest:
                item.version === currentPlatform.latestVersion ? true : false,
              dropdownTitle: item.version,
              signature: currentPlatformTests.signature,
              testDescription: currentPlatformTests.description,
            })
          : null
      );
    }
    setVersions(properVersions);
    setCurrentVersion(properVersions);
  };

  const handleSubmit = (e) => {
    let newPlatformTests = currentPlatformTests;
    let newVersions = currentVersion;
    let newVersionsName = currentVersion;
    let range;
    let rangeString = "";
    e.preventDefault();
    if (Array.isArray(newPlatformTests)) {
      newPlatformTests = [...currentPlatformTests].filter(
        (item) => item._id !== "all"
      );
    }
    if (versionSelectionType === "single") {
      if (Array.isArray(newVersions)) {
        newVersions = [...currentVersion].filter((item) => item._id !== "all");
        newVersionsName = [...currentVersion].filter(
          (item) => item._id !== "all"
        );
      }
      if (Array.isArray(newPlatformTests) && Array.isArray(newVersions)) {
        newVersions = matchedResults;
      }
    } else {
      if (Array.isArray(newPlatformTests)) {
        newVersions = matchedResults;
      }
      let fromVersion = currentVersion.filter(
        (item) => item.version === currentRange.from
      );
      let toVersion = currentVersion.filter(
        (item) => item.version === currentRange.to
      );
      if (new Date(fromVersion[0].added) < new Date(toVersion[0].added)) {
        range = [...currentVersion].filter(
          (item) =>
            new Date(item.added) >= new Date(fromVersion[0].added) &&
            new Date(item.added) <= new Date(toVersion[0].added)
        );
        rangeString = `${currentRange.from}-to-${currentRange.to}`;
      } else {
        range = [...currentVersion].filter(
          (item) =>
            new Date(item.added) <= new Date(fromVersion[0].added) &&
            new Date(item.added) >= new Date(toVersion[0].added)
        );
        rangeString = `${currentRange.to}-to-${currentRange.from}`;
      }
    }
    dispatch(
      addDisplaySettings({
        client: client[0].apiKey,
        platform: currentPlatform,
        firmwareType: currentFirmwareType,
        test: newPlatformTests,
        version: newVersions,
        versionsName: newVersionsName,
        results: results,
        versionSelectionType: versionSelectionType,
        range: range,
        rangeString: rangeString,
      })
    );
  };

  useEffect(() => {
    getProperPlatform();
  }, [client]);

  useEffect(() => {
    getProperFirmwareTypes();
  }, [currentPlatform]);

  useEffect(() => {
    getProperTests();
  }, [currentFirmwareType]);

  useEffect(() => {
    getProperVersion();
  }, [currentPlatformTests]);

  useEffect(() => {
    getProperVersion();
  }, [versionSelectionType]);

  return (
    <SettingsPanelContainer>
      <SettingsPanelHeader title={"Client API Key"} img={settingsUserIcon} />
      <ClientApiKey clients={clients} />
      <SettingsPanelHeader
        title={"Display settings"}
        img={settingsDisplayIcon}
      />
      {client && (
        <SettingsPanelForm onSubmit={(e) => handleSubmit(e)}>
          <SettingsDropdown
            title={"Platform:"}
            items={clientPlatforms}
            defaultValue={"select"}
            disabled={false}
            handleSelection={setCurrentPlatform}
          />
          <SettingsDropdown
            title={"Firmware Type:"}
            items={firmwareTypes}
            defaultValue={"select"}
            disabled={currentPlatform ? false : true}
            handleSelection={setCurrentFirmwareType}
            currentPlatform={currentPlatform}
          />
          <SettingsDropdown
            title={"Test:"}
            items={platformTests}
            defaultValue={"select"}
            disabled={currentPlatform ? false : true}
            handleSelection={setCurrentPlatformTests}
            currentPlatform={currentPlatform}
            currentFirmwareType={currentFirmwareType}
          />
          <VersionRangeSelection
            setVersionSelectionType={setVersionSelectionType}
          />
          {versionSelectionType === "single" && versions ? (
            <SettingsDropdown
              title={"Version:"}
              items={versions}
              defaultValue={"select"}
              disabled={currentPlatform && currentFirmwareType ? false : true}
              handleSelection={setCurrentVersion}
              currentPlatform={currentPlatform}
              currentFirmwareType={currentFirmwareType}
              currentPlatformTests={currentPlatformTests}
            />
          ) : (
            <>
              <SettingsDropdown
                title={"From:"}
                items={versions}
                defaultValue={"select"}
                disabled={currentPlatform && currentFirmwareType ? false : true}
                handleSelection={setCurrentRange}
                currentPlatform={currentPlatform}
                currentFirmwareType={currentFirmwareType}
                currentPlatformTests={currentPlatformTests}
                currentRange={currentRange}
                range={true}
                rangeType={"from"}
              />
              <SettingsDropdown
                title={"To:"}
                items={versions}
                defaultValue={"select"}
                disabled={currentPlatform && currentFirmwareType ? false : true}
                handleSelection={setCurrentRange}
                currentPlatform={currentPlatform}
                currentFirmwareType={currentFirmwareType}
                currentPlatformTests={currentPlatformTests}
                currentRange={currentRange}
                range={true}
                rangeType={"to"}
              />
            </>
          )}
          <FormButton
            type="submit"
            disabled={
              currentPlatform &&
              currentFirmwareType &&
              currentPlatformTests &&
              currentVersion
                ? false
                : true
            }
          >
            <FormButtonTitle>Load</FormButtonTitle>
            <FormButtonImg src={saveButtonIcon} alt="Save icon" />
          </FormButton>
        </SettingsPanelForm>
      )}
    </SettingsPanelContainer>
  );
};

export default SettingsPanel;
