export const initial_state = {
  allAddresses: [
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
  selectedAddress: null,
  addressToBeEdited: null,
  allProducts: [],
  cart: [],
  wishlist: [],
  categories: [],
  orderList: [],
};

export const dataReducer = (state, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case "get_all_products":
      return { ...state, allProducts: [...payLoad] };
    case "get_categories":
      return { ...state, categories: [...payLoad] };

    //wishlist
    case "get_wishlist":
      return {
        ...state,
        wishlist: [...payLoad],
      };
    case "add_to_wishlist":
      return {
        ...state,
        wishlist: [...payLoad],
      };
    case "remove_from_wishlist":
      return {
        ...state,
        wishlist: [...payLoad],
      };

    //cart
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

    //payment
    case "payment":
      return {
        ...state,
        cart: [],
        selectedAddress: null,
        orderList: [...state.orderList, ...payLoad],
      };

    //address
    case "set_selected_address":
      return {
        ...state,
        selectedAddress: payLoad,
      };
    case "set_address_to_be_edited":
      return { ...state, addressToBeEdited: payLoad };
    case "delete_address":
      return {
        ...state,
        allAddresses: state.allAddresses.filter(({ _id }) => _id !== payLoad),
      };
    case "add_new_address":
      return {
        ...state,
        allAddresses: [...state.allAddresses, payLoad],
      };

    case "update_existing_address":
      return {
        ...state,
        allAddresses: payLoad,
      };

    default:
      return state;
  }
};
