import axios from "axios";
const apiUrl = process.env.YACHT_BACKEND;

const api = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
