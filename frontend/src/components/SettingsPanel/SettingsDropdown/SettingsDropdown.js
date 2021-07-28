import { useState, useEffect } from "react";
import {
  DropdownListWrapper,
  DropdownHeader,
  DropdownHeaderTitleContainer,
  DropdownHeaderTitle,
  DropdownHeaderCurrentSelection,
  DropdownHeaderCurrentSelectionTitle,
  DropdownHeaderCurrentSelectionImage,
  DropdownList,
  DropdownListItem,
  DropdownListItemButton,
  DropdownListItemTitle,
  DropdownListItemLatest,
} from "./SettingsDropdown.css";
import selectIcon from "assets/images/arrow-down.png";

const SettingsDropdown = ({
  title,
  items,
  defaultValue,
  disabled,
  handleSelection,
  currentPlatform,
  currentFirmwareType,
  currentPlatformTests,
  currentRange,
  range = false,
  rangeType = false,
  multiSelect = false,
}) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  const handleOnClick = (item) => {
    if (!selection.some((current) => current._id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      } else {
        let selectionAfterRemoval = selection;
        selectionAfterRemoval = selectionAfterRemoval.filter(
          (current) => current._id !== item.id
        );
        setSelection([...selectionAfterRemoval]);
      }
      if (item._id === "all") {
        let newItems = [...items];
        newItems.shift();
        handleSelection(newItems);
      } else {
        if (rangeType === "from") {
          handleSelection({ ...currentRange, from: item.version });
        } else if (rangeType === "to") {
          handleSelection({ ...currentRange, to: item.version });
        } else {
          handleSelection(item);
        }
      }
    }
    setOpen(false);
  };

  // const markSelected = (item) =>
  //   selection.some((current) => current._id == item.id) ? true : false;

  useEffect(() => {
    if (currentPlatform) {
      setSelection([]);
      setOpen(false);
    }
  }, [currentPlatform]);

  useEffect(() => {
    if (currentFirmwareType) {
      setSelection([{ _id: "all", dropdownTitle: "All" }]);
      setOpen(false);
    }
  }, [currentFirmwareType]);

  useEffect(() => {
    if (currentFirmwareType && currentPlatformTests && items) {
      setSelection([{ _id: "all", dropdownTitle: "All", latest: false }]);
      setOpen(false);
    }
  }, [currentPlatformTests]);

  return (
    <DropdownListWrapper>
      <DropdownHeader>
        <DropdownHeaderTitleContainer>
          <DropdownHeaderTitle>{title}</DropdownHeaderTitle>
          <DropdownHeaderCurrentSelection
            type="button"
            onKeyPress={() => toggle(!open)}
            onClick={() => toggle(!open)}
            disabled={disabled || items.length === 0 ? true : false}
          >
            <DropdownHeaderCurrentSelectionTitle>
              {selection.length > 0 && !range
                ? selection[0].dropdownTitle
                  ? selection[0].dropdownTitle
                  : selection[0].name
                : rangeType === "from" && currentRange.from
                ? currentRange.from
                : rangeType === "to" && currentRange.to
                ? currentRange.to
                : defaultValue}
            </DropdownHeaderCurrentSelectionTitle>
            <DropdownHeaderCurrentSelectionImage
              src={selectIcon}
              alt="Select icon"
              className={`${open && "active"}`}
            />
          </DropdownHeaderCurrentSelection>
        </DropdownHeaderTitleContainer>
        <DropdownList className={`${open && "active"}`}>
          {items &&
            items.map((item) => (
              <DropdownListItem key={item._id}>
                <DropdownListItemButton
                  type="button"
                  className={`${
                    selection.length > 0 &&
                    item._id === selection[0]._id &&
                    "active"
                  }`}
                  onClick={() => handleOnClick(item)}
                >
                  <DropdownListItemTitle>
                    {item.dropdownTitle ? item.dropdownTitle : item.name}
                  </DropdownListItemTitle>
                  {item.latest && (
                    <DropdownListItemLatest>{`latest version`}</DropdownListItemLatest>
                  )}
                </DropdownListItemButton>
              </DropdownListItem>
            ))}
        </DropdownList>
      </DropdownHeader>
    </DropdownListWrapper>
  );
};

export default SettingsDropdown;
