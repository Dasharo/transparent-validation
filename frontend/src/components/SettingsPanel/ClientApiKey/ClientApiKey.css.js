import styled from "styled-components";

export const ClientApiKeyForm = styled.form``;

export const ClientApiKeyInputField = styled.div`
  margin: 30px 0;
`;

export const ClientApiKeyInputLabel = styled.label`
  display: block;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.colors.white.normal};
  font-size: 16px;
  font-weight: 600;
`;

export const ClientApiKeyInputWrapper = styled.div`
  display: flex;
`;

export const ClientApiKeyInput = styled.input`
  display: block;
  width: 100%;
  padding: 5px 10px;
  border-radius: 3px 0 0 3px;
`;

export const ClientApiKeyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  border-radius: 0 3px 3px 0;
  background: ${({ theme }) => theme.colors.green.main};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.white.normal};
    img {
      filter: invert(100%);
      transform: rotate(180deg);
    }
  }
`;

export const ClientApiKeyButtonImg = styled.img`
  width: 18px;
  transition: 0.5s;
`;
