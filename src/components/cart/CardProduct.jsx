import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
  return (
    <>
      <Link to={`/product/${product.id}`} className="text-decoration-none">
        <div className="card shadow-sm ">
          <div className="card-header bg-white text-center">
            <img
              className="product-card-image"
              src={product.images?.[0]?.url || ""}
              alt=""
              crossOrigin="anonymous"
            />
          </div>
          <div className="card-body">
            <p className="fw-bold text-secondary mb-0">
              {product.category?.name}
            </p>
            <p className="fw-bold ms-3">{product.title}</p>
            <p className="fw-bold text-secondary mb-0">PRECIO</p>
            <p className="fw-bold ms-3 mb-0">$ {product.price}</p>
            <div className="text-end">
              <button className="btn btn-orange btn-lg rounded-circle ">
                <i className="bx bx-cart-add"></i>
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardProduct;
