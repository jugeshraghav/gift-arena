import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
