import axios from "axios";
import { DELETE_WALLET, GET_ERRORS } from "./types";
import { GET_WALLETS, GET_WALLET } from "./types";

export const createWallet = (newWallet, history) => async (dispath) => {
  await axios
    .post("http://localhost:8080/wallet", newWallet)
    .then((res) => {
      history.push("/dashboard");
    })
    .catch((err) => {
      dispath({ type: GET_ERRORS, payload: err.response.data });
    });
};
export const updateWallet = (id, updatewallet, history) => async (dispath) => {
  await axios
    .put(`http://localhost:8080/wallet/${id}`, updatewallet)
    .then((res) => {
      history.push("/dashboard");
    })
    .catch((err) => {
      dispath({ type: GET_ERRORS, payload: err.response.data });
    });
};
export const getWallets = () => async (dispath) => {
  await axios.get("http://localhost:8080/wallet").then((res) => {
    dispath({ type: GET_WALLETS, payload: res.data });
  });
};
export const getWallet = (id) => async (dispath) => {
  await axios.get(`http://localhost:8080/wallet/${id}`).then((res) => {
    dispath({ type: GET_WALLET, payload: res.data });
  });
};
export const deleteWallet = (id) => async (dispath) => {
  await axios.delete(`http://localhost:8080/wallet/${id}`).then((res) => {
    dispath({ type: DELETE_WALLET, payload: id });
  });
};

export const createTransaction = (newTransaction, history, walletid) => async (
  dispath
) => {
  await axios
    .post(`http://localhost:8080/transaction/${walletid}`, newTransaction)
    .then((res) => {
      history.push(`/transaction/${walletid}`);
    })
    .catch((err) => {
      dispath({ type: GET_ERRORS, payload: err.response.data });
    });
};
