import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/dataContext";
import "../../App.css";
import { Filter } from "../components/filter/Filter";
import { getFilteredProducts } from "../utils/filterFunctions";
import { FilterContext } from "../contexts/filterContext";
import { ProductCard } from "../components/productCard/ProductCard";
import { ToastContainer } from "react-toastify";
export const Products = () => {
  const { allProducts } = useContext(DataContext);
  const { appliedFilters } = useContext(FilterContext);
  // console.log(allProducts);
  const filteredProducts = getFilteredProducts(allProducts, appliedFilters);

  return (
    <>
      <ToastContainer />
      <div className="products-main">
        <div className="product-filters">
          <Filter />
        </div>
        <div className="products-list-container">
          <div className="product-list-header">
            <button className="show-filters-button">Filters</button>
            <p>Showing all Products({allProducts.length})</p>
          </div>
          <div className="products-list">
            {filteredProducts.map((product) => (
              <ProductCard cardDetails={product} from="products" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
