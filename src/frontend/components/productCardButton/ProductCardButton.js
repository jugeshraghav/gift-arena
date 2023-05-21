import { useContext } from "react";
import { DataContext } from "../../contexts/dataContext";

export const ProductCardButton = (props) => {
  const from = props.from;
  const _id = props.cardId;
  const { cart, wishlist, addDataDispatch } = useContext(DataContext);

  return (
    <>
      {from === "products" ? (
        <div>
          <button
            onClick={() =>
              addDataDispatch({ type: "add_to_cart", payLoad: _id })
            }
          >
            {cart.includes(_id) ? "go to cart" : "add to cart"}
          </button>
          <button
            onClick={() =>
              addDataDispatch({ type: "add_to_wishlist", payLoad: _id })
            }
          >
            {wishlist.includes(_id) ? "added to wishlist" : "add to wishlist"}
          </button>
        </div>
      ) : from === "wishlist" ? (
        <div>
          <button
            onClick={() =>
              addDataDispatch({ type: "add_to_cart", payLoad: _id })
            }
          >
            {cart.includes(_id) ? "go to cart" : "add to cart"}
          </button>
          <button
            onClick={() =>
              addDataDispatch({ type: "remove_from_wishlist", payLoad: _id })
            }
          >
            {wishlist.includes(_id) && "remove from wishlist"}
          </button>
        </div>
      ) : (
        from === "cart" && (
          <div>
            <button
              onClick={() =>
                addDataDispatch({ type: "remove_from_cart", payLoad: _id })
              }
            >
              {cart.includes(_id) && "remove from cart"}
            </button>
            <button
              onClick={() =>
                addDataDispatch({ type: "add_to_wishlist", payLoad: _id })
              }
            >
              {wishlist.includes(_id) ? "added to wishlist" : "add to wishlist"}
            </button>
          </div>
        )
      )}
    </>
  );
};
