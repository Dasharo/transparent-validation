import {
  FETCH_PLATFORMS_PENDING,
  FETCH_PLATFORMS_SUCCESS,
  FETCH_PLATFORMS_ERROR,
} from "data/constans";

const initialPlatforms = {
  pending: false,
  platforms: [],
  error: null,
};

const platformsReducer = (state = initialPlatforms, action) => {
  switch (action.type) {
    case FETCH_PLATFORMS_PENDING:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case FETCH_PLATFORMS_SUCCESS:
      return {
        ...state,
        pending: false,
        platforms: action.payload,
      };

    case FETCH_PLATFORMS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
        platforms: [],
      };

    default:
      return state;
  }
};

export default platformsReducer;
