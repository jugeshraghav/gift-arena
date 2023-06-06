import { v4 as uuid } from "uuid";
export const deleteAddressHandler = (addressId, addDataDispatch) => {
  addDataDispatch({ type: "delete_address", payLoad: addressId });
};
export const editAddressHandler = (
  addressId,
  address,
  setNewAddress,
  setAddressToBeEdited,
  setShowAddressModal
) => {
  console.log(addressId);
  const { _id, name, area, city, state, pincode, phoneNumber } = address;
  setNewAddress({
    _id: _id,
    name: name,
    area: area,
    city: city,
    state: state,
    pincode: pincode,
    phoneNumber: phoneNumber,
  });
  setAddressToBeEdited(addressId);
  setShowAddressModal(true);
};

export const addAddressHandler = (
  address,
  addDataDispatch,
  setShowAddressModal
) => {
  addDataDispatch({
    type: "add_address",
    payLoad: address,
  });
  setShowAddressModal(false);
};
export const editAddressFromModalHandler = (
  addressId,
  newAddress,
  addDataDispatch,
  setShowAddressModal
) => {
  addDataDispatch({
    type: "edit_address",
    addressId: addressId,
    payLoad: newAddress,
  });

  setShowAddressModal(false);
};
export const cancelAddressHAndler = (setShowAddressModal) => {
  setShowAddressModal(false);
};
export const dummyAddressHandler = (setNewAddress) => {
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
