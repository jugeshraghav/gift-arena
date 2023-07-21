import { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import { DataContext } from "../../contexts/dataContext";
import { FaStar } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import { isInCart, isInWishlist } from "../../utils/productFunctions";
import {
  quantityHandler,
  removeFromCartHandler,
} from "../../services/cartServices";
import {
  removeFromWishlistHandler,
  addToWishlistHandler,
} from "../../services/wishlistServices";
import "./cartCard.css";
export const CartCard = ({ product }) => {
  const { _id, name, price, imageUrl, altText, qty, rating, bestseller } =
    product;

  const encodedToken = localStorage.getItem("token");
  const { cart, wishlist, getWishlistItems, getCartItems, addDataDispatch } =
    useContext(DataContext);

  const isProductInCart = isInCart(cart, _id);
  const isProductInWishlist = isInWishlist(wishlist, _id);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="cart-card-container">
        <img
          src={imageUrl}
          alt={altText}
          onClick={(e) => {
            navigate(`/product-detail/${_id}`);
            e.stopPropagation();
          }}
        />
        <div className="cart-card-content">
          <div className="cart-card-title">
            <span>{name}</span>
            <span className="cart-card-rating">
              {rating} <FaStar />
            </span>
          </div>
          <span className="cart-card-price">Rs {price}</span>
          <div className="cart-card-quantity">
            <button
              className="primary-oval-button quantity-btn"
              onClick={() => quantityHandler(_id, "decrement", addDataDispatch)}
            >
              -
            </button>
            <p>{qty}</p>
            <button
              className="primary-oval-button quantity-btn"
              onClick={() => quantityHandler(_id, "increment", addDataDispatch)}
            >
              +
            </button>
          </div>
          <div className="cart-card-buttons">
            <button
              className=" primary-button cart-card-button"
              onClick={() => removeFromCartHandler(_id, addDataDispatch)}
            >
              Remove
            </button>
            {isProductInWishlist ? (
              <button
                className="  primary-button cart-card-button"
                onClick={() => removeFromWishlistHandler(_id, addDataDispatch)}
              >
                Remove from Wishlist
              </button>
            ) : (
              <button
                className=" primary-button cart-card-button"
                onClick={() =>
                  addToWishlistHandler(
                    product,
                    addDataDispatch,
                    navigate,
                    location
                  )
                }
              >
                Add to Wishlist
              </button>
            )}
          </div>
        </div>
        {bestseller && (
          <div className="cart-card-bestseller-strip">Bestseller</div>
        )}
      </div>
    </>
  );
};
