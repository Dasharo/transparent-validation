import { TopBarContainer, StyledLink } from "./TopBar.css";
import { TopBarNavigation } from "components/TopBar";

const TopBar = () => {
  return (
    <TopBarContainer>
      <StyledLink to="/">RTR System</StyledLink>
      <TopBarNavigation
        items={[
          { id: 1, title: "Dashboard Home", link: "/" },
          { id: 2, title: "RTR", link: "/rtr" },
          { id: 3, title: "Charts", link: "/charts" },
        ]}
      />
    </TopBarContainer>
  );
};

export default TopBar;
