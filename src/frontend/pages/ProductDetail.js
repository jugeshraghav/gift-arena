import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { DataContext } from "../contexts/dataContext";
import { addToCartHandler } from "../services/cartServices";
import {
  removeFromWishlistHandler,
  addToWishlistHandler,
} from "../services/wishlistServices";
import { isInCart, isInWishlist } from "../utils/productFunctions";
import { AuthContext } from "../contexts/authenticationContext";

export const ProductDetail = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);
  const { addDataDispatch, wishlist, cart } = useContext(DataContext);
  const { token } = useContext(AuthContext);

  const { description, altText, category, id, imageUrl, name, price } = product;

  const isProductInCart = isInCart(cart, id);
  const isProductInWishlist = isInWishlist(wishlist, id);
  const navigate = useNavigate();
  const location = useLocation();

  //handlers
  const getProductDetails = async () => {
    try {
      const response = await fetch(`/api/products/${product_id}`);
      const data = await response.json();
      setProduct(data.product);
    } catch (e) {
      console.log(e);
    }
  };
  getProductDetails();
  return (
    <>
      <div className="product-detail-main-container">
        <div className="product-detail-card-container">
          <div className="product-detail-card-image-container">
            <img src={imageUrl} alt={altText} />
          </div>
          <div className="product-detail-card-content-container">
            <h3 className="product-detail-card-bold-cursive-text">{name}</h3>
            <div>
              <h4 className="product-detail-card-bold-cursive-text">
                Category:
              </h4>
              <p className="product-detail-card-small-text">{category}</p>
            </div>
            <div>
              <p className="product-detail-card-small-text product-detail-desc">
                {description}
              </p>
            </div>
            <div>
              {" "}
              <h4 className="product-detail-card-bold-cursive-text"> Price:</h4>
              <p className="product-detail-card-small-text">Rs {price}</p>
            </div>
            <div>
              {isProductInWishlist && token ? (
                <button
                  className="product-detail-button   fill-color-button"
                  onClick={() =>
                    removeFromWishlistHandler(id, addDataDispatch, token)
                  }
                >
                  Remove from Wishlist
                </button>
              ) : (
                <button
                  className="product-detail-button primary-button"
                  onClick={() =>
                    addToWishlistHandler(
                      product,
                      addDataDispatch,
                      navigate,
                      location,
                      token
                    )
                  }
                >
                  Add to Wishlist
                </button>
              )}
              {isProductInCart && token ? (
                <button
                  className="product-detail-button fill-color-button"
                  onClick={() => navigate("/cart")}
                >
                  Go to Cart
                </button>
              ) : (
                <button
                  className="product-detail-button primary-button"
                  onClick={() =>
                    addToCartHandler(
                      product,
                      addDataDispatch,
                      navigate,
                      location,
                      token
                    )
                  }
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
