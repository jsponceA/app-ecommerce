import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import useRegisterUser from "../../hooks/auth/useRegisterUser";
const Register = () => {
  const {
    registerRegister,
    registerHandleSubmit,
    registerErrors,
    loaderResponseRegister,
    handleRegister,
  } = useRegisterUser();

  const onSubmitRegister = async (dataForm, e) => {
    e.preventDefault();
    await handleRegister(dataForm);
  };

  return (
    <div className="container-fluid">
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card border-white shadow-lg">
            <div className="card-body">
              <p className="fw-bold fs-5 text-secondary text-center">
                REGISTRARME
              </p>
              <div className="text-center">
                <img
                  style={{ width: "150px" }}
                  className="img-fluid"
                  src={Logo}
                  alt="logo.png"
                />
              </div>
              <form onSubmit={registerHandleSubmit(onSubmitRegister)}>
                <div className="row row-gap-2">
                  <div className="col-md-6 col-12">
                    <label htmlFor="email">Correo:</label>
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text">
                        <i className="bx bx-user-check bx-sm"></i>
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Example@correo.com"
                        {...registerRegister("email")}
                      />
                    </div>
                    <p className="my-0 text-danger">
                      {registerErrors.email?.message}
                    </p>
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="email">Contraseña:</label>
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text">
                        <i className="bx bx-lock-open bx-sm"></i>
                      </span>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="*********"
                        {...registerRegister("password")}
                      />
                    </div>
                    <p className="my-0 text-danger">
                      {registerErrors.password?.message}
                    </p>
                  </div>

                  <div className="col-md-6 col-12">
                    <label htmlFor="firstName">Nombres:</label>
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text">
                        <i className="bx bx-text bx-sm"></i>
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Nombres"
                        {...registerRegister("firstName")}
                      />
                    </div>
                    <p className="my-0 text-danger">
                      {registerErrors.firstName?.message}
                    </p>
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="lastName">Apellidos:</label>
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text">
                        <i className="bx bx-text bx-sm"></i>
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Apellidos"
                        {...registerRegister("lastName")}
                      />
                    </div>
                    <p className="my-0 text-danger">
                      {registerErrors.lastName?.message}
                    </p>
                  </div>

                  <div className="col-md-6 col-12">
                    <label htmlFor="phone">Celular:</label>
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text">
                        <i className="bx bx-phone bx-sm"></i>
                      </span>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="000000000"
                        {...registerRegister("phone")}
                      />
                    </div>
                    <p className="my-0 text-danger">
                      {registerErrors.phone?.message}
                    </p>
                  </div>

                  <div className="col-md-12 d-grid gap-1">
                    {!loaderResponseRegister ? (
                      <button
                        type="submit"
                        className="btn btn-register text-white"
                      >
                        <i className="bx bx-log-in"> REGISTRAME</i>
                      </button>
                    ) : (
                      <button
                        className="btn btn-register text-white"
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
                      ¿Ya tienes una cuenta?{" "}
                      <Link
                        to={"/login"}
                        className="link-primary text-decoration-none"
                      >
                        Volver al login
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

export default Register;
