import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../contexts/dataContext";
import { FilterContext } from "../contexts/filterContext";
import video1 from "./video/_import_616bae9731ab01.76151978_FPpreview.mp4";
import "../../App.css";

export const Home = () => {
  const { categories } = useContext(DataContext);
  const { filterDispatch } = useContext(FilterContext);
  const navigate = useNavigate();
  const categoryHandler = (categoryName) => {
    filterDispatch({ type: "clear_filters" });
    filterDispatch({ type: "filter_by_category", payLoad: categoryName });
    navigate("/products");
  };
  return (
    <>
      <div className="home">
        <div className="hero">
          <video autoPlay muted loop id="video">
            <source src={video1} type="video/mp4" />
          </video>
          <div className="hero-content-container">
            <div className="hero-content-box">
              <p className="hero-content-heading">
                Welcome to{" "}
                <span className="hero-content-website-name">Gift Arena</span>
              </p>
              <p className="hero-content-text">Get gifts for every occassion</p>
              <NavLink to="/products">
                <button className="primary-button">Explore</button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="home-categories-container">
          <div className="home-categories-header">
            <p className="home-categories-header-main-text">
              Show your <span>Gratitude</span> and <span>Love</span>
            </p>
            <p className="home-categories-header-sub-text">
              Explore and find the perfect gift for them.
            </p>
          </div>

          <div className="home-categories">
            {categories.map(({ _id, categoryName, image }) => (
              <div
                className="category_card"
                key={_id}
                onClick={() => categoryHandler(categoryName)}
              >
                <img src={image}></img>

                <p>{categoryName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
