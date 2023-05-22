export const addToCart = async (
  addDataDispatch,
  product,
  encodedUserLoginToken
) => {
  try {
    const response = await fetch("/api/user/cart", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        authorization: encodedUserLoginToken,
      },
    });
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
