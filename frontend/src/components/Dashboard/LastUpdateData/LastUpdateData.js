import {
  LastUpdateDataContainer,
  LastUpdateDataImg,
  LastUpdateDataType,
  LastUpdateDataTitle,
  LastUpdateDataSummaryWrapper,
  LastUpdateDataSummaryItem,
  LastUpdateDataSummaryItemSpan,
  LastUpdateDataSummaryItemDescription,
} from "./LastUpdateData.css";
import calendarIcon from "assets/images/calendar.png";

const LastUpdateData = ({ clientLastTest, clientLastTestDate }) => {
  const style = {
    color: `${
      clientLastTest && clientLastTest[0].status === "fail"
        ? "rgb(234, 73, 95)"
        : clientLastTest && clientLastTest[0].status === "pass"
        ? "rgb(56, 212, 48)"
        : null
    }`,
  };

  return (
    <>
      <LastUpdateDataContainer>
        <LastUpdateDataImg src={calendarIcon} alt="data icon" />
        <LastUpdateDataType>Last test date:</LastUpdateDataType>
        <LastUpdateDataTitle>
          {clientLastTestDate ? clientLastTestDate : "no data"}
        </LastUpdateDataTitle>
      </LastUpdateDataContainer>
      {clientLastTest && (
        <LastUpdateDataSummaryWrapper>
          <LastUpdateDataSummaryItem>
            Version:
            <LastUpdateDataSummaryItemSpan>
              {clientLastTest[0].version}
            </LastUpdateDataSummaryItemSpan>
          </LastUpdateDataSummaryItem>
          <LastUpdateDataSummaryItem>
            Test:
            <LastUpdateDataSummaryItemSpan style={style}>
              {clientLastTest[0].testSignature}
            </LastUpdateDataSummaryItemSpan>
          </LastUpdateDataSummaryItem>
          <LastUpdateDataSummaryItem>
            Status:
            <LastUpdateDataSummaryItemSpan style={style}>
              {clientLastTest[0].status}
            </LastUpdateDataSummaryItemSpan>
          </LastUpdateDataSummaryItem>
          <LastUpdateDataSummaryItem>
            Description:
            <LastUpdateDataSummaryItemDescription>
              {clientLastTest[0].testDescription
                ? clientLastTest[0].testDescription
                : "No description"}
            </LastUpdateDataSummaryItemDescription>
          </LastUpdateDataSummaryItem>
        </LastUpdateDataSummaryWrapper>
      )}
    </>
  );
};

export default LastUpdateData;
