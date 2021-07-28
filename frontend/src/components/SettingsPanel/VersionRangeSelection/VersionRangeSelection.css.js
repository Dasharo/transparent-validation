import styled from "styled-components";

export const RangeSelectionCheckboxHeader = styled.h3`
  color: ${({ theme }) => theme.colors.white.normal};
  font-weight: 600;
  font-size: 16px;
  margin-top: 20px;
`;

export const RangeSelectionCheckboxWrapper = styled.div`
  display: flex;
  margin: 20px 0 30px 0;
`;

export const RangeSelectionCheckboxField = styled.div`
  display: flex;
  align-items: center;
`;

export const RangeSelectionCheckboxLabel = styled.label`
  color: ${({ theme }) => theme.colors.white.normal};
  font-size: 16px;
  margin-right: 10px;
`;

export const RangeSelectionCheckbox = styled.input`
  &:nth-of-type(1) {
    margin-right: 15px;
  }
  background: ${({ theme }) => theme.colors.green.main};
`;
