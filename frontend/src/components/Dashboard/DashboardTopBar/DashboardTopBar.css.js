import styled from "styled-components";

export const TopBarContainer = styled.h3`
  margin-top: 30px;
  background: ${({ theme }) => theme.colors.grey.ultraLight};
  padding: 10px 25px;
  width: 100%;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  display: flex;
  ${"" /* justify-content: space-between; */}
  align-items: center;
`;

export const TopBarTitle = styled.span`
  font-size: 20px;
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.green.main};
`;

export const TopBarName = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue.carbon};
`;
