import {
  ContentHeader,
  ContentHeaderImg,
  ContentHeaderTitle,
} from "./ContentViewHeader.css";
import headerImg from "assets/images/content-header-icon.png";

const ContentViewHeader = ({ title }) => {
  return (
    <ContentHeader>
      <ContentHeaderImg src={headerImg} alt="Content header icon" />
      <ContentHeaderTitle>{title}</ContentHeaderTitle>
    </ContentHeader>
  );
};

export default ContentViewHeader;
