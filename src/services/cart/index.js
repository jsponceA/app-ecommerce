import { axiosInstance, axiosSecure } from "../../plugins/axios";

const getCart = async () => {
  const response = await axiosSecure.get("/cart", {
    params,
  });
  return response;
};

const addCart = async (data) => {
  const response = await axiosSecure.post("/cart", data);
  return response;
};

const deleteCart = async (id) => {
  const response = await axiosSecure.post(`/cart/${id}`);
  return response;
};

const updateCart = async (id, data) => {
  const response = await axiosSecure.post(`/cart/${id}`, data);
  return response;
};

export { getCart, addCart, deleteCart, updateCart };
