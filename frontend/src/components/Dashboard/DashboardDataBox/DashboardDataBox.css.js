import styled from "styled-components";

export const DataBoxContainer = styled.div`
  background: ${({ theme }) => theme.colors.grey.ultraLight};
  width: calc(33.33% - 20px);
  padding: 20px 30px;
  color: ${({ theme }) => theme.colors.blue.carbon};
  -webkit-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  margin: 0 30px 30px 0;

  &:nth-child(3) {
    margin: 0 0px 30px 0;
  }

  @media (max-width: 1500px) {
    width: calc(50% - 15px);

    &:nth-child(2),
    &:nth-child(3) {
      margin: 0 0 30px 0;
    }
  }

  @media (max-width: 1100px) {
    width: 100%;

    &:nth-child(1) {
      margin: 0 0 30px 0;
    }
  }
`;

export const DataBoxHeader = styled.h3`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.green.main};
`;
