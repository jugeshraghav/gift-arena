import { useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { addToCartHandler } from "../services/cartServices";
import {
  removeFromWishlistHandler,
  addToWishlistHandler,
} from "../services/wishlistServices";
import { DataContext } from "../contexts/dataContext";
import { isInCart, isInWishlist } from "../utils/productFunctions";
import { NavLink } from "react-router-dom";

export const ProductDetail = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState([]);
  const { addDataDispatch, wishlist, cart } = useContext(DataContext);

  const {
    altText,
    bestseller,
    category,
    id,
    imageUrl,
    name,
    price,
    rating,
    subCategory,
  } = product;

  const isProductInCart = isInCart(cart, id);
  const isProductInWishlist = isInWishlist(wishlist, id);
  const navigate = useNavigate();
  const location = useLocation();
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
            <h3>{name}</h3>
            <div>
              <h4>Category:</h4>
              <p>{category}</p>
            </div>
            <div>
              {" "}
              <h4>Price:</h4>
              <p>{price}</p>
            </div>
            <div>
              {isProductInWishlist ? (
                <button
                  className="product-detail-button"
                  onClick={() => removeFromWishlistHandler(id, addDataDispatch)}
                >
                  Remove from Wishlist
                </button>
              ) : (
                <button
                  className="product-detail-button"
                  onClick={() =>
                    addToWishlistHandler(
                      product,
                      addDataDispatch,
                      navigate,
                      location
                    )
                  }
                >
                  Add to Wishlist
                </button>
              )}
              {isProductInCart ? (
                <NavLink to="/cart">
                  <button className="product-detail-button">Go to Cart</button>
                </NavLink>
              ) : (
                <button
                  className="product-detail-button"
                  onClick={() =>
                    addToCartHandler(
                      product,
                      addDataDispatch,
                      navigate,
                      location
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
