import { useContext } from "react";
import { AuthContext } from "../contexts/authenticationContext";
import Image from "../assets/transparent-bg-logo.png";
import "../../App.css";
import { NavLink } from "react-router-dom";

export const Login = () => {
  const { loginHandler, userLoginDetails, setUserLoginDetails } =
    useContext(AuthContext);

  const encodedUserLoginToken = localStorage.getItem("encodedToken");

  return (
    <>
      <div className="login-main">
        <div className="login-left">
          <img src={Image} alt="gift-arena" width="150px" height="50px" />
          <p>One Stop solution for every kind of Gifts</p>
          <hr></hr>
          <p>New User? Sign Up to Continue </p>
          <NavLink to="/signup">
            <button>SignUp</button>
          </NavLink>
        </div>
        <div className="login-right">
          <h1>Login</h1>
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
            onClick={() => {
              setUserLoginDetails({
                email: "adarshbalika@gmail.com",
                password: "adarshbalika",
              });
              loginHandler();
            }}
          >
            Test Login
          </button>
          <button onClick={() => loginHandler()}>Login</button>
        </div>
      </div>
    </>
  );
};
