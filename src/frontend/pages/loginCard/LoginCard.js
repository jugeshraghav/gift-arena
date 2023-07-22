import { useContext } from "react";
import { AuthContext } from "../../contexts/authenticationContext";

import "./loginCard.css";
import "../../../App.css";
import { NavLink } from "react-router-dom";
import { User } from "../../components/user/User";

export const LoginCard = () => {
  const { loginHandler, userLoginDetails, setUserLoginDetails } =
    useContext(AuthContext);
  const encodedToken = localStorage.getItem("token");

  return (
    <>
      {encodedToken ? (
        <User />
      ) : (
        <div className="login-card-container">
          <div className="login-form-container">
            <div className="login-form-header">
              <p> Gift Arena provides you exciting gifts</p>
              <h1>Login</h1>
            </div>
            <form onSubmit={loginHandler}>
              {" "}
              <input
                type="email"
                value={userLoginDetails.email}
                placeholder="Enter your email"
                onChange={(e) =>
                  setUserLoginDetails((prevState) => ({
                    ...prevState,
                    email: e.target.value,
                  }))
                }
              ></input>
              <input
                type="text"
                value={userLoginDetails.password}
                placeholder="Enter your password"
                onChange={(e) =>
                  setUserLoginDetails((prevState) => ({
                    ...prevState,
                    password: e.target.value,
                  }))
                }
              ></input>
              <button
                type="button"
                className="primary-button"
                onClick={() => {
                  setUserLoginDetails({
                    email: "adarshbalika@gmail.com",
                    password: "adarshbalika",
                  });
                }}
              >
                Set Test Details
              </button>
              <button className="fill-color-button " type="submit">
                Login
              </button>
            </form>

            <p>
              New User?{" "}
              <NavLink to="/signup">
                <span>Sign Up</span>
              </NavLink>
            </p>
          </div>
        </div>
      )}
    </>
  );
};
