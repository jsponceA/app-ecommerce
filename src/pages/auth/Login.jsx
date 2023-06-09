import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import useAuth from "../../hooks/auth/useAuth";
const Login = () => {
  const {
    loginRegister,
    loginHandleSubmit,
    loginErrors,
    loaderResponseLogin,
    handleLogin,
  } = useAuth();

  const onSubmitLogin = async (dataForm, e) => {
    e.preventDefault();
    await handleLogin(dataForm);
  };

  return (
    <div className="container-fluid">
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-md-4">
          <div className="card border-white shadow-lg">
            <div className="card-body">
              <p className="fw-bold fs-5 text-secondary text-center">
                INICIO DE SESIÓN
              </p>
              <div className="text-center">
                <img
                  style={{ width: "150px" }}
                  className="img-fluid"
                  src={Logo}
                  alt="logo.png"
                />
              </div>
              <form onSubmit={loginHandleSubmit(onSubmitLogin)}>
                <div className="row gap-3">
                  <div className="col-md-12">
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text">
                        <i className="bx bx-user-check bx-sm"></i>
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Example@correo.com"
                        {...loginRegister("email")}
                      />
                    </div>
                    <p className="my-0 text-danger">
                      {loginErrors.email?.message}
                    </p>
                  </div>
                  <div className="col-md-12">
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text">
                        <i className="bx bx-lock-open bx-sm"></i>
                      </span>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="*********"
                        {...loginRegister("password")}
                      />
                    </div>
                    <p className="my-0 text-danger">
                      {loginErrors.password?.message}
                    </p>
                  </div>
                  <div className="col-md-12 text-end">
                    <a href="#">¿Olvidaste tu Contraseña?</a>
                  </div>
                  <div className="col-md-12 d-grid gap-1">
                    {!loaderResponseLogin ? (
                      <button
                        type="submit"
                        className="btn btn-login text-white"
                      >
                        <i className="bx bx-log-in"> INGRESAR</i>
                      </button>
                    ) : (
                      <button
                        className="btn btn-login text-white"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        PROCESANDO...
                      </button>
                    )}

                    <hr className="my-2" />
                    {/* <button type="button" className="btn btn-danger text-white">
                      <i className="bx bxl-google"> GOOGLE</i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary text-white"
                    >
                      <i className="bx bxl-facebook-circle"> FACEBOOK</i>
                    </button> */}
                  </div>
                  <div className="col-md-12">
                    <p
                      className="my-0 text-secondary"
                      style={{ fontSize: ".85rem" }}
                    >
                      ¿Aún no tienes una cuenta?{" "}
                      <Link
                        to={"/register"}
                        className="link-primary text-decoration-none"
                      >
                        Registrate
                      </Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
