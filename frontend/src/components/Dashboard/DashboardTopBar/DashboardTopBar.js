import {
  TopBarContainer,
  TopBarTitle,
  TopBarName,
} from "./DashboardTopBar.css";

const DashboardTopBar = ({ name }) => {
  return (
    <TopBarContainer>
      <TopBarTitle>Client:</TopBarTitle>
      <TopBarName>{name}</TopBarName>
    </TopBarContainer>
  );
};

export default DashboardTopBar;
