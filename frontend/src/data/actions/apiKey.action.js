import { ADD_API_KEY } from "data/constans";

export const addApiKey = (apiKey) => ({
  type: ADD_API_KEY,
  payload: apiKey,
});
