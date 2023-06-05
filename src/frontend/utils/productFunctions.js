export const isInCart = (cart, productId) => {
  return cart.some((product) => product._id === productId);
};

export const isInWishlist = (wishlist, productId) => {
  return wishlist.some((product) => product._id === productId);
};
