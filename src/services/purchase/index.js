import { axiosInstance, axiosSecure } from "../../plugins/axios";

const getPurchases = async () => {
  const response = await axiosSecure.get("/purchases");
  return response;
};

const purchaseCart = async () => {
  const response = await axiosSecure.post("/purchases");
  return response;
};

export { getPurchases, purchaseCart };
