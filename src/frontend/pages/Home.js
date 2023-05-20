import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import { hero_img } from "../assets/links";

import "./home.css";

export const Home = () => {
  const { cakes, flowers, plants, categories } = useContext(DataContext);
  return (
    <>
      <div class="home">
        <div class="hero">
          <div class="hero-image-container">
            <img src={hero_img} alt="hero-display" />
          </div>

          <div class="hero-content">
            <h1>Get gift for every occassion</h1>
            <button>Explore</button>
          </div>
        </div>
        <div class="home-categories">
          {categories.map(({ _id, categoryName, image }) => (
            <div class="category_card" key={_id}>
              <img src={image}></img>
              <p>{categoryName}</p>
            </div>
          ))}
        </div>

        <div class="cakes-categories">
          {cakes.slice(0, 4).map(({ name, imageUrl, altText }) => (
            <div class="cake-card">
              <img src={imageUrl} alt={altText} />
              <p>{name}</p>
            </div>
          ))}
        </div>

        <div class="cakes-categories">
          {plants.slice(0, 4).map(({ name, imageUrl, altText }) => (
            <div class="cake-card">
              <img src={imageUrl} alt={altText} />
              <p>{name}</p>
            </div>
          ))}
        </div>

        <div class="cakes-categories">
          {flowers.slice(0, 4).map(({ name, imageUrl, altText }) => (
            <div class="cake-card">
              <img src={imageUrl} alt={altText} />
              <p>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
