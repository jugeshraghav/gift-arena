import { useContext } from "react";
import { useNavigate } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";
import { DataContext } from "../contexts/dataContext";
import { CartCard } from "../components/cartCard/CartCard";
import { Checkout } from "../components/checkoutCard/Checkout";
import "../../App.css";

export const Cart = () => {
  const { cart, isCartLoading } = useContext(DataContext);

  const navigate = useNavigate();
  return (
    <>
      {isCartLoading ? (
        <div className="loader">
          <ClipLoader color="purple" loading={isCartLoading} size={50} />
        </div>
      ) : cart.length === 0 ? (
        <div className="no-items-container">
          <p className="no-items-text">
            You haven't added anything to wishlist Yet
          </p>
          <button
            className="primary-button"
            onClick={() => navigate(`/products`)}
          >
            Shop Now
          </button>
          <button
            className="primary-button"
            onClick={() => navigate(`/wishlist`)}
          >
            Move From Wishlist
          </button>
        </div>
      ) : (
        <>
          <div className="cart-container">
            <div className="cart-cards-container">
              {cart.map((product) => (
                <CartCard product={product} />
              ))}
            </div>
            <div className="checkout-container">
              <Checkout />
            </div>
          </div>
        </>
      )}
    </>
  );
};
