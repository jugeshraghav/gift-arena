import { useContext, useState } from "react";
import { useLocation } from "react-router";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { DataContext } from "../../contexts/dataContext";
import "./addressCard.css";
import { AddressModal } from "../../modals/AddressModal";

export const AddressCard = () => {
  const { allAddresses, addDataDispatch } = useContext(DataContext);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const location = useLocation();

  const selectAddressHandler = (e, address) => {
    e.target.checked &&
      addDataDispatch({ type: "set_selected_address", payLoad: address });
  };

  const setAddressToBeEditedHandler = (addressId) => {
    addDataDispatch({ type: "set_address_to_be_edited", payLoad: addressId });
    setShowAddressModal(true);
  };
  const addNewAddressHandler = () => {
    setShowAddressModal(true);
    addDataDispatch({ type: "set_address_to_be_edited", payLoad: null });
  };

  const deleteAddressHandler = (addressId, addDataDispatch) => {
    addDataDispatch({ type: "delete_address", payLoad: addressId });
  };

  return (
    <>
      <AddressModal
        show={showAddressModal}
        onClose={() => setShowAddressModal(false)}
      />
      <div className="user-address-container">
        <div className="user-address-header">
          <p className="user-address-header-title">My Addresses</p>
          <button
            className="fill-color-button"
            onClick={() => {
              addNewAddressHandler();
            }}
          >
            Add New Address
          </button>
        </div>

        {allAddresses.length > 0 ? (
          allAddresses?.map((addressItem) => (
            <div className="user-address" key={addressItem?._id}>
              <div className="user-address-main">
                <p className="address-owner-name">{addressItem?.name}</p>

                <div className="user-address-icon-container">
                  <AiFillEdit
                    className="address-card-icon"
                    onClick={() =>
                      setAddressToBeEditedHandler(addressItem?._id)
                    }
                  />

                  <MdDelete
                    className="address-card-icon"
                    onClick={() =>
                      deleteAddressHandler(addressItem?._id, addDataDispatch)
                    }
                  />
                  {location?.pathname === "/checkout" && (
                    <input
                      type="radio"
                      onChange={(e) => selectAddressHandler(e, addressItem)}
                      name="selected-address"
                    ></input>
                  )}
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
          <div className="user-address">
            <p className="no-address-text">Oops! no Address Found</p>
          </div>
        )}
      </div>
    </>
  );
};
