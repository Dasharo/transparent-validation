import styled from "styled-components";

export const LastUpdateDataContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const LastUpdateDataImg = styled.img`
  width: 50px;
  margin-right: 15px;
`;

export const LastUpdateDataType = styled.span`
  font-size: 16px;
  margin-right: 10px;
`;

export const LastUpdateDataTitle = styled.span`
  max-width: 120px;
  min-width: 120px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white.normal};
  margin-left: 10px;
  background: ${({ theme }) => theme.colors.blue.carbon};
  padding: 10px 0;
  text-align: center;
  margin: 0 0 0 auto;
`;

export const LastUpdateDataSummaryWrapper = styled.div`
  margin-top: 15px;
`;

export const LastUpdateDataSummaryItem = styled.div`
  margin-bottom: 15px;
  font-size: 16px;
`;

export const LastUpdateDataSummaryItemSpan = styled.span`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const LastUpdateDataSummaryItemDescription = styled.p`
  padding-top: 10px;
  font-size: 16px;
  color: ;
`;
