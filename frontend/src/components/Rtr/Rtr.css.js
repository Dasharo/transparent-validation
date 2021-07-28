import styled from "styled-components";

export const RtrContainer = styled.div`
  display: inline-flex;
  background: ${({ theme }) => theme.colors.grey.ultraLight};
  max-width: 100%;
  min-width: 500px;
  padding: 35px 30px 5px 20px;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 1);
  margin: 30px 30px 30px 0;
`;

export const RtrTestsTableWrapper = styled.div`
  min-width: 500px;
  margin-right: 5px;
  padding-bottom: 30px;
`;

export const RtrResultsTableWrapper = styled.div`
  padding-bottom: 30px;
  overflow-x: scroll;
`;

export const RtrTableHeader = styled.h2`
  display: flex;
`;

export const RtrTableHeaderSpan = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  padding: 10px 10px;
  font-weight: 600;
  font-size: 16px;
  margin-right: 5px;
  height: 55px;

  &.tests-header {
    background: ${({ theme }) => theme.colors.green.main};
  }

  &.tests-header:nth-of-type(1) {
    min-width: 60px;
  }

  &.tests-header:nth-of-type(2) {
    min-width: 120px;
  }

  &.tests-header:nth-of-type(3) {
    min-width: 300px;
    max-width: 300px;
  }

  &.results-header {
    min-width: 200px;
    background: ${({ theme }) => theme.colors.blue.carbon};
  }

  &.test-row {
    min-width: 120px;
    background: ${({ theme }) => theme.colors.grey.main};
  }

  &.results-row {
    min-width: 200px;
  }
`;

export const RtrTestsTableData = styled.div`
  margin-top: 10px;
`;

export const RtrTableRow = styled.div`
  display: flex;
`;

export const RtrTableRowSpan = styled.span`
  color: ${({ theme }) => theme.colors.white.normal};
  background: ${({ theme }) => theme.colors.grey.main};
  padding: 10px 10px;
  font-weight: 500;
  font-size: 16px;
  margin: 5px 5px 0 0;
  height: 55px;

  &.tests-number {
    min-width: 60px;
  }

  &.tests-signature {
    min-width: 120px;
  }

  &.tests-description {
    min-width: 300px;
    max-width: 300px;
    overflow-y: scroll;
  }

  &::-webkit-scrollbar {
    width: 14px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgb(180, 180, 180);
    border-radius: 10px;
    border: 3px solid rgb(128, 128, 128);
  }
`;

export const RtrResultsTableData = styled.div`
  margin-top: 10px;
`;

export const RtrTableColumnList = styled.ul`
  display: flex;

  &.one-version {
    flex-direction: column;
  }
`;

export const RtrTableColumnListItem = styled.li`
  position: relative;
  display: flex;
  color: ${({ theme }) => theme.colors.white.normal};
  min-width: 200px;
  padding: 10px 20px;
  font-weight: 500;
  margin: 5px 5px 0 0;
  height: 55px;
  cursor: pointer;
  transition: 0.5s;

  &.pass {
    background: ${({ theme }) => theme.colors.green.main};
  }

  &.fail {
    background: ${({ theme }) => theme.colors.red.main};
  }

  &.not-tested {
    background: ${({ theme }) => theme.colors.yellow.main};
  }

  &.pass:hover,
  &.fail:hover,
  &.not-tested:hover {
    background: ${({ theme }) => theme.colors.grey.main};
  }
`;

export const RtrTableColumnListItemSpan = styled.span`
  text-transform: lowercase;
  font-size: 16px;
`;

export const RtrTableColumnListItemImg = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 25px;
`;
