import axios from "axios";

const tokenString = localStorage.getItem("token");

const token = tokenString ? JSON.parse(tokenString).data : null;

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  timeout: 1000,
  withCredentials: true,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});
