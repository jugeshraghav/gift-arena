import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
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
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addressToBeEdited, setAddressToBeEdited] = useState({});
  const { address, addDataDispatch } = useContext(DataContext);
  const selectAddressHandler = (e, address) => {
    e.target.checked && setSelectedAddress(address);
  };
  return (
    <>
      <div className="user-address-container">
        <div className="user-address-header">
          <p className="user-address-header-title">My Addresses</p>
          <button
            className="fill-color-button"
            onClick={() => setShowAddressModal(true)}
          >
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
              <div className="user-address-main">
                <p className="address-owner-name">{addressItem.name}</p>

                <div className="user-address-icon-container">
                  <AiFillEdit
                    className="address-card-icon"
                    onClick={() =>
                      editAddressHandler(
                        addressItem._id,
                        addressItem,
                        setNewAddress,
                        setAddressToBeEdited,
                        setShowAddressModal
                      )
                    }
                  />

                  <MdDelete
                    className="address-card-icon"
                    onClick={() =>
                      deleteAddressHandler(addressItem._id, addDataDispatch)
                    }
                  />
                  <input
                    type="radio"
                    onChange={(e) => selectAddressHandler(e, addressItem)}
                    name="selected-address"
                  ></input>
                </div>
              </div>
              <p>{addressItem.area}</p>
              <p>
                {addressItem.city}, {addressItem.state}, {addressItem.pincode}
              </p>
              <p>{addressItem.phoneNumber}</p>
            </div>
          ))
        ) : (
          <h1>Oops! no Address Found</h1>
        )}
      </div>
    </>
  );
};
