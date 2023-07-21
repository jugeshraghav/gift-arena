import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

export const Root = () => {
  return (
    <>
      <div className="layout">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
