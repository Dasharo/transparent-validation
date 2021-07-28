import { ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR } from "data/constans";

const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case ALERT_SUCCESS:
      return {
        type: "alert-success",
        message: action.message,
      };
    case ALERT_ERROR:
      return {
        type: "alert-danger",
        message: action.message,
      };
    case ALERT_CLEAR:
      return {};
    default:
      return state;
  }
};

export default alertReducer;
