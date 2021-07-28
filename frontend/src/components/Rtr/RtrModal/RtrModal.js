import {
  ShowDescriptionModal,
  ShowDescriptionModalBackground,
  ShowDescriptionModalButton,
  ShowDescriptionModalButtonImg,
  ShowDescriptionContainer,
  ShowDescriptionContainerHeader,
  ShowDescriptionContainerHeaderSpan,
  ShowDescriptionContainerDescription,
  ShowDescriptionContainerLink,
} from "./RtrModal.css";
import closeIcon from "assets/images/x-mark-green.png";

const RtrModal = ({ open, toggle, currentModalContent }) => {
  return (
    <ShowDescriptionModal className={`${open ? "active" : null}`}>
      <ShowDescriptionModalBackground></ShowDescriptionModalBackground>
      <ShowDescriptionModalButton>
        <ShowDescriptionModalButtonImg
          src={closeIcon}
          alt="close btn icon"
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}
        />
      </ShowDescriptionModalButton>
      {currentModalContent && (
        <ShowDescriptionContainer>
          <ShowDescriptionContainerHeader>
            Version
            <ShowDescriptionContainerHeaderSpan
              className={`${
                currentModalContent.status.toUpperCase() === "PASS"
                  ? "pass"
                  : currentModalContent.status.toUpperCase() === "FAIL"
                  ? "fail"
                  : currentModalContent.status.toUpperCase() ===
                      "NOT SUPPORTED" || "NOT TESTED"
                  ? "not-tested"
                  : null
              }`}
            >
              {currentModalContent.version}
            </ShowDescriptionContainerHeaderSpan>
          </ShowDescriptionContainerHeader>
          <ShowDescriptionContainerHeader>
            Test
            <ShowDescriptionContainerHeaderSpan
              className={`${
                currentModalContent.status.toUpperCase() === "PASS"
                  ? "pass"
                  : currentModalContent.status.toUpperCase() === "FAIL"
                  ? "fail"
                  : currentModalContent.status.toUpperCase() ===
                      "NOT SUPPORTED" || "NOT TESTED"
                  ? "not-tested"
                  : null
              }`}
            >
              {currentModalContent.signature}
            </ShowDescriptionContainerHeaderSpan>
          </ShowDescriptionContainerHeader>
          <ShowDescriptionContainerDescription>
            {currentModalContent.testDescription
              ? currentModalContent.testDescription
              : "No test description"}
          </ShowDescriptionContainerDescription>
          <ShowDescriptionContainerHeader>
            Test result description:
          </ShowDescriptionContainerHeader>
          <ShowDescriptionContainerDescription>
            {currentModalContent.description
              ? currentModalContent.description
              : "No result description"}
          </ShowDescriptionContainerDescription>
          {currentModalContent.issueUrl && (
            <ShowDescriptionContainerLink
              href={currentModalContent.issueUrl}
              target="_blank"
            >
              Link
            </ShowDescriptionContainerLink>
          )}
        </ShowDescriptionContainer>
      )}
    </ShowDescriptionModal>
  );
};

export default RtrModal;
