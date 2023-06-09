import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import useAuth from "../../hooks/auth/useAuth";
import useCurrentUser from "../../hooks/auth/useCurrentUser";

const Header = () => {
  const { loaderResponseLogout, handleLogout } = useAuth();
  const { token, currentUser, authChecked } = useCurrentUser();
  return (
    <header className="bg-dark text-white sticky-top">
      <div className="container-fluid">
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
            <NavLink
              to={"/"}
              className="text-decoration-none link-light header-menu-link"
            >
              <i className="bx bx-home"></i>INICIO
            </NavLink>

            {authChecked && (
              <NavLink
                to={"/cart"}
                className="text-decoration-none link-light header-menu-link"
              >
                <i className="bx bx-cart"></i>CARRITO
              </NavLink>
            )}
            {!authChecked && (
              <Link
                to={"/login"}
                className="text-decoration-none link-light header-menu-link"
              >
                <i className="bx bx-log-in"></i>INGRESAR
              </Link>
            )}

            {authChecked && (
              <div className="flex-shrink-0 dropdown">
                <a
                  href="#"
                  className="d-block  text-decoration-none dropdown-toggle link-light"
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
                  {currentUser.firstName}
                </a>
                <ul className="dropdown-menu text-small shadow">
                  <li>
                    <Link to={"/mi-profile"} className="dropdown-item">
                      <i className="bx bx-user"></i> Mi perfil
                    </Link>
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
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogout();
                      }}
                      className="dropdown-item"
                      href="#"
                    >
                      <i className="bx bx-log-out"></i> Cerrar Sesión
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
