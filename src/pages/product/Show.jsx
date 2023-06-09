import React from "react";
import { Link } from "react-router-dom";
import CardProduct from "../../components/cart/CardProduct";

const ProductShow = (props) => {
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
                Samsung Galaxy S22
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
              <div className="carousel-item active">
                <img
                  src="https://e-commerce-api-v2.academlo.tech/uploads/b.jpg"
                  className="d-block"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://e-commerce-api-v2.academlo.tech/uploads/b.jpg"
                  className="d-block"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://e-commerce-api-v2.academlo.tech/uploads/b.jpg"
                  className="d-block"
                  alt="..."
                />
              </div>
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
          <p>Samsung</p>
          <p>Samsung Galaxy S22</p>
          <p>
            Smartphone, Factory Unlocked Android Cell Phone, 256GB, 8K Camera &
            Video, Brightest Display, Long Battery Life, Fast 4nm Processor, US
            Version. 8K SUPER STEADY VIDEO: Shoot videos that rival how epic
            your life is with stunning 8K recording, the highest recording
            resolution available on a smartphone; Video captured is effortlessly
            smooth, thanks to Auto Focus Video Stabilization on Galaxy S22*
          </p>
          <div className="d-flex">
            <p>Price: $8.500</p>
            <div className="mx-auto">
              <label htmlFor="">Cantidad</label>
              <div className="input-group input-group-sm">
                <button className="btn btn-outline-danger" type="button">
                  <i className="bx bx-plus"></i>
                </button>
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "80px" }}
                  placeholder="#"
                  disabled
                />
                <button className="btn btn-outline-success " type="button">
                  <i className="bx bx-minus"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="d-grid mt-4">
            <button type="button" className="btn btn-orange">
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
        {Array(10)
          .fill(0)
          .map((item, index) => (
            <div key={index} className="col-md-4 my-2">
              <CardProduct id={index} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductShow;
