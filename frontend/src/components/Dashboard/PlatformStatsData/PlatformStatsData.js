import {
  PlatformStatsDataContainer,
  PlatformStatsDataImg,
  PlatformStatsDataType,
  PlatformStatsDataTitle,
} from "./PlatformStatsData.css";
import totalIcon from "assets/images/total.png";
import passedIcon from "assets/images/success.png";
import failedIcon from "assets/images/error.png";
import notTestedIcon from "assets/images/list.png";

const PlatformStatsData = ({
  clientTestTotal,
  clientPassedTotal,
  clientFailedTotal,
  clientNotTestedTotal,
}) => {
  return (
    <>
      <PlatformStatsDataContainer>
        <PlatformStatsDataImg src={totalIcon} alt="data icon" />
        <PlatformStatsDataType>Tests number:</PlatformStatsDataType>
        <PlatformStatsDataTitle>
          {clientTestTotal ? clientTestTotal : "no data"}
        </PlatformStatsDataTitle>
      </PlatformStatsDataContainer>
      <PlatformStatsDataContainer>
        <PlatformStatsDataImg src={passedIcon} alt="data icon" />
        <PlatformStatsDataType>Passed total:</PlatformStatsDataType>
        <PlatformStatsDataTitle className="pass">
          {clientPassedTotal ? clientPassedTotal : "no data"}
        </PlatformStatsDataTitle>
      </PlatformStatsDataContainer>
      <PlatformStatsDataContainer>
        <PlatformStatsDataImg src={failedIcon} alt="data icon" />
        <PlatformStatsDataType>Failed total:</PlatformStatsDataType>
        <PlatformStatsDataTitle className="fail">
          {clientFailedTotal ? clientFailedTotal : "no data"}
        </PlatformStatsDataTitle>
      </PlatformStatsDataContainer>
      <PlatformStatsDataContainer>
        <PlatformStatsDataImg src={notTestedIcon} alt="data icon" />
        <PlatformStatsDataType>Not tested total:</PlatformStatsDataType>
        <PlatformStatsDataTitle className="not-tested">
          {clientNotTestedTotal ? clientNotTestedTotal : "no data"}
        </PlatformStatsDataTitle>
      </PlatformStatsDataContainer>
    </>
  );
};

export default PlatformStatsData;
