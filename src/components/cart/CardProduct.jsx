import { Link } from "react-router-dom";

const CardProduct = ({ id }) => {
  return (
    <>
      <Link to={`/product/${id}`} className="text-decoration-none">
        <div className="card shadow-sm ">
          <div className="card-header bg-white text-center">
            <img
              className="product-card-image"
              src="https://e-commerce-api-v2.academlo.tech/uploads/b.jpg"
              alt=""
              crossOrigin="anonymous"
            />
          </div>
          <div className="card-body">
            <p className="fw-bold text-secondary mb-0">SAMSGUN</p>
            <p className="fw-bold ms-3">SAMSGUN GALAZY 222</p>
            <p className="fw-bold text-secondary mb-0">PRECIO</p>
            <p className="fw-bold ms-3 mb-0">$.8.50</p>
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
