import {
  FETCH_CLIENTS_PENDING,
  FETCH_CLIENTS_SUCCESS,
  FETCH_CLIENTS_ERROR,
} from "data/constans";

const initialClients = {
  pending: false,
  clients: [],
  error: null,
};

const clientsReducer = (state = initialClients, action) => {
  switch (action.type) {
    case FETCH_CLIENTS_PENDING:
      return {
        ...state,
        pending: true,
        error: null,
      };
    case FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        pending: false,
        clients: action.payload,
      };

    case FETCH_CLIENTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.payload,
        clients: [],
      };

    default:
      return state;
  }
};

export default clientsReducer;
