import { useState } from "react";
import { toast } from "react-toastify";
import { getPurchases } from "../../services/purchase";

const usePruchase = () => {
  const [pruchases, setPruchases] = useState([]);
  const [loaderPurchases, setLoaderPurchases] = useState(false);

  const getListPurchases = async () => {
    try {
      setLoaderPurchases(true);
      const response = await getPurchases();
      setPruchases(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderPurchases(false);
    }
  };

  return {
    pruchases,
    loaderPurchases,
    getListPurchases,
  };
};

export default usePruchase;
