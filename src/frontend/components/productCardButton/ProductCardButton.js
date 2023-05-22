import { useContext } from "react";
import { DataContext } from "../../contexts/dataContext";
import { addToCart } from "../../services/cartServices";
import { AuthContext } from "../../contexts/authenticationContext";
import { useNavigate } from "react-router";
import { isInCart } from "../../utils/productFunctions";

export const ProductCardButton = (props) => {
  const from = props.from;
  const product = props.product;
  //   console.log("from button comp", props);
  const { _id } = product;
  const { cart, wishlist, addDataDispatch } = useContext(DataContext);
  const { encodedUserLoginToken } = useContext(AuthContext);

  console.log("product button", encodedUserLoginToken);

  const navigate = useNavigate();

  const addToCartHandler = (
    product,
    encodedUserLoginToken,
    addDataDispatch
  ) => {
    console.log("from add to cart handler");
    if (encodedUserLoginToken) {
      console.log("iffff", isInCart(cart, _id));

      // ? navigate("/cart")
      // : addToCart(addDataDispatch, product, encodedUserLoginToken);
    } else {
      navigate("/login");
    }
  };
  const removeFromCartHandler = () => {};
  const addToWishlistHandler = () => {};
  const removeFromWishlistHandler = () => {};
  return (
    <>
      {from === "products" ? (
        <div>
          <button onClick={() => addToCartHandler()}>
            {cart.includes(_id) ? "go to cart" : "add to cart"}
          </button>
          <button onClick={() => addToWishlistHandler()}>
            {wishlist.includes(_id) ? "added to wishlist" : "add to wishlist"}
          </button>
        </div>
      ) : from === "wishlist" ? (
        <div>
          <button onClick={() => addToCartHandler()}>
            {cart.includes(_id) ? "go to cart" : "add to cart"}
          </button>
          <button onClick={() => removeFromWishlistHandler()}>
            {wishlist.includes(_id) && "remove from wishlist"}
          </button>
        </div>
      ) : (
        from === "cart" && (
          <div>
            <button onClick={() => removeFromCartHandler()}>
              {cart.includes(_id) && "remove from cart"}
            </button>
            <button onClick={() => addToWishlistHandler()}>
              {wishlist.includes(_id) ? "added to wishlist" : "add to wishlist"}
            </button>
          </div>
        )
      )}
    </>
  );
};
