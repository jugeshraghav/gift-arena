import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import { CartCard } from "../components/cartCard/CartCard";
import { Checkout } from "../components/checkoutCard/Checkout";
import "../../App.css";
import { ToastContainer } from "react-toastify";

export const Cart = () => {
  const { cart } = useContext(DataContext);

  return (
    <>
      {cart.length === 0 ? (
        <h1>You haven't added anything in card yet.</h1>
      ) : (
        <>
          <h1>Cart ({cart.length})</h1>
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
