import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";
import { DataContext } from "../contexts/dataContext";
import { ProductCard } from "../components/productCard/ProductCard";
import "../../App.css";
import {
  addToWishlistHandler,
  removeFromWishlistHandler,
} from "../services/wishlistServices";

export const Whishlist = () => {
  const { wishlist, getWishlistItems, isWishlistLoading } =
    useContext(DataContext);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  useEffect(() => {
    token && getWishlistItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addToWishlistHandler, removeFromWishlistHandler]);
  return (
    <>
      {isWishlistLoading ? (
        <div className="loader">
          <ClipLoader color="purple" loading={isWishlistLoading} size={50} />
        </div>
      ) : (
        <div className="wishlist-container">
          {wishlist.length === 0 ? (
            <div className="no-items-container">
              <p className="no-items-text">
                You haven't added anything to wishlist Yet
              </p>
              <button
                className="primary-button"
                onClick={() => navigate(`/products`)}
              >
                Shop Now
              </button>
            </div>
          ) : (
            <div className="wishlist-list">
              {wishlist.map((product) => (
                <ProductCard cardDetails={product} key={product?._id} />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
