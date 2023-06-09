const CanvasCart = () => {
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
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
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <div key={index} className="col-md-12">
                <div className="d-flex flex-wrap">
                  <img
                    className="offcanvas-item-img"
                    src="https://e-commerce-api-v2.academlo.tech/uploads/b.jpg"
                    alt=""
                  />

                  <div className="me-auto ">
                    <p>Samsung Galaxy S22</p>
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
                      <button
                        className="btn btn-outline-success "
                        type="button"
                      >
                        <i className="bx bx-minus"></i>
                      </button>
                    </div>
                  </div>
                  <button className="btn btn-danger my-auto">
                    <i className="bx bx-trash"></i>
                  </button>

                  <p className="ms-auto">
                    <span className="text-secondary">TOTAL:</span> $8.6512
                  </p>
                </div>
                <hr className="border-secondary-subtle" />
              </div>
            ))}
        </div>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-between fw-bold">
            <p className="text-secondary">TOTAL: </p>
            <p>$ 8456.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanvasCart;
