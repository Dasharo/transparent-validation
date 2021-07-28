import styled from "styled-components";

export const AccessMessageContainer = styled.h3`
  margin-top: 30px;
  background: rgb(240, 240, 240);
  padding: 10px 25px;
  width: 100%;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  display: flex;
  align-items: center;
`;

export const AccessMessageName = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue.carbon};
`;
