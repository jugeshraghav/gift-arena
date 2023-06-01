import { useContext } from "react";
import "./filter.css";
import { FilterContext } from "../../contexts/filterContext";

export const Filter = () => {
  const { appliedFilters, filterDispatch } = useContext(FilterContext);
  // console.log("dispatch", filterDispatch);
  // console.log("applied filters", appliedFilters);
  const handleCategoryFilter = (e) => {
    filterDispatch({ type: "filter_by_category", payLoad: e.target.value });
  };
  const handlePriceRangeFilter = (e) => {
    filterDispatch({ type: "filter_by_price_range", payLoad: e.target.value });
  };
  const handleRatingFilter = (e) => {
    filterDispatch({ type: "filter_by_rating", payLoad: e.target.value });
  };
  const handleSortFilter = (e) => {
    filterDispatch({ type: "sort_by_price", payLoad: e.target.value });
  };
  return (
    <>
      <div className="filters-container">
        <h4>Filters</h4>
        <hr></hr>
        <div className="product-type-filter">
          <h4>Filter By Category</h4>
          <div>
            <input
              type="checkbox"
              value="Cake"
              onChange={handleCategoryFilter}
            />
            Cakes
          </div>
          <div>
            <input
              type="checkbox"
              value="Flower"
              onChange={handleCategoryFilter}
            />
            Flowers
          </div>
          <div>
            <input
              type="checkbox"
              value="Plant"
              onChange={handleCategoryFilter}
            />
            Plants
          </div>
        </div>
        <hr></hr>
        <div className="product-price-filter">
          <h4>Filter By Price Range</h4>
          <div>
            <input
              type="range"
              onChange={handlePriceRangeFilter}
              value={appliedFilters.price_range_filter}
              min={0}
              max={50}
            />
            <p></p>
          </div>
        </div>
        <hr></hr>
        <div className="product-sort-filter">
          <h4>Sort By Price</h4>
          <div>
            <input
              type="radio"
              name="sort"
              onChange={handleSortFilter}
              value="lth"
            />{" "}
            Low To High
          </div>
          <div>
            <input
              type="radio"
              name="sort"
              onChange={handleSortFilter}
              value="htl"
            />{" "}
            High To Low
          </div>
        </div>
        <hr></hr>
        <div className="product-rating-filter">
          <h4>Filter By Rating</h4>
          <div>
            <input
              type="radio"
              name="rating"
              onChange={handleRatingFilter}
              value="4.5"
            />{" "}
            4.5 and above
          </div>

          <div>
            <input
              type="radio"
              name="rating"
              onChange={handleRatingFilter}
              value="4"
            />{" "}
            4 and above
          </div>

          <div>
            <input
              type="radio"
              name="rating"
              onChange={handleRatingFilter}
              value="3"
            />{" "}
            3 and above
          </div>

          <div>
            <input
              type="radio"
              name="rating"
              onChange={handleRatingFilter}
              value="2"
            />{" "}
            2 and above
          </div>

          <div>
            <input
              type="radio"
              name="rating"
              onChange={handleRatingFilter}
              value="1"
            />{" "}
            1 and above
          </div>
        </div>
      </div>
    </>
  );
};
