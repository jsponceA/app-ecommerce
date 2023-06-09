import { useEffect } from "react";
import CardProduct from "../../components/cart/CardProduct";
import useProduct from "../../hooks/product/useProduct";
import { Link } from "react-router-dom";

const HomeIndex = () => {
  const {
    paramsProducts,
    setParamsProducts,
    products,
    categories,
    loaderGetProducts,
    getListProducts,
    getListCategories,
    filterPrice,
    setFilterPrice,
    filterProductsPrice,
  } = useProduct();

  const handleSubmitProducts = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    paramsProducts.set("title", formData.get("title"));
    setParamsProducts(paramsProducts);
  };

  const handleFilterCategory = (e, id) => {
    e.preventDefault();
    paramsProducts.set("categoryId", id);
    setParamsProducts(paramsProducts);
  };

  const clearFilters = () => {
    paramsProducts.delete("title");
    paramsProducts.delete("categoryId");
    setParamsProducts(paramsProducts);
    setFilterPrice({
      start: "",
      end: "",
    });
  };

  useEffect(() => {
    getListCategories();
  }, []);

  useEffect(() => {
    if (paramsProducts.get("categoryId") || paramsProducts.get("title")) {
      getListProducts();
    } else {
      getListProducts();
    }
  }, [paramsProducts]);

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
                      onChange={(e) =>
                        setFilterPrice((prev) => ({
                          ...prev,
                          start: e.target.value,
                        }))
                      }
                      value={filterPrice.start}
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
                      onChange={(e) =>
                        setFilterPrice((prev) => ({
                          ...prev,
                          end: e.target.value,
                        }))
                      }
                      value={filterPrice.end}
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
                      onClick={clearFilters}
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                    >
                      <i className="bx bx-brush"></i> LIMPIAR
                    </button>
                    <button
                      onClick={() => filterProductsPrice()}
                      type="button"
                      className="btn btn-orange btn-sm"
                    >
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
                    {categories.map((cat) => (
                      <div key={cat.id}>
                        <a
                          onClick={(e) => handleFilterCategory(e, cat.id)}
                          href="#"
                          className="text-decoration-none link-secondary"
                        >
                          {cat.name}
                        </a>
                        <hr className="my-1 border-secondary-subtle" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9 col-12">
          <div className="row">
            <form onSubmit={handleSubmitProducts}>
              <div className="col-md-12">
                <div className="input-group input-group-lg mb-3">
                  <input
                    name="title"
                    type="text"
                    className="form-control"
                    placeholder="Buscar por nombre de producto"
                  />
                  <button className="btn bg-secondary-subtle" type="submit">
                    <i className="bx bx-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-md-4 my-2">
                <CardProduct product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIndex;
