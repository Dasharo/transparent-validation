import {
  FETCH_CLIENTS_PENDING,
  FETCH_CLIENTS_SUCCESS,
  FETCH_CLIENTS_ERROR,
} from "data/constans";

export const fetchClientsPending = () => ({
  type: FETCH_CLIENTS_PENDING,
});

export const fetchClientsSuccess = (clients) => ({
  type: FETCH_CLIENTS_SUCCESS,
  payload: clients,
});

export const fetchClientsError = (error) => ({
  type: FETCH_CLIENTS_ERROR,
  payload: error,
});
