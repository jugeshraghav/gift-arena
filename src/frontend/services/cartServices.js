import { toast } from "react-toastify";
const encodedToken = localStorage.getItem("token");

export const addToCartHandler = async (
  product,
  dispatch,
  navigate,
  location
) => {
  if (encodedToken) {
    try {
      const response = await fetch(" /api/user/cart", {
        method: "post",
        body: JSON.stringify({ product }),
        headers: {
          authorization: encodedToken,
        },
      });

      const cartObj = await response.json();
      dispatch({ type: "add_to_cart", payLoad: cartObj?.cart });
      toast.success("Item added to Cart");
    } catch (e) {
      console.log(e);
    }
  } else {
    navigate("/login", { state: { from: location?.pathname } });
  }
};
export const removeFromCartHandler = async (productId, dispatch) => {
  try {
    const response = await fetch(`/api/user/cart/${productId}`, {
      method: "DELETE",
      headers: { authorization: encodedToken },
    });

    const cartObj = await response.json();

    dispatch({ type: "remove_from_cart", payLoad: cartObj?.cart });
    toast.info("Item removed from Cart");
  } catch (e) {
    console.log(e);
  }
};

export const quantityHandler = async (productId, type, dispatch) => {
  try {
    const response = await fetch(`/api/user/cart/${productId}`, {
      method: "POST",
      body: JSON.stringify({
        action: {
          type: type,
        },
      }),
      headers: { authorization: encodedToken },
    });
    const cartObj = await response.json();
    dispatch({ type: "update_quantity", payLoad: cartObj?.cart });
  } catch (e) {
    console.log(e);
  }
};
