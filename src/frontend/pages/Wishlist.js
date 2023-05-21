import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import { ProductCard } from "../components/productCard/ProductCard";

export const Whishlist = () => {
  const { allProducts, wishlist } = useContext(DataContext);
  //   console.log(allProducts, wishlist);
  return (
    <>
      <h1>Hello from Whishlist</h1>
      {allProducts.map(
        (product) =>
          wishlist.includes(product._id) && (
            <ProductCard cardDetails={product} from="wishlist" />
          )
      )}
    </>
  );
};
