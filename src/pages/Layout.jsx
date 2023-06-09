import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CanvasCart from "../components/cart/CanvasCart";

import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <CanvasCart />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
