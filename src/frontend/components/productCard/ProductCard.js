import { useContext } from "react";
import { DataContext } from "../../contexts/dataContext";
import "./productCard.css";
import { ProductCardButton } from "../productCardButton/ProductCardButton";
export const ProductCard = (props) => {
  const { _id, name, price, imageUrl, altText, rating, bestseller } =
    props.cardDetails;
  console.log(_id);

  return (
    <>
      <div className="product-card">
        <img src={imageUrl} alt={altText} />
        <div className="product-card-content">
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <p className="rating-strip">{rating}⭐</p>
        <p className="bestseller-strip">{bestseller && "Bestseller"}</p>
        <ProductCardButton cardId={_id} from={props.from} />
      </div>
    </>
  );
};
