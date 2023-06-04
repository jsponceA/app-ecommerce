import Logo from "../../assets/img/logo.png";
const Login = ({}) => {
  return (
    <div className="container-fluid">
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-md-4">
          <div className="card border-white shadow-lg">
            <div className="card-body">
              <p className="fw-bold fs-5 text-secondary text-center">
                Bienvenido! Ingrese su correo y su contraseña para continuar
              </p>
              <div className="text-center">
                <img
                  style={{ width: "150px" }}
                  className="img-fluid"
                  src={Logo}
                  alt="logo.png"
                />
              </div>
              <form action="">
                <div className="row gap-2">
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        required
                        maxLength={255}
                        id="email"
                        placeholder="example@example.com"
                      />
                      <label htmlFor="email">Correo</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        required
                        maxLength={255}
                        placeholder="********"
                      />
                      <label htmlFor="password">Contraseña</label>
                    </div>
                  </div>
                  <div className="col-md-12 text-end">
                    <a href="#">¿Olvidaste tu Contraseña?</a>
                  </div>
                  <div className="col-md-12 d-grid gap-1">
                    <button className="btn btn-login text-white">
                      <i className="bx bx-log-in"> INGRESAR</i>
                    </button>
                    <hr className="my-2" />
                    <button className="btn btn-danger text-white">
                      <i className="bx bxl-google"> GOOGLE</i>
                    </button>
                    <button className="btn btn-primary text-white">
                      <i className="bx bxl-facebook-circle"> FACEBOOK</i>
                    </button>
                  </div>
                  <div className="col-md-12">
                    <p
                      className="my-0 text-secondary"
                      style={{ fontSize: ".85rem" }}
                    >
                      ¿Aún no tienes una cuenta?{" "}
                      <a href="#" className="link-primary text-decoration-none">
                        Registrate
                      </a>
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
