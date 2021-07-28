import { ADD_API_KEY } from "data/constans";

const initialApiKey = {
  apiKey: "",
};

const apiKeyReducer = (state = initialApiKey, action) => {
  switch (action.type) {
    case ADD_API_KEY:
      return {
        ...state,
        apiKey: action.payload,
      };
    default:
      return state;
  }
};

export default apiKeyReducer;
