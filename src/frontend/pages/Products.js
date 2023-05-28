import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/dataContext";
import "../../App.css";
import { Filter } from "../components/filter/Filter";
import { getFilteredProducts } from "../utils/filterFunctions";
import { FilterContext } from "../contexts/filterContext";
import { ProductCard } from "../components/productCard/ProductCard";
export const Products = () => {
  const { allProducts } = useContext(DataContext);
  const { appliedFilters } = useContext(FilterContext);
  // console.log(allProducts);
  const filteredProducts = getFilteredProducts(allProducts, appliedFilters);

  return (
    <>
      <div className="products-main">
        <div className="product-filters">
          <Filter />
        </div>
        <div className="products-list">
          {filteredProducts.map((product) => (
            <ProductCard cardDetails={product} from="products" />
          ))}
        </div>
      </div>
    </>
  );
};
