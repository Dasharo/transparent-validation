import { useState } from "react";
import { useDispatch } from "react-redux";
import { addApiKey } from "data/actions/apiKey.action";
import {
  ClientApiKeyForm,
  ClientApiKeyInputField,
  ClientApiKeyInputLabel,
  ClientApiKeyInputWrapper,
  ClientApiKeyInput,
  ClientApiKeyButton,
  ClientApiKeyButtonImg,
} from "./ClientApiKey.css";
import addIcon from "assets/images/add.png";

const ClientApiKey = ({ clients = [] }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("example-key");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (clients.some((item) => item.apiKey === value)) {
      dispatch(addApiKey(value));
    } else {
      dispatch(addApiKey(""));
    }
  };

  return (
    <ClientApiKeyForm onSubmit={(e) => handleSubmit(e)}>
      <ClientApiKeyInputField>
        <ClientApiKeyInputLabel htmlFor="api-key">
          Enter API Key:
        </ClientApiKeyInputLabel>
        <ClientApiKeyInputWrapper>
          <ClientApiKeyInput
            id="api-key"
            type="text"
            placeholder="API Key"
            value={value}
            onChange={(e) => handleInput(e)}
          />
          <ClientApiKeyButton type="submit">
            <ClientApiKeyButtonImg src={addIcon} alt="Add icon" />
          </ClientApiKeyButton>
        </ClientApiKeyInputWrapper>
      </ClientApiKeyInputField>
    </ClientApiKeyForm>
  );
};

export default ClientApiKey;
