import { useNavigate } from "react-router";

import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export const OrderSuccessfull = () => {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  return (
    <>
      <Confetti width={width} height={height} />
      <div className="order-success-container">
        <p className="order-success-text">Order Successfully Placed!</p>
        <button
          className="primary-button "
          onClick={() => navigate("/products")}
        >
          Shop More
        </button>
        <button
          className="fill-color-button "
          onClick={() => navigate("/order-summary")}
        >
          View Orders
        </button>
      </div>
    </>
  );
};
