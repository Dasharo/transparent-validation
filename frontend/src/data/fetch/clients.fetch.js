import {
  API,
  FETCH_CLIENTS_PENDING,
  FETCH_CLIENTS_SUCCESS,
  FETCH_CLIENTS_ERROR,
} from "data/constans";

export const getClients = () => {
  return (dispatch) => {
    dispatch({
      type: FETCH_CLIENTS_PENDING,
    });

    fetch(`${API}/clients`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_CLIENTS_SUCCESS,
          payload: data,
        });
      })
      .catch((error) =>
        dispatch({
          type: FETCH_CLIENTS_ERROR,
          payload: error,
        })
      );
  };
};
