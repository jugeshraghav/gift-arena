import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";

export const Root = () => {
  return (
    <>
      <div className="layout">
        <div className="layout-navbar">
          <Navbar />
        </div>
        <div className="layout-content">
          <Outlet />
        </div>
        <div className="layout-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};
