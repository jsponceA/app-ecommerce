import axios from "axios";

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

export { axiosInstance, axiosSecure };
