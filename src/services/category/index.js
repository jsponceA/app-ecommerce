import { axiosInstance } from "../../plugins/axios";

const getCategories = async () => {
  const response = await axiosInstance.get("/categories");
  return response;
};

export { getCategories };
