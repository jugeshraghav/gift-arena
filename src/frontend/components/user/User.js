import { useContext, useReducer, useState } from "react";
import { v4 as uuid } from "uuid";
import { AuthContext } from "../../contexts/authenticationContext";
import "./user.css";
import { dataReducer, initial_state } from "../../reducers/dataReducer";
import { DataContext } from "../../contexts/dataContext";
import { AddressModal } from "../../modals/AddressModal";
import {
  deleteAddressHandler,
  editAddressHandler,
} from "../../services/addressServices";
import { AddressCard } from "../addressCard/AddressCard";
export const User = () => {
  const [state, dispatch] = useReducer(dataReducer, initial_state);
  const [viewProfile, setViewProfile] = useState(true);
  const { logoutHandler } = useContext(AuthContext);
  const { address, addDataDispatch } = useContext(DataContext);
  // console.log(user);
  const user = JSON.parse(localStorage.getItem("userDetails"));
  // console.log(JSON.parse(user2));
  const { firstName, lastName, email } = user;
  // console.log(address);

  const [showAddressModal, setShowAddressModal] = useState(false);

  const [newAddress, setNewAddress] = useState({
    _id: uuid(),
    name: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    phoneNumber: "",
  });

  const [addressToBeEdited, setAddressToBeEdited] = useState({});

  return (
    <>
      <div className="user-details-container">
        <div className="user-details">
          <p className="user-title">
            Hello {firstName} {lastName}
          </p>
          <div className="user-details-header">
            <button onClick={() => setViewProfile(true)}>Profile</button>
            <button onClick={() => setViewProfile(false)}>Address</button>
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
                className="user-card-button"
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
