import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userLoginEmail, setUserLoginEmail] = useState("");
  const [userLoginPwd, setUserLoginPwd] = useState("");

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
      email: userLoginEmail,
      password: userLoginPwd,
    };
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(creds),
      });
      // console.log(await response.json());
      const { encodedToken, foundUser } = await response.json();
      console.log(foundUser);
      localStorage.setItem("encodedUserLoginToken", encodedToken);
      localStorage.setItem("userDetailsAfterLogin", JSON.stringify(foundUser));
    } catch (e) {
      console.log(e);
    }
  };

  const encodedUserLoginToken = localStorage.getItem("encodedUserLoginToken");
  const userDetailsAfterLogin = localStorage.getItem("userDetailsAfterLogin");
  console.log(userDetailsAfterLogin);

  const loginHandler = async () => {
    if (!encodedUserLoginToken) {
      await getUSerLoginToken();
      if (encodedUserLoginToken !== undefined) {
        if (location?.state?.from === undefined) {
          navigate("/");
        } else {
          navigate(location?.state?.from);
        }
      }
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("encodedUserLoginToken");
    navigate("/login");
  };

  const getUserSignUpToken = async () => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(signUpDetails),
      });
      // const { encodedToken } = await response.json();
      // console.log(encodedToken);
      console.log(await response.json());
      // localStorage.setItem("encodedUserSignUpToken", encodedToken);
    } catch (e) {
      console.log(e);
    }
  };
  const encodedUserSignUpToken = localStorage.getItem("encodedUserSignUpToken");
  const signUpHandler = async () => {
    await getUserSignUpToken();
  };

  return (
    <AuthContext.Provider
      value={{
        loginHandler,
        logoutHandler,
        userLoginEmail,
        setUserLoginEmail,
        userLoginPwd,
        setUserLoginPwd,
        encodedUserLoginToken,
        userDetailsAfterLogin,
        signUpDetails,
        signUpHandler,
        setSignUpDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
