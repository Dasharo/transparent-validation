import styled from "styled-components";

export const LinkGeneratorContainer = styled.div`
  background: ${({ theme }) => theme.colors.grey.ultraLight};
  max-width: 100%;
  min-width: 570px;
  height: auto;
  padding: 15px 30px 15px 20px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  margin: 30px 0 30px 0;
`;

export const LinkShowBox = styled.div`
  display: inline-flex;
  min-width: 520px;
  height: 30px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.white.normal};
`;

export const LinkShowBoxText = styled.p`
  height: 100%;
  width: 100%;
  padding: 0 25px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.blue.carbon};
  color: ${({ theme }) => theme.colors.white.normal};
`;

export const LinkShowBoxSpan = styled.span`
  height: 100%;
  padding: 0 15px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.green.main};
  color: ${({ theme }) => theme.colors.white.normal};
  margin-right: 10px;
`;

export const LinkCreatorForm = styled.form`
  margin-top: 20px;
`;

export const LinkCreatorInputsWrapper = styled.div`
  width: 520px;
  padding: 20px 15px 20px 15px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.green.main};
`;

export const LinkCreatorFormInfo = styled.h3`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue.carbon};
`;

export const LinkCreatorInputField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const LinkCreatorLabel = styled.label`
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
  width: 68px;
  color: ${({ theme }) => theme.colors.white.normal};
`;

export const LinkCreatorInput = styled.input`
  width: 200px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 3px;
  padding: 3px 10px;
  background: ${({ theme }) => theme.colors.white.normal};
  color: ${({ theme }) => theme.colors.blue.carbon};
`;

export const LinkCreatorButtonsContainer = styled.div`
  display: flex;
  ${"" /* justify-content: space-between;
  justify-content: flex-end; */}
`;

export const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  width: 160px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.green.main};
  cursor: pointer;

  &:disabled {
    pointer-events: none;
    opacity: 0.4;
  }

  &:first-of-type {
    margin-right: 15px;
    margin-left: 185px;
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
  width: 125px;
  padding: 5px 10px;
  border-radius: 3px 0 0 3px;
  color: ${({ theme }) => theme.colors.white.normal};
  background: ${({ theme }) => theme.colors.blue.carbon};
  transition: 0.5s;

  ${FormButton}:hover & {
    background: ${({ theme }) => theme.colors.green.main};
    color: ${({ theme }) => theme.colors.white.normal};
  }
`;
