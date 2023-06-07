import { useContext } from "react";
import "./filter.css";
import "../../../App.css";
import { FilterContext } from "../../contexts/filterContext";

export const Filter = () => {
  const { appliedFilters, filterDispatch } = useContext(FilterContext);
  console.log(appliedFilters);
  const {
    rating_from_filter,
    sort_string_from_filter,
    price_range_filter,
    category_from_filter,
  } = appliedFilters;

  const handleCategoryFilter = (e) => {
    filterDispatch({ type: "filter_by_category", payLoad: e.target.value });
  };
  const handlePriceRangeFilter = (e) => {
    console.log(e.target.value);
    filterDispatch({ type: "filter_by_price_range", payLoad: e.target.value });
  };
  const handleRatingFilter = (e) => {
    filterDispatch({ type: "filter_by_rating", payLoad: e.target.value });
  };
  const handleSortFilter = (e) => {
    filterDispatch({ type: "sort_by_price", payLoad: e.target.value });
  };
  const clearFilterHandler = () => {
    filterDispatch({ type: "clear_filters" });
  };
  return (
    <>
      <div className="filters-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h4>Filters</h4>
          <button
            style={{ border: "1px solid", padding: "0.2rem 0.4rem" }}
            onClick={() => clearFilterHandler()}
          >
            Clear
          </button>
        </div>
        <hr></hr>
        <div className="product-type-filter">
          <h4>Filter By Category</h4>
          <div>
            <input
              type="checkbox"
              value="Cake"
              checked={category_from_filter.includes("Cake")}
              onChange={handleCategoryFilter}
            />
            Cakes
          </div>
          <div>
            <input
              type="checkbox"
              value="Flower"
              checked={category_from_filter.includes("Flower")}
              onChange={handleCategoryFilter}
            />
            Flowers
          </div>
          <div>
            <input
              type="checkbox"
              value="Plant"
              checked={category_from_filter.includes("Plant")}
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
              value={price_range_filter}
              min={100}
              max={500}
            />
            <div
              style={{
                display: "flex",
                algnItems: "center",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <span>100</span>
              <span style={{ color: "green" }}>{price_range_filter}</span>
            </div>
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
              checked={sort_string_from_filter === "lth"}
              value="lth"
            />{" "}
            Low To High
          </div>
          <div>
            <input
              type="radio"
              name="sort"
              onChange={handleSortFilter}
              checked={sort_string_from_filter === "htl"}
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
              checked={rating_from_filter === "4.5"}
              value="4.5"
            />{" "}
            4.5 and above
          </div>

          <div>
            <input
              type="radio"
              name="rating"
              onChange={handleRatingFilter}
              checked={rating_from_filter === "4"}
              value="4"
            />{" "}
            4 and above
          </div>

          <div>
            <input
              type="radio"
              name="rating"
              onChange={handleRatingFilter}
              checked={rating_from_filter === "3"}
              value="3"
            />{" "}
            3 and above
          </div>

          <div>
            <input
              type="radio"
              name="rating"
              onChange={handleRatingFilter}
              checked={rating_from_filter === "2"}
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
              checked={rating_from_filter === "1"}
            />{" "}
            1 and above
          </div>
        </div>
      </div>
    </>
  );
};
