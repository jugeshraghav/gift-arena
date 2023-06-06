import { useContext, useState } from "react";
import "./addressModal.css";
import { v4 as uuid } from "uuid";
import { DataContext } from "../contexts/dataContext";
import {
  addAddressHandler,
  editAddressFromModalHandler,
  cancelAddressHAndler,
  dummyAddressHandler,
} from "../services/addressServices";
export const AddressModal = ({
  addressId,
  setShowAddressModal,
  newAddress,
  setNewAddress,
}) => {
  const { addDataDispatch } = useContext(DataContext);
  console.log(addressId);
  return (
    <>
      <div className="address-modal-container">
        <div className="address-modal-main">
          <p className="address-modal-title">Edit/Add Address</p>
          <div className="address-modal-input-container">
            <input
              value={newAddress.name}
              placeholder="Name"
              onChange={(e) =>
                setNewAddress((pre) => ({ ...pre, name: e.target.value }))
              }
            ></input>
            <input
              value={newAddress.area}
              placeholder="Area"
              onChange={(e) =>
                setNewAddress((pre) => ({ ...pre, area: e.target.value }))
              }
            ></input>
            <input
              value={newAddress.city}
              placeholder="City "
              onChange={(e) =>
                setNewAddress((pre) => ({ ...pre, city: e.target.value }))
              }
            ></input>
            <input
              value={newAddress.state}
              placeholder="State"
              onChange={(e) =>
                setNewAddress((pre) => ({ ...pre, state: e.target.value }))
              }
            ></input>
            <input
              value={newAddress.pincode}
              placeholder="Pincode"
              onChange={(e) =>
                setNewAddress((pre) => ({ ...pre, pincode: e.target.value }))
              }
            ></input>
            <input
              value={newAddress.phoneNumber}
              placeholder="Phone Number"
              onChange={(e) =>
                setNewAddress((pre) => ({
                  ...pre,
                  phoneNumber: e.target.value,
                }))
              }
            ></input>
            <button
              onClick={() =>
                addAddressHandler(
                  newAddress,
                  addDataDispatch,
                  setShowAddressModal
                )
              }
            >
              Add
            </button>
            <button
              onClick={() =>
                editAddressFromModalHandler(
                  addressId,
                  newAddress,
                  addDataDispatch,
                  setShowAddressModal
                )
              }
            >
              Edit
            </button>
            <button onClick={() => cancelAddressHAndler(setShowAddressModal)}>
              Cancel
            </button>
            <button onClick={() => dummyAddressHandler(setNewAddress)}>
              Fill with Dummy Values
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
