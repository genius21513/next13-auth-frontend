import axios from "axios";

const BASE_API_URL = "https://auth.yurilima.uk/api/";

const Api = axios.create({
  baseURL: BASE_API_URL,
  // timeout: 1000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default Api;