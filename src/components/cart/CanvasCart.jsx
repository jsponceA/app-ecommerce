import { useEffect, useRef } from "react";
import useCart from "../../hooks/cart/useCart";
import { Link } from "react-router-dom";
const CanvasCart = () => {
  const {
    loaderCart,
    getListCart,
    addNewProductCart,
    updateProductCart,
    deleteProductCart,
    cartProducts,
    paymentCart,
  } = useCart();
  const offcanvasRef = useRef(null);

  const handleQtyItemCart = (e, action, id) => {
    e.preventDefault();
    const findItem = cartProducts.find((item) => item.id === id);
    if (action === "add") {
      updateProductCart(id, findItem.quantity + 1);
    }

    if (action === "minus") {
      const qty = findItem.quantity - 1;
      if (qty <= 0) {
        deleteProductCart(id);
      } else {
        updateProductCart(id, findItem.quantity - 1);
      }
    }
  };

  useEffect(() => {
    const myOffcanvas = document.getElementById("offcanvasExample");
    myOffcanvas.addEventListener("show.bs.offcanvas", (event) => {
      getListCart();
    });
  }, []);

  useEffect(() => {
    getListCart();
  }, []);
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
      ref={offcanvasRef}
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">
          CARRITO DE COMPRAS
        </h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="row">
          {cartProducts.map((cart) => (
            <div key={cart.id} className="col-md-12">
              <div className="d-flex flex-nowrap">
                <Link
                  to={`/product/${cart.product?.id}`}
                  className="text-decoration-none"
                >
                  <img
                    className="offcanvas-item-img"
                    src={cart.product?.images?.[0]?.url || ""}
                    alt=""
                  />
                </Link>

                <div className=" ">
                  <p className="text-secondary" style={{ fontSize: ".85rem" }}>
                    <Link
                      to={`/product/${cart.product?.id}`}
                      className="text-decoration-none link-secondary"
                    >
                      {cart.product?.title}
                    </Link>
                  </p>

                  <div className="input-group input-group-sm mx-auto">
                    <button
                      onClick={(e) => handleQtyItemCart(e, "add", cart.id)}
                      className="btn btn-outline-success"
                      type="button"
                    >
                      <i className="bx bx-plus"></i>
                    </button>
                    <input
                      type="text"
                      className="form-control"
                      style={{ maxWidth: "50px" }}
                      placeholder="#"
                      value={cart.quantity}
                      disabled
                    />
                    <button
                      onClick={(e) => handleQtyItemCart(e, "minus", cart.id)}
                      className="btn btn-outline-danger "
                      type="button"
                    >
                      <i className="bx bx-minus"></i>
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => deleteProductCart(cart.id)}
                  className="btn btn-outline-danger btn-sm ms-auto my-auto"
                >
                  <i className="bx bx-trash"></i>
                </button>
              </div>
              <p className="text-end">
                <span className="text-secondary">TOTAL:</span> ${" "}
                {cart.quantity * cart.product?.price}
              </p>
              <hr className="border-secondary-subtle" />
            </div>
          ))}
        </div>
        {cartProducts.length > 0 ? (
          <div className="row">
            <hr className="border-secondary-subtle" />
            <div className="col-md-12 d-flex justify-content-between fw-bold">
              <p className="text-secondary">TOTAL: </p>
              <p>
                ${" "}
                {cartProducts.reduce(
                  (prev, curr) => prev + curr.quantity * curr.product.price,
                  0
                )}
              </p>
            </div>
            <div className="col-md-12 d-grid">
              <button
                onClick={paymentCart}
                type="button"
                className="btn btn-orange"
              >
                <i className="bx bx-money-withdraw"></i> PAGAR
              </button>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="fs-3 text-secondary">
                <i className="bx bx-sad"></i> NADA POR AQUI
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CanvasCart;
