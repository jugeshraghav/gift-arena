import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginService, signUpService } from "../services/authServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = async (userLoginDetails) => {
    const response = await loginService(
      userLoginDetails?.email,
      userLoginDetails?.password
    );
    const user = await response.json();
    setToken(user?.encodedToken);
    localStorage.setItem("token", user?.encodedToken);
    localStorage.setItem("userDetails", JSON.stringify(user?.foundUser));
    navigate(location?.state?.from?.pathname || "/");
    toast.success("Successfully Logged in");
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    setToken(null);
    navigate("/");
  };

  const signUpHandler = async (signUpDetails) => {
    const response = await signUpService(signUpDetails);
    const user = await response.json();
    setToken(user?.encodedToken);
    localStorage.setItem("token", user?.encodedToken);
    localStorage.setItem("userDetails", JSON.stringify(user?.createdUser));
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        loginHandler,
        logoutHandler,
        signUpHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
