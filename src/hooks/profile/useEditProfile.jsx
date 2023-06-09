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
  const { register: editUserRegister, handleSubmit: editUserHandleSubmit } =
    useForm({
      resolver: yupResolver(schemaEditUser),
    });
  const [dataCurrentUser, setDataCurrentUser] = useState({});
  const [editUserErrors, setEditUserErrors] = useState({});
  const [loaderInitialDataEditUser, setLoaderInitialDataEditUser] =
    useState(false);
  const [loaderResponseEditUser, setLoaderResponseEditUser] = useState(false);

  const initialDataEditUser = async () => {
    try {
      setLoaderInitialDataEditUser(true);
      const responseEditUser = await getLoggedUser();
      setDataCurrentUser(responseEditUser.data);
    } catch (error) {
      toast.error(error.response?.data?.error);
    } finally {
      setLoaderInitialDataEditUser(false);
    }
  };

  const handleEditUser = async () => {
    try {
      setLoaderResponseEditUser(true);
      schemaEditUser.validateSync(dataCurrentUser, { abortEarly: false });
      const responseEditUser = await updateUser(
        dataCurrentUser.id,
        dataCurrentUser
      );

      dispatch(setUser(responseEditUser.data));
      toast.success("Sus datos se actualizaron de manera satisfactoria");
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = { message: err.message };
        });
        setEditUserErrors(validationErrors);
      }

      toast.error(error.response?.data?.error);
    } finally {
      setLoaderResponseEditUser(false);
    }
  };

  return {
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
  };
};

export default useEditProfile;
