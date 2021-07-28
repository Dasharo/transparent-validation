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
} from "./LinkGeneratorDropdown.css";
import selectIcon from "assets/images/arrow-down.png";

const LinkGeneratorDropdown = ({
  title,
  items,
  handleSelection,
  defaultValue,
}) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  const handleOnClick = (item) => {
    if (!selection.some((current) => current.id === item.id)) {
      setSelection([item]);
      handleSelection(item.title);
    }
    setOpen(false);
  };

  useEffect(() => {
    setSelection([items[0]]);
    handleSelection(items[0].title);
  }, []);

  return (
    <DropdownListWrapper>
      <DropdownHeader>
        <DropdownHeaderTitleContainer>
          <DropdownHeaderTitle>{title}</DropdownHeaderTitle>
          <DropdownHeaderCurrentSelection
            type="button"
            onKeyPress={() => toggle(!open)}
            onClick={() => toggle(!open)}
          >
            <DropdownHeaderCurrentSelectionTitle>
              {selection.length > 0 ? selection[0].title : defaultValue}
            </DropdownHeaderCurrentSelectionTitle>
            <DropdownHeaderCurrentSelectionImage
              src={selectIcon}
              alt="Select icon"
              className={`${open && "active"}`}
            />
          </DropdownHeaderCurrentSelection>
        </DropdownHeaderTitleContainer>
        <DropdownList className={`${open && "active"}`}>
          {items.map((item) => (
            <DropdownListItem key={item.id}>
              <DropdownListItemButton
                type="button"
                className={`${
                  selection.length > 0 &&
                  item.id === selection[0].id &&
                  "active"
                }`}
                onClick={() => handleOnClick(item)}
              >
                <DropdownListItemTitle>{item.title}</DropdownListItemTitle>
              </DropdownListItemButton>
            </DropdownListItem>
          ))}
        </DropdownList>
      </DropdownHeader>
    </DropdownListWrapper>
  );
};

export default LinkGeneratorDropdown;
