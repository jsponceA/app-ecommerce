import CardProduct from "../../components/cart/CardProduct";

const HomeIndex = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-12">
          <div
            className="accordion accordion-flush"
            id="accordionPanelsStayOpenExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  FILTROS
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="iptDesdePrecio">
                      $ Desde
                    </span>
                    <input
                      type="number"
                      min={0}
                      step="any"
                      className="form-control"
                      aria-label="iptDesdePrecio"
                      aria-describedby="iptDesdePrecio"
                    />
                  </div>
                  <div className="input-group input-group-sm mb-3">
                    <span className="input-group-text" id="iptDesdeHasta">
                      $ Hasta
                    </span>
                    <input
                      type="number"
                      min={0}
                      step="any"
                      className="form-control"
                      aria-label="iptDesdeHasta"
                      aria-describedby="iptDesdeHasta"
                    />
                  </div>
                  <div className="d-flex justify-content-between">
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                    >
                      <i className="bx bx-brush"></i> LIMPIAR
                    </button>
                    <button type="button" className="btn btn-orange btn-sm">
                      <i className="bx bx-filter"></i> APLICAR
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-bold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  CATEGORIAS
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  <div className="d-flex flex-column">
                    <a href="#" className="text-decoration-none link-secondary">
                      Smart Tvs
                    </a>
                    <hr className="my-1 border-secondary-subtle" />
                    <a href="#" className="text-decoration-none link-secondary">
                      Smart Tvs
                    </a>
                    <hr className="my-1 border-secondary-subtle" />
                    <a href="#" className="text-decoration-none link-secondary">
                      Smart Tvs
                    </a>
                    <hr className="my-1 border-secondary-subtle" />
                    <a href="#" className="text-decoration-none link-secondary">
                      Smart Tvs
                    </a>
                    <hr className="my-1 border-secondary-subtle" />
                    <a href="#" className="text-decoration-none link-secondary">
                      Smart Tvs
                    </a>
                    <hr className="my-1 border-secondary-subtle" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-12">
          <div className="row">
            <div className="col-md-12">
              <div className="input-group input-group-lg mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar por nombre de producto"
                  aria-label="Example text with button addon"
                  aria-describedby="button-addon1"
                />
                <button
                  className="btn bg-secondary-subtle"
                  type="button"
                  id="button-addon1"
                >
                  <i className="bx bx-search"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            {Array(50)
              .fill(0)
              .map((item, index) => (
                <div key={index} className="col-md-4 my-2">
                  <CardProduct id={index} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIndex;
