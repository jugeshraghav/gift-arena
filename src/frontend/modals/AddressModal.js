import { useContext, useState } from "react";
import "./addressModal.css";
import { v4 as uuid } from "uuid";
import { DataContext } from "../contexts/dataContext";
export const AddressModal = ({
  addressId,
  setShowAddressModal,
  newAddress,
  setNewAddress,
}) => {
  const { addDataDispatch } = useContext(DataContext);
  console.log(addressId);
  // const [newAddress, setNewAddress] = useState({
  //   _id: uuid(),
  //   name: "",
  //   area: "",
  //   city: "",
  //   state: "",
  //   pincode: "",
  //   phoneNumber: "",
  // });
  const addAddressHandler = (address) => {
    addDataDispatch({
      type: "add_address",
      payLoad: address,
    });
    setShowAddressModal(false);
  };
  const editAddressHandler = (addressId, newAddress) => {
    addDataDispatch({
      type: "edit_address",
      addressId: addressId,
      payLoad: newAddress,
    });

    setShowAddressModal(false);
  };
  const cancelAddressHAndler = () => {
    setShowAddressModal(false);
  };
  const dummyAddressHandler = () => {
    setNewAddress({
      _id: uuid(),
      name: "Jugesh Raghav",
      area: "Hno-5, G-1, near Ram Mandir, Gagan Enclave",
      city: "Jagatpuri",
      state: "Delhi",
      pincode: "110092",
      phoneNumber: "1010101010",
    });
  };
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
            <button onClick={() => addAddressHandler(newAddress)}>Add</button>
            <button onClick={() => editAddressHandler(addressId, newAddress)}>
              Edit
            </button>
            <button onClick={() => cancelAddressHAndler()}>Cancel</button>
            <button onClick={() => dummyAddressHandler()}>
              Fill with Dummy Values
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
