import { useState } from "react";
import { getLoggedUser, login, logout } from "../../services/auth/auth";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../plugins/yup";
import {
  setToken,
  setUser,
  clearToken,
  clearUser,
} from "../../store/slices/currentUserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const schemaLogin = yup.object().shape({
  email: yup.string().label("Correo").email().max(250).required(),
  password: yup.string().label("Contraseña").max(250).required(),
});

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register: loginRegister,
    handleSubmit: loginHandleSubmit,
    formState: { errors: loginErrors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
  });

  const [loaderResponseLogin, setLoaderResponseLogin] = useState(false);
  const [loaderResponseLogout, setLoaderResponseLogout] = useState(false);

  const handleLogin = async (dataForm) => {
    try {
      setLoaderResponseLogin(true);
      const response = await login(dataForm);
      const { token, user } = response.data;
      dispatch(setToken(token));
      dispatch(setUser(user));
      toast.success(`Bienvenido usuario ${user.firstName} ${user.lastName}`);
      navigate("/mi-profile");
    } catch (error) {
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderResponseLogin(false);
    }
  };

  const getCurrentUser = async () => {
    try {
      const response = await getLoggedUser();
      console.log(response);
    } catch (error) {
      toast.error(error.response?.data?.error);
    } finally {
      console.log("finalizado");
    }
  };

  const handleLogout = async () => {
    try {
      setLoaderResponseLogout(true);
      /* no hay api de logout T.T SIMULAMOS UNA NOMAS  */
      //await logout();
      dispatch(clearToken());
      dispatch(clearUser());
      toast.success(`Sesión finalizada, vuelva pronto`);
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderResponseLogout(false);
    }
  };

  return {
    loginRegister,
    loginHandleSubmit,
    loginErrors,
    loaderResponseLogin,
    loaderResponseLogout,
    handleLogin,
    handleLogout,
    getCurrentUser,
  };
};

export default useAuth;
