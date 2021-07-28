import {
  FETCH_RESULTS_PENDING,
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_ERROR,
} from "data/constans";

const initialResults = {
  pending: false,
  results: [],
  error: null,
};

const resultsReducer = (state = initialResults, action) => {
  switch (action.type) {
    case FETCH_RESULTS_PENDING:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case FETCH_RESULTS_SUCCESS:
      return {
        ...state,
        pending: false,
        results: action.payload,
      };

    case FETCH_RESULTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
        results: [],
      };

    default:
      return state;
  }
};

export default resultsReducer;
