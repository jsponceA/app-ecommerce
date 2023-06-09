import { useState } from "react";
import { getLoggedUser, updateUser } from "../../services/user";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import yup from "../../plugins/yup";
import { setUser } from "../../store/slices/currentUserSlice";
import { useDispatch } from "react-redux";

const schemaEditUser = yup.object().shape({
  firstName: yup.string().label("Nombres").max(250).required(),
  lastName: yup.string().label("Apellidos").max(250).required(),
  email: yup.string().label("Correo").email().max(250).required(),
  password: yup.string().label("Contraseña").max(250),
  phone: yup.string().label("Celular").max(250).required(),
});

const useEditProfile = () => {
  const dispatch = useDispatch();

  const {
    register: editUserRegister,
    handleSubmit: editUserHandleSubmit,
    formState: { errors: editUserErrors },
  } = useForm({
    resolver: yupResolver(schemaEditUser),
  });

  const [loaderInitialDataEditUser, setLoaderInitialDataEditUser] =
    useState(false);
  const [loaderResponseEditUser, setLoaderResponseEditUser] = useState(false);

  const initialDataEditUser = async () => {
    try {
      setLoaderInitialDataEditUser(true);
      const responseEditUser = await getLoggedUser();
      const userData = await responseEditUser.data;
      console.log(
        schemaEditUser.validateSyncAt("firstName", userData.firstName)
      );

      console.log(userData.firstName);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderInitialDataEditUser(false);
    }
  };

  const handleEditUser = async (dataForm) => {
    try {
      setLoaderResponseEditUser(true);
      const responseEditUser = await updateUser(dataForm);
      const { user } = responseEditUser.data;
      dispatch(setUser(user));
      toast.success("Sus datos se actualizaron de manera satisfactoria");
    } catch (error) {
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderResponseEditUser(false);
    }
  };

  return {
    editUserRegister,
    editUserHandleSubmit,
    editUserErrors,
    initialDataEditUser,
    loaderInitialDataEditUser,
    loaderResponseEditUser,
    handleEditUser,
  };
};

export default useEditProfile;
