import {
  API,
  FETCH_RESULTS_PENDING,
  FETCH_RESULTS_SUCCESS,
  FETCH_RESULTS_ERROR,
} from "data/constans";

export const getResults = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_RESULTS_PENDING,
    });

    fetch(`${API}/results`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_RESULTS_SUCCESS,
          payload: data,
        });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_RESULTS_ERROR,
          payload: error,
        })
      );
  };
};
