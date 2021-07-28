import { ADD_DISPLAY_SETTINGS } from "data/constans";

const initialDisplaySettings = {
  displaySettings: {},
};

const displaySettingsReducer = (state = initialDisplaySettings, action) => {
  switch (action.type) {
    case ADD_DISPLAY_SETTINGS:
      return {
        ...state,
        displaySettings: action.payload,
      };
    default:
      return state;
  }
};

export default displaySettingsReducer;
