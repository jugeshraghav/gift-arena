import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/dataContext";

export const Root = () => {
  const { getCategories, isCategoryLoading } = useContext(DataContext);

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isCategoryLoading ? (
        <img
          className="initial_loader"
          src={
            "https://i.pinimg.com/originals/eb/2a/8f/eb2a8f4ddfb50c23712a3cd0d5cc2a3a.gif"
          }
          alt="initial_loader"
        />
      ) : (
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
      )}
    </>
  );
};
