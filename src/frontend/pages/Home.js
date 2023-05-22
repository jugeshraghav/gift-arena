import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import { hero_img } from "../assets/links";

import "./home.css";

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
            <h1>Get gift for every occassion</h1>
            <button>Explore</button>
          </div>
        </div>
        <div className="home-categories">
          {categories.map(({ _id, categoryName, image }) => (
            <div className="category_card" key={_id}>
              <img src={image}></img>
              <p>{categoryName}</p>
            </div>
          ))}
        </div>

        <div className="cakes-categories">
          {cakes.slice(0, 4).map(({ name, imageUrl, altText }) => (
            <div className="cake-card">
              <img src={imageUrl} alt={altText} />
              <p>{name}</p>
            </div>
          ))}
        </div>

        <div className="cakes-categories">
          {plants.slice(0, 4).map(({ name, imageUrl, altText }) => (
            <div className="cake-card">
              <img src={imageUrl} alt={altText} />
              <p>{name}</p>
            </div>
          ))}
        </div>

        <div className="cakes-categories">
          {flowers.slice(0, 4).map(({ name, imageUrl, altText }) => (
            <div className="cake-card">
              <img src={imageUrl} alt={altText} />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
