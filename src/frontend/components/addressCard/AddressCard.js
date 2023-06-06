import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { DataContext } from "../../contexts/dataContext";
import "./addressCard.css";
import {
  editAddressHandler,
  deleteAddressHandler,
  addAddressHandler,
} from "../../services/addressServices";
import { AddressModal } from "../../modals/AddressModal";

export const AddressCard = () => {
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
  const { address, addDataDispatch } = useContext(DataContext);
  return (
    <>
      <div className="user-address-container">
        <div className="user-address-header">
          <p className="user-address-header-title">My Addresses</p>
          <button onClick={() => setShowAddressModal(true)}>
            Add New Address
          </button>
        </div>
        {showAddressModal && (
          <AddressModal
            addressId={addressToBeEdited}
            setShowAddressModal={setShowAddressModal}
            newAddress={newAddress}
            setNewAddress={setNewAddress}
          />
        )}

        {address ? (
          address.map((addressItem) => (
            <div className="user-address">
              <p>{addressItem.name}</p>
              <p>{addressItem.area}</p>
              <p>
                {addressItem.city}, {addressItem.state}, {addressItem.pincode}
              </p>
              <p>{addressItem.phoneNumber}</p>
              <div className="user-address-button-container">
                <button
                  onClick={() =>
                    editAddressHandler(
                      addressItem._id,
                      addressItem,
                      setNewAddress,
                      setAddressToBeEdited,
                      setShowAddressModal
                    )
                  }
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    deleteAddressHandler(addressItem._id, addDataDispatch)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1>Oops! no Address Found</h1>
        )}
      </div>
    </>
  );
};
