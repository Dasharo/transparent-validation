import {
  FETCH_TESTS_PENDING,
  FETCH_TESTS_SUCCESS,
  FETCH_TESTS_ERROR,
} from "data/constans";

export const fetchTestsPending = () => ({
  type: FETCH_TESTS_PENDING,
});

export const fetchTestsSuccess = (tests) => ({
  type: FETCH_TESTS_SUCCESS,
  payload: tests,
});

export const fetchTestsError = (error) => ({
  type: FETCH_TESTS_ERROR,
  payload: error,
});
