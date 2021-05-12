import axios from "axios";

const api = axios.create({
  host: "localhost",
  port: "8080",
  prefix: "/",
  https: true,
  baseURL: "http://localhost:8080/api",
  retry: { retries: 3 },
  credentials: true,
  headers: {
    common: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
});

export default api;
