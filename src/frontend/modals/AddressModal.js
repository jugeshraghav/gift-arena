import { AiOutlineClose } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/dataContext";
import { v4 as uuid } from "uuid";
import "./addressModal.css";

export const AddressModal = ({ show, onClose }) => {
  const { allAddresses, addressToBeEdited } = useContext(DataContext);

  const addressDetailsToBeEdited = allAddresses?.find(
    ({ _id }) => _id === addressToBeEdited
  );

  const initial_address_details = {
    name: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
    phoneNumber: "",
  };

  const [currentAddress, setCurrentAddress] = useState(initial_address_details);

  //Handlers
  const addressInputHandler = (e) => {
    setCurrentAddress({ ...currentAddress, [e.target.name]: e.target.value });
  };

  const updateAllAddresses = () => {
    if (addressToBeEdited !== null) {
      const updatedAddressDetails = allAddresses.map((address) =>
        address._id === addressToBeEdited
          ? { ...currentAddress, _id: addressToBeEdited }
          : address
      );
      addDataDispatch({
        type: "update_existing_address",
        payLoad: updatedAddressDetails,
      });
      setCurrentAddress(initial_address_details);
    } else {
      addDataDispatch({
        type: "add_new_address",
        payLoad: { ...currentAddress, _id: uuid() },
      });
      setCurrentAddress(initial_address_details);
    }

    onClose();
  };

  useEffect(() => {
    if (addressToBeEdited) {
      setCurrentAddress(addressDetailsToBeEdited);
    } else {
      setCurrentAddress(initial_address_details);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);
  const dummyAddressHandler = () => {
    setCurrentAddress({
      name: "Jugesh Raghav",
      area: "Hno-5, G-1, near Ram Mandir, Gagan Enclave",
      city: "Jagatpuri",
      state: "Delhi",
      pincode: "110092",
      phoneNumber: "1010101010",
    });
  };

  const { addDataDispatch } = useContext(DataContext);

  return (
    <>
      {show && (
        <div className="address-modal-container" onClick={() => onClose()}>
          <div
            className="address-modal-main"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="address-modal-title">
              {addressToBeEdited ? "Edit" : "Add"} Address
            </p>
            <div className="address-modal-input-container">
              <input
                placeholder="Name"
                name="name"
                value={currentAddress?.name}
                onChange={addressInputHandler}
              ></input>
              <input
                placeholder="Area"
                name="area"
                value={currentAddress?.area}
                onChange={addressInputHandler}
              ></input>
              <input
                placeholder="City "
                name="city"
                value={currentAddress?.city}
                onChange={addressInputHandler}
              ></input>
              <input
                placeholder="State"
                name="state"
                value={currentAddress?.state}
                onChange={addressInputHandler}
              ></input>
              <input
                placeholder="Pincode"
                name="pincode"
                value={currentAddress?.pincode}
                onChange={addressInputHandler}
              ></input>
              <input
                placeholder="Phone Number"
                name="phoneNumber"
                value={currentAddress?.phoneNumber}
                onChange={addressInputHandler}
              ></input>
              {addressToBeEdited ? (
                <button
                  className="primary-button"
                  onClick={() => updateAllAddresses()}
                >
                  Save
                </button>
              ) : (
                <button
                  className="primary-button"
                  onClick={() => updateAllAddresses()}
                >
                  Add
                </button>
              )}

              <button
                className="primary-button"
                onClick={() => dummyAddressHandler()}
              >
                Fill with Dummy Values
              </button>
            </div>
            <AiOutlineClose className="modal-close-icon" onClick={onClose} />
          </div>
        </div>
      )}
    </>
  );
};
