import styled from "styled-components";
import { NavLink } from "react-router-dom";

const active = "active";

export const ListContainer = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  margin: 0 2px;
`;

export const StyledLink = styled(NavLink).attrs({ active })`
  display: flex;
  height: 100%;
  align-items: center;
  transition: 0.5s;
`;

export const ListItemText = styled.span`
  width: 100%;
  height: 40px;
  padding: 0 30px;
  line-height: 40px;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 700;
  transition: 0.5s;
  color: ${({ theme }) => theme.colors.white.normal};
  transition: 0.5s;

  ${ListItem}:hover & {
    background: ${({ theme }) => theme.colors.green.main};
  }

  ${StyledLink}.active & {
    background: ${({ theme }) => theme.colors.green.main};
  }
`;
