import { createContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dataReducer, initial_state } from "../reducers/dataReducer";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initial_state);
  const { user } = state;

  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  const getUSerLoginToken = async () => {
    const creds = {
      email: userLoginDetails.email,
      password: userLoginDetails.password,
    };
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(creds),
      });

      const { encodedToken, foundUser } = await response.json();
      localStorage.setItem("token", encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(foundUser));
      dispatch({ type: "get_user_details", payLoad: foundUser });
    } catch (e) {
      console.log(e);
    }
  };

  const loginHandler = async () => {
    await getUSerLoginToken();

    navigate(location?.state?.from);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const getUserSignUpToken = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(signUpDetails),
      });
      const data = await response.json();

      localStorage.setItem("token", data.encodedToken);
      dispatch({ type: "get_user_details", payLoad: data?.createdUser });
      localStorage.setItem("userDetails", JSON.stringify(data.createdUser));
    } catch (e) {
      console.log(e);
    }
  };

  const encodedToken = localStorage.getItem("token");

  const signUpHandler = () => {
    getUserSignUpToken();
    navigate("/");
  };

  console.log("state from auth con", state);
  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        logoutHandler,
        userLoginDetails,
        setUserLoginDetails,
        encodedToken,
        signUpDetails,
        signUpHandler,
        setSignUpDetails,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
