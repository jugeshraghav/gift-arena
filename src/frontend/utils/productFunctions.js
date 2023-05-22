export const isInCart = (cartArr, productId) => {
  return cartArr.filter((_id) => _id === productId);
};

export const isInWishlist = (wishlistArr, productId) => {
  return wishlistArr.filter((_id) => _id === productId);
};
