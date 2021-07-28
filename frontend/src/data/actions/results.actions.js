import {
  FETCH_RESULTS_PENDING,
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_ERROR,
} from "data/constans";

export const fetchResultsPending = () => ({
  type: FETCH_RESULTS_PENDING,
});

export const fetchResultsSuccess = (results) => ({
  type: FETCH_RESULTS_SUCCESS,
  payload: results,
});

export const fetchResultsError = (error) => ({
  type: FETCH_RESULTS_ERROR,
  payload: error,
});
