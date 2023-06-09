import { useSelector } from "react-redux";

const useCurrentUser = () => {
  const token = useSelector((state) => state.currentUser.token);
  const currentUser = useSelector((state) => state.currentUser.user);
  const authChecked = token ? true : false;

  return {
    token,
    currentUser,
    authChecked,
  };
};

export default useCurrentUser;
