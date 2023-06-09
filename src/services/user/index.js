import { axiosSecure, axiosInstance } from "../../plugins/axios";

const createUser = async (data) => {
  const response = await axiosInstance.post("/users", data);
  return response;
};

const getUser = async (id) => {
  const response = await axiosSecure.get(`/users/${id}`);
  return response;
};

const getLoggedUser = async () => {
  const response = await axiosSecure.get(`/users/me`);
  return response;
};

const updateUser = async (id, data) => {
  const response = await axiosSecure.put(`/users/${id}`, data);
  return response;
};

export { createUser, getUser, getLoggedUser, updateUser };
