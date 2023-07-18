import { FaHeart, FaStar } from "react-icons/fa";
import "./productCard.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { isInCart, isInWishlist } from "../../utils/productFunctions";
import { useContext, useReducer } from "react";
import { DataContext } from "../../contexts/dataContext";
import { addToCartHandler } from "../../services/cartServices";
import {
  removeFromWishlistHandler,
  addToWishlistHandler,
} from "../../services/wishlistServices";
import { dataReducer, initial_state } from "../../reducers/dataReducer";
import { ToastContainer } from "react-toastify";

export const ProductCard = (props) => {
  // const [state, dispatch] = useReducer(dataReducer, initial_state);
  const { cart, wishlist, getWishlistItems, getCartItems, addDataDispatch } =
    useContext(DataContext);
  const { _id, name, price, imageUrl, altText, rating, bestseller } =
    props.cardDetails;

  const isProductInCart = isInCart(cart, _id);
  const isProductInWishlist = isInWishlist(wishlist, _id);
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="product-card">
        <NavLink to={`/product-detail/${_id}`}>
          <img src={imageUrl} alt={altText} />
        </NavLink>
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
        {/* {console.log(isInCart(cart, _id))} */}
        {isProductInCart ? (
          <button className="product-card-button">
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
            className="product-card-button"
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
    </>
  );
};
