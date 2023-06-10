import axios from "axios";
import { redirect } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
});

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
});

axiosSecure.interceptors.request.use((config) => {
  const dataStorage = JSON.parse(localStorage.getItem("persist:root"));
  const { token } = JSON.parse(dataStorage.currentUser);
  //const token = useSelector((state) => state.currentUser.token);
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

axiosSecure.interceptors.response.use(
  (response) => {
    // Do something before response is sent
    return response;
  },
  (error) => {
    /* if (error.response?.status === 403) {
      window.location.href = "/login";
    }*/
    return Promise.reject(error);
  }
);

export { axiosInstance, axiosSecure };
