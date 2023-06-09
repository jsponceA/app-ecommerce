import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CardProduct from "../../components/cart/CardProduct";
import useProduct from "../../hooks/product/useProduct";
import useCart from "../../hooks/cart/useCart";
import { toast } from "react-toastify";

const ProductShow = () => {
  const { id } = useParams();
  const { getProductById, product, products, getListProductsRelation } =
    useProduct();

  const { addNewProductCart } = useCart();

  const [qty, setQty] = useState(1);

  const handleQtyItemCart = (e, action) => {
    e.preventDefault();

    if (action === "add") {
      setQty(qty + 1);
    }

    if (action === "minus") {
      if (qty <= 1) {
        toast.error("No es posible comprar comprar esa cantidad");
        return;
      }

      setQty(qty - 1);
    }
  };

  useEffect(() => {
    getProductById(id);
  }, [id]);

  useEffect(() => {
    if (product.category) {
      getListProductsRelation(product.category.id);
    }
  }, [product]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to={"/"} className="text-decoration-none link-secondary">
                  Inicio
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {product.title}
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-md-6 col-12">
          <div
            id="carouselExampleIndicators"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              {product.images?.map((img, index) => (
                <div
                  key={img.id}
                  className={`carousel-item ${index === 0 && "active"}`}
                >
                  <img src={img.url} className="d-block" alt="..." />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <p>{product.category?.name}</p>
          <p>{product.title}</p>
          <p>{product.description}</p>
          <div className="d-flex">
            <p>Price: $ {product.price}</p>
            <div className="mx-auto">
              <label htmlFor="">Cantidad</label>
              <div className="input-group input-group-sm">
                <button
                  onClick={(e) => handleQtyItemCart(e, "add")}
                  className="btn btn-outline-success"
                  type="button"
                >
                  <i className="bx bx-plus"></i>
                </button>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "80px" }}
                  placeholder="#"
                  value={qty}
                  disabled
                />
                <button
                  onClick={(e) => handleQtyItemCart(e, "minus")}
                  className="btn btn-outline-danger "
                  type="button"
                >
                  <i className="bx bx-minus"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="d-grid mt-4">
            <button
              onClick={(e) => addNewProductCart(id, qty)}
              type="button"
              className="btn btn-orange"
            >
              <i className="bx bx-cart-add"></i> AGREGAR AL CARRITO
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <hr className="border-secondary-subtle" />
        </div>
        <div className="col-md-12">
          <p className="mb-0 fw-bold fs-5 text-primary-emphasis">
            PRODUCTOS SIMILARES
          </p>
        </div>
        {products.map((product) => (
          <div key={product.id} className="col-md-4 my-2">
            <CardProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShow;
