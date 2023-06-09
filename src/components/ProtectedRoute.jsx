import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component }) => {
  const token = useSelector((state) => state.currentUser.token);
  return token ? <Component /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
