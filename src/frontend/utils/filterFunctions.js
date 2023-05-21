const filterByCategories = (products, appliedFilters) => {
  return appliedFilters.category_from_filter.length > 0
    ? products.filter(({ category }) =>
        appliedFilters.category_from_filter.some(
          (filter) => filter === category
        )
      )
    : products;
};

const sortByPrice = (products, appliedFilters) => {
  return appliedFilters.sort_string_from_filter.length > 0
    ? appliedFilters.sort_string_from_filter === "lth"
      ? products.sort((a, b) => a.price - b.price)
      : products.sort((a, b) => b.price - a.price)
    : products;
};

const filterByRating = (products, appliedFilters) => {
  return appliedFilters.rating_from_filter > 0
    ? products.filter(
        ({ rating }) => rating > Number(appliedFilters.rating_from_filter)
      )
    : products;
};

const filterByPriceRange = (products, appliedFilters) => {
  return appliedFilters.rating_from_filter > 0
    ? products.filter(
        ({ rating }) => rating > Number(appliedFilters.rating_from_filter)
      )
    : products;
};
export const getFilteredProducts = (products, appliedFilters) => {
  const filterFunctions = [
    filterByCategories,
    sortByPrice,
    filterByRating,
    filterByPriceRange,
  ];

  return filterFunctions.reduce(
    (acc, func) => func(acc, appliedFilters),
    products
  );
};
