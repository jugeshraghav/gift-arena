import { useContext } from "react";
import { AuthContext } from "../contexts/authenticationContext";

export const User = () => {
  const { userDetailsAfterLogin } = useContext(AuthContext);
  const userName = userDetailsAfterLogin;

  return (
    <>
      <h1>Welcome </h1>
      <button>Logout</button>
    </>
  );
};
