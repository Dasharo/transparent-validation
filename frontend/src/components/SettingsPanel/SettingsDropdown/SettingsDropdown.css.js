import styled from "styled-components";

export const DropdownListWrapper = styled.div`
  margin-top: 15px;
  &:first-of-type {
    margin-top: 30px;
  }
`;

export const DropdownHeader = styled.div``;

export const DropdownHeaderTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const DropdownHeaderTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white.normal};
`;

export const DropdownHeaderCurrentSelection = styled.button`
  display: flex;
  align-items: center;
  border-radius: 3px;
  min-width: 110px;
  background: ${({ theme }) => theme.colors.green.main};
  cursor: pointer;

  &:disabled {
    pointer-events: none;
    opacity: 0.4;
  }
`;

export const DropdownHeaderCurrentSelectionTitle = styled.span`
  width: 90px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 3px 0 0 3px;
  padding: 3px 10px;
  color: ${({ theme }) => theme.colors.blue.carbon};
  background: ${({ theme }) => theme.colors.white.normal};
  transition: 0.5s;
  overflow: hidden;

  ${DropdownHeaderCurrentSelection}:hover & {
    color: ${({ theme }) => theme.colors.white.normal};
    background: ${({ theme }) => theme.colors.green.main};
  }
`;

export const DropdownHeaderCurrentSelectionImage = styled.img`
  width: 16px;
  margin: 0 5px;
  transition: 0.5s;

  &.active {
    transform: rotate(180deg);
  }
`;

export const DropdownList = styled.ul`
  height: 0;
  overflow: hidden;
  overflow-y: scroll;
  padding: 0 10px 0 10px;
  border-radius: 3px;
  background: ${({ theme }) => theme.colors.white.normal};
  transition: 0.2s;

  &.active {
    height: auto;
    max-height: 170px;
    padding: 10px 10px 10px 10px;
  }
`;

export const DropdownListItem = styled.li`
  margin-bottom: 15px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const DropdownListItemButton = styled.button`
  position: relative;
  display: block;
  width: 100%;
  margin: auto;
  border-radius: 3px;
  text-align: left;
  padding: 5px 10px;
  background: ${({ theme }) => theme.colors.grey.ultraLight};
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.blue.carbon};
  }

  &.active {
    background: ${({ theme }) => theme.colors.green.main};
  }
`;

export const DropdownListItemTitle = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.blue.carbon};
  transition: 0.5s;

  ${DropdownListItemButton}:hover & {
    color: ${({ theme }) => theme.colors.white.normal};
  }

  ${DropdownListItemButton}.active & {
    color: ${({ theme }) => theme.colors.white.normal};
  }
`;

export const DropdownListItemLatest = styled.span`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  padding: 1px 10px;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.white.normal};
  background: ${({ theme }) => theme.colors.green.main};
`;
