import axios from "axios";

const NETWORK = "mainnet";

const apiService = axios.create({
  baseURL: `https://api.teztracker.com/v2/data/tezos/${NETWORK}`,
  headers: {
    "Content-type": "application/json",
  },
});

export default apiService;
