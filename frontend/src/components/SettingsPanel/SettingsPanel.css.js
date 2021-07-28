import styled from "styled-components";

export const SettingsPanelContainer = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  width: 300px;
  height: 100%;
  background: ${({ theme }) => theme.colors.blue.carbon};
  padding: 30px 25px;
`;

export const SettingsPanelForm = styled.form``;

export const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 0 auto;
  width: 95px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.green.main};
  cursor: pointer;

  &:disabled {
    pointer-events: none;
    opacity: 0.4;
  }
`;

export const FormButtonImg = styled.img`
  width: 20px;
  margin-right: 7.5px;
`;

export const FormButtonTitle = styled.span`
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  width: 60px;
  padding: 5px 10px;
  border-radius: 3px 0 0 3px;
  color: ${({ theme }) => theme.colors.blue.carbon};
  background: ${({ theme }) => theme.colors.white.normal};
  transition: 0.5s;

  ${FormButton}:hover & {
    background: ${({ theme }) => theme.colors.green.main};
    color: ${({ theme }) => theme.colors.white.normal};
  }
`;
