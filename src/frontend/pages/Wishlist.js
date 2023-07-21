import { useContext } from "react";
import { DataContext } from "../contexts/dataContext";
import { ProductCard } from "../components/productCard/ProductCard";
import "../../App.css";
import { useNavigate } from "react-router";

export const Whishlist = () => {
  const { wishlist } = useContext(DataContext);

  const navigate = useNavigate();
  return (
    <>
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
            <div className="products-list">
              {wishlist.map((product) => (
                <ProductCard cardDetails={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
