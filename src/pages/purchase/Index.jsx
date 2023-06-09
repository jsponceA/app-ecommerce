import { Link } from "react-router-dom";
const PurchaseIndex = (props) => {
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
                Mis compras
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-md-12">
          <p className="fw-bold fs-4">LISTADO DE COMPRAS</p>
        </div>
      </div>
      <div className="row">
        {Array(10)
          .fill(0)
          .map((item, index) => (
            <div key={index} className="col-md-12 ">
              <div className="d-flex flex-wrap justify-content-evenly align-items-center">
                <img
                  className="table-pruchase-item-img"
                  src="https://e-commerce-api-v2.academlo.tech/uploads/b.jpg"
                  alt=""
                />
                <p>Samsgung Galaxy S22</p>
                <p className="text-secondary">05/12/2023</p>
                <input
                  type="text"
                  disabled
                  style={{ width: "80px" }}
                  className="form-control form-control-sm mb-3"
                />
                <p className="fw-bold">$. 885.00</p>
              </div>
              <hr className="border-secondary-subtle" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PurchaseIndex;
