import { IoIosArrowDown } from "react-icons/io";
import { useContext } from "react";
import { DataContext } from "../../contexts/dataContext";
import "./ordersCard.css";
import { useNavigate } from "react-router";
export const OrdersCard = () => {
  const { orderList } = useContext(DataContext);
  const navigate = useNavigate();
  return (
    <>
      <div className="my-orders-list">
        {orderList.length > 0 ? (
          <div className="order-list-card-container">
            <p className="order-list-card-heading">My orders</p>
            {orderList?.map((product) => (
              <div className="order-card" key={product._id}>
                <div className="order-car-img-container">
                  <img src={product?.imageUrl} alt={product?.altText} />
                </div>

                <div className="order-card-content">
                  <p className="order-card-content-detail product-name order-card-bold-text">
                    {product?.name}
                  </p>
                  <p className="order-card-content-detail">
                    <span className="order-card-bold-text">Qty:</span>
                    {product?.qty}
                  </p>
                  <p className="order-card-content-detail">
                    <span className="order-card-bold-text">Price:</span>
                    {product?.price}
                  </p>
                  <p className="order-card-content-detail">
                    <span className="order-card-bold-text">Shipped to:</span>
                    <IoIosArrowDown className="show-shipping-add-btn" />
                  </p>

                  <div className="shipping-address-details">
                    <p>{product?.address?.name}</p>
                    <p>{product?.address?.area}</p>
                    <p>
                      {product?.address?.city}, {product?.address?.state},
                      {product?.address?.pincode}
                    </p>
                    <p>{product?.address?.phoneNumber}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-items-container">
            <p className="no-orders-text">No orders Placed!</p>
            <button
              className="cart-page-btn primary-button"
              onClick={() => navigate(`/products`)}
            >
              Shop Now
            </button>
          </div>
        )}
      </div>
    </>
  );
};
