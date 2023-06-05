import { DataContext } from "../contexts/dataContext";
import { useContext } from "react";

const encodedToken = localStorage.getItem("token");
export const addToWishlistHandler = async (product, dispatch) => {
  //   const { getWishlistItems } = useContext(DataContext);
  try {
    console.log(product);
    const response = await fetch("/api/user/wishlist", {
      method: "post",
      body: JSON.stringify({ product }),
      headers: {
        authorization: encodedToken,
      },
    });
    // getWishlistItems();
    const wishlistObj = await response.json();
    dispatch({ type: "add_to_wishlist", payLoad: wishlistObj?.wishlist });
  } catch (e) {
    console.log(e);
  }
};

export const removeFromWishlistHandler = async (productId, dispatch) => {
  try {
    console.log(productId);
    const response = await fetch(`/api/user/wishlist/${productId}`, {
      method: "DELETE",
      headers: { authorization: encodedToken },
    });
    // getWishlistItems();
    const wishlistObj = await response.json();
    dispatch({ type: "remove_from_wishlist", payLoad: wishlistObj?.wishlist });
    console.log(await response.json());
  } catch (e) {
    console.log(e);
  }
};
