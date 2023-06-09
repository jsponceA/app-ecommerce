import { axiosInstance, axiosSecure } from "../../plugins/axios";

const login = async (data) => {
  const response = await axiosInstance.post("/users/login", data);
  return response;
};

const getLoggedUser = async () => {
  const response = await axiosSecure.get("/users/me");
  return response;
};

const logout = async () => {
  const response = await axiosInstance.post("/users/logout");
  return response;
};

export { login, getLoggedUser, logout };
