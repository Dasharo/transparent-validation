import { ADD_DISPLAY_SETTINGS } from "data/constans";

export const addDisplaySettings = (displaySettings) => ({
  type: ADD_DISPLAY_SETTINGS,
  payload: displaySettings,
});
