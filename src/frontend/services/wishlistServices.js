import { toast } from "react-toastify";
const encodedToken = localStorage.getItem("token");

export const addToWishlistHandler = async (
  product,
  dispatch,
  navigate,
  location
) => {
  if (encodedToken) {
    try {
      const response = await fetch("/api/user/wishlist", {
        method: "post",
        body: JSON.stringify({ product }),
        headers: {
          authorization: encodedToken,
        },
      });
      const wishlistObj = await response.json();
      dispatch({ type: "add_to_wishlist", payLoad: wishlistObj?.wishlist });
      toast.success("Item added to Wishlist");
    } catch (e) {
      console.log(e);
    }
  } else {
    toast.warning("Please login first");
    navigate("/login", { state: { from: location?.pathname } });
  }
};

export const removeFromWishlistHandler = async (productId, dispatch) => {
  try {
    console.log(productId);
    const response = await fetch(`/api/user/wishlist/${productId}`, {
      method: "DELETE",
      headers: { authorization: encodedToken },
    });
    const wishlistObj = await response.json();
    dispatch({ type: "remove_from_wishlist", payLoad: wishlistObj?.wishlist });
    toast.info("Item removed from Wishlist");
  } catch (e) {
    console.log(e);
  }
};
