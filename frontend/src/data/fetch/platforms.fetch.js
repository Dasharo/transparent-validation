import {
  API,
  FETCH_PLATFORMS_PENDING,
  FETCH_PLATFORMS_SUCCESS,
  FETCH_PLATFORMS_ERROR,
} from "data/constans";

export const getPlatforms = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_PLATFORMS_PENDING,
    });

    fetch(`${API}/platforms`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_PLATFORMS_SUCCESS,
          payload: data,
        });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_PLATFORMS_ERROR,
          payload: error,
        })
      );
  };
};
