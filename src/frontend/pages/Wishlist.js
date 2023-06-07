import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import { ProductCard } from "../components/productCard/ProductCard";
import "../../App.css";
import { ToastContainer } from "react-toastify";

export const Whishlist = () => {
  const { wishlist } = useContext(DataContext);
  console.log(wishlist);
  return (
    <>
      {wishlist.length === 0 ? (
        <h1>You haven't added anything to wishlist Yet</h1>
      ) : (
        <div className="products-main">
          <div className="products-list">
            {wishlist.map((product) => (
              <ProductCard cardDetails={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
