import {
  SettingsHeader,
  SettingsHeaderImg,
  SettingsHeaderTitle,
} from "./SettingsPanelHeader.css";

const SettingsPanelHeader = ({ title, img }) => {
  return (
    <SettingsHeader>
      <SettingsHeaderImg src={img} alt="Settings icon" />
      <SettingsHeaderTitle>{title}</SettingsHeaderTitle>
    </SettingsHeader>
  );
};

export default SettingsPanelHeader;
