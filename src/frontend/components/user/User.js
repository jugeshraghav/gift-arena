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
              <button onClick={() => logoutHandler()}>Logout</button>
            </div>
          ) : (
            <AddressCard />
            // <div className="user-address-container">
            //   <div className="user-address-header">
            //     <p className="user-address-header-title">My Addresses</p>
            //     <button onClick={() => setShowAddressModal(true)}>
            //       Add New Address
            //     </button>
            //   </div>
            //   {showAddressModal && (
            //     <AddressModal
            //       addressId={addressToBeEdited}
            //       setShowAddressModal={setShowAddressModal}
            //       newAddress={newAddress}
            //       setNewAddress={setNewAddress}
            //     />
            //   )}

            //   {address ? (
            //     address.map((addressItem) => (
            //       <div className="user-address">
            //         <p>{addressItem.name}</p>
            //         <p>{addressItem.area}</p>
            //         <p>
            //           {addressItem.city}, {addressItem.state},{" "}
            //           {addressItem.pincode}
            //         </p>
            //         <p>{addressItem.phoneNumber}</p>
            //         <div className="user-address-button-container">
            //           <button
            //             onClick={() =>
            //               editAddressHandler(
            //                 addressItem._id,
            //                 addressItem,
            //                 setNewAddress,
            //                 setAddressToBeEdited,
            //                 setShowAddressModal
            //               )
            //             }
            //           >
            //             Edit
            //           </button>
            //           <button
            //             onClick={() =>
            //               deleteAddressHandler(addressItem._id, addDataDispatch)
            //             }
            //           >
            //             Delete
            //           </button>
            //         </div>
            //       </div>
            //     ))
            //   ) : (
            //     <h1>Oops! no Address Found</h1>
            //   )}
            // </div>
          )}
        </div>
      </div>
    </>
  );
};
