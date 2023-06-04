import axios from "axios";

const axiosInstance = axios({
  baseURL: import.meta.env.VITE_BASE_URL_API,
});

export { axiosInstance };
