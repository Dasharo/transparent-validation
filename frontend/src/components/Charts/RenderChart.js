import React from "react";
import { ChartWrapper } from "./RenderChart.css";

const RenderChart = ({ displaySettings }) => {
  const testOutput = !Array.isArray(displaySettings.test)
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
  const src = `${window.env.EXT_API_URL}/${displaySettings.client}/${displaySettings.platform.nameSlug}/${displaySettings.firmwareType.firmwareType}/${versionOutput}/chart?format=raw${testOutput}`;
  return (
    <ChartWrapper>
      <iframe
        id="inlineFrameExample"
        frameBorder="0"
        width="800"
        height="600"
        src={src}
      ></iframe>
    </ChartWrapper>
  );
};

export default RenderChart;
