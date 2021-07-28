import styled from "styled-components";

export const SettingsHeader = styled.h2`
  display: flex;
  align-items: center;
`;

export const SettingsHeaderImg = styled.img`
  width: 25px;
  margin-right: 15px;
`;

export const SettingsHeaderTitle = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.white.normal};
`;
