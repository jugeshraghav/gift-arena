import { useContext } from "react";
import { DataContext } from "../../contexts/dataContext";
import { FaHeart, FaStar, FaStarAndCrescent } from "react-icons/fa";
import "./productCard.css";
import { ProductCardButton } from "../productCardButton/ProductCardButton";
export const ProductCard = (props) => {
  const { _id, name, price, imageUrl, altText, rating, bestseller } =
    props.cardDetails;

  return (
    <>
      <div className="product-card">
        <img src={imageUrl} alt={altText} />
        <div className="product-card-content">
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <p className="rating-strip">
          {rating}
          <FaStar />
        </p>
        <button className="wishlist-strip">
          <FaHeart />
        </button>
        <p className="bestseller-strip">{bestseller && "Bestseller"}</p>
        <ProductCardButton product={props.cardDetails} from={props.from} />
      </div>
    </>
  );
};
