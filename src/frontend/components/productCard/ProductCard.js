import { useContext } from "react";
import { DataContext } from "../../contexts/dataContext";
import { FaHeart, FaStar, FaStarAndCrescent } from "react-icons/fa";
import "./productCard.css";
import { NavLink } from "react-router-dom";

export const ProductCard = (props) => {
  const { _id, name, price, imageUrl, altText, rating, bestseller } =
    props.cardDetails;

  return (
    <>
      <NavLink to={`/product-detail/${_id}`}>
        <div className="product-card">
          <img src={imageUrl} alt={altText} />
          <div className="product-card-content">
            <div className="product-card-title">
              <p className="product-card-text">{name}</p>
              <p className="rating-strip">
                <span>{rating}</span>
                <span>
                  <FaStar />
                </span>
              </p>
            </div>
            <div className="product-card-price">
              <p className="product-card-text">Rs {price}</p>
            </div>
          </div>
          <button className="wishlist-strip">
            <FaHeart />
          </button>
          {bestseller && <span className="bestseller-strip">Bestseller</span>}

          <button>Add to Cart</button>
        </div>
      </NavLink>
    </>
  );
};
