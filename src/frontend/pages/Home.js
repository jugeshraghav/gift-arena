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
          <div className="hero-content">
            <p className="hero-content-text">Get gifts for every occassion</p>
            <NavLink to="/products">
              <button className="primary-button">Explore</button>
            </NavLink>
          </div>
          {/* <div className="hero-image-container">
            <div className="hero-image-box image-box-1">
              <img
                src="https://cdn.pixabay.com/photo/2018/05/26/23/13/bouquet-3432452_640.jpg"
                alt="hell"
              />
            </div>
            <div className="hero-image-box image-box-2">
              {" "}
              <img
                src="https://plus.unsplash.com/premium_photo-1674068280156-138373e16bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJlc2VudHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="hell"
              />
            </div>
            <div className="hero-image-box image-box-3">
              {" "}
              <img
                src="https://img.freepik.com/free-photo/black-gift-box-with-red-ribbon-roses-it_1340-41395.jpg?size=626&ext=jpg&ga=GA1.2.1704512721.1672676438&semt=ais_ai_generated"
                alt="hell"
              />
            </div>
            <div className="hero-image-box image-box-4">
              {" "}
              <img
                src="https://plus.unsplash.com/premium_photo-1674068280156-138373e16bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJlc2VudHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="hell"
              />
            </div>
            <div className="hero-image-box image-box-5">
              {" "}
              <img
                src="https://plus.unsplash.com/premium_photo-1674068280156-138373e16bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJlc2VudHxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt="hell"
              />
            </div>
          </div> */}
        </div>
        {/* <div className="home-categories-container">
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
        </div> */}

        {/* <div className="home-items-list-container">
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
        </div> */}

        {/* <div className="home-items-list-container">
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
        </div> */}

        {/* <div className="home-items-list-container">
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
        </div> */}
      </div>
    </>
  );
};
