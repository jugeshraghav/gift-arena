//external imports
import { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa";

//internal imports
import { DataContext } from "../../contexts/dataContext";
import { addToCartHandler } from "../../services/cartServices";
import {
  removeFromWishlistHandler,
  addToWishlistHandler,
} from "../../services/wishlistServices";
import { isInCart, isInWishlist } from "../../utils/productFunctions";

//style imports
import "./productCard.css";
import { AuthContext } from "../../contexts/authenticationContext";

export const ProductCard = (props) => {
  const { cart, wishlist, addDataDispatch } = useContext(DataContext);
  const { token } = useContext(AuthContext);
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
          <div className="product-card-title-container">
            <p className="product-card-title">{name}</p>
            <p className="rating-strip">
              <span>{rating}</span>
              <span>
                <FaStar />
              </span>
            </p>
          </div>
          <p className="product-card-price">Rs {price}</p>
          {isProductInCart && token ? (
            <NavLink
              to="/cart"
              style={{ color: "white", textDecoration: "none" }}
            >
              <button className="secondary-button product-card-btn">
                {" "}
                Go to Cart{" "}
              </button>
            </NavLink>
          ) : (
            <button
              className="primary-button product-card-btn"
              onClick={() =>
                addToCartHandler(
                  props.cardDetails,
                  addDataDispatch,
                  navigate,
                  location,
                  token
                )
              }
            >
              Add to Cart
            </button>
          )}
        </div>

        {isProductInWishlist && token ? (
          <button
            style={{ color: "red" }}
            className="wishlist-strip"
            onClick={() =>
              removeFromWishlistHandler(
                props.cardDetails._id,
                addDataDispatch,
                token
              )
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
                location,
                token
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
