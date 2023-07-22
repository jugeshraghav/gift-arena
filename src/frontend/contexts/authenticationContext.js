import { createContext, useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { dataReducer, initial_state } from "../reducers/dataReducer";
import { toast } from "react-toastify";
import { loginService, signUpService } from "../services/authServices";

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

  const loginHandler = async () => {
    console.log(location);

    if (location?.state?.from !== null) {
      const response = await loginService(
        userLoginDetails?.email,
        userLoginDetails?.password
      );
      const user = await response.json();
      localStorage.setItem("token", user?.encodedToken);
      localStorage.setItem("userDetails", JSON.stringify(user?.foundUser));
      navigate(location?.state?.from);
      toast.success("Successfully Logged in");
    } else {
      navigate("/home");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    navigate("/login");
  };

  const signUpHandler = async () => {
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
        userLoginDetails,
        setUserLoginDetails,
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
