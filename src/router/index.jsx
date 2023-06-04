import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomeIndex from "../pages/home/Index";
import AuthLogin from "../pages/auth/Login";
import CartIndex from "../pages/cart/Index";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomeIndex />,
      },
      {
        path: "login",
        element: <AuthLogin />,
      },
      {
        path: "cart",
        element: <CartIndex />,
      },
    ],
  },
]);

export default routes;
