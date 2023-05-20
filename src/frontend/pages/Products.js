import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/dataContext";
import "./products.css";
import { Filter } from "../components/filter/Filter";
export const Products = () => {
  const { allProducts } = useContext(DataContext);
  console.log(allProducts);

  return (
    <>
      <div className="products-main">
        <div class="product-filters">
          <Filter />
        </div>
        <div className="products-list">
          {allProducts.map(
            ({ name, price, imageUrl, altText, rating, bestseller }) => (
              <div className="product-card">
                <img src={imageUrl} alt={altText} />
                <div className="product-card-content">
                  <p>{name}</p>
                  <p>{price}</p>
                </div>
                <p className="rating-strip">{rating}⭐</p>
                <p className="bestseller-strip">{bestseller && "Bestseller"}</p>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
