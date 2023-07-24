import { createContext, useReducer, useState } from "react";
import { initial_state, dataReducer } from "../reducers/dataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initial_state);
  const {
    allProducts,
    categories,
    cart,
    orderList,
    wishlist,
    allAddresses,
    selectedAddress,
    addressToBeEdited,
  } = state;
  const [isProductsLoading, setIsProductsLoading] = useState(false);
  const [isCategoryLoading, setIsCategoryLoading] = useState(false);
  const [isWishlistLoading, setIsWishlistLoading] = useState(false);
  const [isCartLoading, setIsCartLoading] = useState(false);
  const encodedToken = localStorage.getItem("token");

  const getData = async () => {
    setIsProductsLoading(true);
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      dispatch({
        type: "get_all_products",
        payLoad: data?.products,
      });
    } catch (e) {
      console.log(e);
    } finally {
      return setInterval(() => setIsProductsLoading(false), 1000);
    }
  };
  const getCategories = async () => {
    setIsCategoryLoading(true);
    try {
      const response = await fetch("/api/categories");
      const categories = await response.json();
      dispatch({ type: "get_categories", payLoad: categories?.categories });
    } catch (e) {
      console.log(e);
    } finally {
      return setInterval(() => setIsCategoryLoading(false), 1000);
    }
  };

  const getCartItems = async () => {
    setIsCartLoading(true);
    try {
      const response = await fetch("/api/user/cart", {
        headers: {
          authorization: encodedToken,
        },
      });
      const cart = await response.json();
      dispatch({ type: "get_cart", payLoad: cart?.cart });
    } catch (e) {
      console.log(e);
    } finally {
      setInterval(() => setIsCartLoading(false), 1000);
    }
  };

  const getWishlistItems = async () => {
    setIsWishlistLoading(true);
    try {
      const response = await fetch("/api/user/wishlist", {
        headers: {
          authorization: encodedToken,
        },
      });
      const wishlist = await response.json();
      dispatch({ type: "get_wishlist", payLoad: wishlist?.wishlist });
    } catch (e) {
      console.log(e);
    } finally {
      setInterval(() => setIsWishlistLoading(false), 1000);
    }
  };

  return (
    <DataContext.Provider
      value={{
        allProducts,
        categories,
        cart,
        orderList,
        wishlist,
        allAddresses,
        selectedAddress,
        addressToBeEdited,
        isCategoryLoading,
        isProductsLoading,
        isCartLoading,
        isWishlistLoading,
        getData,
        getCategories,
        getCartItems,
        getWishlistItems,
        addDataDispatch: dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
