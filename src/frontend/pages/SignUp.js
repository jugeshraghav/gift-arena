import { useContext } from "react";
import { AuthContext } from "../contexts/authenticationContext";
import { NavLink } from "react-router-dom";

export const SignUp = () => {
  const { signUpHandler, signUpDetails, setSignUpDetails } =
    useContext(AuthContext);
  return (
    <>
      <label htmlFor="signup-first-name">First Name:</label>
      <input
        style={{ border: "1px solid black" }}
        id="signup-first-name"
        type="text"
        value={signUpDetails.firstName}
        onChange={(e) =>
          setSignUpDetails((prevState) => ({
            ...prevState,
            firstName: e.target.value,
          }))
        }
      />
      <label htmlFor="signup-last-name">Last Name:</label>
      <input
        style={{ border: "1px solid black" }}
        id="signup-last-name"
        type="text"
        value={signUpDetails.lastName}
        onChange={(e) =>
          setSignUpDetails((prevState) => ({
            ...prevState,
            lastName: e.target.value,
          }))
        }
      />
      <label htmlFor="signp-eamil"> Email:</label>
      <input
        style={{ border: "1px solid black" }}
        id="signup-email"
        type="email"
        value={signUpDetails.email}
        onChange={(e) =>
          setSignUpDetails((prevState) => ({
            ...prevState,
            email: e.target.value,
          }))
        }
      />
      <label htmlFor="signup-pwd">Password:</label>
      <input
        style={{ border: "1px solid black" }}
        id="signup-pwd"
        type="text"
        value={signUpDetails.password}
        onChange={(e) =>
          setSignUpDetails((prevState) => ({
            ...prevState,
            password: e.target.value,
          }))
        }
      />
      <button
        onClick={() => {
          signUpHandler();
        }}
      >
        Signup
      </button>
      <NavLink to="/login">
        <button>Login</button>
      </NavLink>
    </>
  );
};
