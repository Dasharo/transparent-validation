import { DataBoxContainer, DataBoxHeader } from "./DashboardDataBox.css";

const DashboardDataBox = ({ title, children }) => {
  return (
    <DataBoxContainer>
      <DataBoxHeader>{title}</DataBoxHeader>
      {children}
    </DataBoxContainer>
  );
};

export default DashboardDataBox;
