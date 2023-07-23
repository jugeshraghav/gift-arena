export const initial_state_filters = {
  search_text: "",
  category_from_filter: [],
  price_range_filter: "",
  sort_string_from_filter: "",
  rating_from_filter: "",
};

export const filterReducer = (state, action) => {
  const { type, payLoad } = action;
  switch (type) {
    case "filter_by_search":
      return {
        ...state,
        search_text: payLoad,
      };
    case "filter_by_category":
      return {
        ...state,
        category_from_filter: state.category_from_filter.includes(payLoad)
          ? state.category_from_filter.filter(
              (category) => category !== payLoad
            )
          : [...state.category_from_filter, payLoad],
      };

    case "filter_by_price_range":
      return { ...state, price_range_filter: payLoad };

    case "sort_by_price":
      return { ...state, sort_string_from_filter: payLoad };

    case "filter_by_rating":
      return { ...state, rating_from_filter: payLoad };

    case "clear_filters":
      return {
        ...state,
        rating_from_filter: "",
        sort_string_from_filter: "",
        price_range_filter: "",
        category_from_filter: [],
        search_text: "",
      };

    default:
      return state;
  }
};
