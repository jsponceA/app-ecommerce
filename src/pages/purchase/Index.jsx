import { Link } from "react-router-dom";
import usePruchase from "../../hooks/purchase/usePurchase";
import { useEffect } from "react";
const PurchaseIndex = () => {
  const { pruchases, loaderPurchases, getListPurchases } = usePruchase();

  useEffect(() => {
    getListPurchases();
  }, []);

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
        {pruchases.map((purchase) => (
          <div key={purchase.id} className="col-md-12 ">
            <div className="d-flex flex-wrap justify-content-between align-items-center">
              <Link
                to={`/product/${purchase.product?.id}`}
                className="text-decoration-none"
              >
                <img
                  className="table-pruchase-item-img"
                  src={purchase.product?.images?.[0]?.url || ""}
                  alt=""
                />
              </Link>
              <p style={{ maxWidth: "200px" }}>
                <Link
                  to={`/product/${purchase.product?.id}`}
                  className="text-decoration-none link-secondary"
                >
                  {purchase.product?.title}
                </Link>
              </p>
              <p className="text-secondary ">
                {purchase.product?.createdAt.split("T")[0]}
              </p>
              <input
                type="text"
                disabled
                value={purchase.quantity}
                style={{ width: "80px" }}
                className="form-control form-control-sm mb-3"
              />
              <p className="fw-bold">
                $ {purchase.quantity * purchase.product?.price}
              </p>
            </div>
            <hr className="border-secondary-subtle" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default PurchaseIndex;
