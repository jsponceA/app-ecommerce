import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ProtectedRoute from "../components/ProtectedRoute";
import HomeIndex from "../pages/home/Index";
import AuthLogin from "../pages/auth/Login";
import AuthRegister from "../pages/auth/Register";
import CartIndex from "../pages/cart/Index";
import ProfileEdit from "../pages/profile/Edit";
import ProductShow from "../pages/product/Show";
import PurchaseIndex from "../pages/purchase/Index";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeIndex />,
      },
      {
        path: "login",
        element: <AuthLogin />,
      },
      {
        path: "register",
        element: <AuthRegister />,
      },
      {
        path: "cart",
        element: <ProtectedRoute element={CartIndex} />,
      },
      {
        path: "mi-profile",
        element: <ProtectedRoute element={ProfileEdit} />,
      },
      {
        path: "products",
        element: <HomeIndex />,
      },
      {
        path: "product/:id",
        element: <ProtectedRoute element={ProductShow} />,
      },
      {
        path: "purchases",
        element: <ProtectedRoute element={PurchaseIndex} />,
      },
    ],
  },
]);

export default routes;
