import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopBarContainer = styled.nav`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 60px;
  background: ${({ theme }) => theme.colors.blue.carbon};
  border-bottom: solid 2px ${({ theme }) => theme.colors.white.normal};
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.green.main};
  font-size: 20px;
  font-weight: 700;
  line-height: 60px;
  margin: 0 50px 0 30px;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.white.normal};
    transform: translateX(20px);
  }
`;
