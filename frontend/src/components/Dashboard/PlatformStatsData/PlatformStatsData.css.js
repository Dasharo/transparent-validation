import styled from "styled-components";

export const PlatformStatsDataContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const PlatformStatsDataImg = styled.img`
  width: 50px;
  margin-right: 15px;
`;

export const PlatformStatsDataType = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

export const PlatformStatsDataTitle = styled.span`
  max-width: 120px;
  min-width: 120px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white.normal};
  margin-left: 10px;
  background: ${({ theme }) => theme.colors.blue.carbon};
  padding: 10px 0;
  text-align: center;
  margin: 0 0 0 auto;

  &.pass {
    background: ${({ theme }) => theme.colors.green.main};
  }

  &.fail {
    background: ${({ theme }) => theme.colors.red.main};
  }

  &.not-tested {
    background: ${({ theme }) => theme.colors.yellow.main};
  }
`;
