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

export const Products = () => {
  const { allProducts, isProductsLoading, getData } = useContext(DataContext);
  const { appliedFilters, filterDispatch } = useContext(FilterContext);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = getFilteredProducts(allProducts, appliedFilters);

  const refreshFilterHandler = () => {
    filterDispatch({ type: "clear_filters" });
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    cardDetails={product}
                    from="products"
                    key={product._id}
                  />
                ))
              ) : (
                <div className="no-items-container">
                  <p className="no-items-text">
                    No items found according to your search!
                  </p>
                  <button
                    className="primary-button"
                    onClick={refreshFilterHandler}
                  >
                    Refresh
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};
