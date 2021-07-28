import {
  ListContainer,
  ListItem,
  StyledLink,
  ListItemText,
} from "./TopBarNavigation.css";

const TopBarNavigation = ({ items }) => {
  return (
    <ListContainer>
      {items.map((item) => (
        <ListItem key={item.id}>
          <StyledLink exact to={item.link}>
            <ListItemText>{item.title}</ListItemText>
          </StyledLink>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default TopBarNavigation;
