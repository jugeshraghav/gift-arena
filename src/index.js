import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider ,AuthContext} from "./frontend/contexts/authenticationContext";
import { DataProvider ,DataContext} from "./frontend/contexts/dataContext";

export {AuthContext,DataContext}

// Call make Server
makeServer();

ReactDOM.render(
  
  <BrowserRouter>
  <DataProvider>
  <AuthProvider>
      <App />
      </AuthProvider>
      </DataProvider>
  </BrowserRouter>


 ,
  document.getElementById("root")
);
