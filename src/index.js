import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import {
  AuthProvider,
  AuthContext,
} from "./frontend/contexts/authenticationContext";
import { DataProvider, DataContext } from "./frontend/contexts/dataContext";
import {
  FilterContext,
  FilterProvider,
} from "./frontend/contexts/filterContext";

export { AuthContext, DataContext, FilterContext };

// Call make Server
makeServer();

ReactDOM.render(
  <BrowserRouter>
    <DataProvider>
      <FilterProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </FilterProvider>
    </DataProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
