import axios from "axios";
import { getCookie } from "./cookie";

const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: "http://localhost:3001"
});

axiosInstance.interceptors.request.use((config) => {
  const token = getCookie("Authorization");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance