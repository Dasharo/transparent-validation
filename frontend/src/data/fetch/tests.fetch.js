import {
  API,
  FETCH_TESTS_PENDING,
  FETCH_TESTS_SUCCESS,
  FETCH_TESTS_ERROR,
} from "data/constans";

export const getTests = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_TESTS_PENDING,
    });

    fetch(`${API}/tests`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_TESTS_SUCCESS,
          payload: data,
        });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_TESTS_ERROR,
          payload: error,
        })
      );
  };
};
