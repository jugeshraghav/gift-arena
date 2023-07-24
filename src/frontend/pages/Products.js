import { AiOutlineClose } from "react-icons/ai";
import { BsFilterSquare } from "react-icons/bs";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../contexts/dataContext";
import { FilterContext } from "../contexts/filterContext";
import ClipLoader from "react-spinners/ClipLoader";

import { getFilteredProducts } from "../utils/filterFunctions";
import { Filter } from "../components/filter/Filter";
import { ProductCard } from "../components/productCard/ProductCard";

import "../../App.css";
import { useSearchParams } from "react-router-dom";

export const Products = () => {
  const { allProducts, isProductsLoading, getData } = useContext(DataContext);
  const { appliedFilters } = useContext(FilterContext);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = getFilteredProducts(allProducts, appliedFilters);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="products-main">
        <div
          className={
            showFilters
              ? "product-filters show-product-filters"
              : "product-filters "
          }
        >
          <Filter />

          <AiOutlineClose
            className="filter-close-icon"
            onClick={() => setShowFilters(false)}
          />
        </div>
        {isProductsLoading ? (
          <div className="loader">
            <ClipLoader color="purple" loading={isProductsLoading} size={50} />
          </div>
        ) : (
          <div className="products-list-container">
            <div className="product-list-header">
              <BsFilterSquare
                className="show-filters-button"
                onClick={() => setShowFilters(!showFilters)}
              />
              <p>Showing all Products({filteredProducts.length})</p>
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
