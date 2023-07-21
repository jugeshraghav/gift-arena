import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DataContext } from "../../contexts/dataContext";
import "./checkout.css";
export const Checkout = () => {
  const { cart, addDataDispatch } = useContext(DataContext);
  const itemsInCart = cart.length;
  const totalPrice = cart.reduce((acc, { price, qty }) => acc + qty * price, 0);
  const discount = 5;
  const discountedPrice = totalPrice - discount;
  const savings = totalPrice - discountedPrice;

  return (
    <>
      <div className="checkout-card-container">
        <span className="checkout-card-heading">Price Details</span>
        <div className="checkout-card-price ">
          <span className="checkout-card-subheading">
            Price ({itemsInCart} items) :
          </span>
          <span>Rs {totalPrice}</span>
        </div>
        <div className="checkout-card-discout">
          <span className="checkout-card-subheading">Discount :</span>
          <span>Rs {discount}</span>
        </div>
        <div className="checkout-card-total">
          <span className="checkout-card-subheading">Total : </span>
          <span>Rs {discountedPrice}</span>
        </div>
        <hr></hr>
        <p className="discount-statement">
          You will save Rs {savings} on this order
        </p>
        <NavLink to="/checkout">
          <button type="button" className="fill-color-button checkout-button">
            Checkout
          </button>
        </NavLink>
      </div>
    </>
  );
};
