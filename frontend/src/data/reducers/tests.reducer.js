import {
  FETCH_TESTS_PENDING,
  FETCH_TESTS_SUCCESS,
  FETCH_TESTS_ERROR,
} from "data/constans";

const initialTests = {
  pending: false,
  tests: [],
  error: null,
};

const testsReducer = (state = initialTests, action) => {
  switch (action.type) {
    case FETCH_TESTS_PENDING:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case FETCH_TESTS_SUCCESS:
      return {
        ...state,
        pending: false,
        tests: action.payload,
      };

    case FETCH_TESTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
        tests: [],
      };

    default:
      return state;
  }
};

export default testsReducer;
