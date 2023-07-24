import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DataContext } from "../contexts/dataContext";
import { AddressCard } from "../components/addressCard/AddressCard";
import "../../App.css";
import { useNavigate } from "react-router";
import { removeFromCartHandler } from "../services/cartServices";
import { AuthContext } from "../contexts/authenticationContext";

export const Checkout = () => {
  const { selectedAddress, cart, addDataDispatch } = useContext(DataContext);
  const { token } = useContext(AuthContext);
  const itemsInCart = cart.length;
  const discount = 5;
  const totalPrice = cart.reduce((acc, { price, qty }) => acc + price * qty, 0);

  const navigate = useNavigate();
  const paymentHandler = () => {
    if (selectedAddress) {
      const myOrders = cart?.map((product) => ({
        ...product,
        address: selectedAddress,
      }));
      //remove items from cart
      cart?.forEach(({ _id }) =>
        removeFromCartHandler(_id, addDataDispatch, token)
      );

      addDataDispatch({ type: "payment", payLoad: myOrders });
      navigate("/order-successfull");
      toast.success("Order Placed");
    } else {
      toast.warning("can't proceed, add address");
    }
  };

  return (
    <>
      <div className="payment-page">
        <div className="payment-page-container">
          <AddressCard />
          <div className="payment-card">
            <p className="payment-card-title">Order-Details</p>
            <hr></hr>
            <div>
              <p className="payment-card-subtitle">Items ({itemsInCart}) </p>
              <p className="payment-card-subtitle">Quantity </p>
            </div>
            {cart.map(({ _id, name, qty }) => (
              <div key={_id}>
                <p className="payment-card-subtitle">{name} </p>
                <p>{qty}</p>
              </div>
            ))}
            <p className="payment-card-title">Price Details</p>
            <hr></hr>
            <div>
              <p className="payment-card-subtitle">Total Price </p>
              <p className="payment-card-subtitle">{totalPrice} </p>
            </div>
            <div>
              <p className="payment-card-subtitle">Discount </p>
              <p className="payment-card-subtitle">{discount} </p>
            </div>
            <div>
              <p className="payment-card-subtitle">Grand Total</p>
              <p className="payment-card-subtitle">{totalPrice - discount} </p>
            </div>
            <p className="payment-card-title">Delivery Details</p>
            <hr></hr>
            {selectedAddress !== null ? (
              <section className="payment-card-selected-address">
                <p style={{ fontWeight: "bold" }}>{selectedAddress.name}</p>

                <p>{selectedAddress.area}</p>
                <p>
                  {selectedAddress.city}, {selectedAddress.state},{" "}
                  {selectedAddress.pincode}
                </p>
                <p>{selectedAddress.phoneNumber}</p>
              </section>
            ) : (
              <p className="payment-card-subtitle">Oops! no Address Found</p>
            )}

            <button className="primary-button" onClick={() => paymentHandler()}>
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
