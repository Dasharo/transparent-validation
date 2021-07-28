import { useState } from "react";
import {
  RangeSelectionCheckboxWrapper,
  RangeSelectionCheckboxHeader,
  RangeSelectionCheckboxField,
  RangeSelectionCheckboxLabel,
  RangeSelectionCheckbox,
} from "./VersionRangeSelection.css";

const VersionRangeSelection = ({ setVersionSelectionType }) => {
  const [checked, setChecked] = useState({
    single: true,
    range: false,
  });

  const handleSelection = (e) => {
    if (e.target.name === "single") {
      setChecked({ single: true, range: false });
      setVersionSelectionType("single");
    } else {
      setChecked({ single: false, range: true });
      setVersionSelectionType("range");
    }
  };
  return (
    <>
      <RangeSelectionCheckboxHeader>
        Version selection type:
      </RangeSelectionCheckboxHeader>
      <RangeSelectionCheckboxWrapper>
        <RangeSelectionCheckboxField>
          <RangeSelectionCheckboxLabel htmlFor="single-selection">
            Single
          </RangeSelectionCheckboxLabel>
          <RangeSelectionCheckbox
            type="checkbox"
            id="single-selection"
            value="single"
            name="single"
            checked={checked.single}
            onChange={(e) => handleSelection(e)}
          />
        </RangeSelectionCheckboxField>
        <RangeSelectionCheckboxField>
          <RangeSelectionCheckboxLabel htmlFor="range-selection">
            Range
          </RangeSelectionCheckboxLabel>
          <RangeSelectionCheckbox
            type="checkbox"
            id="range-selection"
            value="range"
            name="range"
            checked={checked.range}
            onChange={(e) => handleSelection(e)}
          />
        </RangeSelectionCheckboxField>
      </RangeSelectionCheckboxWrapper>
    </>
  );
};

export default VersionRangeSelection;
