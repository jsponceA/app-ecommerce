import { useState } from "react";
import { createUser } from "../../services/user";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../plugins/yup";
import { setToken, setUser } from "../../store/slices/currentUserSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth/auth";

const schemaRegister = yup.object().shape({
  firstName: yup.string().label("Nombres").max(250).required(),
  lastName: yup.string().label("Apellidos").max(250).required(),
  email: yup.string().label("Correo").email().max(250).required(),
  password: yup.string().label("Contraseña").max(250).required(),
  phone: yup.string().label("Celular").max(250).required(),
});

const useRegisterUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register: registerRegister,
    handleSubmit: registerHandleSubmit,
    formState: { errors: registerErrors },
    getValues: registerGetValues,
  } = useForm({
    resolver: yupResolver(schemaRegister),
  });

  const [loaderResponseRegister, setLoaderResponseRegister] = useState(false);

  const handleRegister = async (dataForm) => {
    try {
      setLoaderResponseRegister(true);
      const responseRegister = await createUser(dataForm);
      const responseLogin = await login({
        email: dataForm.email,
        password: dataForm.password,
      });

      const { token, user } = responseLogin.data;
      dispatch(setToken(token));
      dispatch(setUser(user));
      toast.success(`Bienvenido usuario ${user.firstName} ${user.lastName}`);
      navigate("/mi-profile");
    } catch (error) {
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderResponseRegister(false);
    }
  };

  return {
    registerRegister,
    registerHandleSubmit,
    registerErrors,
    loaderResponseRegister,
    handleRegister,
  };
};

export default useRegisterUser;
