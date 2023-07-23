import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";
import { isInCart, isInWishlist } from "../../utils/productFunctions";
import { DataContext } from "../../contexts/dataContext";
import { addToCartHandler } from "../../services/cartServices";
import {
  removeFromWishlistHandler,
  addToWishlistHandler,
} from "../../services/wishlistServices";

import "./productCard.css";

export const ProductCard = (props) => {
  const { cart, wishlist, addDataDispatch } = useContext(DataContext);
  const { _id, name, price, imageUrl, altText, rating, bestseller } =
    props.cardDetails;

  const isProductInCart = isInCart(cart, _id);
  const isProductInWishlist = isInWishlist(wishlist, _id);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="product-card">
        <div className="product-card-image-container">
          <img
            src={imageUrl}
            alt={altText}
            onClick={(e) => {
              navigate(`/product-detail/${_id}`);
              e.stopPropagation();
            }}
          />
        </div>

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
          <p className="product-card-price">Rs {price}</p>
          {isProductInCart ? (
            <button className="secondary-button product-card-btn">
              {" "}
              <NavLink
                to="/cart"
                style={{ color: "white", textDecoration: "none" }}
              >
                Go to Cart{" "}
              </NavLink>
            </button>
          ) : (
            <button
              className="primary-button product-card-btn"
              onClick={() =>
                addToCartHandler(
                  props.cardDetails,
                  addDataDispatch,
                  navigate,
                  location
                )
              }
            >
              Add to Cart
            </button>
          )}
        </div>

        {isProductInWishlist ? (
          <button
            style={{ color: "red" }}
            className="wishlist-strip"
            onClick={() =>
              removeFromWishlistHandler(props.cardDetails._id, addDataDispatch)
            }
          >
            <FaHeart />
          </button>
        ) : (
          <button
            className="wishlist-strip"
            onClick={() =>
              addToWishlistHandler(
                props.cardDetails,
                addDataDispatch,
                navigate,
                location
              )
            }
          >
            <FaHeart />
          </button>
        )}

        {bestseller && <span className="bestseller-strip">Bestseller</span>}
      </div>
    </>
  );
};
