import { combineReducers } from "redux";
import apiKeyReducer from "./apiKey.reducer";
import alertReducer from "./alert.reducer";
import clientsReducer from "./clients.reducer";
import platformsReducer from "./platforms.reducer";
import resultsReducer from "./results.reducer";
import testsReducer from "./tests.reducer";
import displaySettingsReducer from "./displaySettings.reducer";

const rootReducer = combineReducers({
  apiKeyReducer,
  alertReducer,
  clientsReducer,
  platformsReducer,
  resultsReducer,
  testsReducer,
  displaySettingsReducer,
});

export default rootReducer;
