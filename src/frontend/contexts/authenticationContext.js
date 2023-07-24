import { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dataReducer, initial_state } from "../reducers/dataReducer";
import { toast } from "react-toastify";
import { loginService, signUpService } from "../services/authServices";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const loginHandler = async (userLoginDetails) => {
    console.log("hello");
    const response = await loginService(
      userLoginDetails?.email,
      userLoginDetails?.password
    );
    const user = await response.json();
    localStorage.setItem("token", user?.encodedToken);
    localStorage.setItem("userDetails", JSON.stringify(user?.foundUser));
    console.log(location?.state?.from?.pathname);
    navigate(location?.state?.from?.pathname || "/");
    toast.success("Successfully Logged in");
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    navigate("/");
  };

  const signUpHandler = async (signUpDetails) => {
    const response = await signUpService(signUpDetails);
    const user = await response.json();
    localStorage.setItem("token", user?.encodedToken);
    localStorage.setItem("userDetails", JSON.stringify(user?.createdUser));
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        logoutHandler,
        signUpHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
