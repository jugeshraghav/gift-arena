import { useContext, useEffect } from "react";
import { DataContext } from "../contexts/dataContext";
import { FilterContext } from "../contexts/filterContext";
import ClipLoader from "react-spinners/ClipLoader";

import { getFilteredProducts } from "../utils/filterFunctions";
import { Filter } from "../components/filter/Filter";
import { ProductCard } from "../components/productCard/ProductCard";

import "../../App.css";

export const Products = () => {
  const { allProducts, isProductsLoading, getData } = useContext(DataContext);
  const { appliedFilters } = useContext(FilterContext);

  const filteredProducts = getFilteredProducts(allProducts, appliedFilters);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="products-main">
        <div className="product-filters">
          <Filter />
        </div>
        {isProductsLoading ? (
          <div className="loader">
            <ClipLoader color="purple" loading={isProductsLoading} size={50} />
          </div>
        ) : (
          <div className="products-list-container">
            <div className="product-list-header">
              <button className="show-filters-button">Filters</button>
              <p>Showing all Products({allProducts.length})</p>
            </div>
            <div className="products-list">
              {filteredProducts.map((product) => (
                <ProductCard
                  cardDetails={product}
                  from="products"
                  key={product._id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
