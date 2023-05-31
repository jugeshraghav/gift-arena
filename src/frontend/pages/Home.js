import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import { hero_img } from "../assets/links";

import "../../App.css";
import { NavLink } from "react-router-dom";

export const Home = () => {
  const { cakes, flowers, plants, categories } = useContext(DataContext);
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
              <div className="category_card" key={_id}>
                <img src={image}></img>
                <p>{categoryName}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="home-items-list-container">
          <div className="home-items-list-content">
            <p>Tempting Cakes</p>
            <button>View All</button>
          </div>

          <div className="home-items-list">
            {cakes.slice(0, 4).map(({ name, imageUrl, altText }) => (
              <div className="item-card">
                <img src={imageUrl} alt={altText} />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="home-items-list-container">
          <div className="home-items-list-content">
            <p>Indoor Plants</p>
            <button>View All</button>
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
            <button>View All</button>
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
