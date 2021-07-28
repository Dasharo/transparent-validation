import styled from "styled-components";

export const ContentHeader = styled.h1`
  display: flex;
  align-items: center;
`;

export const ContentHeaderImg = styled.img`
  width: 60px;
  margin-right: 15px;
`;

export const ContentHeaderTitle = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grey.main};
`;
