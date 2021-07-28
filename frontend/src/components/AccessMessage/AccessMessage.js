import { AccessMessageContainer, AccessMessageName } from "./AccessMessage.css";

const AccessMessage = ({ message }) => {
  return (
    <AccessMessageContainer>
      <AccessMessageName>{message}</AccessMessageName>
    </AccessMessageContainer>
  );
};

export default AccessMessage;
