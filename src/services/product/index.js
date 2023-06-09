import { axiosInstance } from "../../plugins/axios";

const getProducts = async (params) => {
  const response = await axiosInstance.get(`/users/${id}`, {
    params,
  });
  return response;
};

const getProduct = async (id) => {
  const response = await axiosInstance.get(`/users/${id}`);
  return response;
};

export { getProducts, getProduct };
