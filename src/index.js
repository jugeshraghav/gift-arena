import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider ,AuthContext} from "./frontend/contexts/authenticationContext";
import { LoginProvider,LoginContext } from "./frontend/contexts/LoginContext";

export {AuthContext,LoginContext}

// Call make Server
makeServer();

ReactDOM.render(
  
  <BrowserRouter>
  <LoginProvider>
  <AuthProvider>
      <App />
      </AuthProvider>
      </LoginProvider>
  </BrowserRouter>


 ,
  document.getElementById("root")
);
