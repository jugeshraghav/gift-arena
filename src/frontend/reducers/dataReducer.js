export const initial_state = {
  user: {},
  address: [
    {
      _id: "1",
      name: "Adarsh Balika",
      area: "Hno-3, G-1, NIketan Villa, Chatori",
      city: "Banglore",
      state: "Karnataka",
      pincode: "106040",
      phoneNumber: "1234567890",
    },
    {
      _id: "2",
      name: "Simran",
      area: "0B-09 & G-10 Ground Floor, Mourya House, Next to VIP Plaza, New Link Road, Andheri West",
      city: "Mumbai",
      state: "Maharashtra",
      pincode: "400053",
      phoneNumber: "1987654321",
    },
  ],
  allProducts: [],
  cart: [],
  wishlist: [],
  categories: [],
};

export const dataReducer = (state, action) => {
  const { type, payLoad, addressId } = action;
  // const addressFound = payLoad?.address;
  console.log(type, addressId, payLoad);
  switch (type) {
    case "get_all_products":
      return { ...state, allProducts: [...payLoad] };
    case "get_user_details":
      console.log(payLoad.address);
      return {
        ...state,
        user: { ...state.user, ...payLoad },
        address: [...payLoad.address],
      };

    case "get_categories":
      return { ...state, categories: [...payLoad] };

    case "get_wishlist":
      return {
        ...state,
        wishlist: [...payLoad],
      };
    case "add_to_wishlist":
      console.log("wishlist pay", payLoad);
      return {
        ...state,
        wishlist: [...payLoad],
      };
    case "remove_from_wishlist":
      return {
        ...state,
        wishlist: [...payLoad],
      };
    case "get_cart":
      return {
        ...state,
        cart: [...payLoad],
      };
    case "add_to_cart":
      return {
        ...state,
        cart: [...payLoad],
      };
    case "remove_from_cart":
      return {
        ...state,
        cart: [...payLoad],
      };
    case "update_quantity":
      return {
        ...state,
        cart: [...payLoad],
      };
    case "payment":
      return {
        ...state,
        cart: [],
      };
    case "delete_address":
      return {
        ...state,
        address: state.address.filter(({ _id }) => _id !== payLoad),
      };
    case "add_address":
      return {
        ...state,
        address: [...state.address, payLoad],
      };
    case "edit_address":
      return {
        ...state,
        address: state.address.map((address) =>
          address._id === addressId ? { ...payLoad } : address
        ),
      };
    default:
      return state;
  }
};
