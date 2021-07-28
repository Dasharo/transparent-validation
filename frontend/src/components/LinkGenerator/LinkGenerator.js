import { useState } from "react";
import {
  LinkGeneratorContainer,
  LinkShowBox,
  LinkShowBoxSpan,
  LinkShowBoxText,
  LinkCreatorForm,
  LinkCreatorInputsWrapper,
  LinkCreatorFormInfo,
  LinkCreatorInputField,
  LinkCreatorLabel,
  LinkCreatorInput,
  LinkCreatorButtonsContainer,
  FormButton,
  FormButtonTitle,
  FormButtonImg,
} from "./LinkGenerator.css";
import { LinkGeneratorDropdown } from "components/LinkGenerator";
import saveButtonIcon from "assets/images/visibility.png";
import resetButtonIcon from "assets/images/rubber.png";

const LinkGenerator = ({ displaySettings, title, items, elementType }) => {
  const [currentFormat, setCurrentFormat] = useState("");
  const [currentHeight, setCurrentHeight] = useState("");
  const [currentWidth, setCurrentWidth] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentTest, setCurrentTest] = useState("");
  const testOutput = currentTest
    ? `&test="${currentTest}"`
    : !Array.isArray(displaySettings.test)
    ? `&test="${displaySettings.test.dropdownTitle}"`
    : "";
  const versionOutput =
    !Array.isArray(displaySettings.version) &&
    displaySettings.versionSelectionType === "single"
      ? displaySettings.version.dropdownTitle
      : displaySettings.rangeString &&
        displaySettings.versionSelectionType === "range"
      ? displaySettings.rangeString
      : "all";
  const heightOutput = currentHeight ? `&height=${currentHeight}` : "";
  const weightOutput = currentWidth ? `&width=${currentWidth}` : "";
  const titleOutput = currentTitle ? `&title="${currentTitle}"` : "";
  const src = `${window.env.EXT_API_URL}/${displaySettings.client}/${displaySettings.platform.nameSlug}/${displaySettings.firmwareType.firmwareType}/${versionOutput}/${elementType}?format=${currentFormat}${testOutput}${titleOutput}${heightOutput}${weightOutput}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(src);
  };

  const handleInput = (e, setCategory) => {
    setCategory(e.target.value);
  };

  const handleFormReset = () => {
    setCurrentHeight("");
    setCurrentWidth("");
    setCurrentTitle("");
    setCurrentTest("");
  };

  return (
    <LinkGeneratorContainer>
      <LinkShowBox>
        <LinkShowBoxSpan>Link: </LinkShowBoxSpan>
        <LinkShowBoxText>{src}</LinkShowBoxText>
      </LinkShowBox>
      <LinkCreatorForm onSubmit={(e) => handleSubmit(e)}>
        <LinkGeneratorDropdown
          title={title}
          items={items}
          handleSelection={setCurrentFormat}
          defaultValue={"select"}
        />
        <LinkCreatorInputsWrapper>
          <LinkCreatorFormInfo>Optional parameters:</LinkCreatorFormInfo>
          <LinkCreatorInputField>
            <LinkCreatorLabel htmlFor="height">Height: </LinkCreatorLabel>
            <LinkCreatorInput
              id="height"
              type="number"
              placeholder="px height"
              value={currentHeight}
              onChange={(e) => handleInput(e, setCurrentHeight)}
            />
          </LinkCreatorInputField>
          <LinkCreatorInputField>
            <LinkCreatorLabel htmlFor="width">Width: </LinkCreatorLabel>
            <LinkCreatorInput
              id="width"
              type="number"
              placeholder="px width"
              value={currentWidth}
              onChange={(e) => handleInput(e, setCurrentWidth)}
            />
          </LinkCreatorInputField>
          <LinkCreatorInputField>
            <LinkCreatorLabel htmlFor="title">Title: </LinkCreatorLabel>
            <LinkCreatorInput
              id="title"
              type="text"
              placeholder="title"
              value={currentTitle}
              onChange={(e) => handleInput(e, setCurrentTitle)}
            />
          </LinkCreatorInputField>
          <LinkCreatorInputField>
            <LinkCreatorLabel htmlFor="test">Test: </LinkCreatorLabel>
            <LinkCreatorInput
              id="test"
              type="text"
              placeholder="test"
              value={currentTest}
              onChange={(e) => handleInput(e, setCurrentTest)}
            />
          </LinkCreatorInputField>
        </LinkCreatorInputsWrapper>
        <LinkCreatorButtonsContainer>
          <FormButton type="button" onClick={(e) => handleFormReset(e)}>
            <FormButtonTitle>Clear</FormButtonTitle>
            <FormButtonImg src={resetButtonIcon} alt="Clear from icon" />
          </FormButton>
          <FormButton type="submit">
            <FormButtonTitle>Load Preview</FormButtonTitle>
            <FormButtonImg src={saveButtonIcon} alt="Save icon" />
          </FormButton>
        </LinkCreatorButtonsContainer>
      </LinkCreatorForm>
    </LinkGeneratorContainer>
  );
};

export default LinkGenerator;
