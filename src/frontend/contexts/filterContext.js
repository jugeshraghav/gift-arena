import { createContext, useReducer } from "react";
import {
  filterReducer,
  initial_state_filters,
} from "../reducers/filterReducer";

export const FilterContext = createContext();
export const FilterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(filterReducer, initial_state_filters);
  return (
    <FilterContext.Provider
      value={{ appliedFilters: state, filterDispatch: dispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};
