import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import { ProductCard } from "../components/productCard/ProductCard";

export const Cart = () => {
  const { allProducts, cart } = useContext(DataContext);

  return (
    <>
      <h1>Hello from Cart</h1>
      {allProducts.map(
        (product) =>
          cart.includes(product._id) && (
            <ProductCard cardDetails={product} from="cart" />
          )
      )}
    </>
  );
};
