import { useState } from "react";
import { toast } from "react-toastify";
import { getCart, addCart, deleteCart, updateCart } from "../../services/cart";
import { purchaseCart } from "../../services/purchase";

const useCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [loaderCart, setLoaderCart] = useState(false);

  const getListCart = async () => {
    try {
      setLoaderCart(true);
      const response = await getCart();
      setCartProducts(response.data);
    } catch (error) {
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderCart(false);
    }
  };

  const addNewProductCart = async (productId, quantity = 1) => {
    try {
      setLoaderCart(true);
      const resAddCart = await addCart({ productId, quantity });
      const resListCart = await getListCart();
      toast.success("Producto agregado al carrito");
    } catch (error) {
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderCart(false);
    }
  };

  const updateProductCart = async (id, quantity = 1) => {
    try {
      setLoaderCart(true);
      const resUpdCart = await updateCart(id, { quantity });
      const resListCart = await getListCart();
      toast.success("Producto modificado del carrito");
    } catch (error) {
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderCart(false);
    }
  };

  const deleteProductCart = async (id) => {
    try {
      setLoaderCart(true);
      const resDelCart = await deleteCart(id);
      const resListCart = await getListCart();
      toast.success("Producto eliminado del carrito");
    } catch (error) {
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderCart(false);
    }
  };

  const paymentCart = async () => {
    try {
      setLoaderCart(true);
      const resPurchase = await purchaseCart();
      const resListCart = await getListCart();
      toast.success(
        "Su pedido se ha procesado, le llegara un correo para su confirmación."
      );
    } catch (error) {
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderCart(false);
    }
  };

  return {
    loaderCart,
    getListCart,
    addNewProductCart,
    updateProductCart,
    deleteProductCart,
    cartProducts,
    paymentCart,
  };
};

export default useCart;
