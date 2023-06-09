import { useEffect } from "react";
import useEditProfile from "../../hooks/profile/useEditProfile";
const ProfileEdit = () => {
  const {
    editUserRegister,
    editUserHandleSubmit,
    editUserErrors,
    initialDataEditUser,
    loaderInitialDataEditUser,
    loaderResponseEditUser,
    handleEditUser,
  } = useEditProfile();

  const onSubmitRegister = async (dataForm, e) => {
    e.preventDefault();
    await handleEditUser(dataForm);
  };

  useEffect(() => {
    initialDataEditUser();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card border-white shadow-lg">
            <div className="card-body">
              <p className="fw-bold fs-5 text-secondary text-center">
                ACTUALIZAR MI INFORMACIÓN PERSONAL
              </p>
              <form onSubmit={editUserHandleSubmit(onSubmitRegister)}>
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
                        defaultValue
                        {...editUserRegister("email")}
                      />
                    </div>
                    <p className="my-0 text-danger">
                      {editUserErrors.email?.message}
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
                        {...editUserRegister("password")}
                      />
                    </div>
                    <p className="my-0 text-danger">
                      {editUserErrors.password?.message}
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
                        {...editUserRegister("firstName")}
                      />
                    </div>
                    <p className="my-0 text-danger">
                      {editUserErrors.firstName?.message}
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
                        {...editUserRegister("lastName")}
                      />
                    </div>
                    <p className="my-0 text-danger">
                      {editUserErrors.lastName?.message}
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
                        {...editUserRegister("phone")}
                      />
                    </div>
                    <p className="my-0 text-danger">
                      {editUserErrors.phone?.message}
                    </p>
                  </div>

                  <div className="col-md-12 d-grid gap-1">
                    {!loaderResponseEditUser ? (
                      <button
                        type="submit"
                        className="btn btn-register text-white"
                      >
                        <i className="bx bx-edit"> MODIFICAR</i>
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

export default ProfileEdit;
