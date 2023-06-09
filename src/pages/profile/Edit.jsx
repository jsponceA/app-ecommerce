import { useEffect } from "react";
import useEditProfile from "../../hooks/profile/useEditProfile";
const ProfileEdit = () => {
  const {
    editUserRegister,
    editUserHandleSubmit,
    setEditUserErrors,
    editUserErrors,
    initialDataEditUser,
    loaderInitialDataEditUser,
    loaderResponseEditUser,
    handleEditUser,
    dataCurrentUser,
    setDataCurrentUser,
  } = useEditProfile();

  const onSubmitRegister = async (e) => {
    e.preventDefault();
    await handleEditUser();
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setDataCurrentUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    setEditUserErrors((prev) => ({
      ...prev,
      [name]: null,
    }));
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
              <div className="text-center my-0">
                <img
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  src="https://github.com/mdo.png"
                  alt=""
                />
              </div>
              <form onSubmit={onSubmitRegister}>
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
                        id="email"
                        name="email"
                        value={dataCurrentUser.email || ""}
                        onChange={handleChangeInput}
                      />
                    </div>
                    <p className="my-0 text-danger">
                      {editUserErrors.email?.message}
                    </p>
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="password">Contraseña:</label>
                    <div className="input-group flex-nowrap">
                      <span className="input-group-text">
                        <i className="bx bx-lock-open bx-sm"></i>
                      </span>
                      <input
                        className="form-control"
                        type="password"
                        placeholder="*********"
                        id="password"
                        name="password"
                        onChange={handleChangeInput}
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
                        id="firstName"
                        name="firstName"
                        value={dataCurrentUser.firstName || ""}
                        onChange={handleChangeInput}
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
                        id="lastName"
                        name="lastName"
                        value={dataCurrentUser.lastName || ""}
                        onChange={handleChangeInput}
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
                        id="phone"
                        name="phone"
                        value={dataCurrentUser.phone || ""}
                        onChange={handleChangeInput}
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
