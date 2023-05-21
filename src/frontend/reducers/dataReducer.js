export const initial_state = {
  allProducts: [],
  cart: [],
  wishlist: [],
  categories: [],
};

export const dataReducer = (state, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case "get_all_products":
      return { ...state, allProducts: [...payLoad] };
    case "get_categories":
      return { ...state, categories: [...payLoad] };
    case "add_to_wishlist":
      return {
        ...state,
        wishlist: state.wishlist.includes(payLoad)
          ? state.wishlist
          : [...state.wishlist, payLoad],
      };
    case "add_to_cart":
      return {
        ...state,
        cart: state.cart.includes(payLoad)
          ? state.cart
          : [...state.cart, payLoad],
      };
    case "remove_from_cart":
      return {
        ...state,
        cart: state.cart.includes(payLoad)
          ? state.cart.filter(({ _id }) => _id !== payLoad)
          : state.cart,
      };
    case "remove_from_wishlist":
      return {
        ...state,
        wishlist: state.wishlist.includes(payLoad)
          ? state.wishlist.filter(({ _id }) => _id !== payLoad)
          : state.wishlist,
      };
    default:
      return state;
  }
};
