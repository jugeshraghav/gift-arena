// import { useContext } from "react"
// import { AuthContext } from "../contexts/authenticationContext"
import { Navigate, useLocation } from "react-router-dom";

export const RequiresAuth = ({ children }) => {
  // const {isLoggedIn}= useContext(AuthContext);
  const encodedUserLoginToken = localStorage.getItem("encodedUserLoginToken");
  const location = useLocation();
  // console.log(location);
  // return isLoggedIn?(children):<Navigate to="/login" state={{from:location}}/>
  return encodedUserLoginToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};
