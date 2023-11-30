import axios from "axios";
import { getCookie } from "./cookie";

const axiosInstance = axios.create({
  baseURL: "localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = getCookie("jwt");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance