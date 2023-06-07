import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import { hero_img } from "../assets/links";

import "../../App.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FilterContext } from "../contexts/filterContext";

export const Home = () => {
  const { cakes, flowers, plants, categories } = useContext(DataContext);
  const { appliedFilters, filterDispatch } = useContext(FilterContext);
  const navigate = useNavigate();
  const categoryHandler = (categoryName) => {
    // console.log("selected category", categoryName);
    filterDispatch({ type: "clear_filters" });
    filterDispatch({ type: "filter_by_category", payLoad: categoryName });
    navigate("/products");
  };
  return (
    <>
      <div className="home">
        <div className="hero">
          <div className="hero-image-container">
            <img src={hero_img} alt="hero-display" />
          </div>

          <div className="hero-content">
            <h1>Get gifts for every occassion</h1>
            <NavLink to="/products">
              <button>Explore</button>
            </NavLink>
          </div>
        </div>
        <div className="home-categories-container">
          <p className="home-categories-heading">
            Select from given categories
          </p>
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

        <div className="home-items-list-container">
          <div className="home-items-list-content">
            <p>Tempting Cakes</p>
            <button onClick={() => categoryHandler("Cake")}>View All</button>
          </div>

          <div className="home-items-list">
            {cakes.slice(0, 4).map(({ name, imageUrl, altText }) => (
              <div className="item-card">
                <Link>
                  <img src={imageUrl} alt={altText} />
                </Link>
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="home-items-list-container">
          <div className="home-items-list-content">
            <p>Indoor Plants</p>
            <button onClick={() => categoryHandler("Plant")}>View All</button>
          </div>
          <div className="home-items-list">
            {plants.slice(0, 4).map(({ name, imageUrl, altText }) => (
              <div className="item-card">
                <img src={imageUrl} alt={altText} />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="home-items-list-container">
          <div className="home-items-list-content">
            <p>Elegant Flowers</p>
            <button onClick={() => categoryHandler("Flower")}>View All</button>
          </div>
          <div className="home-items-list">
            {flowers.slice(0, 4).map(({ name, imageUrl, altText }) => (
              <div className="item-card">
                <img src={imageUrl} alt={altText} />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
