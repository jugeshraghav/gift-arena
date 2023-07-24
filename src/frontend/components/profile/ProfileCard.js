import { useContext } from "react";
import { AuthContext } from "../../contexts/authenticationContext";

import { AddressCard } from "../addressCard/AddressCard";
import "./profileCard.css";
import { NavLink, useLocation } from "react-router-dom";
import { OrdersCard } from "../ordersCard/OrdersCard";

export const ProfileCard = () => {
  const { logoutHandler } = useContext(AuthContext);

  const user = JSON.parse(localStorage.getItem("userDetails"));
  const { firstName, lastName, email } = user;

  const location = useLocation();

  const getStyle = ({ isActive }) => {
    return {
      textDecoration: "none",
      backgroundColor: isActive ? "rgb(101,55,181)" : "",
      color: isActive ? "white" : "",
    };
  };
  return (
    <>
      <div className="user-details-container">
        <div className="user-details">
          <p className="user-title">
            Hello {firstName} {lastName}
          </p>
          <div className="user-details-header">
            <NavLink
              style={getStyle}
              className="profile-card-btn primary-button"
              to="/profile"
            >
              Profile
            </NavLink>
            <NavLink
              style={getStyle}
              className="profile-card-btn primary-button"
              to="/address"
            >
              Address
            </NavLink>
            <NavLink
              style={getStyle}
              className="profile-card-btn primary-button"
              to="/order-summary"
            >
              My Orders
            </NavLink>
          </div>
          {location.pathname === "/profile" ? (
            <div className="user-details-content">
              <div className="user-name">
                <span className="user-detail-heading">Name :</span>{" "}
                <span>
                  {firstName} {lastName}
                </span>
              </div>
              <div className="user-email">
                <span className="user-detail-heading">Email :</span>{" "}
                <span>{email}</span>
              </div>
              <button
                className="user-card-button fill-color-button"
                onClick={() => logoutHandler()}
              >
                Logout
              </button>
            </div>
          ) : location.pathname === "/address" ? (
            <AddressCard />
          ) : (
            <OrdersCard />
          )}
        </div>
      </div>
    </>
  );
};
