import { useContext } from "react";
import { useNavigate } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";
import { DataContext } from "../contexts/dataContext";
import { ProductCard } from "../components/productCard/ProductCard";
import "../../App.css";

export const Whishlist = () => {
  const { wishlist, isWishlistLoading } = useContext(DataContext);

  const navigate = useNavigate();
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
            <div className="products-list">
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
