import {
  CurrentSettingsDataContainer,
  CurrentSettingsDataImg,
  CurrentSettingsDataType,
  CurrentSettingsDataTitle,
} from "./CurrentSettingsData.css";
import platformIcon from "assets/images/platform.png";
import firmwareIcon from "assets/images/firmware.png";
import versionIcon from "assets/images/version.png";
import testIcon from "assets/images/test.png";

const CurrentSettingsData = ({ displaySettings }) => {
  return (
    <>
      <CurrentSettingsDataContainer>
        <CurrentSettingsDataImg src={platformIcon} alt="data icon" />
        <CurrentSettingsDataType>Platform:</CurrentSettingsDataType>
        <CurrentSettingsDataTitle>
          {displaySettings.platform ? displaySettings.platform.name : "no data"}
        </CurrentSettingsDataTitle>
      </CurrentSettingsDataContainer>
      <CurrentSettingsDataContainer>
        <CurrentSettingsDataImg src={firmwareIcon} alt="data icon" />
        <CurrentSettingsDataType>Firmware:</CurrentSettingsDataType>
        <CurrentSettingsDataTitle>
          {displaySettings.firmwareType
            ? displaySettings.firmwareType.firmwareType
            : "no data"}
        </CurrentSettingsDataTitle>
      </CurrentSettingsDataContainer>
      <CurrentSettingsDataContainer>
        <CurrentSettingsDataImg src={testIcon} alt="data icon" />
        <CurrentSettingsDataType>Test:</CurrentSettingsDataType>
        <CurrentSettingsDataTitle>
          {displaySettings.test
            ? Array.isArray(displaySettings.test)
              ? "All"
              : displaySettings.test.signature
            : "no data"}
        </CurrentSettingsDataTitle>
      </CurrentSettingsDataContainer>
      <CurrentSettingsDataContainer>
        <CurrentSettingsDataImg src={versionIcon} alt="data icon" />
        <CurrentSettingsDataType>Version:</CurrentSettingsDataType>
        <CurrentSettingsDataTitle>
          {displaySettings.version
            ? Array.isArray(displaySettings.version)
              ? "All"
              : displaySettings.version.version
            : "no data"}
        </CurrentSettingsDataTitle>
      </CurrentSettingsDataContainer>
    </>
  );
};

export default CurrentSettingsData;
