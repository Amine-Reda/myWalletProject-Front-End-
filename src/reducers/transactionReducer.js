import { GET_TRANSACTIONS, DELETE_TRANSACTION } from "../actions/types";

const initialState = { transactions: [] };

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return { ...state, transactions: action.payload };

    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
}
