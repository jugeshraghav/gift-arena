import { useContext } from "react";
import { AuthContext } from "../../contexts/authenticationContext";
import Image from "../../assets/transparent-bg-logo.png";
import "./login.css";

export const Login = () => {
  const {
    loginHandler,
    userLoginEmail,
    setUserLoginEmail,
    userLoginPwd,
    setUserLoginPwd,
  } = useContext(AuthContext);

  const encodedUserLoginToken = localStorage.getItem("encodedToken");

  return (
    <>
      <div class="login-main">
        <div class="login-left">
          <img src={Image} alt="gift-arena" width="150px" height="50px" />
          <p>One Stop solution for every kind of Gifts</p>
          <hr></hr>
          <p>New User? Sign Up to Continue </p>
          <button>SignUp</button>
        </div>
        <div class="login-right">
          <h1>Login</h1>
          <input
            type="email"
            value={userLoginEmail}
            placeholder="Enter your email"
            onChange={(e) => setUserLoginEmail(e.target.value)}
          ></input>
          <input
            type="text"
            value={userLoginPwd}
            placeholder="Enter your password"
            onChange={(e) => setUserLoginPwd(e.target.value)}
          ></input>
          <button onClick={() => loginHandler()}>
            {encodedUserLoginToken ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </>
  );
};
