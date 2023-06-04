import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/img/logo.png";

const Layout = (props) => {
  return (
    <>
      <header className="bg-dark text-white sticky-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 text-center text-md-start header-img ">
              <Link
                to={"/"}
                className="text-decoration-none link-light fw-bold header-menu-link"
              >
                <img src={Logo} alt="logo.png" />
                ECOMMERCE
              </Link>
            </div>
            <div className="col-md-6 col-12 d-flex gap-3  justify-content-center justify-content-md-end my-auto header-items fw-bold ">
              <Link
                to={"/"}
                className="text-decoration-none link-light header-menu-link"
              >
                <i className="bx bx-home"></i>INICIO
              </Link>

              <Link
                to={"/cart"}
                className="text-decoration-none link-light header-menu-link"
              >
                <i className="bx bx-cart"></i>CARRITO
              </Link>
              <Link
                to={"/login"}
                className="text-decoration-none link-light header-menu-link"
              >
                <i className="bx bx-log-in"></i>INGRESAR
              </Link>

              <div className="flex-shrink-0 dropdown">
                <a
                  href="#"
                  className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="32"
                    height="32"
                    className="rounded-circle"
                  />
                </a>
                <ul className="dropdown-menu text-small shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bx bx-user"></i> Mi perfil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bx bx-archive"></i> Mis Compras
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bx bx-heart"></i> Mis favoritos
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bx bx-log-out"></i> Cerrar Sesión
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="pb-5">
        <Outlet />
      </main>

      <footer className="bg-dark text-white mt-auto">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="fw-bold">© ECOMMERCE {new Date().getFullYear()}</p>
            </div>
            <div className="col-md-12 d-flex justify-content-center align-items-center gap-2">
              <a
                className="link-light border border-1 rounded-5 p-1 item-link-footer"
                href="#"
              >
                <i className="bx bxl-instagram bx-md"></i>
              </a>
              <a
                className="link-light border border-1 rounded-5 p-1 item-link-footer"
                href="#"
              >
                <i className="bx bxl-linkedin bx-md"></i>
              </a>
              <a
                className="link-light border border-1 rounded-5 p-1 item-link-footer"
                href="#"
              >
                <i className="bx bxl-youtube bx-md"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
