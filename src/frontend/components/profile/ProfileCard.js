import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authenticationContext";

import { AddressCard } from "../addressCard/AddressCard";
import "./profileCard.css";

export const ProfileCard = () => {
  const { logoutHandler } = useContext(AuthContext);
  const [viewProfile, setViewProfile] = useState(true);
  const user = JSON.parse(localStorage.getItem("userDetails"));
  const { firstName, lastName, email } = user;

  return (
    <>
      <div className="user-details-container">
        <div className="user-details">
          <p className="user-title">
            Hello {firstName} {lastName}
          </p>
          <div className="user-details-header">
            <button
              className="primary-button"
              onClick={() => setViewProfile(true)}
            >
              Profile
            </button>
            <button
              className="primary-button"
              onClick={() => setViewProfile(false)}
            >
              Address
            </button>
          </div>
          {viewProfile ? (
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
          ) : (
            <AddressCard />
          )}
        </div>
      </div>
    </>
  );
};
