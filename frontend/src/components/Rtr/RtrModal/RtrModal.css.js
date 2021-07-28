import styled from "styled-components";

export const ShowDescriptionModal = styled.div`
  position: fixed;
  z-index: 10;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100vh;
  transition: 0.5s;

  &.active {
    transform: translateX(100%);
  }
`;

export const ShowDescriptionModalBackground = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background: ${({ theme }) => theme.colors.black.normal};
`;

export const ShowDescriptionModalButton = styled.button`
  position: absolute;
  top: 35px;
  right: 30px;
  background: transparent;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    filter: brightness(150%);
    transform: scale(1.2);
  }
`;

export const ShowDescriptionModalButtonImg = styled.img`
  width: 40px;
`;

export const ShowDescriptionContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 450px;
  width: 700px;
  background: ${({ theme }) => theme.colors.grey.ultraLight};
  color: ${({ theme }) => theme.colors.blue.carbon};
  padding: 30px 25px;
`;

export const ShowDescriptionContainerHeader = styled.h3`
  margin-top: 10px;
  font-size: 26px;
  font-weight: 600;
`;

export const ShowDescriptionContainerHeaderSpan = styled.span`
  font-size: 26px;
  font-weight: 600;
  margin-left: 5px;

  &.pass {
    color: ${({ theme }) => theme.colors.green.main};
  }

  &.fail {
    color: ${({ theme }) => theme.colors.red.main};
  }

  &.not-tested {
    color: ${({ theme }) => theme.colors.yellow.main};
  }
`;

export const ShowDescriptionContainerDescription = styled.p`
  margin-top: 10px;
  font-size: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.blue.carbon}; ;
`;

export const ShowDescriptionContainerLink = styled.a`
  display: block;
  margin: 30px auto 0 0;
  width: 80px;
  padding: 5px 0px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.green.main};
  color: ${({ theme }) => theme.colors.white.normal};
  transition: 0.5s;
  font-size: 16px;
  text-align: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.blue.carbon};
  }
`;
