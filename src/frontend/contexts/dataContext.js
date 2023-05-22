import { createContext, useEffect, useState, useReducer } from "react";
import { initial_state, dataReducer } from "../reducers/dataReducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  //   const [allProducts, setAllProducts] = useState([]);
  //   const [categories, setCategories] = useState([]);

  const [state, dispatch] = useReducer(dataReducer, initial_state);
  const { allProducts, categories, cart, wishlist } = state;
  // console.log("from data context", state);

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
      const products = await response.json();
      dispatch({ type: "get_all_products", payLoad: products?.products });
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

  useEffect(() => {
    getData();
    getCategories();
  }, []);
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
        addDataDispatch: dispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
