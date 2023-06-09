import { useState } from "react";
import { getProduct, getProducts } from "../../services/product";
import { toast } from "react-toastify";
import { getCategories } from "../../services/category";
import { useSearchParams } from "react-router-dom";

const useProduct = () => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [paramsProducts, setParamsProducts] = useSearchParams({
    categoryId: "",
    title: "",
  });
  const [filterPrice, setFilterPrice] = useState({
    start: "",
    end: "",
  });
  const [loaderGetProducts, setLoaderGetProducts] = useState(false);
  const [loaderGetProduct, setLoaderGetProduct] = useState(false);

  const getListProducts = async () => {
    try {
      setLoaderGetProducts(true);
      const response = await getProducts({
        categoryId: paramsProducts.get("categoryId") || null,
        title: paramsProducts.get("title") || null,
      });
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderGetProducts(false);
    }
  };

  const getListProductsRelation = async (id) => {
    try {
      setLoaderGetProducts(true);
      const response = await getProducts({
        categoryId: id,
      });
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderGetProducts(false);
    }
  };

  const getProductById = async (id) => {
    try {
      setLoaderGetProduct(true);
      const response = await getProduct(id);
      setProduct(response.data);
    } catch (error) {
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderGetProduct(false);
    }
  };

  const getListCategories = async () => {
    try {
      setLoaderGetProducts(true);
      const response = await getCategories();
      setCategories(response.data);
    } catch (error) {
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderGetProducts(false);
    }
  };

  const filterProductsPrice = async () => {
    if (filterPrice.start && filterPrice.end) {
      const productsFilters = products
        .filter(
          (product) =>
            product.price >= filterPrice.start &&
            product.price <= filterPrice.end
        )
        .sort((a, b) => a.price - b.price);
      setProducts(productsFilters);
    }
  };

  return {
    paramsProducts,
    setParamsProducts,
    products,
    categories,
    loaderGetProducts,
    getListProducts,
    getListProductsRelation,
    loaderGetProduct,
    getProductById,
    filterProductsPrice,
    getListCategories,
    filterPrice,
    setFilterPrice,
    product,
  };
};

export default useProduct;
