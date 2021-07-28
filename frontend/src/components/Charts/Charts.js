import { ContentViewHeader, AccessMessage, LinkGenerator } from "components";
import RenderChart from "components/Charts/RenderChart";

const Charts = ({ client, displaySettings }) => {
  return (
    <>
      <ContentViewHeader title={"Charts"} />
      {client ? (
        Object.keys(displaySettings).length !== 0 ? (
          <>
            <RenderChart displaySettings={displaySettings} />
            <LinkGenerator
              displaySettings={displaySettings}
              title={"Format:"}
              items={[
                { id: 1, title: "raw" },
                { id: 2, title: "image" },
                { id: 3, title: "html" },
              ]}
              elementType={"chart"}
            />
          </>
        ) : (
          <AccessMessage
            message={"To display the data, set the display settings"}
          />
        )
      ) : (
        <>
          <AccessMessage message={"Access denied, please enter API Key"} />
        </>
      )}
    </>
  );
};

export default Charts;
