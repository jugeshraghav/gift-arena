import { createContext, useEffect, useState, useReducer } from "react";
import { initial_state, dataReducer } from "../reducers/dataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  //   const [allProducts, setAllProducts] = useState([]);
  //   const [categories, setCategories] = useState([]);

  const [state, dispatch] = useReducer(dataReducer, initial_state);
  const { allProducts, categories, cart, wishlist, address } = state;
  // console.log("from data context", state);

  const encodedToken = localStorage.getItem("token");

  const cakes = state?.allProducts?.filter(
    ({ category }) => category === "Cake"
  );
  const flowers = state?.allProducts?.filter(
    ({ category }) => category === "Flower"
  );
  const plants = state?.allProducts?.filter(
    ({ category }) => category === "Plant"
  );

  const getData = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      console.log(data);
      dispatch({
        type: "get_all_products",
        payLoad: data?.products,
      });
    } catch (e) {
      console.log(e);
    }
  };
  const getCategories = async () => {
    try {
      const response = await fetch("/api/categories");
      const categories = await response.json();
      dispatch({ type: "get_categories", payLoad: categories?.categories });
    } catch (e) {
      console.log(e);
    }
  };

  const getCartItems = async () => {
    try {
      const response = await fetch("/api/user/cart", {
        headers: {
          authorization: encodedToken,
        },
      });
      const cart = await response.json();
      console.log(cart);
      dispatch({ type: "get_cart", payLoad: cart?.cart });
    } catch (e) {
      console.log(e);
    }
  };

  const getWishlistItems = async () => {
    try {
      const response = await fetch("/api/user/wishlist", {
        headers: {
          authorization: encodedToken,
        },
      });
      const wishlist = await response.json();
      console.log(wishlist);
      dispatch({ type: "get_wishlist", payLoad: wishlist?.wishlist });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
    getCategories();
  }, []);

  console.log("state from DATA con", state);
  return (
    <DataContext.Provider
      value={{
        allProducts,
        cakes,
        plants,
        flowers,
        categories,
        cart,
        wishlist,
        address,
        getCartItems,
        getWishlistItems,
        addDataDispatch: dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
